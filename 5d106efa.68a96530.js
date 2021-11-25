(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{158:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/dema_device_infopoint-4ad2d507da729d4feba1d47ee4da669a.png"},159:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/dema_notification_payload-033056f4dd8136dcf696c9917d0c4558.png"},160:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/dema_listeners-124b29b42632e776f86e4a8b697c50e7.png"},70:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var a=n(2),r=n(6),i=(n(0),n(95)),o=["components"],c={slug:"device-data-management",title:"Device Data Management",sidebar_label:"Device Data Management"},l={unversionedId:"device-data-management",id:"device-data-management",isDocsHomePage:!1,title:"Device Data Management",description:"This section shows info about how retrieve and use the devices data.",source:"@site/docs/device-data-management.md",slug:"/device-data-management",permalink:"/device-data-management",version:"current",sidebar_label:"Device Data Management",sidebar:"someSidebar",previous:{title:"Device config and modeling",permalink:"/device-config-and-modeling"},next:{title:"Device simulation",permalink:"/device-simulation"}},s=[{value:"Device infopoint",id:"device-infopoint",children:[]},{value:"Device listener",id:"device-listener",children:[]}],d={rightToc:s};function u(e){var t=e.components,c=Object(r.a)(e,o);return Object(i.b)("wrapper",Object(a.a)({},d,c,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This section shows info about how retrieve and use the devices data."),Object(i.b)("h2",{id:"device-infopoint"},"Device infopoint"),Object(i.b)("p",null,'By clicking on the arrow next to "Infopoint", on the left of device details page, a new pop up will appear.  It shows a textual description of the device properties (protocol, dataformat, retrieving mode, endpoint, etc).'),Object(i.b)("p",null,"A curl request shows how to get all information that are collected by your device."),Object(i.b)("p",null,Object(i.b)("img",{src:n(158).default})),Object(i.b)("p",null,'Clicking on "Click here to view an example of Notification Payload" an example of notification payload is shown'),Object(i.b)("p",null,Object(i.b)("img",{src:n(159).default})),Object(i.b)("h2",{id:"device-listener"},"Device listener"),Object(i.b)("p",null,'By clicking on the arrow next to "Listeners", on the left of device details page, a new pop up will appear.  It shows all current listeners that are attached to devices. '),Object(i.b)("p",null,"Here you can add new data mashup listeners and endpoint listeners. The measures sent by the devices will be delivered to the ",Object(i.b)("a",{parentName:"p",href:"https://mashups.dev.dev-digital-enabler.eng.it/dme/user/home"},"Data Mashup Editor"),' (in case of Digital Enabler mashup) or to a generic endpoint, using the data structure shown in the "Notification Payload" section.'),Object(i.b)("p",null,"The user is also enabled to edit and delete listeners."),Object(i.b)("p",null,Object(i.b)("img",{src:n(160).default})))}u.isMDXComponent=!0},95:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),d=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=d(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},f=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=d(n),f=a,b=u["".concat(o,".").concat(f)]||u[f]||p[f]||i;return n?r.a.createElement(b,c(c({ref:t},s),{},{components:n})):r.a.createElement(b,c({ref:t},s))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);