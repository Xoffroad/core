import{C as r}from"./HardwareInstallation-a0083e3a.js";import{_ as p,u as o,k as m,l as u,D as t,N as d,y as l}from"./vendor-f2b8aa6f.js";import"./vendor-fortawesome-71546160.js";import"./index-b0e5e618.js";import"./vendor-bootstrap-4ad604fa.js";import"./vendor-jquery-d3cb8fad.js";import"./vendor-axios-65ecee4b.js";import"./vendor-sortablejs-2f1828d0.js";import"./dynamic-import-helper-be004503.js";const c={name:"DeviceSunnyIslandBat",mixins:[r]},_={class:"device-sunnyisland-bat"};function b(e,n,f,v,g,w){const s=o("openwb-base-heading"),i=o("openwb-base-number-input");return m(),u("div",_,[t(s,null,{default:d(()=>[l(" Einstellungen für Sunny Island Batteriespeicher ")]),_:1}),t(i,{title:"Modbus ID",required:"","model-value":e.component.configuration.modbus_id,min:"1",max:"255","onUpdate:modelValue":n[0]||(n[0]=a=>e.updateConfiguration(a,"configuration.modbus_id"))},null,8,["model-value"])])}const N=p(c,[["render",b],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/sma/sma_sunny_island/bat.vue"]]);export{N as default};
