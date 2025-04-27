'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "9d6976ff5d31a6bf72e11fbaabacf60b",
"assets/AssetManifest.bin.json": "46a9b2dac1e2d829f3228cc6e3c2dd16",
"assets/AssetManifest.json": "5af75768f982bcf076043022639e5bfe",
"assets/assets/fonts/LNA_Bold.ttf": "77f5e7e34cb8908505929532fe31d41d",
"assets/assets/fonts/LNA_Light.ttf": "64d76b4fb5162b3a616be823eb1dfad9",
"assets/assets/icons/arrow.png": "8e730f56bf0d3ea11f14770172c83f8c",
"assets/assets/icons/chess.png": "e8d423084f3b491247aec55fa3b82b84",
"assets/assets/icons/lamp.png": "0a05d80d9df7b5d2a6a18a7e47129ad9",
"assets/assets/images/aboutus.jpg": "bc81003462c5733523bef3513c09534f",
"assets/assets/images/agent.jpg": "b446ab28af8dd614b58a455f78b23495",
"assets/assets/images/creativity.jpg": "77a5a9f3bf4a51193dec9600144b4fa3",
"assets/assets/images/digitalmarkting.jpg": "e8b0f7fea935a5bd0d904d36b13e3d22",
"assets/assets/images/digitalmarkting2.jpg": "c6155e4e85202e5298f03ed4b853039d",
"assets/assets/images/digitalmarkting3.jpg": "87128e93947a58422b566ce65780db84",
"assets/assets/images/graphicdesgin.jpg": "2ebaa25aec396517aab09738731826d7",
"assets/assets/images/IdentityDesign.jpg": "9adaec2142a756cf2d00292d30da163e",
"assets/assets/images/Invest.jpg": "e3052071b655a03f5719dc429c01aa32",
"assets/assets/images/logowhite.png": "6c7f9a99ec7f4f4767e1a82534ba8c9b",
"assets/assets/images/logowithcolor.png": "599edb8a8b980c6687a65bb98ae95f6f",
"assets/assets/images/logowithdarkbg.jpg": "596c54e0830824b2a3fef3815a6b57c0",
"assets/assets/images/logowithlightbg.jpg": "05e18defa71ff029266c55586936e84f",
"assets/assets/images/offers.jpg": "0c476cbcf68dde8fcaf81e792fd07bae",
"assets/assets/images/policies&strategies.jpg": "20580782fd9001f322011e69aede354c",
"assets/assets/images/services1.jpg": "72013188e5c1f2489c19e8e8dd58dd1a",
"assets/assets/images/services2.jpg": "98bd2ed85d0f412567fe54e39a5834f3",
"assets/assets/images/VideoProduction&MotionGraphic.jpg": "24a720c715f518922c103a2309afbe8b",
"assets/assets/images/WebsiteDesign.jpg": "ae602b90763c10b626230922fdb830d9",
"assets/assets/lottie/loader.json": "7ab1a1a6a3e3cc374b4b13485943c5f5",
"assets/assets/lottie/noData.json": "b9cf0f1692f7b62bcdf1850ec1a89270",
"assets/assets/lottie/offline.json": "72f44a93081b413a0ccb41ac8d583a17",
"assets/assets/lottie/servererror.json": "d9d8c0bade69cc43936da858f5a03948",
"assets/FontManifest.json": "c8cf72a136138989a0488cdaa2059d5a",
"assets/fonts/MaterialIcons-Regular.otf": "2f0a394041b9eb8a3c56af2b836d6ede",
"assets/NOTICES": "3a8c66ba886aaf80a34ab024adc3d275",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "c8955389283c13d8d3db2e290ede2c62",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "be48da2906c1abff802d616f9fd5aaba",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "e811b8785758fdd85a8abc0a49f82adb",
"assets/packages/material_symbols_icons/lib/fonts/MaterialSymbolsOutlined.ttf": "fb130bde670810da1f18a4d8fd789462",
"assets/packages/material_symbols_icons/lib/fonts/MaterialSymbolsRounded.ttf": "c6b7a65d9869a13814fae31825154fbe",
"assets/packages/material_symbols_icons/lib/fonts/MaterialSymbolsSharp.ttf": "eb066c73fd60e01b4e001a6ab1717ac5",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "32cc31c7f950543ad75e035fcaeb2892",
"canvaskit/canvaskit.js.symbols": "b78c2208377a10f5570085034afa3625",
"canvaskit/canvaskit.wasm": "b1a2bc9cf33a10c80c9c8461160b65ec",
"canvaskit/chromium/canvaskit.js": "6a5bd08897043608cb8858ce71bcdd8a",
"canvaskit/chromium/canvaskit.js.symbols": "b80a4e8040226eb7e58d02dc3c7c42e9",
"canvaskit/chromium/canvaskit.wasm": "84ba37fc970b3884f62c712981c73303",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "2047ecb92c6d860ea16ee9dbc9c4def7",
"canvaskit/skwasm.wasm": "d51f820f99f1324f76723cafe7be132d",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "54330a583d358c4e746f6b8233bb27de",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "5dce05980610abfab3654c1c58ac891e",
"/": "5dce05980610abfab3654c1c58ac891e",
"main.dart.js": "17b4454fb56ab51be7038685c92e54f2",
"manifest.json": "6b9a497c338de812ed6840aaea224e94",
"version.json": "a530219d330a2f57a7e2118b86720956"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
