import{_ as c,q as n,k as d,l as p,B as o,M as s,x as a,u,y as l}from"./vendor-1d14b1e0.js";import"./vendor-sortablejs-a8739f54.js";const _={name:"DeviceSungrowBat",emits:["update:configuration"],props:{configuration:{type:Object,required:!0},deviceId:{default:void 0},componentId:{required:!0}},methods:{updateConfiguration(e,t=void 0){this.$emit("update:configuration",{value:e,object:t})}}},f={class:"device-sungrow-bat"},m={class:"small"};function b(e,t,g,w,h,v){const i=n("openwb-base-heading"),r=n("openwb-base-alert");return d(),p("div",f,[o(i,null,{default:s(()=>[a(" Einstellungen für Sungrow Speicher "),u("span",m,"(Modul: "+l(e.$options.name)+")",1)]),_:1}),o(r,{subtype:"info"},{default:s(()=>[a(" Diese Komponente erfordert keine Einstellungen. ")]),_:1})])}const x=c(_,[["render",b],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/sungrow/bat.vue"]]);export{x as default};
