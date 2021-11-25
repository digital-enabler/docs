(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{82:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return p}));var r=a(2),n=a(6),o=(a(0),a(95)),i=["components"],s={slug:"dme-datasources",title:"Manual submission of a datasource in the Data Mashup Editor",sidebar_label:"Mashup Editor Datasource"},c={unversionedId:"manual-submission-of-a-datasource-in-the-data-mashup-editor",id:"manual-submission-of-a-datasource-in-the-data-mashup-editor",isDocsHomePage:!1,title:"Manual submission of a datasource in the Data Mashup Editor",description:"Once reached the Datasource registration page, as described in the wiki \\[\\[Register a datasource in the Data Mashup Editor\\]\\], the user can manually register a datasource into the Data Mashup Editor. To do so it's necessary to select the tab @Create Datasource@ (it should be selected by default).",source:"@site/docs/manual-submission-of-a-datasource-in-the-data-mashup-editor.md",slug:"/dme-datasources",permalink:"/dme-datasources",version:"current",sidebar_label:"Mashup Editor Datasource"},l=[{value:"Populating the resource endpoint",id:"populating-the-resource-endpoint",children:[{value:"Example",id:"example",children:[]}]}],u={rightToc:l};function p(e){var t=e.components,a=Object(n.a)(e,i);return Object(o.b)("wrapper",Object(r.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Once reached the Datasource registration page, as described in the wiki ","[","[","Register a datasource in the Data Mashup Editor","]","]",", the user can manually register a datasource into the Data Mashup Editor. To do so it's necessary to select the tab @Create Datasource@ (it should be selected by default)."),Object(o.b)("p",null,'The other two tabs are reserved for importing the datasource specification "from the Digital Enabler\'s Data Workspace":',Object(o.b)("a",{parentName:"p",href:"https://issues.digitalenabler.eng.it/projects/digital-enabler/wiki/Import_a_datasource_from_the_Data_Workspace",title:"https://issues.digitalenabler.eng.it/projects/digital-enabler/wiki/Import_a_datasource_from_the_Data_Workspace"},"https://issues.digitalenabler.eng.it/projects/digital-enabler/wiki/Import_a_datasource_from_the_Data_Workspace"),' or "from an external descriptor":',Object(o.b)("a",{parentName:"p",href:"https://issues.digitalenabler.eng.it/projects/digital-enabler/wiki/Import_from_a_Swagger_or_WADL_descriptor,",title:"https://issues.digitalenabler.eng.it/projects/digital-enabler/wiki/Import_from_a_Swagger_or_WADL_descriptor,"},"https://issues.digitalenabler.eng.it/projects/digital-enabler/wiki/Import_from_a_Swagger_or_WADL_descriptor,")," then we will ignore them in this guide."),Object(o.b)("p",null,"Then, below there is the section @Datasource Info@ that allows to specify a Title and a description of the datasource itself. The user here can write whatever he thinks maybe helpful in identifying the datasource."),Object(o.b)("p",null,"In this example we put the following values:"),Object(o.b)("p",null,"Going below the user can add several resources related to the current datasource."),Object(o.b)("p",null,"Each resource can be documented with the information about the ",Object(o.b)("em",{parentName:"p"},"endpoint"),", the ",Object(o.b)("em",{parentName:"p"},"parameters")," and the possible ",Object(o.b)("em",{parentName:"p"},"responses"),". Each of these information can be provided in the corresponding tab."),Object(o.b)("h2",{id:"populating-the-resource-endpoint"},"Populating the resource endpoint"),Object(o.b)("p",null,"Here the required fields are:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"a ",Object(o.b)("em",{parentName:"li"},"title")),Object(o.b)("li",{parentName:"ul"},"the ",Object(o.b)("em",{parentName:"li"},"complete URL")," of the resource"),Object(o.b)("li",{parentName:"ul"},"the ",Object(o.b)("em",{parentName:"li"},"HTTP Method")," to be used for invoking the endpoint"),Object(o.b)("li",{parentName:"ul"},"The title and the description can be the ones the user thinks can be the most meaningful."),Object(o.b)("li",{parentName:"ul"},"The ",Object(o.b)("em",{parentName:"li"},"URL")," section must contain the entire URL to be invoked. So, acceptable values are:"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"http://mydatasource.com/myresources"},"http://mydatasource.com/myresources")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"http://mydatasource.com/myresources?param1=12"},"http://mydatasource.com/myresources?param1=12"))),Object(o.b)("p",null,"Relative paths, like_ @/myresource@ _are, instead, not allowed!"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("em",{parentName:"p"},"Once the datasource is saved, every query parameter")," provided in the URL will be automatically moved to the ",Object(o.b)("em",{parentName:"p"},"parameters section"),". The provided values will be considered as default values.")),Object(o.b)("p",null,'In case the resource doesn\'t require any further parameter, please move to the "Finalize the resource" paragraph.'),Object(o.b)("hr",null),Object(o.b)("h3",{id:"example"},"Example"),Object(o.b)("p",null,"Let's image we want to register an API that can be invoked as follows:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"curl -X POST 'https://mydatasource.com/myresources?attrs=uuid&format=true' -H 'Content-Type: application/json' -H 'auth-token: xyz' -d '{ \"first\": \"one\", \"second\": \"two\" }'\n")))}p.isMDXComponent=!0},95:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var r=a(0),n=a.n(r);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=n.a.createContext({}),u=function(e){var t=n.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=u(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(a),d=r,m=p["".concat(i,".").concat(d)]||p[d]||b[d]||o;return a?n.a.createElement(m,s(s({ref:t},l),{},{components:a})):n.a.createElement(m,s({ref:t},l))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=a[l];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);