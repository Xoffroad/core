import{_ as h,q as u,k as p,l as c,B as i,M as r,x as t,u as a,y as g}from"./vendor-1d14b1e0.js";import"./vendor-sortablejs-a8739f54.js";const _={name:"DeviceHttpBat",emits:["update:configuration"],props:{configuration:{type:Object,required:!0},deviceId:{default:void 0},componentId:{required:!0}},methods:{updateConfiguration(s,e=void 0){this.$emit("update:configuration",{value:s,object:e})}}},f={class:"device-http-bat"},b={class:"small"},v=a("br",null,null,-1),w=a("br",null,null,-1),k=a("br",null,null,-1),S=a("br",null,null,-1),x=a("br",null,null,-1);function z(s,e,l,Z,D,o){const m=u("openwb-base-heading"),d=u("openwb-base-text-input");return p(),c("div",f,[i(m,null,{default:r(()=>[t(" Einstellungen für Http Batteriespeicher "),a("span",b,"(Modul: "+g(s.$options.name)+")",1)]),_:1}),i(d,{title:"Pfad für Leistung",subtype:"text",required:"",pattern:"^/[-a-zA-Z0-9@:%_\\+.~#?&/=]*","model-value":l.configuration.power_path,"onUpdate:modelValue":e[0]||(e[0]=n=>o.updateConfiguration(n,"configuration.power_path"))},{help:r(()=>[t(' Diese Angabe wird an die Server-URL angehängt und muss mit einem Schrägstrich "/" beginnen.'),v,t(" Es wird vom Server eine Zahl mit oder ohne Nachkommastellen (Float, Integer) und einem Punkt als Dezimaltrennzeichen erwartet, welche die aktuelle Leistung in Watt darstellt. ")]),_:1},8,["model-value"]),i(d,{title:"Pfad für Ladestand",subtype:"text",required:"",pattern:"^/[-a-zA-Z0-9@:%_\\+.~#?&/=]*","model-value":l.configuration.soc_path,"onUpdate:modelValue":e[1]||(e[1]=n=>o.updateConfiguration(n,"configuration.soc_path"))},{help:r(()=>[t(' Diese Angabe wird an die Server-URL angehängt und muss mit einem Schrägstrich "/" beginnen.'),w,t(" Es wird vom Server eine Zahl mit oder ohne Nachkommastellen (Float, Integer) und einem Punkt als Dezimaltrennzeichen erwartet, welche den aktuellen Ladestand (SoC) in Prozent darstellt. ")]),_:1},8,["model-value"]),i(d,{title:"Pfad für Zählerstand laden",subtype:"text",pattern:"^(/[-a-zA-Z0-9@:%_\\+.~#?&/=]*)","model-value":l.configuration.imported_path,"onUpdate:modelValue":e[2]||(e[2]=n=>o.updateConfiguration(n,"configuration.imported_path"))},{help:r(()=>[t(' Diese Angabe wird an die Server-URL angehängt und muss mit einem Schrägstrich "/" beginnen.'),k,t(" Es wird vom Server eine Zahl mit oder ohne Nachkommastellen (Float, Integer) und einem Punkt als Dezimaltrennzeichen erwartet, welche den aktuellen absoluten Zählerstand in Wh darstellt. ")]),_:1},8,["model-value"]),i(d,{title:"Pfad für Zählerstand entladen",subtype:"text",pattern:"^(/[-a-zA-Z0-9@:%_\\+.~#?&/=]*)","model-value":l.configuration.exported_path,"onUpdate:modelValue":e[3]||(e[3]=n=>o.updateConfiguration(n,"configuration.exported_path"))},{help:r(()=>[t(' Diese Angabe wird an die Server-URL angehängt und muss mit einem Schrägstrich "/" beginnen.'),S,t(" Es wird vom Server eine Zahl mit oder ohne Nachkommastellen (Float, Integer) und einem Punkt als Dezimaltrennzeichen erwartet, welche den aktuellen absoluten Zählerstand in Wh darstellt."),x,t(" Wird dieses Feld leer gelassen, werden keine Phasenströme ermittelt und es kann kein Lastmanagement berechnet werden! ")]),_:1},8,["model-value"])])}const A=h(_,[["render",z],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/http/bat.vue"]]);export{A as default};
