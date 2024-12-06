#!/usr/bin/env python3
import logging
from typing import Dict, Optional, Union

from dataclass_utils import dataclass_from_dict
from modules.common.abstract_device import AbstractBat
from modules.common.component_state import BatState
from modules.common.component_type import ComponentDescriptor
from modules.common.fault_state import ComponentInfo, FaultState
from modules.common.modbus import ModbusDataType, ModbusTcpClient_
from modules.common.store import get_bat_value_store
from modules.devices.qcells.qcells.config import QCellsBatSetup

log = logging.getLogger(__name__)


class QCellsBat(AbstractBat):
    def __init__(self,
                 component_config: Union[Dict, QCellsBatSetup],
                 modbus_id: int) -> None:
        self.__modbus_id = modbus_id
        self.component_config = dataclass_from_dict(QCellsBatSetup, component_config)
        self.store = get_bat_value_store(self.component_config.id)
        self.fault_state = FaultState(ComponentInfo.from_component_config(self.component_config))

    def update(self, client: ModbusTcpClient_) -> None:
        power = client.read_input_registers(0x0016, ModbusDataType.INT_16, unit=self.__modbus_id)
        soc = client.read_input_registers(0x001C, ModbusDataType.UINT_16, unit=self.__modbus_id)
        imported = client.read_input_registers(
            0x0021, ModbusDataType.UINT_16, unit=self.__modbus_id) * 100
        exported = client.read_input_registers(
            0x001D, ModbusDataType.UINT_16, unit=self.__modbus_id) * 100

        bat_state = BatState(
            power=power,
            soc=soc,
            imported=imported,
            exported=exported
        )
        self.store.set(bat_state)

    def set_power_limit(self, power_limit: Optional[int]) -> None:
        # power limit None heißt, auf maximale Speicherleistung setzen = Speicher-Begrenzung aufheben
        try:
            client = ModbusTcpClient_(self.component_config.configuration.ip_address,
                                      self.component_config.configuration.port)
            invertertype = client.read_input_registers(0x007E, ModbusDataType.UINT_16, unit=self.__modbus_id)
            log.info("Invertype: " + 
                     str(invertertype))
            if invertertype == "Gen4":
                client.write_single_register(0x0014, power_limit, unit=self.__modbus_id)
            else:
                log.info("Keine kompatible Batterie vorhanden")
        except Exception:
            log.exception("Fehler in set_power_limit")


component_descriptor = ComponentDescriptor(configuration_factory=QCellsBatSetup)
