import{C as a}from"./HardwareInstallation-a0083e3a.js";import{_ as p,u as n,k as m,l as c,D as t,N as u,y as d}from"./vendor-f2b8aa6f.js";import"./vendor-fortawesome-71546160.js";import"./index-b0e5e618.js";import"./vendor-bootstrap-4ad604fa.js";import"./vendor-jquery-d3cb8fad.js";import"./vendor-axios-65ecee4b.js";import"./vendor-sortablejs-2f1828d0.js";import"./dynamic-import-helper-be004503.js";const l={name:"DeviceVictronBat",mixins:[a]},_={class:"device-victron-bat"};function b(e,o,f,v,g,w){const i=n("openwb-base-heading"),r=n("openwb-base-number-input");return m(),c("div",_,[t(i,null,{default:u(()=>[d(" Einstellungen für Victron Batteriespeicher ")]),_:1}),t(r,{title:"Modbus ID",required:"","model-value":e.component.configuration.modbus_id,min:"1",max:"255","onUpdate:modelValue":o[0]||(o[0]=s=>e.updateConfiguration(s,"configuration.modbus_id"))},null,8,["model-value"])])}const E=p(l,[["render",b],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/victron/victron/bat.vue"]]);export{E as default};
