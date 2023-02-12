'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "20178bfc9c81a67c32f95dedae25c3e1",
"index.html": "19305c720c268d626b4228b217334362",
"/": "19305c720c268d626b4228b217334362",
"main.dart.js": "5ec3eef43045e5542832e861305f834f",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "a4abb39583c4739efdb287a4beef96a7",
".git/objects/58/f40fff92d972902a3de4b28ea56640bb67fde5": "40380e6d0b9113f79c398031b502c00f",
".git/objects/33/619804464ef8038074f4dc4fe16082a8f9a91d": "21234bfa9adf977d548f7277b91f67d3",
".git/objects/ed/f31af91032981411498ba73830546effa21439": "e8533aad7ec21b49ceb8b390edfd1509",
".git/objects/83/1ce0228e1ae80f31cc0c189a2daf3640135c96": "5a87a65772b42df48657b717cb6ac365",
".git/logs/refs/heads/build": "03e4789f9c4629ae305613d9767b8697",
".git/logs/refs/remotes/origin/build": "1718cad11aadb7b7dfb40d813f9d6b61",
".git/refs/heads/build": "90be731e42d6e3e8972ea94032c27317",
".git/refs/remotes/origin/build": "90be731e42d6e3e8972ea94032c27317",
"assets/AssetManifest.json": "fd2bb76106120d9c0e480f8c37829573",
"assets/NOTICES": "6bb06d493590b510c7a03477f3d21eb2",
"assets/FontManifest.json": "fb4db9dd9bfbc9d268507afdae8ee661",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/images/faq2.png": "beea4e164cf04f5d24bee3d9a87722e3",
"assets/assets/images/storeLocation_background.png": "97fc0d5524760dd3679aded16a1958d9",
"assets/assets/images/get_in_touch.png": "95aef82c628d28b87e54736422b22d0a",
"assets/assets/images/our_prod_web_1.png": "e617d9d90b7e76b289c9476e89adca86",
"assets/assets/images/home_image1.png": "1c67bbf1f351f4437776767c30531f28",
"assets/assets/images/faq1.png": "65fe3a7b48245221110c4c6062a6943c",
"assets/assets/images/cup_bun.png": "636b763ff1ec6a47011ecff2fd5f5bd4",
"assets/assets/images/our_product_bg1.png": "c1ca6e209da3a195a01338313685cc15",
"assets/assets/images/our_prod_web_2.png": "b98bb565f4703cd78e975f09f1fdf58e",
"assets/assets/images/our_product_mobile.png": "02c2abd12c08cf75bce53f7a17e4b414",
"assets/assets/images/wallet.png": "21d3789fbf1f86734ab409424dbbcc81",
"assets/assets/images/store_map.png": "020e4c7b3c0726823a6a3288c021cd90",
"assets/assets/images/recentBlog_background.png": "1041ddb9c0d4ec7deea3de2f49bda2fd",
"assets/assets/images/our_story_store.png": "a458b312dd3a79214cbca4fd34feabb8",
"assets/assets/images/our_prod_web_6.png": "1a0b3a35149152ee2f5d6e670459224d",
"assets/assets/images/cart.png": "e5be56781d8313fad66bd342ecc344c4",
"assets/assets/images/shipping_background.png": "35c8654f2cc4358bcacdfeedc58897ce",
"assets/assets/images/dustbin.png": "81a3a6a7dd5131aa3eb41fe563238cb4",
"assets/assets/images/followusmobile.png": "cb2a9fbe370538c4a189bb9ba0c37147",
"assets/assets/images/our_prod_web_5.png": "adef079dcf99f437ac0c254d35cf1839",
"assets/assets/images/left_arrow.png": "edf9c44cd625e71e8504513cb7142b06",
"assets/assets/images/instagram.png": "affd4216d017069a53c764f267b28b19",
"assets/assets/images/our_prod_web_4.png": "bde5c0af797dedf2b4137ea079ca44fd",
"assets/assets/images/shipping.png": "cf6d216f6b0a4714c5a902e1987475cd",
"assets/assets/images/our_story_mobile_rice.png": "292e05fbcfb2045ede16fcd46eb8e6bb",
"assets/assets/images/wheat.png": "2fa9b14bbc46c75700cb166a4b1b8555",
"assets/assets/images/home_background.png": "0d0e385b958933eddca4c19f477963d2",
"assets/assets/images/rupee_brown.png": "72ab42b261a09ed9c6ac63292d1b046a",
"assets/assets/images/speciality_breads.png": "11967709b4b76a54112de487ba233d4b",
"assets/assets/images/right_arrow.png": "2ad34fcae4a3e40d414ac68251eef716",
"assets/assets/images/non_veg.png": "a8d750c8d5bf00144f3d88c72a596000",
"assets/assets/images/our_products_1.png": "66bb8ae5d8e84440a2a307047f0ed139",
"assets/assets/images/testimonials_image.png": "452701f71a658f256a25a91997d55a82",
"assets/assets/images/slider1.png": "43e1d8f6ba970abd9183c4133cdad688",
"assets/assets/images/map.png": "fe9d77940e2f31116148a41990d13f41",
"assets/assets/images/slider3.png": "188cc517fb21aabb64d673d6350b2762",
"assets/assets/images/Vector.png": "1751f9860371b6c8fb1425d1d4f101db",
"assets/assets/images/puffs.png": "b55e22ff1bfd201bf55032c188fcb577",
"assets/assets/images/fullbun.png": "384b75a6c7ad2a7d84f8ff5acacd6649",
"assets/assets/images/classic_breads.png": "d2bb62485583a477b415f72efda5634c",
"assets/assets/images/our_products_2.png": "8126d907c436b31593b6762561ae47a6",
"assets/assets/images/edit_subscription_bg.png": "54c5084bbd40b36fab7febebe8bffb4b",
"assets/assets/images/our_products_3.png": "99a3ba85324f9eb47148063cace41ff8",
"assets/assets/images/our_story_mobile_bottomImg.png": "a0b72b23f90da6fce2560617a6b8b73f",
"assets/assets/images/slider2.png": "b9f9e3ed7056088394ad8ef0ea27c993",
"assets/assets/images/home_image.png": "a44b5f58b83a3efac72a333b72abbdf9",
"assets/assets/images/blog_mobile.png": "ab12a6f0ef8ee76eff51ed90a124974b",
"assets/assets/images/contactsUs_mobile_wheat.png": "e45dba8b41eb5f96ed2c16b960f9d6d6",
"assets/assets/images/ic_information.png": "8653d65af776b81fd9efcc4d482d75d9",
"assets/assets/images/our_products_4.png": "c6d12fe20bfd0588fd8b947fad1c8894",
"assets/assets/images/bangalore.png": "aed4ac65f05222fdb9f59693b0ffedee",
"assets/assets/images/tabbar_icon.png": "71b124cbcf43a7488eaf2edc72dabe44",
"assets/assets/images/faq_mobile.png": "285d25f781574b7dc08ed0c80c1a5464",
"assets/assets/images/ombc2.png": "44396832dcbfc2d6e81afe68029d15d5",
"assets/assets/images/ombc_logo.png": "fdc6beeda23aedc91d784357b18a5a6c",
"assets/assets/images/my_account_bg.png": "2c536501094f3d9fa2b8aa2edc812d8d",
"assets/assets/images/rupee_black.png": "e24b1b05991a6945e9b4716b38ccbb48",
"assets/assets/images/quotation_mark.png": "4c40bdb9911bc38b1795866af42fcc67",
"assets/assets/images/ombc3.png": "a411cf4d1e3e7c55324abf633d779166",
"assets/assets/images/our_story_mobile_cake.png": "65da69042a0c3b55ef667d489d0b4d6e",
"assets/assets/images/bakery_ingredients.png": "0686f29d03decae3525296d33ce55570",
"assets/assets/images/ombc1.png": "43d37c5b91c44f0938a88dbdadf8e951",
"assets/assets/images/change_pass.png": "ae28f1357313cb8e2f3c26adf1ce7bfb",
"assets/assets/images/our_goal.png": "3c3faca3ba309fdac0cc56968e8d09f9",
"assets/assets/images/bakery_ingerdient3.png": "76ef8d90a54058ec7f0096428af6c074",
"assets/assets/images/faq_instagram4.png": "f00710925b6425357f69f6769da8ae5c",
"assets/assets/images/bakery_ingredients_1.png": "8a334b41198004529c94445b6500897b",
"assets/assets/images/edit_subscription_bottom.png": "42533a3ee904286666c86b5a29d120ee",
"assets/assets/images/daily_menu_mobile2.png": "46b0769115f2dbc7ad11f9889dcf425e",
"assets/assets/images/twitter.png": "f3b02f87dcce33aaf295802a6c460275",
"assets/assets/images/product_bg_2.png": "61c4990b4d86284bcb39a04b9d70b604",
"assets/assets/images/faq_instagram1.png": "3f777bba6ad9ffc7f8e6d365f8969083",
"assets/assets/images/faq_instagram3.png": "a334137d4c18a1d679187803f5db459f",
"assets/assets/images/daily_menu_mobile.png": "d9693980d7be53926ce624969002a4a7",
"assets/assets/images/location.png": "e6e28d51a0166a0f6f0920c31f3f9840",
"assets/assets/images/bakery_ingerdient4.png": "bcd32c45eabe19fad5a2e1d115bda33d",
"assets/assets/images/product_bg_1.png": "e1bfcb9faeb35e17efccf08ec877aaef",
"assets/assets/images/bottom_image.png": "292c3bd3acb00845fa7ebb6ada73e4ce",
"assets/assets/images/faq_instagram2.png": "1e301213dabdb259ccaad2d06949c17e",
"assets/assets/images/app_logo.png": "f57ff02db02108a00424f128a4a10fae",
"assets/assets/images/product2.png": "05eb2cad49bc8fb08b113177564e2241",
"assets/assets/images/home3.png": "c98e22fa922fda56f6ba97754ebd68f0",
"assets/assets/images/ourStory_image.png": "4957ac4dcd0548b91578e7c091b17d85",
"assets/assets/images/blog_bacg2.png": "9e9cefe788591e9bbbc23028797e9e00",
"assets/assets/images/home_logo.png": "b720cd624af06a41fefbd152a128bdad",
"assets/assets/images/hyderabad.png": "a156eb15c0bae5cfef9305ed7882bbe3",
"assets/assets/images/home_logo.jpg": "eeedf96f19aa2e7fc511b217bfee3298",
"assets/assets/images/contact_us.png": "2f53d7af63ba53e6eacff2499c65fd44",
"assets/assets/images/our_product_bg.png": "fbdb087ddddc4b1b691877e7c469d3a4",
"assets/assets/images/product1.png": "0968a5229cf9ae2e39ad20daf70f7cfb",
"assets/assets/images/our_story_bg3.png": "7491f6b504e7c9b34b2a49ad4ccd515b",
"assets/assets/images/veg.png": "d85f9546f545b897e01896dc5ca7fb0d",
"assets/assets/images/contact_us_mobile.png": "fbec966b52d68d684e22e3e4002deadb",
"assets/assets/images/daily_menu.png": "b51b9a78b7796e16c35f38a40f7ff85f",
"assets/assets/images/wheat_bg.png": "9de49c2f471c89e10a3e66fad58ec960",
"assets/assets/images/pinterest.png": "93e76debc345dd2cea8b3d923609f980",
"assets/assets/images/facebook.png": "191fddefa716d0651f6e4770114c77bc",
"assets/assets/images/blog1.png": "53ef769771dd6d8190bfd380a76cab69",
"assets/assets/images/hamper.png": "c53b867e847a25d6117deb0dbbfeac74",
"assets/assets/images/logo24.png": "609bcfbd1d7b3c97d099e9f4c967fb4d",
"assets/assets/images/faq_mobile2.png": "4033a70ee86fa13f127646581730307d",
"assets/assets/images/our_prod_backg.png": "ef57ff50633f403aa6999246f6f226e9",
"assets/assets/images/head_left.png": "4aa435a17c1fe76f2bc3f149c1e46bc1",
"assets/assets/images/blog2.png": "fc30bcaeaf59e3691e03b72717337342",
"assets/assets/images/NicePng_bread-loaf-png_463516%25201.png": "dae80cc7f37a1c30b637fbcf28e79a42",
"assets/assets/images/blog_bagrd.png": "ae077d7099b45109cbe7ecaf8d06cf71",
"assets/assets/images/my_account_head.png": "dd692cfebfe8e7676bb19faa97b0c064",
"assets/assets/images/dialog_bg.png": "5985ba4ef29c5a6c090523e83089c613",
"assets/assets/images/my_account_mobile.png": "44cd19c80e2b5fa62b3964f039f332dd",
"assets/assets/images/subscribenow.png": "11c9c5beae15779ba504c8ab81f24c7c",
"assets/assets/images/head_right.png": "013316b37344554398934da59bc20dd7",
"assets/assets/images/chennai.png": "ac96b14d0a0bde31efb4d00f0f965000",
"assets/assets/product_pics/Cookies%2520&%2520stuff/cashew%2520biscottis.jpg": "d35dda6e0dc7a851904b679e14072eef",
"assets/assets/product_pics/Cookies%2520&%2520stuff/Oatmeal%2520&%2520raisin%2520cookie.jpg": "c8b9953619bc38ddb0f4109fe0724250",
"assets/assets/product_pics/Cookies%2520&%2520stuff/japanese%2520rusk.jpg": "3f9bbb374a4c3487cbeb764531e0f538",
"assets/assets/product_pics/Cookies%2520&%2520stuff/dark%2520chocolate%2520cookie.jpg": "4648bbcab99c88ef5250d36b750eef08",
"assets/assets/product_pics/Cookies%2520&%2520stuff/pistachio%2520biscotti.jpg": "e19d1ef5b0cfcb84f31c3ac61e8c831c",
"assets/assets/product_pics/Cookies%2520&%2520stuff/almond%2520biscotti.jpg": "1f7b19e6573db85367f656378f8665e2",
"assets/assets/product_pics/Cookies%2520&%2520stuff/chocochip%2520cookie.jpg": "21036193a0790b54ed47d905f74b9ce2",
"assets/assets/product_pics/Loaf%2520Breads/ragi%2520bread.jpg": "80840f6c7696500bad0d929cfa9494b5",
"assets/assets/product_pics/Loaf%2520Breads/gluten%2520free%2520bread.jpg": "16e4302a5794d95305e6558fb91415a0",
"assets/assets/product_pics/Loaf%2520Breads/orange%2520and%2520raisin%2520bread.jpg": "03932b7912aafb0cf4ff14db63bddc2b",
"assets/assets/product_pics/Loaf%2520Breads/rye%2520bread.jpg": "dc5fc79604232275b2dca3cc5068dc0d",
"assets/assets/product_pics/Loaf%2520Breads/whole%2520wheat%2520bread.jpg": "06698065ee522761897cd05efe1740f1",
"assets/assets/product_pics/Loaf%2520Breads/cereal%2520bread.jpg": "49e58c339e7b3a9ba569b88df01332c9",
"assets/assets/product_pics/Loaf%2520Breads/keto%2520bread.jpg": "a4dc582f114af510dbb0f303cade7dd1",
"assets/assets/product_pics/Loaf%2520Breads/country%2520loaf.jpg": "d92299defc520f7f32f8d69110aeab5b",
"assets/assets/product_pics/Loaf%2520Breads/milk%2520bread.jpg": "c41207ef507e839afdcfa9e91d5688ea",
"assets/assets/product_pics/Loaf%2520Breads/brioche.jpg": "fdd19ec7b9c46e4f00c6beb7607f6e5e",
"assets/assets/product_pics/Sweet%2520bakes/mini%2520carrot%2520muffins.jpg": "2525cfeb48fe686676dd97d691e06732",
"assets/assets/product_pics/Sweet%2520bakes/Dates%2520and%2520walnut%2520muffins.jpg": "64e6ed783eadba5d8e2aa58d50b5287f",
"assets/assets/product_pics/Sweet%2520bakes/Chocochip%2520cake.JPG": "5c2dd3dc57ffa94ac25e019511ab4963",
"assets/assets/product_pics/Sweet%2520bakes/Black%2520currant%2520roll.jpg": "94880bc2b65935a1dd4a4534ab2d005c",
"assets/assets/product_pics/Sweet%2520bakes/chocolate%2520muffins%2520eggless.jpg": "7143ae13d8736eb1b69d0fea5f5a72dd",
"assets/assets/product_pics/Sweet%2520bakes/cupcakes.jpg": "e634c277e65ae33717f3689d2e376e53",
"assets/assets/product_pics/Sweet%2520bakes/old%2520fashioned%2520chocolate%2520cake.jpg": "c56a8887fb38fb5ff51cd3a2c9444aa7",
"assets/assets/product_pics/Sweet%2520bakes/mini%2520banana%2520muffins.jpg": "c3974433a473bd0bb4e1e2fe8ff961f3",
"assets/assets/product_pics/Sweet%2520bakes/Portugese%2520custard%2520tart.jpg": "2634940ca4e037b9365a38878da79b45",
"assets/assets/product_pics/Sweet%2520bakes/Carrot%2520cake.jpg": "fe081fd4c03473c98e2c3a78056db5d0",
"assets/assets/product_pics/Sweet%2520bakes/Chocolate%2520walnut%2520brownie.jpg": "a4c351307dbb199415f6192acd2f064f",
"assets/assets/product_pics/Sweet%2520bakes/vanilla%2520muffins.jpg": "3f1152db15d1fa95e9a72a8a95ab7c68",
"assets/assets/product_pics/Sweet%2520bakes/mini%2520chocolate%2520muffins.jpg": "33d0e42f0b01c8bca5de28ea66b50fa6",
"assets/assets/product_pics/Sweet%2520bakes/banana%2520bread.jpg": "dc62f7b8f8d49dd1d4fbc1ac3458c200",
"assets/assets/product_pics/Sweet%2520bakes/mini%2520vanilla%2520muffins.jpg": "26c3fc9a07f67f251bd68cbbc45e13f7",
"assets/assets/product_pics/Sweet%2520bakes/Pound%2520cake.JPG": "c219d066171dad0dddde219c166292f8",
"assets/assets/product_pics/Sweet%2520bakes/apple%2520pie.jpg": "4b0df576405ef78faf9b54edee379ebd",
"assets/assets/product_pics/Sweet%2520bakes/Victoria%2520cake.JPG": "0ba813015cec6939874a9ee05b638580",
"assets/assets/product_pics/Viennoiserie/Chocolate%2520caramel%2520babka.jpg": "19cb56617f4be7b96ff75940eb1333bf",
"assets/assets/product_pics/Viennoiserie/butter%2520croissants.jpg": "fec789b83bda407c5f2e32824230951e",
"assets/assets/product_pics/Viennoiserie/Apple%2520danish.jpg": "7a324b5968c3ecb21de99f9484e162b2",
"assets/assets/product_pics/Viennoiserie/cinna%2520bombs.jpg": "e3e6d4830f791a1c04b4f91e8db79668",
"assets/assets/product_pics/Viennoiserie/Blueberry%2520danish.jpg": "b0b2050db993bb4f39d7c357658859a2",
"assets/assets/product_pics/Viennoiserie/Cream%2520croissants.jpg": "3187c34a4dd808a7337e77f37dbf3bd0",
"assets/assets/product_pics/Viennoiserie/Custard%2520danish.JPG": "2e99e2f7af547c85cfcdf4a316e28fc1",
"assets/assets/product_pics/Viennoiserie/almond%2520croissants.jpg": "a8525fd30d7c347d2f217e691f7a49c2",
"assets/assets/product_pics/Viennoiserie/Pain%2520au%2520chocolat.jpg": "b6c31295178ea8f4e7112a5f273b346a",
"assets/assets/product_pics/Dips/hummus.jpg": "00f8554be03defbb3b16bae4458fa760",
"assets/assets/product_pics/Dips/Pesto.jpg": "2c9010360089e352cf44f7c0a697c612",
"assets/assets/product_pics/Savories/paneer%2520puffs.jpg": "691688ff5a13fb74e7991b0b9ee40ed2",
"assets/assets/product_pics/Savories/Masala%2520chicken%2520pie.jpg": "562f6433088ef1c2fdbc5a533709d71c",
"assets/assets/product_pics/Savories/egg%2520puff.jpg": "68c239911cbe0ab9cc9e573de4d14b42",
"assets/assets/product_pics/Savories/chicken%2520empanadas.jpg": "2ac64575f6236a0d0f4166f1a93b42e8",
"assets/assets/product_pics/Savories/chicken%2520puff.jpg": "875c6bf8603181f7683dd2f64cf89dcd",
"assets/assets/product_pics/Savories/chicken%2520cheese%2520tart.jpg": "06bdfc16b99e26dc65c5f4a3ae90878b",
"assets/assets/product_pics/Savories/Chicken%2520Danish%2520roll.jpg": "95a1ef7c62410db187f1bb5763a74ed6",
"assets/assets/product_pics/Savories/paneer%2520makhani%2520quiche.jpg": "eb913f350690a4c902d724e75df7499e",
"assets/assets/product_pics/Savories/Spinach%2520&%2520paneer%2520pie.jpg": "d9a001e1776bafb0d8d5e78ae735a3e4",
"assets/assets/product_pics/Savories/Tex%2520mex%2520empanadas.jpg": "12f9a8bc5531f3ae887aadcd6365903e",
"assets/assets/product_pics/Savories/chicken%2520quiche.jpg": "f92b37570ea76119ab692373930aa8b2",
"assets/assets/product_pics/Savories/spinach%2520corn%2520tart.jpg": "86773994774cc0cc64b0964604d72830",
"assets/assets/product_pics/Savories/spinach%2520mushroom%2520quiche.jpg": "8c4681fef5549211892685fbad38bf75",
"assets/assets/product_pics/Savories/Chicken%2520Puff%2520pastry%2520tart.jpg": "0a54e65c1dfd17b9dc74c5271c03837a",
"assets/assets/product_pics/Savories/chilli%2520cheese%2520puff.jpg": "2ed9bebe46006fd6d80b113693a6b98e",
"assets/assets/product_pics/Savories/Chicken%2520&%2520cheese%2520puff.jpg": "04aa5ad756969aab6c9150dee1fbc857",
"assets/assets/product_pics/Savories/Chicken%2520kebab%2520roll.jpg": "aaf635d3f3f44e67f2157086bfbf3804",
"assets/assets/product_pics/Salads%2520&%2520sandwiches/Roasted%2520beef%2520sandwich.jpg": "5cfca32da4c01d39daf266c0ebe2fd71",
"assets/assets/product_pics/Salads%2520&%2520sandwiches/Chicken%2520&%2520Mayo%2520Sandwich.jpg": "fc8fe44600387973a0b3dfc9a0189e10",
"assets/assets/product_pics/Salads%2520&%2520sandwiches/Tuna%2520Sandwich.jpg": "3311ccd30d9b868ad88ebebd6d6a4313",
"assets/assets/product_pics/Salads%2520&%2520sandwiches/Tuna%2520Salad.jpg": "35427ade66479639fb1e701365f79c2c",
"assets/assets/product_pics/Salads%2520&%2520sandwiches/3%2520cheese%2520melt.jpg": "57c13bd0c608ade74d8da7e6864569ff",
"assets/assets/product_pics/Salads%2520&%2520sandwiches/egg%2520sandwich%2520.jpg": "a5202d2de203ed7621e8f56a912be8c5",
"assets/assets/product_pics/Salads%2520&%2520sandwiches/Roasted%2520Mushroom%2520Makhni.jpg": "ebc16f065da44f07905e92ed7df8929b",
"assets/assets/product_pics/Salads%2520&%2520sandwiches/Egg%2520Salad.jpg": "ad2bdbd00c5c6e6b946a93918bd5c9c9",
"assets/assets/product_pics/Salads%2520&%2520sandwiches/Antipasti%2520pesto%2520Sandwich.jpg": "a960e1704dc1e9fb1cc0abeb65e73ef7",
"assets/assets/product_pics/Salads%2520&%2520sandwiches/Greek%2520salad.jpg": "66dc93090d0fe8afaf4ddee90c4848ac",
"assets/assets/product_pics/Salads%2520&%2520sandwiches/grilled%2520chicken%2520melt%25201.jpg": "6c24f6670fc81ccaf294e38cce3b3d13",
"assets/assets/product_pics/Salads%2520&%2520sandwiches/Ham%2520and%2520Cheese%2520Sandwich.JPG": "993990cfc47e72cb5e01f5f06988fea2",
"assets/assets/product_pics/Salads%2520&%2520sandwiches/Grilled%2520Chicken%25202.jpg": "679077e8405ed2e695b2babf94bb2dae",
"assets/assets/product_pics/Special%2520breads/focaccia.jpg": "9941b8b9db0952c866c1afe5a41ed414",
"assets/assets/product_pics/Special%2520breads/Custard%2520Bun.jpg": "a31c50cd7a29833acb69eb5ab551bc06",
"assets/assets/product_pics/Special%2520breads/coconut%2520bun.jpg": "11863499f04ae683a6d0dbbce78ed1bb",
"assets/assets/product_pics/Special%2520breads/hot%2520dog%2520buns.jpg": "838f0d0d6a6c8088dac39fea1ba24cc1",
"assets/assets/product_pics/Special%2520breads/whole%2520wheat%2520sour%2520dough.jpg": "235111ca7bcaad82b21022a8559717af",
"assets/assets/product_pics/Special%2520breads/Panini.jpg": "9880a5ab1412f2186ed4d33bb70c1574",
"assets/assets/product_pics/Special%2520breads/tomato%2520basil%2520bread.jpg": "3dc1976753c26d59eba96ab5f662a0b6",
"assets/assets/product_pics/Special%2520breads/ciabatta.jpg": "cd32f39dfe7a89c0e26f95fc2ecd5824",
"assets/assets/product_pics/Special%2520breads/baguette.jpg": "ba87d5d73e128d56be082af840678404",
"assets/assets/product_pics/Special%2520breads/garlic%2520roll.jpg": "bfad0f13cf01a77d64ed638495ad114a",
"assets/assets/product_pics/Special%2520breads/multigrain%2520sour%2520dough.jpg": "37681f80b21e00e503cb4e2a6e46f4fa",
"assets/assets/product_pics/Special%2520breads/sourdough%2520bread.jpg": "4cf15d50eb7271d7eda4e82b8bf0ebc6",
"assets/assets/product_pics/Special%2520breads/olive%2520bread.jpg": "7e9126f56e5ad78420c6f5ceb87f05d7",
"assets/assets/product_pics/Pizza%2520&%2520Flat%2520breads/pita%2520bread.jpg": "79e6bdf7cc62caa66ab2f85b7033049d",
"assets/assets/product_pics/Pizza%2520&%2520Flat%2520breads/Pizza%2520base%2520wheat%2520crust%252010%2520inch.jpg": "7c1fc528259effc0419088b6304a0f62",
"assets/assets/product_pics/Pizza%2520&%2520Flat%2520breads/chicken%2520pizza.jpg": "3cc3721113adbcba6de9c853cf2d71f4",
"assets/assets/product_pics/Pizza%2520&%2520Flat%2520breads/Pizza%2520base%2520thick%2520crust%25208%2520inch.jpg": "22bfc25f3a011d40931c80eab79df644",
"assets/assets/product_pics/Pizza%2520&%2520Flat%2520breads/Mushroom%2520&%2520feta%2520pizza.jpg": "57b3887bfef99c6cdd90a67985a8118d",
"assets/assets/product_pics/Pizza%2520&%2520Flat%2520breads/magarita%2520pizza.jpg": "d701d4e3bc75ac613c017bb355d615c7",
"assets/assets/product_pics/Bagels%2520&%2520buns/pav%2520bun.jpg": "8cd9cde38d2cf2f2f6921eb17006a2ea",
"assets/assets/product_pics/Bagels%2520&%2520buns/jalapeno%2520bagels.jpg": "f8798cb75fdbe9626097482134adcc16",
"assets/assets/product_pics/Bagels%2520&%2520buns/sesame%2520buns.jpg": "adec858e8e472a19e8cefe0a4598b292",
"assets/assets/product_pics/Bagels%2520&%2520buns/everything%2520bagel.jpg": "1a1b6e5203710fd90483720a6445edb7",
"assets/assets/product_pics/Bagels%2520&%2520buns/cream%2520cheese.jpg": "d72971f402c84b8e6c4c0cba139130e4",
"assets/assets/product_pics/Bagels%2520&%2520buns/burger%2520buns.jpg": "1cc68bbeff2d729ab7fa71a8989af27d",
"assets/assets/product_pics/Bagels%2520&%2520buns/plain%2520bagel.jpg": "4c36ce37dde300278660c1ba5162e7a6",
"assets/assets/product_pics/Bagels%2520&%2520buns/Mumbai%2520pav%2520bun.jpg": "c0b74be281f6931f767109681900abce",
"assets/assets/fonts/Lato-Thin.ttf": "9a77fbaa85fa42b73e3b96399daf49c5",
"assets/assets/fonts/Lato-Bold.ttf": "85d339d916479f729938d2911b85bf1f",
"assets/assets/fonts/PlayfairDisplay-Bold.ttf": "d27b6b12d96d9cf68f493c78113ce390",
"assets/assets/fonts/Poppins-Light.ttf": "f6ea751e936ade6edcd03a26b8153b4a",
"assets/assets/fonts/PlayfairDisplay-Medium.ttf": "c697dace361898b149c70043f722d6eb",
"assets/assets/fonts/Lato-Regular.ttf": "2d36b1a925432bae7f3c53a340868c6e",
"assets/assets/fonts/PlayfairDisplay-Regular.ttf": "b3721ba3bde34e5b38b0e1523cccfd7f",
"assets/assets/fonts/Poppins-Regular.ttf": "8b6af8e5e8324edfd77af8b3b35d7f9c",
"assets/assets/fonts/Lato-Light.ttf": "2fe27d9d10cdfccb1baef28a45d5ba90",
"assets/assets/fonts/Poppins-Bold.ttf": "a3e0b5f427803a187c1b62c5919196aa",
"assets/assets/fonts/Poppins-Thin.ttf": "25cd0f688f815bc4f6ac2b71eb6278ba",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
