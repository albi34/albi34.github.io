(this["webpackJsonpcolors-test"]=this["webpackJsonpcolors-test"]||[]).push([[4],{504:function(e,o,r){"use strict";r.d(o,"a",(function(){return t}));var t=r(30).c.div.withConfig({componentId:"sc-1m4jlzw-0"})(["width:960px;margin:0 auto;padding:0 1.5rem;box-sizing:content-box;"])},684:function(e,o,r){"use strict";r.r(o),r.d(o,"HomePage",(function(){return B}));var t=r(0),a=r.n(t),n=r(106),i=r(30),l=i.c.h1.withConfig({componentId:"dbqn26-0"})(["font-size:32px;font-weight:bold;color:",";margin:1rem 0;"],(function(e){return e.theme.text})),h=r(48),c=r(108);var u,s=r(536),d=r(683),b=Object(t.memo)((function(e){var o=e.ratio;Object(d.a)(e,["ratio"]);return a.a.createElement("h2",null,"Contrast Ratio is: ",o)})),m=r(68),C={headerColor:"#000000",headerComputedColors:{},headerRatio:"1",textColor:"#000000",colorsVariation:{high:1.5,medium:1,low:.5,bypass:!1}},g=r(535),x=(u={name:"Picker",initialState:C,reducers:{changeColorVariation:function(e,o){e.colorsVariation.bypass=!1,e.colorsVariation[o.payload.key]=o.payload.value},useDefaultColorVariation:function(e){e.colorsVariation.bypass=!0},changeColor:function(e,o){e.headerColor=o.payload,e.headerRatio=g.contrast(o.payload,"#ffffff");var r=Number(e.headerRatio),t=e.colorsVariation.high,a=e.colorsVariation.medium,n=e.colorsVariation.low;r<=1.2&&(e.textColor=g("gray").luminance(0).hex(),e.colorsVariation.bypass&&(e.colorsVariation.low=.25,e.colorsVariation.medium=.5,e.colorsVariation.high=.75,t=e.colorsVariation.high,a=e.colorsVariation.medium,n=e.colorsVariation.low),e.headerComputedColors={buttonStatus:e.headerColor,buttonStatusHover:g(e.headerColor).darken(n).hex(),buttonStatusPressed:g(e.headerColor).darken(a).hex(),searchBar:g(e.headerColor).darken(n).hex(),searchBarHover:g(e.headerColor).darken(a).hex(),searchBarPressed:g(e.headerColor).darken(t).hex(),buttonDevice:e.headerColor,buttonDeviceHover:g(e.headerColor).darken(n).hex(),buttonDevicePressed:g(e.headerColor).darken(a).hex(),buttonPlus:e.headerColor,buttonPlusHover:g(e.headerColor).darken(n).hex(),buttonPlusPressed:g(e.headerColor).darken(a).hex()}),r>1.2&&r<=4.75&&(e.textColor=g("gray").luminance(0).hex(),e.colorsVariation.bypass&&(e.colorsVariation.low=.4,e.colorsVariation.medium=.4,e.colorsVariation.high=.8,t=e.colorsVariation.high,a=e.colorsVariation.medium,n=e.colorsVariation.low),e.headerComputedColors={buttonStatus:e.headerColor,buttonStatusHover:g(e.headerColor).brighten(n).hex(),buttonStatusPressed:g(e.headerColor).brighten(a).hex(),searchBar:g(e.headerColor).brighten(n).hex(),searchBarHover:g(e.headerColor).brighten(n).hex(),searchBarPressed:g(e.headerColor).brighten(a).hex(),buttonDevice:e.headerColor,buttonDeviceHover:g(e.headerColor).brighten(n).hex(),buttonDevicePressed:g(e.headerColor).brighten(a).hex(),buttonPlus:e.headerColor,buttonPlusHover:g(e.headerColor).brighten(n).hex(),buttonPlusPressed:g(e.headerColor).brighten(a).hex()}),r>4.75&&r<14&&(e.colorsVariation.bypass&&(e.colorsVariation.low=.4,e.colorsVariation.medium=.4,e.colorsVariation.high=.8,t=e.colorsVariation.high,a=e.colorsVariation.medium,n=e.colorsVariation.low),e.textColor=g("gray").luminance(.95).hex(),e.headerComputedColors={buttonStatus:e.headerColor,buttonStatusHover:g(e.headerColor).darken(n).hex(),buttonStatusPressed:g(e.headerColor).darken(a).hex(),searchBar:g(e.headerColor).brighten(n).hex(),searchBarHover:g(e.headerColor).darken(n).hex(),searchBarPressed:g(e.headerColor).darken(a).hex(),buttonDevice:e.headerColor,buttonDeviceHover:g(e.headerColor).darken(n).hex(),buttonDevicePressed:g(e.headerColor).darken(a).hex(),buttonPlus:e.headerColor,buttonPlusHover:g(e.headerColor).darken(n).hex(),buttonPlusPressed:g(e.headerColor).darken(a).hex()}),r>=14&&(e.colorsVariation.bypass&&(e.colorsVariation.low=.5,e.colorsVariation.medium=1,e.colorsVariation.high=1.5,t=e.colorsVariation.high,a=e.colorsVariation.medium,n=e.colorsVariation.low),e.textColor=g("gray").luminance(.95).hex(),e.headerComputedColors={buttonStatus:e.headerColor,buttonStatusHover:g(e.headerColor).brighten(n).hex(),buttonStatusPressed:g(e.headerColor).brighten(a).hex(),searchBar:g(e.headerColor).brighten(n).hex(),searchBarHover:g(e.headerColor).brighten(a).hex(),searchBarPressed:g(e.headerColor).brighten(t).hex(),buttonDevice:e.headerColor,buttonDeviceHover:g(e.headerColor).brighten(n).hex(),buttonDevicePressed:g(e.headerColor).brighten(a).hex(),buttonPlus:e.headerColor,buttonPlusHover:g(e.headerColor).brighten(n).hex(),buttonPlusPressed:g(e.headerColor).brighten(a).hex()}),console.log(e.headerComputedColors)}}},Object(m.b)(u)),p=x.actions,f=x.reducer,v=x.name,V=r(41),P=function(e){return e.Picker||C},k=Object(V.a)([P],(function(e){return e.headerColor})),w=Object(V.a)([P],(function(e){return e.headerRatio})),y=Object(V.a)([P],(function(e){return e.headerComputedColors})),H=Object(V.a)([P],(function(e){return e.textColor})),j=Object(V.a)([P],(function(e){return e.colorsVariation}));function E(){var e;e={key:v,reducer:f},Object(c.b)(e);var o=Object(h.c)(),t=Object(h.d)(k),n=Object(h.d)(w),i=Object(h.d)(y),u=Object(h.d)(j),d=Object(h.d)(H),m=function(e,r){o(p.changeColorVariation({value:e.currentTarget.value,key:r})),o(p.changeColor(t))};r(535);return a.a.createElement(a.a.Fragment,null,a.a.createElement(l,{as:"h2"},"Select a color"),"low: ",a.a.createElement("input",{type:"text",onChange:function(e){return m(e,"low")},value:u.low}),"medium: ",a.a.createElement("input",{type:"text",onChange:function(e){return m(e,"medium")},value:u.medium}),"high: ",a.a.createElement("input",{type:"text",onChange:function(e){return m(e,"high")},value:u.high}),a.a.createElement("button",{onClick:function(){o(p.useDefaultColorVariation()),o(p.changeColor(t))}},"Use Defaults"),a.a.createElement(s.SketchPicker,{color:t,onChangeComplete:function(e){o(p.changeColor(e.hex))}}),a.a.createElement(b,{ratio:n}),a.a.createElement(D,null,Object.keys(i).map((function(e){return a.a.createElement(O,{key:e,txtcolor:d,bgcolor:i[e]},e)}))))}var O=i.c.div.withConfig({componentId:"sc-6re40l-0"})(["display:block;float:left;position:relative;width:200px;height:50px;margin-right:5px;margin-top:5px;color:",";text-align:center;background:",""],(function(e){return e.txtcolor}),(function(e){return e.bgcolor})),D=(i.c.li.withConfig({componentId:"sc-6re40l-1"})(["display:flex;margin:6.25rem 0 6.25rem 2.25rem;.feature-icon{width:6.25rem;height:6.25rem;margin-right:2.25rem;flex-shrink:0;}"]),i.c.div.withConfig({componentId:"sc-6re40l-2"})(["flex:1;"]),i.c.ul.withConfig({componentId:"sc-6re40l-3"})(["padding:0;margin:6.25rem 0 0 0;"])),S=r(504);function B(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(n.a,null,a.a.createElement("title",null,"Home Page"),a.a.createElement("meta",{name:"description",content:"A React Boilerplate application homepage"})),a.a.createElement(S.a,null,a.a.createElement(E,null)))}}}]);