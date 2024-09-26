import{C as u}from"./HardwareInstallation-a0083e3a.js";import{_ as m,u as s,k as p,l as h,D as o,N as i,y as e,x as r}from"./vendor-f2b8aa6f.js";import"./vendor-fortawesome-71546160.js";import"./index-b0e5e618.js";import"./vendor-bootstrap-4ad604fa.js";import"./vendor-jquery-d3cb8fad.js";import"./vendor-axios-65ecee4b.js";import"./vendor-sortablejs-2f1828d0.js";import"./dynamic-import-helper-be004503.js";const g={name:"DeviceHttpBat",mixins:[u]},c={class:"device-http-bat"},_=r("br",null,null,-1),b=r("br",null,null,-1),f=r("br",null,null,-1),v=r("br",null,null,-1),w=r("br",null,null,-1);function k(n,t,z,S,Z,C){const d=s("openwb-base-heading"),l=s("openwb-base-text-input");return p(),h("div",c,[o(d,null,{default:i(()=>[e(" Einstellungen für Http Batteriespeicher ")]),_:1}),o(l,{title:"Pfad für Leistung",subtype:"text",required:"",pattern:"^/[-a-zA-Z0-9@:%_\\+.~#?&/=]*","model-value":n.component.configuration.power_path,"onUpdate:modelValue":t[0]||(t[0]=a=>n.updateConfiguration(a,"configuration.power_path"))},{help:i(()=>[e(' Diese Angabe wird an die Server-URL angehängt und muss mit einem Schrägstrich "/" beginnen.'),_,e(" Es wird vom Server eine Zahl mit oder ohne Nachkommastellen (Float, Integer) und einem Punkt als Dezimaltrennzeichen erwartet, welche die aktuelle Leistung in Watt darstellt. ")]),_:1},8,["model-value"]),o(l,{title:"Pfad für Ladestand",subtype:"text",required:"",pattern:"^/[-a-zA-Z0-9@:%_\\+.~#?&/=]*","model-value":n.component.configuration.soc_path,"onUpdate:modelValue":t[1]||(t[1]=a=>n.updateConfiguration(a,"configuration.soc_path"))},{help:i(()=>[e(' Diese Angabe wird an die Server-URL angehängt und muss mit einem Schrägstrich "/" beginnen.'),b,e(" Es wird vom Server eine Zahl mit oder ohne Nachkommastellen (Float, Integer) und einem Punkt als Dezimaltrennzeichen erwartet, welche den aktuellen Ladestand (SoC) in Prozent darstellt. ")]),_:1},8,["model-value"]),o(l,{title:"Pfad für Zählerstand laden",subtype:"text",pattern:"^(/[-a-zA-Z0-9@:%_\\+.~#?&/=]*)","model-value":n.component.configuration.imported_path,"onUpdate:modelValue":t[2]||(t[2]=a=>n.updateConfiguration(a,"configuration.imported_path"))},{help:i(()=>[e(' Diese Angabe wird an die Server-URL angehängt und muss mit einem Schrägstrich "/" beginnen.'),f,e(" Es wird vom Server eine Zahl mit oder ohne Nachkommastellen (Float, Integer) und einem Punkt als Dezimaltrennzeichen erwartet, welche den aktuellen absoluten Zählerstand in Wh darstellt. ")]),_:1},8,["model-value"]),o(l,{title:"Pfad für Zählerstand entladen",subtype:"text",pattern:"^(/[-a-zA-Z0-9@:%_\\+.~#?&/=]*)","model-value":n.component.configuration.exported_path,"onUpdate:modelValue":t[3]||(t[3]=a=>n.updateConfiguration(a,"configuration.exported_path"))},{help:i(()=>[e(' Diese Angabe wird an die Server-URL angehängt und muss mit einem Schrägstrich "/" beginnen.'),v,e(" Es wird vom Server eine Zahl mit oder ohne Nachkommastellen (Float, Integer) und einem Punkt als Dezimaltrennzeichen erwartet, welche den aktuellen absoluten Zählerstand in Wh darstellt."),w,e(" Wird dieses Feld leer gelassen, werden keine Phasenströme ermittelt und es kann kein Lastmanagement berechnet werden! ")]),_:1},8,["model-value"])])}const E=m(g,[["render",k],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/generic/http/bat.vue"]]);export{E as default};
