if(!self.define){let e,s={};const n=(n,t)=>(n=new URL(n+".js",t).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(t,a)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let c={};const r=e=>n(e,i),d={module:{uri:i},exports:c,require:r};s[i]=Promise.all(t.map((e=>d[e]||r(e)))).then((e=>(a(...e),c)))}}define(["./workbox-3c9d0171"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/168.55b28d7d8e87b522.js",revision:"55b28d7d8e87b522"},{url:"/_next/static/chunks/2-ca9c28dbeb152c33.js",revision:"ddHpEyvBo9nfrnNA8DItI"},{url:"/_next/static/chunks/20-c7d49d917aeeb682.js",revision:"ddHpEyvBo9nfrnNA8DItI"},{url:"/_next/static/chunks/282-2e8f33fc41a81599.js",revision:"ddHpEyvBo9nfrnNA8DItI"},{url:"/_next/static/chunks/331.42a6de28dbd828ad.js",revision:"42a6de28dbd828ad"},{url:"/_next/static/chunks/374-7a6df4e9033d3458.js",revision:"ddHpEyvBo9nfrnNA8DItI"},{url:"/_next/static/chunks/387.64e583085e3b3671.js",revision:"64e583085e3b3671"},{url:"/_next/static/chunks/407.f880b6c93624d4b4.js",revision:"f880b6c93624d4b4"},{url:"/_next/static/chunks/420-2505b02636106a37.js",revision:"ddHpEyvBo9nfrnNA8DItI"},{url:"/_next/static/chunks/454-54138e68a7fdcd49.js",revision:"ddHpEyvBo9nfrnNA8DItI"},{url:"/_next/static/chunks/566-ddcb1fb0d3fcd166.js",revision:"ddHpEyvBo9nfrnNA8DItI"},{url:"/_next/static/chunks/660.65499fc001b8d816.js",revision:"65499fc001b8d816"},{url:"/_next/static/chunks/685.280e00f896c5739c.js",revision:"280e00f896c5739c"},{url:"/_next/static/chunks/725-46fe22e36fa13c99.js",revision:"ddHpEyvBo9nfrnNA8DItI"},{url:"/_next/static/chunks/745.b4e6df6dcbb1ab65.js",revision:"b4e6df6dcbb1ab65"},{url:"/_next/static/chunks/809-d58c5036f95220c4.js",revision:"ddHpEyvBo9nfrnNA8DItI"},{url:"/_next/static/chunks/821-fe4196605d8b9a86.js",revision:"ddHpEyvBo9nfrnNA8DItI"},{url:"/_next/static/chunks/92-f32673705648436d.js",revision:"ddHpEyvBo9nfrnNA8DItI"},{url:"/_next/static/chunks/969-d1d8c65d5ed5e33d.js",revision:"ddHpEyvBo9nfrnNA8DItI"},{url:"/_next/static/chunks/app/_not-found/page-5132fce6c6d667bc.js",revision:"ddHpEyvBo9nfrnNA8DItI"},{url:"/_next/static/chunks/app/bookmarks/%5Bslug%5D/loading-99cb3532c4024f29.js",revision:"ddHpEyvBo9nfrnNA8DItI"},{url:"/_next/static/chunks/app/bookmarks/%5Bslug%5D/page-5957fa7aee0c9b98.js",revision:"ddHpEyvBo9nfrnNA8DItI"},{url:"/_next/static/chunks/app/bookmarks/layout-d7fb1c538c643bb0.js",revision:"ddHpEyvBo9nfrnNA8DItI"},{url:"/_next/static/chunks/app/bookmarks/not-found-3bdd486fb8281bf7.js",revision:"ddHpEyvBo9nfrnNA8DItI"},{url:"/_next/static/chunks/app/bookmarks/page-68c86a46d81c16bf.js",revision:"ddHpEyvBo9nfrnNA8DItI"},{url:"/_next/static/chunks/app/journey/loading-1dd942c1a19405a4.js",revision:"ddHpEyvBo9nfrnNA8DItI"},{url:"/_next/static/chunks/app/journey/page-c69f339f521dfe2b.js",revision:"ddHpEyvBo9nfrnNA8DItI"},{url:"/_next/static/chunks/app/layout-9804f1ba91d22b96.js",revision:"ddHpEyvBo9nfrnNA8DItI"},{url:"/_next/static/chunks/app/not-found-b740eec8798f0963.js",revision:"ddHpEyvBo9nfrnNA8DItI"},{url:"/_next/static/chunks/app/page-cbdcee74341b9c30.js",revision:"ddHpEyvBo9nfrnNA8DItI"},{url:"/_next/static/chunks/app/photo/page-5139ff9761afa9f8.js",revision:"ddHpEyvBo9nfrnNA8DItI"},{url:"/_next/static/chunks/app/stack/page-30fdd76d3fc0038b.js",revision:"ddHpEyvBo9nfrnNA8DItI"},{url:"/_next/static/chunks/app/writing/%5Bslug%5D/loading-c5ba5f3ada58f860.js",revision:"ddHpEyvBo9nfrnNA8DItI"},{url:"/_next/static/chunks/app/writing/%5Bslug%5D/page-86d6f8761bfd444a.js",revision:"ddHpEyvBo9nfrnNA8DItI"},{url:"/_next/static/chunks/app/writing/layout-3e6f16bafdc9eb72.js",revision:"ddHpEyvBo9nfrnNA8DItI"},{url:"/_next/static/chunks/app/writing/not-found-0d67f1ef6a66cdfa.js",revision:"ddHpEyvBo9nfrnNA8DItI"},{url:"/_next/static/chunks/app/writing/page-071ad7b2262fcca2.js",revision:"ddHpEyvBo9nfrnNA8DItI"},{url:"/_next/static/chunks/b6ab225f-a7eb6491f62bceb9.js",revision:"ddHpEyvBo9nfrnNA8DItI"},{url:"/_next/static/chunks/f8d9c2d7-42e4b9c8d97675ef.js",revision:"ddHpEyvBo9nfrnNA8DItI"},{url:"/_next/static/chunks/framework-6e06c675866dc992.js",revision:"ddHpEyvBo9nfrnNA8DItI"},{url:"/_next/static/chunks/main-app-77e36ace89d060b3.js",revision:"ddHpEyvBo9nfrnNA8DItI"},{url:"/_next/static/chunks/main-c36b4fcbe3a3749c.js",revision:"ddHpEyvBo9nfrnNA8DItI"},{url:"/_next/static/chunks/pages/_app-070e46952035a342.js",revision:"ddHpEyvBo9nfrnNA8DItI"},{url:"/_next/static/chunks/pages/_error-f77389242f25a032.js",revision:"ddHpEyvBo9nfrnNA8DItI"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-3862a12b2b7cd6d4.js",revision:"ddHpEyvBo9nfrnNA8DItI"},{url:"/_next/static/css/7fa06e84daf24c92.css",revision:"7fa06e84daf24c92"},{url:"/_next/static/css/8399bdad39283a8c.css",revision:"8399bdad39283a8c"},{url:"/_next/static/css/e69f0993197131ab.css",revision:"e69f0993197131ab"},{url:"/_next/static/ddHpEyvBo9nfrnNA8DItI/_buildManifest.js",revision:"52764276a7fe603b07eda974ba665711"},{url:"/_next/static/ddHpEyvBo9nfrnNA8DItI/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/media/66f30814ff6d7cdf.p.woff2",revision:"addf0d443087aa4b985f763c80182017"},{url:"/_next/static/media/e11418ac562b8ac1-s.p.woff2",revision:"0e46e732cced180e3a2c7285100f27d4"},{url:"/_next/static/media/normal.c29903b5.cur",revision:"c29903b5"},{url:"/_next/static/media/sprite.67666317.png",revision:"67666317"},{url:"/assets/avatar.webp",revision:"be55b3547825945ab0256c0043eb8285"},{url:"/assets/fallback.avif",revision:"9631e27395e26681ac0acaee0447f149"},{url:"/assets/icon/icon-1024.webp",revision:"e5273f9b6fd361f26d51791d05610b6b"},{url:"/assets/icon/icon-128.webp",revision:"71e7d7586d5e929131a98e70340f1132"},{url:"/assets/icon/icon-192.webp",revision:"7bd540a25de2e5dae6045fdc6410b3bd"},{url:"/assets/icon/icon-256.webp",revision:"9c83f2fcce1478e5d9a25b2ce5841e3e"},{url:"/assets/icon/icon-512.webp",revision:"f991e6b4ef92a0e0aa51d7d0fab28882"},{url:"/assets/icon/icon-768.webp",revision:"7dae29368ea66930efd0e8c03b938c85"},{url:"/images/1.jpg",revision:"056f74a7058f9d84221ecefd24968805"},{url:"/images/2.png",revision:"f1a00e028d37ccc52b52c350750e84f5"},{url:"/images/3.jpeg",revision:"f95baff512c1a635c05e829b3c730106"},{url:"/images/4.jpeg",revision:"7a199dccdafc6893e5b0575da57efa22"},{url:"/images/5.jpeg",revision:"6b795fb7aeba8ecd9205f29da1d6464b"},{url:"/manifest.json",revision:"f3bd37c88f4342c7e69c7c4e8e1b0594"},{url:"/swe-worker-5c72df51bb1f6ee0.js",revision:"5a47d90db13bb1309b25bdf7b363570e"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4|webm)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e,url:{pathname:s}})=>!(!e||s.startsWith("/api/auth/callback")||!s.startsWith("/api/"))),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:n})=>"1"===e.headers.get("RSC")&&"1"===e.headers.get("Next-Router-Prefetch")&&n&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc-prefetch",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:n})=>"1"===e.headers.get("RSC")&&n&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:{pathname:e},sameOrigin:s})=>s&&!e.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET"),self.__WB_DISABLE_DEV_LOGS=!0}));
