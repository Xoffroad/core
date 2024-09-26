import{V as l}from"./VehicleConfig-5050794d.js";import{_ as u,u as s,k as d,l as p,D as i,N as r,y as a}from"./vendor-f2b8aa6f.js";import"./vendor-fortawesome-71546160.js";import"./index-b0e5e618.js";import"./vendor-bootstrap-4ad604fa.js";import"./vendor-jquery-d3cb8fad.js";import"./vendor-axios-65ecee4b.js";import"./vendor-sortablejs-2f1828d0.js";import"./dynamic-import-helper-be004503.js";const m={name:"VehicleSocRenault",mixins:[l]},f={class:"vehicle-soc-renault"};function v(e,n,c,g,h,V){const t=s("openwb-base-text-input");return d(),p("div",f,[i(t,{title:"Benutzername",required:"",subtype:"user","model-value":e.vehicle.configuration.user_id,"onUpdate:modelValue":n[0]||(n[0]=o=>e.updateConfiguration(o,"configuration.user_id"))},{help:r(()=>[a(" Der Benutzername für die Anmeldung an den Renault-Servern. ")]),_:1},8,["model-value"]),i(t,{title:"Kennwort",required:"",subtype:"password","model-value":e.vehicle.configuration.password,"onUpdate:modelValue":n[1]||(n[1]=o=>e.updateConfiguration(o,"configuration.password"))},{help:r(()=>[a(" Das Passwort für die Anmeldung an den Renault-Servern. ")]),_:1},8,["model-value"]),i(t,{title:"Land",required:"","model-value":e.vehicle.configuration.country,"onUpdate:modelValue":n[2]||(n[2]=o=>e.updateConfiguration(o,"configuration.country"))},{help:r(()=>[a(" Land des Fahrzeugs, z.b. DE für Deutschland. ")]),_:1},8,["model-value"]),i(t,{title:"VIN","model-value":e.vehicle.configuration.vin,"onUpdate:modelValue":n[3]||(n[3]=o=>e.updateConfiguration(o,"configuration.vin"))},{help:r(()=>[a(" Die Fahrgestellnummer des Fahrzeugs falls mehrere Fahrzeuge im Account vorhanden sind. ")]),_:1},8,["model-value"])])}const N=u(m,[["render",v],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/vehicles/renault/vehicle.vue"]]);export{N as default};
