import{D as u}from"./HardwareInstallation-a0083e3a.js";import{_ as c,u as n,k as m,l as _,D as o,N as l,y as s}from"./vendor-f2b8aa6f.js";import"./vendor-fortawesome-71546160.js";import"./index-b0e5e618.js";import"./vendor-bootstrap-4ad604fa.js";import"./vendor-jquery-d3cb8fad.js";import"./vendor-axios-65ecee4b.js";import"./vendor-sortablejs-2f1828d0.js";import"./dynamic-import-helper-be004503.js";const f={name:"DeviceShelly",mixins:[u]},v={class:"device-shelly"};function b(e,t,h,g,w,y){const r=n("openwb-base-heading"),a=n("openwb-base-alert"),p=n("openwb-base-text-input"),d=n("openwb-base-select-input");return m(),_("div",v,[o(r,null,{default:l(()=>[s(" Einstellungen für Shelly ")]),_:1}),o(a,{subtype:"info"},{default:l(()=>[s(" Unterstützt werden theoretisch alle ein- und dreiphasigen Shellys der Generation 1-3. Getestete Modelle sind Shelly 1pm, 1pm plus, Pro Pro 3EM, Plug S. ")]),_:1}),o(p,{title:"IP oder Hostname",subtype:"host",required:"","model-value":e.device.configuration.ip_address,"onUpdate:modelValue":t[0]||(t[0]=i=>e.updateConfiguration(i,"configuration.ip_address"))},null,8,["model-value"]),o(d,{title:"Vorzeichen invertieren",notSelected:"Bitte auswählen",options:[{value:-1,text:"ja"},{value:1,text:"nein"}],"model-value":e.device.configuration.factor,required:"","onUpdate:modelValue":t[1]||(t[1]=i=>e.updateConfiguration(i,"configuration.factor"))},{help:l(()=>[s(" Einige Shelly Modelle liefern die Leistung mit umgedrehtem Vorzeichen. Falls dies der Fall sein sollte, das Vorzeichen invertieren. ")]),_:1},8,["model-value"])])}const P=c(f,[["render",b],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/shelly/shelly/device.vue"]]);export{P as default};
