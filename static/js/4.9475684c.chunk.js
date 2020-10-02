(this["webpackJsonpcolors-test"]=this["webpackJsonpcolors-test"]||[]).push([[4],{505:function(e,r,o){"use strict";o.d(r,"a",(function(){return t}));var t=o(30).c.div.withConfig({componentId:"sc-1m4jlzw-0"})(["width:960px;margin:0 auto;padding:0 1.5rem;box-sizing:content-box;"])},684:function(e,r,o){"use strict";o.r(r),o.d(r,"HomePage",(function(){return J}));var t=o(0),a=o.n(t),n=o(106),l=o(30),i=l.c.h1.withConfig({componentId:"dbqn26-0"})(["font-size:15px;font-weight:bold;color:",";margin:1rem 0;"],(function(e){return e.theme.text})),c=o(48),h=o(108);var u,s=o(536),d=o(683),m=Object(t.memo)((function(e){var r=e.ratio;Object(d.a)(e,["ratio"]);return a.a.createElement("h4",null,"Contrast Ratio is: ",r)})),b=o(68),C={headerColor:"#000000",headerComputedColors:{},headerRatio:"1",textColor:"#000000",colorsVariation:{high:1.5,medium:1,low:.5,bypass:!0}},g=o(535),x=(u={name:"Picker",initialState:C,reducers:{changeColorVariation:function(e,r){e.colorsVariation.bypass=!1,e.colorsVariation[r.payload.key]=r.payload.value},useDefaultColorVariation:function(e){e.colorsVariation.bypass=!0},changeColor:function(e,r){e.headerColor=r.payload,e.headerRatio=g.contrast(r.payload,"#ffffff");var o=Number(e.headerRatio),t=(e.colorsVariation.high,e.colorsVariation.medium),a=e.colorsVariation.low;o<=1.34&&(e.textColor=g("gray").luminance(0).hex(),e.colorsVariation.bypass&&(e.colorsVariation.low=.25,e.colorsVariation.medium=.5,e.colorsVariation.high=.75,e.colorsVariation.high,t=e.colorsVariation.medium,a=e.colorsVariation.low),e.headerComputedColors={buttonStatus:e.headerColor,buttonStatusHover:g(e.headerColor).darken(a).hex(),buttonStatusPressed:g(e.headerColor).darken(t).hex(),searchBar:g(e.headerColor).darken(a).hex(),searchBarHover:g(e.headerColor).darken(a).hex(),searchBarPressed:g(e.headerColor).darken(t).hex(),buttonDevice:e.headerColor,buttonDeviceHover:g(e.headerColor).darken(a).hex(),buttonDevicePressed:g(e.headerColor).darken(t).hex(),buttonPlus:e.headerColor,buttonPlusHover:g(e.headerColor).darken(a).hex(),buttonPlusPressed:g(e.headerColor).darken(t).hex()}),o>1.34&&o<=4.75&&(e.textColor=g("gray").luminance(0).hex(),e.colorsVariation.bypass&&(e.colorsVariation.low=.4,e.colorsVariation.medium=.8,e.colorsVariation.high=.8,e.colorsVariation.high,t=e.colorsVariation.medium,a=e.colorsVariation.low),e.headerComputedColors={buttonStatus:e.headerColor,buttonStatusHover:g(e.headerColor).brighten(a).hex(),buttonStatusPressed:g(e.headerColor).brighten(t).hex(),searchBar:g(e.headerColor).brighten(t).hex(),searchBarHover:g(e.headerColor).brighten(a).hex(),searchBarPressed:g(e.headerColor).brighten(t).hex(),buttonDevice:e.headerColor,buttonDeviceHover:g(e.headerColor).brighten(a).hex(),buttonDevicePressed:g(e.headerColor).brighten(t).hex(),buttonPlus:e.headerColor,buttonPlusHover:g(e.headerColor).brighten(a).hex(),buttonPlusPressed:g(e.headerColor).brighten(t).hex()}),o>4.75&&o<11.25&&(e.colorsVariation.bypass&&(e.colorsVariation.low=.5,e.colorsVariation.medium=.9,e.colorsVariation.high=.9,e.colorsVariation.high,t=e.colorsVariation.medium,a=e.colorsVariation.low),e.textColor=g("gray").luminance(.95).hex(),e.headerComputedColors={buttonStatus:e.headerColor,buttonStatusHover:g(e.headerColor).darken(a).hex(),buttonStatusPressed:g(e.headerColor).darken(t).hex(),searchBar:g(e.headerColor).darken(t).hex(),searchBarHover:g(e.headerColor).darken(a).hex(),searchBarPressed:g(e.headerColor).darken(t).hex(),buttonDevice:e.headerColor,buttonDeviceHover:g(e.headerColor).darken(a).hex(),buttonDevicePressed:g(e.headerColor).darken(t).hex(),buttonPlus:e.headerColor,buttonPlusHover:g(e.headerColor).darken(a).hex(),buttonPlusPressed:g(e.headerColor).darken(t).hex()}),o>=11.25&&(e.colorsVariation.bypass&&(e.colorsVariation.low=.8,e.colorsVariation.medium=1.2,e.colorsVariation.high=1.5,e.colorsVariation.high,t=e.colorsVariation.medium,a=e.colorsVariation.low),e.textColor=g("gray").luminance(.95).hex(),e.headerComputedColors={buttonStatus:e.headerColor,buttonStatusHover:g(e.headerColor).brighten(a).hex(),buttonStatusPressed:g(e.headerColor).brighten(t).hex(),searchBar:g(e.headerColor).brighten(t).hex(),searchBarHover:g(e.headerColor).brighten(a).hex(),searchBarPressed:g(e.headerColor).brighten(t).hex(),buttonDevice:e.headerColor,buttonDeviceHover:g(e.headerColor).brighten(a).hex(),buttonDevicePressed:g(e.headerColor).brighten(t).hex(),buttonPlus:e.headerColor,buttonPlusHover:g(e.headerColor).brighten(a).hex(),buttonPlusPressed:g(e.headerColor).brighten(t).hex()})}}},Object(b.b)(u)),p=x.actions,f=x.reducer,v=x.name,V=o(504),k=o.n(V),w=o(41),E=function(e){return e.Picker||C},P=Object(w.a)([E],(function(e){return e.headerColor})),y=Object(w.a)([E],(function(e){return e.headerRatio})),H=Object(w.a)([E],(function(e){return e.headerComputedColors})),j=Object(w.a)([E],(function(e){return e.textColor})),O=Object(w.a)([E],(function(e){return e.colorsVariation}));function S(){var e;e={key:v,reducer:f},Object(h.b)(e);o(535);var r=Object(c.c)(),t=Object(c.d)(P),n=Object(c.d)(y),l=Object(c.d)(H),u=Object(c.d)(O),d=Object(c.d)(j),b=k()((function(e){r(p.changeColor(e))}),50),C=function(e,o){r(p.changeColorVariation({value:e.currentTarget.value,key:o})),r(p.changeColor(t))};return a.a.createElement(a.a.Fragment,null,a.a.createElement("h1",null,"Color tester"),a.a.createElement(z,null,a.a.createElement(i,{as:"h2"},"1. Select a color"),a.a.createElement(s.SketchPicker,{color:t,onChange:function(e){return b(e.hex)}})),a.a.createElement(z,null,a.a.createElement(i,{as:"h2"},"2. Select variation ratios (for darken / brighten calculations)"),a.a.createElement(B,{for:"colorlow"},"low:"),a.a.createElement("input",{id:"colorlow",type:"number",onChange:function(e){return C(e,"low")},value:u.low}),a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement(B,{for:"colormed"},"medium:")," ",a.a.createElement("input",{id:"colormed",type:"number",onChange:function(e){return C(e,"medium")},value:u.medium}),a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement(B,{for:"colorhigh"},"high:")," ",a.a.createElement("input",{id:"colorhigh",type:"number",onChange:function(e){return C(e,"high")},value:u.high})),a.a.createElement(z,null,a.a.createElement(i,{as:"h2"},"OR: Use default values (click any time to reset)"),a.a.createElement("button",{onClick:function(){r(p.useDefaultColorVariation()),r(p.changeColor(t))}},"Use Defaults")),a.a.createElement(z,null,a.a.createElement(i,{as:"h2"},"Results:"),a.a.createElement(m,{ratio:n}),a.a.createElement(D,null,Object.keys(l).map((function(e){return a.a.createElement(R,{key:e,bgcolor:l[e]},a.a.createElement(I,{txtcolor:d},e))})))))}var D=l.c.div.withConfig({componentId:"sc-6re40l-0"})(["display:inline-block;width:650px;"]),B=l.c.label.withConfig({componentId:"sc-6re40l-1"})(["   display:inline-block;width:100px;"]),I=l.c.span.withConfig({componentId:"sc-6re40l-2"})(["   display:inline-block;vertical-align:middle;color:",";text-align:center;line-height:50px;"],(function(e){return e.txtcolor})),R=l.c.div.withConfig({componentId:"sc-6re40l-3"})(["display:inline-block;position:relative;width:200px;height:50px;margin-right:5px;margin-top:5px;text-align:center;background:",""],(function(e){return e.bgcolor})),z=(l.c.li.withConfig({componentId:"sc-6re40l-4"})(["display:flex;margin:6.25rem 0 6.25rem 2.25rem;.feature-icon{width:6.25rem;height:6.25rem;margin-right:2.25rem;flex-shrink:0;}"]),l.c.div.withConfig({componentId:"sc-6re40l-5"})(["flex:1;"])),F=(l.c.ul.withConfig({componentId:"sc-6re40l-6"})(["padding:0;margin:6.25rem 0 0 0;"]),o(505));function J(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(n.a,null,a.a.createElement("title",null,"Home Page"),a.a.createElement("meta",{name:"description",content:"A React Boilerplate application homepage"})),a.a.createElement(F.a,null,a.a.createElement(S,null)))}}}]);