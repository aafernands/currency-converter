(this["webpackJsonpcurrency-converter"]=this["webpackJsonpcurrency-converter"]||[]).push([[3],{97:function(t,e,n){"use strict";n.r(e),n.d(e,"getCLS",(function(){return v})),n.d(e,"getFCP",(function(){return g})),n.d(e,"getFID",(function(){return k})),n.d(e,"getLCP",(function(){return C})),n.d(e,"getTTFB",(function(){return P}));var i,r,a,o,c=function(t,e){return{name:t,value:void 0===e?-1:e,delta:0,entries:[],id:"v1-".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12)}},u=function(t,e){try{if(PerformanceObserver.supportedEntryTypes.includes(t)){var n=new PerformanceObserver((function(t){return t.getEntries().map(e)}));return n.observe({type:t,buffered:!0}),n}}catch(t){}},f=!1,s=function(t,e){f||"undefined"!=typeof InstallTrigger||(addEventListener("beforeunload",(function(){})),f=!0),addEventListener("visibilitychange",(function n(i){"hidden"===document.visibilityState&&(t(i),e&&removeEventListener("visibilitychange",n,!0))}),!0)},d=function(t){addEventListener("pageshow",(function(e){e.persisted&&t(e)}),!0)},m="function"==typeof WeakSet?new WeakSet:new Set,p=function(t,e,n){var i;return function(){e.value>=0&&(n||m.has(e)||"hidden"===document.visibilityState)&&(e.delta=e.value-(i||0),(e.delta||void 0===i)&&(i=e.value,t(e)))}},v=function(t,e){var n,i=c("CLS",0),r=function(t){t.hadRecentInput||(i.value+=t.value,i.entries.push(t),n())},a=u("layout-shift",r);a&&(n=p(t,i,e),s((function(){a.takeRecords().map(r),n()})),d((function(){i=c("CLS",0),n=p(t,i,e)})))},l=-1,h=function(){return"hidden"===document.visibilityState?0:1/0},S=function(){s((function(t){var e=t.timeStamp;l=e}),!0)},y=function(){return l<0&&(l=h(),S(),d((function(){setTimeout((function(){l=h(),S()}),0)}))),{get timeStamp(){return l}}},g=function(t,e){var n,i=y(),r=c("FCP"),a=u("paint",(function(t){"first-contentful-paint"===t.name&&(a&&a.disconnect(),t.startTime<i.timeStamp&&(r.value=t.startTime,r.entries.push(t),m.add(r),n()))}));a&&(n=p(t,r,e),d((function(i){r=c("FCP"),n=p(t,r,e),requestAnimationFrame((function(){requestAnimationFrame((function(){r.value=performance.now()-i.timeStamp,m.add(r),n()}))}))})))},w={passive:!0,capture:!0},E=new Date,L=function(t,e){i||(i=e,r=t,a=new Date,F(removeEventListener),T())},T=function(){if(r>=0&&r<a-E){var t={entryType:"first-input",name:i.type,target:i.target,cancelable:i.cancelable,startTime:i.timeStamp,processingStart:i.timeStamp+r};o.forEach((function(e){e(t)})),o=[]}},b=function(t){if(t.cancelable){var e=(t.timeStamp>1e12?new Date:performance.now())-t.timeStamp;"pointerdown"==t.type?function(t,e){var n=function(){L(t,e),r()},i=function(){r()},r=function(){removeEventListener("pointerup",n,w),removeEventListener("pointercancel",i,w)};addEventListener("pointerup",n,w),addEventListener("pointercancel",i,w)}(e,t):L(e,t)}},F=function(t){["mousedown","keydown","touchstart","pointerdown"].forEach((function(e){return t(e,b,w)}))},k=function(t,e){var n,a=y(),f=c("FID"),v=function(t){t.startTime<a.timeStamp&&(f.value=t.processingStart-t.startTime,f.entries.push(t),m.add(f),n())},l=u("first-input",v);n=p(t,f,e),l&&s((function(){l.takeRecords().map(v),l.disconnect()}),!0),l&&d((function(){var a;f=c("FID"),n=p(t,f,e),o=[],r=-1,i=null,F(addEventListener),a=v,o.push(a),T()}))},C=function(t,e){var n,i=y(),r=c("LCP"),a=function(t){var e=t.startTime;e<i.timeStamp&&(r.value=e,r.entries.push(t)),n()},o=u("largest-contentful-paint",a);if(o){n=p(t,r,e);var f=function(){m.has(r)||(o.takeRecords().map(a),o.disconnect(),m.add(r),n())};["keydown","click"].forEach((function(t){addEventListener(t,f,{once:!0,capture:!0})})),s(f,!0),d((function(i){r=c("LCP"),n=p(t,r,e),requestAnimationFrame((function(){requestAnimationFrame((function(){r.value=performance.now()-i.timeStamp,m.add(r),n()}))}))}))}},P=function(t){var e,n=c("TTFB");e=function(){try{var e=performance.getEntriesByType("navigation")[0]||function(){var t=performance.timing,e={entryType:"navigation",startTime:0};for(var n in t)"navigationStart"!==n&&"toJSON"!==n&&(e[n]=Math.max(t[n]-t.navigationStart,0));return e}();n.value=n.delta=e.responseStart,n.entries=[e],t(n)}catch(t){}},"complete"===document.readyState?setTimeout(e,0):addEventListener("pageshow",e)}}}]);
//# sourceMappingURL=3.3f814a69.chunk.js.map