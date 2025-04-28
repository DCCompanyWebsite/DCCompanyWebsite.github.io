'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "0fcee78e15438d90e5191b85092b83bf",
".git/config": "9bb2b9640b819b73b32048c0601b4f1b",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "ffdea46cd291d8efcff7af93da72b066",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b6c2f8ee0b5516c40039588597275f9f",
".git/logs/refs/heads/main": "568fb91c8d5e23e347831fce4cacaa8a",
".git/logs/refs/remotes/origin/main": "4d7a61c7347157e3c4484a7a69d2f808",
".git/objects/00/7e393ee049edad1aae93fd210098680ac1ae9e": "0a2b4929c51fd897af54837e5b227c0e",
".git/objects/03/cc8abf9b11153c8310201af64e153eaee907dd": "f57c5a8fcf1a1db336d7a45c2b95d33a",
".git/objects/05/132130b688dd57caca951aec3e03706d4e0d24": "38a7487c8c087466af6d920de064a187",
".git/objects/0a/400adf81a94c01d449d04c76d83797748f88b3": "18abd5bb1cb60333dd6729ac1059d9df",
".git/objects/10/0f4479a98909aad32e2ac6b8f6f9b100ea7692": "6b18f6ad5d3251b8ce1387c55f797f60",
".git/objects/16/73a00c2a6716f3360a2a99dcafb6d486a279a4": "69b73d1604f9e0b677dd0ed2d2bffa18",
".git/objects/1d/8c0de0d301cb6b098981874b0be9bda39a73de": "26a6381cca341c7e3f886b6b4594fceb",
".git/objects/1e/4150fdf319ffe549c7eac3d2e67c68bf939204": "0f4df059c00c01a97eef01326786c11d",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/3860f3cebcf21c0260e7a6d0ed70d1e0692952": "871e80b84064d7992db7bfbd3ace5a86",
".git/objects/26/497dfc78f4d241830c44ffec3ab995c8a3cc77": "6b84dc454a7afbdf9324c88ee49f01f3",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/2d/6ef8a18d8b225dfd0e79ec7ac5cccf866c6017": "1513f1cf2209ecda2311487f4f5285c2",
".git/objects/30/7ce52d3054f13a3d4c58fd825e70f22e3e71b3": "9192a5282a079700712cc9eb81d9125d",
".git/objects/37/d2f619b52346f42a315a7c96cba6c712982c54": "71e332aa6b7dfbb57348032541565eac",
".git/objects/3a/0ffaf6ba7177d922ec81fcd2c15d8ec6744087": "9fec46cb1f35b9cdf936b48c8961ca50",
".git/objects/3b/2a640100e1749d04b3d3f9904ba887f67e1b0a": "a98966805dbe414366dcd6822363b900",
".git/objects/3e/1a1d67be3d854613d79c4e2d86c9a65b8e11ec": "03fd22e5b29f5afe6c8c43dd8cfe3275",
".git/objects/47/8978a29d55faa8091473f5064f31b93c9e6d0a": "835f49172e81ca1ee05a96d45001bb8b",
".git/objects/4b/76bc1f900872e5f21ebe07ed55c7c8f8fd4a10": "5ab9f2f0250292e624fe625f219c084e",
".git/objects/4c/5ef12eb149927c2fd344603afca96d6c2a040b": "91eba10117e22cda4070ba5bec26b647",
".git/objects/4d/8dcb08110388dd5dfdfd45afa3726d1a90f519": "041826c23dabb0ebf7d088f695f948db",
".git/objects/5a/87045fe6f8f62addc1e444c4073e381ca73452": "9f433c1836d33169caa690be821cf74c",
".git/objects/5d/ea158d59cb89d0cba808b7cacef4118749ae5c": "5a9d08cd7fb42a754fe83c2ec7515012",
".git/objects/62/a97d22903b12da2f4e6a4d439bf3976eff22bd": "62f99fef26884b24a4c22f2476b2d97c",
".git/objects/67/72a95282c1d8864776ae81bd95b5e21372b2e2": "ca7aa855002821e3ce7efec5e66fa5f2",
".git/objects/67/c59845970d63c9c9cbaad724c14cfc0c267f96": "9e29af622bef8c352c8ec82b0abcd3bc",
".git/objects/68/db398e164ff2daccf0125d507d3f19bb380ef0": "425a497c4f946a789a292b92262010be",
".git/objects/71/0aec11c3471faf0295d71fd972357592425180": "aa40b3ecc60d96a2e277f359fdc1be9e",
".git/objects/72/d7da217818e588373db6d754eb2231fc749b2a": "5b12508e4a82bf3fdbfa3c906c61f6a5",
".git/objects/77/215db3df68d3904aec35d647a019db860cea25": "b87df2cac6d91b95ca708af5da89eb0a",
".git/objects/79/3cb3049c0d3280c049524eea2b498239c16694": "7bf0e16199673104d384b1af16666efa",
".git/objects/79/56cc25a9211dbd9ddc0a44de50fa3279ee61d3": "76621ca716f94f9db3f4e726cf36f506",
".git/objects/7a/a1dc2a6b1076eb4627ae89f61e68491c3763cb": "65d911a9638765c281ef8d80e548c730",
".git/objects/7c/65b464c1b625c6b606b058d50bf4e157665265": "ca7f0a7019f665f3e01da86a9a5ba7cf",
".git/objects/7e/8b84fc89f6248344a6132dfc74f9312afde39c": "4daef06d170f27d4ea9d10e60579da99",
".git/objects/7f/ca1490955d7ea92bd1d8b91b31d7921b185980": "46083a9c081f8016eedb843b6f6b339f",
".git/objects/82/a1d974058d729c7b43ba07976889d9998b0b01": "a576ccb494f1eda59bd097d0821739ce",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/18119ef442ac64a6dec51357a2b29e4738dc7b": "919ae2167ea54248748e26eefc80cc8a",
".git/objects/92/81fef58f12da55435b44ddc6450a2f4ae9c47f": "136e4bcc09a52a6e8f488f3ef698ae6d",
".git/objects/92/bfab0aa253d44f49b5bf3668329e6a163f53de": "19139ab798edf55c14d510d68fb099a3",
".git/objects/92/f235b0dd4964e03de1db86e16f47ff0fb9f821": "630916d14317b447c9304c78907c9751",
".git/objects/94/80280545e99e816dcadd1b873611424131e5cd": "8fbec48d90a3edc1d505ba00fa665d71",
".git/objects/98/66d128a82787d61752f4f04a853b0eaac32ebe": "96a72e1af638c98d88ad485e9605d146",
".git/objects/99/1cf7330e1654d1b9b96c1559b0def340729204": "235938db04a380c0e44743d786436964",
".git/objects/9a/90a8824f9e9cf6d629ae3ef15612d74c88123a": "e04b226b5b0cfe4d2b99af6ffa19f70d",
".git/objects/9d/3d4825d4952acbe70622d17f71d6fa16bdb5ad": "e6a500a96effbef5cab1b107048ee8c3",
".git/objects/9f/3781d98464d008b98025a06e233766e1b5d5f7": "717ab816b4c9d6dbf2d3eb997d88ea81",
".git/objects/a1/a6c8e345aca76b79d2c28d20b9d434538e83bc": "095eeb07007d76c3e6ed52953a47a854",
".git/objects/a6/e37130f2bd21d4717a740c392908d21ef608f7": "c8b1671b674d2092800b847198f1165b",
".git/objects/a7/27e82414e8bbcc42d3287d5171bad7452ac32a": "c03adcab203bd7a00586eed3a2b33a15",
".git/objects/ac/2147fdf4626566419ba5325c765e2eedc86110": "b3fbb9e54b1ed7cc5c7fe2d9a89d4bbd",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bd/7744d549afe640fce221b827fe215e132661fa": "a7de82a6a5779fd7be510140bf3536c2",
".git/objects/bf/98e45f53850aea5e0a2e0e4af902a71467ff5f": "e7659ab136060e1e387e42e52667ef79",
".git/objects/bf/b91397dce9a10764dea994c3f4dcf357a8a6ba": "dcaf867e1924826806a08189ed2605a2",
".git/objects/c1/11f688a59925f83d124c1a29649bb31080b3bf": "d441479823d785e48089d7a533aaa6ec",
".git/objects/c3/1fdd06728f5a255f8d7eecca707a0bb369a113": "c56319267b354acf86e821f6f36b3b8a",
".git/objects/c4/51990923bdeb312e8fff95481de3b53b340034": "cdf07dc81b76d05628e1f815cbbc2065",
".git/objects/c6/0e9ec966cb508ab249b5e97212d49c634625bd": "4c870bb28cf591fe23780d4cab9f4f80",
".git/objects/c6/4ebc653f21591c4f49b6bd1bbabf8912d2e8f5": "00fa646709d77a709deb227baa004293",
".git/objects/c9/05ba7de4adee336a843140cc1d9d82578ad557": "a5d469ddfb0e299d3221ade0d7fea7ad",
".git/objects/cc/4b972eb51edfef002b3d42e566d5a1ff482538": "4b3d924c9310042cf9784e879e78db0a",
".git/objects/ce/1558dc3414541299317c3f45fb7015576b8eae": "651d1e25b1b947d13409a19064240290",
".git/objects/d0/d747c395518df05dfa0f2bdf4f7c04b9adcc2c": "98fb1fc396c39c6138bbfd87c0cc235b",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/5e0fe311247ea60e444aa3dc1d1a2c4842a628": "efae2d129fafc9e5c5e3b45bb56b605e",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/ee6626c4eac55d7d206cafcadfe44790aa67d7": "0368c4908fd0e05f8df955ad11443b92",
".git/objects/dc/71b9d99f6c373237b65e84b6d821f32d4b53ae": "9ea492a98408e1fc587d6bbaa0b5b645",
".git/objects/e9/1fe43f442422a060bb01be858a7d674794d00a": "9de7e75cbdd8d120ec0630e9012f22bc",
".git/objects/e9/6ea42723dd6c6e3b18e378f0deead4ddf9adf2": "555c3c24f1592cef4476a3e852c6b66b",
".git/objects/ea/b9de8500246d99ccefe718dd940e208301bd68": "5f4f68b5dbecd1c2740753504ac88599",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/ee/0289af857f8f6cb01b19b9474af482f1ba9c46": "74cacaaa4147241f3fb5a2ea289977da",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/c8a75be47c2f65165fe7c34a85019b125ca6e4": "16c4100c88a12f89dde6a946f1b45e4e",
".git/objects/f3/c97fd5a7a40c76e7296a919583804143b3fb17": "be7ea9cffcc16578ce219236d17a6f8c",
".git/objects/f5/682fda12911f29643ef565a9e7aba740d23fd4": "31bfacb1c14f0117234dfcbebde12ac4",
".git/objects/f5/85cdd433abe783b7c7dc797e36a79f966c407b": "fb665b6cea947d04f626687ad9ecd2b1",
".git/objects/f6/27218e4176b75f1d600ceb6d0ff2b5cdaaed06": "fe5bff62c96a7d10c41114fdea9b3785",
".git/objects/f6/3bef28de03643533e570d3359eadaead907ace": "cfe4d7b7476fcb32426d21633271df33",
".git/objects/f7/5dd0c4cb8b3d4e0b5cd5b155a88fd9db31af9b": "45340f15dd1a90ab04efa1c553aa461f",
".git/objects/f9/e4c614a99c48cdf4a27a1894c6bbecf1a6d8dd": "68771ea1887ebd0e6655d2d47776bbe1",
".git/objects/fe/66aee8a85f6a90b783b91f3219308702618e47": "8305cba3b17a3a8831a302810dd73ad0",
".git/refs/heads/main": "dcb26ce387da2b8877755d7b1c878d8c",
".git/refs/remotes/origin/main": "dcb26ce387da2b8877755d7b1c878d8c",
"assets/AssetManifest.bin": "9d6976ff5d31a6bf72e11fbaabacf60b",
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
"assets/NOTICES": "0dfc334b30d31212eedf62cc499f184c",
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
"flutter_bootstrap.js": "e02c2d3b939fd98620dbb29d91f54f9f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "5dce05980610abfab3654c1c58ac891e",
"/": "5dce05980610abfab3654c1c58ac891e",
"main.dart.js": "de355c1611791ea35e9e767dd79e9b68",
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
