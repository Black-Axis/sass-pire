# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [2.3.0](https://github.com/Black-Axis/sass-pire/compare/v1.10.6...v2.3.0) (2024-10-21)


### Features

* :sparkles: add `u-jc-*` classes for `justify-content` CSS property ([699dcd1](https://github.com/Black-Axis/sass-pire/commit/699dcd1c9511bc952e35f0699cd55d8845b92c04))
* :technologist: add `build` dir & `nodemon` to generate some `SCSS` dynamically ([5741f86](https://github.com/Black-Axis/sass-pire/commit/5741f8614913d5342923933fde00376be47e0582))
* **abstract:** :sparkles: add `noscript` styles in `reset` mixin & connect with var in `config` file ([85784f9](https://github.com/Black-Axis/sass-pire/commit/85784f977954e56ba1fb2076992bf9a14bfaf3e2))
* **base:** :recycle: rename all `CSS custom properties` with the prepend `--sp-*` ([5b563cb](https://github.com/Black-Axis/sass-pire/commit/5b563cb261c1d5afc910aaa758ba87fbba9907fc))
* **base:** :sparkles: add `supports` rule to check `:where` is supported | not for `hidden` attr ([263a3ce](https://github.com/Black-Axis/sass-pire/commit/263a3ced2769a988b5f636508f859c7463d4b8e9))
* **base:** :sparkles: add fallback for `HTML5 Elements` as block level ([f7817f1](https://github.com/Black-Axis/sass-pire/commit/f7817f1a05e01d1eb64af3609d04a4f2eb98d3c9))
* **config-file:** :sparkles: update `sass:watch` & `sass:comp` command to use absolute paths ([3609442](https://github.com/Black-Axis/sass-pire/commit/360944219ead227f6a44f60508b7a7c1876ea0d3))
* **config-file:** :wrench: set `yarn` as main `package manager` to the project ([6832481](https://github.com/Black-Axis/sass-pire/commit/6832481278e3e4c5c2753312e37a84b1f4eb7e2e))
* **functions-global:** :sparkles: add `clamped` function with its details & doc ([87b9e23](https://github.com/Black-Axis/sass-pire/commit/87b9e23557fba9bc87653452a36e6e7c93754b45))
* **media-queries-screens:** :sparkles: add `container-query` for container media queries as `mixin` ([6fce382](https://github.com/Black-Axis/sass-pire/commit/6fce382381f7a0f89b9ebfca05c32efbf18c4334))
* **mixins-children:** :sparkles: add `after-first` mixin to select HTML elements from passed parameter ([42e3649](https://github.com/Black-Axis/sass-pire/commit/42e3649d70ae5afb8137e097475c4053b9abd3cb))
* **mixins-children:** :sparkles: add `all-but` mixin to select all children but passed parameter ([cace054](https://github.com/Black-Axis/sass-pire/commit/cace054dcf655153035d4fe005133d39995d7097))
* **mixins-children:** :sparkles: add `between` mixin to select specific elements between ranges ([e041233](https://github.com/Black-Axis/sass-pire/commit/e041233bb69f45440fbe0ba3cc01ff85d5da9094))
* **mixins-children:** :sparkles: add `even-between` mixin to select even children between a range ([101643e](https://github.com/Black-Axis/sass-pire/commit/101643e40d4c897e36ea5c51405ef9be202f4f06))
* **mixins-children:** :sparkles: add `first` mixin to select all first children of an HTML element ([c5de5b1](https://github.com/Black-Axis/sass-pire/commit/c5de5b1c5bdbfd34aed9987d6b39d731d081c7b8))
* **mixins-children:** :sparkles: add `from-end` mixin to select a child from the end ([e02ed37](https://github.com/Black-Axis/sass-pire/commit/e02ed37ed44aecd40148bcffa2ed58ecb9e431c9))
* **mixins-children:** :sparkles: add `last` mixin to select all last children of HTML element ([40be728](https://github.com/Black-Axis/sass-pire/commit/40be7283d7253563759123bae456c41c9fb38d38))
* **mixins-children:** :sparkles: add `odd-between` mixin to select odd children from a range ([1dbbc3c](https://github.com/Black-Axis/sass-pire/commit/1dbbc3c8502a0dfbd1efdd863e9f0628630566b9))
* **mixins-general:** :sparkles: add `:focus-visible` state as global & def values to `outline` & `outline-offset` ([dd6f12c](https://github.com/Black-Axis/sass-pire/commit/dd6f12cbdc164b489c499db370b33b46a400951f))
* **mixins-general:** :sparkles: add `:target` & `:focus` states as general reset with its init values ([7271c31](https://github.com/Black-Axis/sass-pire/commit/7271c31d323c391d552a411657ae00aef7fb912f))
* **mixins-general:** :sparkles: add `container inline-size` for elements in body tag ([a124493](https://github.com/Black-Axis/sass-pire/commit/a124493082d26f551865c97f83b90befd9130f78))
* **mixins-general:** :sparkles: add `font-style` as `italic` for `figcaption` tag ([e89d9bc](https://github.com/Black-Axis/sass-pire/commit/e89d9bc9ac290324840877044f308e2f76640a59))
* **mixins-general:** :sparkles: add `hidden` prop as display none in `reset` mixin ([4555d3a](https://github.com/Black-Axis/sass-pire/commit/4555d3afb496def2fcabc13d6735742bfbf05f10))
* **mixins-general:** :sparkles: add `logical-props` to reset file ([fbf8b5f](https://github.com/Black-Axis/sass-pire/commit/fbf8b5f5d72969e78dcab9e939fcc349959f7f24))
* **mixins-general:** :sparkles: add `not-sr-only` class in `reset`mixin ([2430617](https://github.com/Black-Axis/sass-pire/commit/24306175c1d1ee97781e3e368081b19d5a25d8a2))
* **mixins-general:** :sparkles: add `object-fit` mixin with its vendor prefixes ([1db6605](https://github.com/Black-Axis/sass-pire/commit/1db66058d9a62ce210dc3ae5efccd7ad08885a03))
* **mixins-general:** :sparkles: add `overscroll` mixin with its `vendor prefixes` ([03fa43f](https://github.com/Black-Axis/sass-pire/commit/03fa43f6226878c12d30e3cc3c7fc86b73e7c2d2))
* **mixins-general:** :sparkles: add `shape-margin` mixin with its content & validations ([63a4af9](https://github.com/Black-Axis/sass-pire/commit/63a4af99563bdb2113ca287c3f7ec157cc59e45f))
* **mixins-general:** :sparkles: add `text-decoration-line` & `text-decoration-thickness` props ([fede195](https://github.com/Black-Axis/sass-pire/commit/fede195a8719e6983feba70e18ae807e9502ed7e))
* **mixins-general:** :sparkles: add `text-underline-offset` property with init value `0.15em` ([9c34c1d](https://github.com/Black-Axis/sass-pire/commit/9c34c1d0a78f8c052badca2d31b402e5e040759e))
* **mixins-general:** :sparkles: add `top` mixin with its content ([5acb7b2](https://github.com/Black-Axis/sass-pire/commit/5acb7b2c3dccff04e70a9976eda813b92c8dce21))
* **mixins-general:** :sparkles: add reset styles for `blockquote` & `q` element tags ([dc02a45](https://github.com/Black-Axis/sass-pire/commit/dc02a45bdfd19fb04dd08dff5c8cef6fa7556aab))
* **mixins-general:** :sparkles: add reset styles for `menu` tag element ([b62092a](https://github.com/Black-Axis/sass-pire/commit/b62092a2b7cedba8301c33316252034a3d7dce3a))
* **mixins-general:** :sparkles: add reset styles for `sub` & `sup` HTML elements ([9207835](https://github.com/Black-Axis/sass-pire/commit/920783562830de8c4a4deb80c3f215f501f0d86d))
* **mixins-general:** :sparkles: add reset styles for `table` tag element in `reset` mixin ([5c1d0ed](https://github.com/Black-Axis/sass-pire/commit/5c1d0ed540c3ce9cb89d8ce7cdeaff6a0b7f0c09))
* **mixins-general:** :sparkles: add styles for `dialog` HTML element in `reset` mixin ([a425bda](https://github.com/Black-Axis/sass-pire/commit/a425bdaf65ab1353ca8d9ed85ab75c87fb8b7883))
* **mixins-general:** :wheelchair: add `sr-only` class to improve accessibility in `reset` mixin ([615dd6a](https://github.com/Black-Axis/sass-pire/commit/615dd6ada81b64fe56b5561f4e9f8044c10fc487))
* **mixins-logical-props:** :sparkles: add `bottom` mixin with its content ([38a5c1d](https://github.com/Black-Axis/sass-pire/commit/38a5c1dc29a545b560d01ce18d78d796c9030857))
* **mixins-logical-props:** :sparkles: add `padding-inline-end` logical prop mixin ([3e6772a](https://github.com/Black-Axis/sass-pire/commit/3e6772adb3c8cee8b10160308b0cd69089e0abdc))
* **mixins-logical-props:** :sparkles: add `padding-inline-start` logical prop in `pis` mixin ([69a0863](https://github.com/Black-Axis/sass-pire/commit/69a08635ce2042f66d7ab9a0b7a73d16711a4fd0))
* **mixins-logical-props:** :sparkles: add `right` mixin with its content ([ffe1f38](https://github.com/Black-Axis/sass-pire/commit/ffe1f38cc2507cb29ebefbeeedfcf53421c3800c))
* **mixins-typo:** :sparkles: add `line-text-trunc` mixin with its validations & content ([fabe46b](https://github.com/Black-Axis/sass-pire/commit/fabe46b40094dd977ce95a3eb3e64d13eac66637))
* **mixins-typo:** :sparkles: add `text-align-last` mixin with its content ([d2edd07](https://github.com/Black-Axis/sass-pire/commit/d2edd0749186ca89721b01f9f07d28e99b29cc63))
* **mixins-typo:** :sparkles: add `text-overflow` mixin with its content ([0680359](https://github.com/Black-Axis/sass-pire/commit/06803598a1eb20540239f39e5fa8beb41d7afa22))
* **new-version:** :sparkles: add `reset` file as a `mixin` to be used easily in `layer` CSS or not ([63f6839](https://github.com/Black-Axis/sass-pire/commit/63f6839532bd76d2ee5d752e3cac844b2bae3817))
* **utils:** :sparkles: add `aspect-ratio` CSS property for using it as utility class ([8f76607](https://github.com/Black-Axis/sass-pire/commit/8f766074a1a13d6311c61128c3b0671ddc2da040))
* **utils:** :sparkles: add `background-attachment` as utility classes ([b9f7fc3](https://github.com/Black-Axis/sass-pire/commit/b9f7fc3c148b6fd9287429ac4e20226db8eb495a))
* **utils:** :sparkles: add `background-clip` utility classes ([b976d36](https://github.com/Black-Axis/sass-pire/commit/b976d369bcd15d5a8f41b4af2896e8c1be7cc314))
* **utils:** :sparkles: add `background-origin` utility classes ([bd6609e](https://github.com/Black-Axis/sass-pire/commit/bd6609ee7a55293e14bba65c051eaf33d7c0cad0))
* **utils:** :sparkles: add `box-sizing` for `utilities` classes usage ([ffab4d5](https://github.com/Black-Axis/sass-pire/commit/ffab4d523a4f2804f0c6cae9d0a1b6efa96509c2))
* **utils:** :sparkles: add `clear` as utilities classes ([684b205](https://github.com/Black-Axis/sass-pire/commit/684b205d0f39cba787d9238f2d2724c44f78dc6c))
* **utils:** :sparkles: add `contents` value for `display` CSS prop as utility class ([459aa05](https://github.com/Black-Axis/sass-pire/commit/459aa05a053e2dc1833414104461526ce3d577d4))
* **utils:** :sparkles: add `display none` for the display utils classes ([f883d31](https://github.com/Black-Axis/sass-pire/commit/f883d31448de0ab274c4dc5ee5edd8ca3d4e94dd))
* **utils:** :sparkles: add `display` utilities classes ([99363af](https://github.com/Black-Axis/sass-pire/commit/99363afebacdab923e1255904ce5a4d6d50a1a13))
* **utils:** :sparkles: add `flex-direction` as utility classes ([5829588](https://github.com/Black-Axis/sass-pire/commit/58295889bdd30798345b83406b2b7ad418fe2444))
* **utils:** :sparkles: add `flex-wrap` as utility classes ([39170da](https://github.com/Black-Axis/sass-pire/commit/39170da41fc6e6bf636b496318c8f4c92f9c410a))
* **utils:** :sparkles: add `flex` class as utility class ([925ea5e](https://github.com/Black-Axis/sass-pire/commit/925ea5eacbf6e95d15c6472e0d61c096727ff4aa))
* **utils:** :sparkles: add `float` as utilities classes ([a87d8b5](https://github.com/Black-Axis/sass-pire/commit/a87d8b53c92337d55cdd02dd456885722b199f96))
* **utils:** :sparkles: add `object-fit` utilities classes ([bd819e3](https://github.com/Black-Axis/sass-pire/commit/bd819e3bf9580167cbff13f58d5c184e50570e9b))
* **utils:** :sparkles: add `overflow` as utilities classes to be used easily ([13291bc](https://github.com/Black-Axis/sass-pire/commit/13291bc31940e4188d79b584a36f9ec8c67c6bdf))
* **utils:** :sparkles: add `overscroll` utility classes to be used easily ([d1ceeba](https://github.com/Black-Axis/sass-pire/commit/d1ceebabaa74c02b63866071145fa15b4d91a187))
* **utils:** :sparkles: add `position` as utilites classes ([74f2560](https://github.com/Black-Axis/sass-pire/commit/74f2560b6639d2460268b9535f4c9034a0379f31))
* **utils:** :sparkles: add `u-ai-*` utils classes for `align-items` CSS property ([a286643](https://github.com/Black-Axis/sass-pire/commit/a28664332ef6b39ac3939dc88c22833dca0caf26))
* **utils:** :sparkles: add `white-space` utility classes for `white-space` CSS prop ([e45460d](https://github.com/Black-Axis/sass-pire/commit/e45460d1227276b683ae4a1769ec44a180971d98))
* **utils:** :sparkles: add new values for `min-width` CSS props as `utilities` ([c3a274f](https://github.com/Black-Axis/sass-pire/commit/c3a274f63eb1f3de1d95f30f631c3a53434c9816))
* **utils:** :sparkles: add utilities classes for `height` CSS property ([4ba803d](https://github.com/Black-Axis/sass-pire/commit/4ba803d927c30d31e47708f465086ad38db661cc))
* **utils:** :sparkles: add utilities classes for `max-height` CSS property ([1d71b5f](https://github.com/Black-Axis/sass-pire/commit/1d71b5f5f408add6a1802623d497477ead6ca0b3))
* **utils:** :sparkles: add utilities classes for `max-width` CSS property ([b9670ea](https://github.com/Black-Axis/sass-pire/commit/b9670ea06fe58543d2492cfb8b0c5862d2888936))
* **utils:** :sparkles: add utilities classes for `min-height` CSS property ([2141338](https://github.com/Black-Axis/sass-pire/commit/21413385cd89794113af1bfc6b2204545ab89adc))
* **utils:** :sparkles: add utilities classes for `min-width` CSS property ([76788c2](https://github.com/Black-Axis/sass-pire/commit/76788c21390d616125286c5f056890f5c69ae0d7))
* **utils:** :sparkles: add utilities classes for `size` - width & height have same value ([6246365](https://github.com/Black-Axis/sass-pire/commit/62463653d89224bdfd4de55750190cc806c9f82a))
* **utils:** :sparkles: add utilities classes for `text-align` CSS property ([e1f174c](https://github.com/Black-Axis/sass-pire/commit/e1f174c69dc3427b473d8dff074dce01497fdbd4))
* **utils:** :sparkles: add utilities classes for `text-decoration` CSS property ([d9d0683](https://github.com/Black-Axis/sass-pire/commit/d9d0683431ed18fd4452d72d96d19f1bc044e687))
* **utils:** :sparkles: add utilities classes for `text-transform` CSS property ([0715eec](https://github.com/Black-Axis/sass-pire/commit/0715eec1e7e09a56160d9aa717b04f0826098944))
* **utils:** :sparkles: add utilities classes for `width` CSS property ([d2a5fc1](https://github.com/Black-Axis/sass-pire/commit/d2a5fc156284d793737ea21c6e58d4fbab23b573))
* **utils:** :sparkles: add utilities classes for visibility CSS property ([1953eb0](https://github.com/Black-Axis/sass-pire/commit/1953eb0ea6eb45b094e398dda29bfa80b51219ce))
* **utils:** :sparkles: add utility class for `text-wrap` CSS property ([cbcaefd](https://github.com/Black-Axis/sass-pire/commit/cbcaefdae0c021b9e553175e7ec680dca38207a1))
* **utils:** :sparkles: add utility classes for `text-overflow` CSS property ([ad525f3](https://github.com/Black-Axis/sass-pire/commit/ad525f3ededb99b480d3aae520011fb51f292230))
* **utils:** :sparkles: add utility classes for `vertical-align` CSS property ([15c37b9](https://github.com/Black-Axis/sass-pire/commit/15c37b94ef85c3434a0388d2d9d0f2310f6c60c1))


### Bug Fixes

* :ambulance: remove unneeded `math` module from `unitless` function ([793fd21](https://github.com/Black-Axis/sass-pire/commit/793fd2193db3a7719bd2c88c4c3ff807f61fa1c5))
* :rotating_light: fix linter errors in `.eslintrc.js` file ([e214781](https://github.com/Black-Axis/sass-pire/commit/e2147819d1823cc205b7b845e237b33d4bdafbde))
* **config-file:** :ambulance: fix version of `yarn` in `package.json` file ([1e55a68](https://github.com/Black-Axis/sass-pire/commit/1e55a68a6713509551ea5464359b5be2eb8b565f))
* **config-file:** :rotating_light: fix `stylelinter` content file & update with new props ([6319dfe](https://github.com/Black-Axis/sass-pire/commit/6319dfe3f37b66cbdfa9e70b2fdf706e8f5c70cb))
* **mixins-general:** :ambulance: fix `scroll-behavior` in reduce motions prefers mode to be `auto` ([e103f80](https://github.com/Black-Axis/sass-pire/commit/e103f80321e4ef4bf9ee315b95124cbd9d0de7c6))
* **mixins-general:** :ambulance: fix place of `main` tag in using of `container-type` prop ([603d973](https://github.com/Black-Axis/sass-pire/commit/603d973ae3c793f92e40772663cf14fe55d9c422))
* **mixins-general:** :ambulance: remove include of `reset` mixin statement ([80335e1](https://github.com/Black-Axis/sass-pire/commit/80335e121f5a78dfff6afd1c0124720acb27e589))
* **mixins-general:** :wheelchair: fix accessibility issue with `scroll-behavior` prop in `reset` mixin ([134ed51](https://github.com/Black-Axis/sass-pire/commit/134ed514738de60b6a7baaa49d0c4349cfb9a4c4))
* **mixins-logical-props:** :ambulance: fix bugs in logical props for `margin-end` mixin ([46e4bc1](https://github.com/Black-Axis/sass-pire/commit/46e4bc17a276795538b89c60287bd8087a421965))
* **mixins-logical-props:** :ambulance: fix logical props for `margin-block-end` property ([1132f6c](https://github.com/Black-Axis/sass-pire/commit/1132f6cf146f91cc5017d9094a4ff091de65f171))
* **mixins-logical-props:** :ambulance: fix logical props for `margin-block-start` prop ([06c46bc](https://github.com/Black-Axis/sass-pire/commit/06c46bc2f02a53d562cae96fab6273da665db339))
* **mixins-logical-props:** :ambulance: fix logical props for `padding-block-end` prop ([7ec3706](https://github.com/Black-Axis/sass-pire/commit/7ec370634282898d5454e537f8e5396d13cc5ca6))
* **mixins-logical-props:** :ambulance: fix logical props for `padding-block-start` prop ([33e5328](https://github.com/Black-Axis/sass-pire/commit/33e532826fba77af69f70a82e808e029ab6ae0f5))
* **mixins-logical-props:** :ambulance: fix logical props in `margin-inline-start` prop ([3508eea](https://github.com/Black-Axis/sass-pire/commit/3508eea632dc660d09d4ad97fc43cf6ac4d0640c))
* **mixins-logical-props:** :bug: update error messages in `mie` mixin ([40b9cc7](https://github.com/Black-Axis/sass-pire/commit/40b9cc7f631d7c89389ea0c9ac252086bc573bf0))
* **utils:** :ambulance: fix class name in example ([f602460](https://github.com/Black-Axis/sass-pire/commit/f60246040ffdf0ba14964b68f191d12c75e89d3f))
* **utils:** :ambulance: fix class name in example ([3ee90cf](https://github.com/Black-Axis/sass-pire/commit/3ee90cf0e89b183434230baad1979849fbcd1d2e))

#### 1.13.0 (2024-09-21)

##### Chores

* **docs:**  :memo: update `CHANGELOG.md` file ([eed1e1f4](https://github.com/Black-Axis/sass-pire/commit/eed1e1f4379a8b1692902afb92956c34faee5a6e))

#### 1.11.6 (2024-09-21)

#### 1.10.6 (2024-06-18)

##### Documentation Changes

* **mixins-general:**
  *  :memo: add `docs` for tags & elements which were done in resets ([52b891b1](https://github.com/Black-Axis/sass-pire/commit/52b891b1e1a897621fe65671e519d3670b92bf2a))
  *  :memo: update position of var in `dependencies` ([b8ba7184](https://github.com/Black-Axis/sass-pire/commit/b8ba71845ea1e3dfd22c12154070199312930050))
* **functions-global:**  :memo: fix mistakes in docs of `function/global/_index.scss` file ([237085f2](https://github.com/Black-Axis/sass-pire/commit/237085f2e1edff90a7ebe09b2dfe6c2f7f4f13bc))
* **mixins-transform:**  :memo: update position of var in `dependencies` ([a91f82c8](https://github.com/Black-Axis/sass-pire/commit/a91f82c8b047061a2bdfa144d0bf837c5f3da9bc))
* **functions-type-checks:**
  *  :memo: update position of var in `dependencies` ([d4d3790c](https://github.com/Black-Axis/sass-pire/commit/d4d3790cde8cfc846edc4bd44c42366cb3eaa8d5))
  *  :memo: update position of var in `dependencies` ([f5d68795](https://github.com/Black-Axis/sass-pire/commit/f5d6879525b4eced6a02770650f5052489dc6dde))
* **functions-converters:**  :memo: update position of var in `dependencies` ([7b3354cc](https://github.com/Black-Axis/sass-pire/commit/7b3354cc705361d4af8e40fd47a6529c64d8d674))
* **development-utils:**  :memo: add `description` doc for `dev-utils_index.scss` ([2cc2088d](https://github.com/Black-Axis/sass-pire/commit/2cc2088d0c32b96daeb6ec8f176f026d41ed98b3))
* **base:**  :memo: update `description` doc for `base/_index.scss` ([6485fd0d](https://github.com/Black-Axis/sass-pire/commit/6485fd0d41f4b1a07fb4da24d65bb9acf2ce95a2))
* **abstract:**
  *  :memo: add `description` doc for `_settings.scss` file ([789e3d59](https://github.com/Black-Axis/sass-pire/commit/789e3d5984d4f789939864b0f5bfd705cd93521e))
  *  :memo: add `description` doc for `abstract/_index.scss` file ([2816e41c](https://github.com/Black-Axis/sass-pire/commit/2816e41c05a9c7320a64edcd0bb13c101912248e))
  *  :memo: add `description` for `_global-variables.scss` file ([909660d3](https://github.com/Black-Axis/sass-pire/commit/909660d3331f4dd86a1ff6c9f5e487351dc26755))
  *  :memo: add `description` in doc for `_config.scss` file ([1ca1ce38](https://github.com/Black-Axis/sass-pire/commit/1ca1ce382d78790f996f87db845275ea69248d9d))

##### New Features

* **mixins-general:**
  *  :sparkles: add `hidden` prop as display none in `reset` mixin ([4555d3af](https://github.com/Black-Axis/sass-pire/commit/4555d3afb496def2fcabc13d6735742bfbf05f10))
  *  :sparkles: add reset styles for `table` tag element in `reset` mixin ([5c1d0ed5](https://github.com/Black-Axis/sass-pire/commit/5c1d0ed540c3ce9cb89d8ce7cdeaff6a0b7f0c09))
  *  :sparkles: add reset styles for `menu` tag element ([b62092a2](https://github.com/Black-Axis/sass-pire/commit/b62092a2b7cedba8301c33316252034a3d7dce3a))
  *  :sparkles: add reset styles for `blockquote` & `q` element tags ([dc02a45b](https://github.com/Black-Axis/sass-pire/commit/dc02a45bdfd19fb04dd08dff5c8cef6fa7556aab))
  *  :sparkles: add `logical-props` to reset file ([fbf8b5f5](https://github.com/Black-Axis/sass-pire/commit/fbf8b5f5d72969e78dcab9e939fcc349959f7f24))
* **abstract:**  :sparkles: add `noscript` styles in `reset` mixin & connect with var in `config` file ([85784f97](https://github.com/Black-Axis/sass-pire/commit/85784f977954e56ba1fb2076992bf9a14bfaf3e2))
* **functions-global:**  :sparkles: add `clamped` function with its details & doc ([87b9e235](https://github.com/Black-Axis/sass-pire/commit/87b9e23557fba9bc87653452a36e6e7c93754b45))

##### Other Changes

* //github.com/Black-Axis/sass-pire into dev ([51775d2d](https://github.com/Black-Axis/sass-pire/commit/51775d2d85a8d9455249012223fe7094378f9136))
* //github.com/Black-Axis/sass-pire into dev ([7786f9b7](https://github.com/Black-Axis/sass-pire/commit/7786f9b798e17bcc1db4604f92c63bf9e7517017))
* //github.com/Black-Axis/sass-pire into dev ([8f3b18ec](https://github.com/Black-Axis/sass-pire/commit/8f3b18ecc03dfbf7ea85dd0444bd0ad28c1c87f6))
*  fix linter errors in `.eslintrc.js` file ([e2147819](https://github.com/Black-Axis/sass-pire/commit/e2147819d1823cc205b7b845e237b33d4bdafbde))
* //github.com/Black-Axis/sass-pire into dev ([5608bbf1](https://github.com/Black-Axis/sass-pire/commit/5608bbf11965aa4983247dc9a902514ee367223b))
* //github.com/Black-Axis/sass-pire into dev ([a4d70607](https://github.com/Black-Axis/sass-pire/commit/a4d706070bab6f6b1162ca9e2b28e8887c41cd1e))

##### Refactors

* **mixins-general:**
  *  :recycle: update place of `html` & `body` tags at top of `reset` mixin ([e83dffb6](https://github.com/Black-Axis/sass-pire/commit/e83dffb6a3be431f06eaa4b79329ce4a1db60a67))
  *  :recycle: add `!default` flag to maps in `reset` mixin ([e6e993fd](https://github.com/Black-Axis/sass-pire/commit/e6e993fd3706102f950489bc5f320b6c823562b1))
  *  :recycle: update values in `reset` mixin in anchor element ([87dafd5b](https://github.com/Black-Axis/sass-pire/commit/87dafd5b7637814adb7c092d52952c5e51bfdfd3))
  *  :recycle: add `vendor-prefixes` to `transform` in `reset` mixin ([3c0737ae](https://github.com/Black-Axis/sass-pire/commit/3c0737ae316532f21c9cf1668631a381fbe38da2))
  *  :recycle: add `vendor-prefixes` to `hyphens` prop in `reset` mixin ([658354e7](https://github.com/Black-Axis/sass-pire/commit/658354e741dcdf1f8aae903f59d8b4b2dc379991))
  *  :recycle: add `vendor-prefixes` to `box-sizing` prop in `reset` mixin ([49b5f586](https://github.com/Black-Axis/sass-pire/commit/49b5f586569f224613f8e724e92005eed0fa636b))
  *  :recycle: add `banner` mixin in `mixins/general` directory ([0e508865](https://github.com/Black-Axis/sass-pire/commit/0e5088653a39dfeb17d26e7450226baba626ec33))

#### 1.9.6 (2024-05-25)

##### Chores

* **docs:**  :memo: update `CHANGELOG.md` file ([8cc07295](https://github.com/Black-Axis/sass-pire/commit/8cc07295300f1f8173df61d8564932ff91bd2d8c))

##### Documentation Changes

* **docs:**
  *  :memo: add docs for `CHANGELOG.md` file ([b0e5c791](https://github.com/Black-Axis/sass-pire/commit/b0e5c791ecde7bc841d09cc8867f1c8b892cf826))
  *  :memo: update docs for `mt` & `mb` mixins ([5b0c7948](https://github.com/Black-Axis/sass-pire/commit/5b0c7948552a89f92c8cedb3c67837bd6962db7f))

##### New Features

* **mixins-logical-props:**
  *  :sparkles: add `margin-left` mixin ([2e05cce0](https://github.com/Black-Axis/sass-pire/commit/2e05cce052c7951a8391f9a3e86d0c63ac5f25c8))
  *  :sparkles: add `margin-right` mixin with its logical-props ([464d4986](https://github.com/Black-Axis/sass-pire/commit/464d49866fcc6c8672fe9ef5881b5518783d4559))
  *  :sparkles: add `margin-bottom` for logical properties ([feaf85ac](https://github.com/Black-Axis/sass-pire/commit/feaf85ac0349883b71e032923305fd5693f7d0b2))
  *  :sparkles: add `mt` mixin for generate logical properties ([674af1b1](https://github.com/Black-Axis/sass-pire/commit/674af1b1ce2dcb925016d32d0d07b65e5a3f4088))

##### Other Changes

*  update all units to be one time in `global-variables` file ([6c5b32db](https://github.com/Black-Axis/sass-pire/commit/6c5b32db3d3c2a75069f43ca54d027358fe83366))
*  update `CHANGELOG.md` file with latest commit ([7b3aef17](https://github.com/Black-Axis/sass-pire/commit/7b3aef17bb49eb098d6c10b860e9751570907eee))
*  add `html` tag for `scroll-behavior` property in `reset` file ([46460e17](https://github.com/Black-Axis/sass-pire/commit/46460e171d8925cd0f52ff66cc3b6dfe5a0b156a))

##### Refactors

* **abstract:**  :fire: remove unused variables ([ec001961](https://github.com/Black-Axis/sass-pire/commit/ec00196153eaa979af9b648e7cc7f921b9ae1245))

#### 1.9.6 (2024-05-25)

##### Chores

* **docs:**  :memo: update `CHANGELOG.md` file ([8cc07295](https://github.com/Black-Axis/sass-pire/commit/8cc07295300f1f8173df61d8564932ff91bd2d8c))

##### Documentation Changes

* **docs:**  :memo: update docs for `mt` & `mb` mixins ([5b0c7948](https://github.com/Black-Axis/sass-pire/commit/5b0c7948552a89f92c8cedb3c67837bd6962db7f))

##### New Features

* **mixins-logical-props:**
  *  :sparkles: add `margin-left` mixin ([2e05cce0](https://github.com/Black-Axis/sass-pire/commit/2e05cce052c7951a8391f9a3e86d0c63ac5f25c8))
  *  :sparkles: add `margin-right` mixin with its logical-props ([464d4986](https://github.com/Black-Axis/sass-pire/commit/464d49866fcc6c8672fe9ef5881b5518783d4559))
  *  :sparkles: add `margin-bottom` for logical properties ([feaf85ac](https://github.com/Black-Axis/sass-pire/commit/feaf85ac0349883b71e032923305fd5693f7d0b2))
  *  :sparkles: add `mt` mixin for generate logical properties ([674af1b1](https://github.com/Black-Axis/sass-pire/commit/674af1b1ce2dcb925016d32d0d07b65e5a3f4088))

##### Other Changes

*  update `CHANGELOG.md` file with latest commit ([7b3aef17](https://github.com/Black-Axis/sass-pire/commit/7b3aef17bb49eb098d6c10b860e9751570907eee))
*  add `html` tag for `scroll-behavior` property in `reset` file ([46460e17](https://github.com/Black-Axis/sass-pire/commit/46460e171d8925cd0f52ff66cc3b6dfe5a0b156a))

#### 1.9.6 (2024-04-20)

##### Chores

* **docs:**  :memo: update `CHANGELOG.md` file ([8cc07295](https://github.com/Black-Axis/sass-pire/commit/8cc07295300f1f8173df61d8564932ff91bd2d8c))

##### Other Changes

*  add `html` tag for `scroll-behavior` property in `reset` file ([46460e17](https://github.com/Black-Axis/sass-pire/commit/46460e171d8925cd0f52ff66cc3b6dfe5a0b156a))

#### 1.9.6 (2024-04-14)

#### 1.8.6 (2024-04-14)

##### Chores

* **config-file:**  :hammer: add `tags:gitlab` & update `tags` to `tags:github` script ([25fc199b](https://github.com/Black-Axis/sass-pire/commit/25fc199ba2b1d504c368bd7579c20f001105e5c9))
* **docs:**  :memo: add `CONTRIBUTING.md` file with its content ([f6a5bf17](https://github.com/Black-Axis/sass-pire/commit/f6a5bf1718c319eeaa5cd50b96e67211eafc6677))
* **new-version:**  :bookmark: update version number for library to `1.8.6` ([378d41b2](https://github.com/Black-Axis/sass-pire/commit/378d41b20cc64fa2881241464e0006e5a553fc87))

##### Documentation Changes

* **docs:**  :memo: update `CHANGELOG.md` file with latest commit ([47207596](https://github.com/Black-Axis/sass-pire/commit/47207596eee9aa654e99cd9df53bd00c2757692f))

#### 1.8.6 (2024-04-14)

##### Chores

* **new-version:**  :bookmark: update version number for library to `1.8.6` ([378d41b2](https://github.com/Black-Axis/sass-pire/commit/378d41b20cc64fa2881241464e0006e5a553fc87))

#### 1.7.6 (2024-04-14)

##### Chores

* **docs:**  :memo: update docs in all files for `repository` flag to `Black-Axis` link ([822d124b](https://github.com/Black-Axis/sass-pire/commit/822d124b86756ab83217a39c8c5aef1f841e35ca))
* **new-version:**  :bookmark: update version number in `package.json` file to `1.7.6` ([55b633b4](https://github.com/Black-Axis/sass-pire/commit/55b633b4d4dcc5a79c857a5f09991e2967fa7fcf))

##### Other Changes

*  update `CHANGELOG.md` file with latest commit ([1d229c3c](https://github.com/Black-Axis/sass-pire/commit/1d229c3c381b2b9945ef70c6022aab3664467f89))
*  update version number in `_banner.scss` file to latest one ([376611db](https://github.com/Black-Axis/sass-pire/commit/376611db78ddf53581d1e821db72ba2ac73d15ec))

#### 1.7.6 (2024-04-14)

##### Chores

* **new-version:**  :bookmark: update version number in `package.json` file to `1.7.6` ([55b633b4](https://github.com/Black-Axis/sass-pire/commit/55b633b4d4dcc5a79c857a5f09991e2967fa7fcf))

##### Other Changes

*  update version number in `_banner.scss` file to latest one ([376611db](https://github.com/Black-Axis/sass-pire/commit/376611db78ddf53581d1e821db72ba2ac73d15ec))

#### 1.7.6 (2024-04-14)

##### Chores

* **new-version:**  :bookmark: update version number in `package.json` file to `1.7.6` ([55b633b4](https://github.com/Black-Axis/sass-pire/commit/55b633b4d4dcc5a79c857a5f09991e2967fa7fcf))

#### 1.5.1 (2024-01-26)

##### Documentation Changes

* **docs:**  :memo: Update `grid-col` mixin to use string values for grid placement ([c1cbc81d](https://github.com/Black-Axis/sass-pire/commit/c1cbc81da2f8282c2a29181e42a069a34f509d96))
* **mixins-grid-props:**  :memo: Refactor `area` mixin to include parameter documentation ([ae8a4fcb](https://github.com/Black-Axis/sass-pire/commit/ae8a4fcb6bb9bb82e755fd91e18251a721a82b6c))

##### New Features

* **mixins-grid-props:**
  *  :seedling: Add `grid-column` mixin for cross-browser compatibility ([5320c15c](https://github.com/Black-Axis/sass-pire/commit/5320c15ccbc12c174c4666e5f3466afa7f0f0ded))
  *  :seedling: Add `grid-area` module for handling CSS vendor prefixes ([03675004](https://github.com/Black-Axis/sass-pire/commit/03675004e3cc9f8260bed96ac7e83b8e194c0803))
  *  :seedling: Add `column-gap` mixin for cross-browser compatibility ([19d31bbf](https://github.com/Black-Axis/sass-pire/commit/19d31bbfe4ef2398c9f48a79999470fbf1b44e70))
  *  Add `inline-grid` module ([988a8134](https://github.com/Black-Axis/sass-pire/commit/988a8134c278b509d1e10c868103f51d4241d653))
  *  :hammer: Add `grid` mixin with its documentation ([6cbdddeb](https://github.com/Black-Axis/sass-pire/commit/6cbdddeb5a2e328c754157d21d4267ab15da76b8))
* **functions-global:**  :seedling: Add `trim` functions for improved efficiency and consistency ([0b18138e](https://github.com/Black-Axis/sass-pire/commit/0b18138ed59c1047bd5e728da61a0a0b33827aff))

##### Other Changes

* //gitlab.com/private-awesome-libraries/scss/sass-pire into enhance ([a93b3aee](https://github.com/Black-Axis/sass-pire/commit/a93b3aeeacd3c9c2d53470fa3265c9abb5684bf7))
* //github.com/krypton225/sass-pire into mixins ([38283b0e](https://github.com/Black-Axis/sass-pire/commit/38283b0e44090bfef4f9c8b115b021bf205b3893))
* //github.com/krypton225/sass-pire into mixins ([6743ac73](https://github.com/Black-Axis/sass-pire/commit/6743ac73b40168338f1032307e8f3d237a93647b))
* //github.com/krypton225/sass-pire into testing ([d9fe72e7](https://github.com/Black-Axis/sass-pire/commit/d9fe72e7040fd86471581759146da1d28f891813))
* //github.com/krypton225/sass-pire into testing ([84b9852b](https://github.com/Black-Axis/sass-pire/commit/84b9852befd549be950472bc0cd1b4e992b1c973))
* //github.com/krypton225/sass-pire into testing ([2e1ca0f5](https://github.com/Black-Axis/sass-pire/commit/2e1ca0f5858bf5adb170d483a9a58939a1a8a3c1))
* //github.com/krypton225/sass-pire into enhance ([5ab057c6](https://github.com/Black-Axis/sass-pire/commit/5ab057c6522a2c17ea134ed99123278b4cd262fa))
* //github.com/krypton225/sass-pire into enhance ([74cff0b8](https://github.com/Black-Axis/sass-pire/commit/74cff0b861cc317e767e139d9e73170cf98bf5ad))
* //github.com/krypton225/sass-pire into testing ([58b1e7a0](https://github.com/Black-Axis/sass-pire/commit/58b1e7a08d45183e277130228adda5d5a940da10))
* //github.com/krypton225/sass-pire into testing ([42f4cdf0](https://github.com/Black-Axis/sass-pire/commit/42f4cdf0e79ec78eed22c36517feeb4b9cd77645))
* //github.com/krypton225/sass-pire into testing ([acdf5499](https://github.com/Black-Axis/sass-pire/commit/acdf5499ee5167d7220221936e526c4277f96b42))
* //github.com/krypton225/sass-pire into testing ([362d5e10](https://github.com/Black-Axis/sass-pire/commit/362d5e103305993f3db287faed720d780cf7ce80))
* //github.com/krypton225/sass-pire into testing ([9d0cb2b5](https://github.com/Black-Axis/sass-pire/commit/9d0cb2b54b0d73c74af2284dfbbda71b41e751de))
* //github.com/krypton225/sass-pire into testing ([bd09c100](https://github.com/Black-Axis/sass-pire/commit/bd09c1007f1100822e39583fd4eabb4a4ec35369))
* //github.com/krypton225/sass-pire into enhance ([42690935](https://github.com/Black-Axis/sass-pire/commit/42690935a86176321de73131baba97c588e6a373))
* //github.com/krypton225/sass-pire into enhance ([3633d4c4](https://github.com/Black-Axis/sass-pire/commit/3633d4c4e024e6cab223972b8c3f983b334528f1))
* //github.com/krypton225/sass-pire into enhance ([bdd9ba0f](https://github.com/Black-Axis/sass-pire/commit/bdd9ba0f622f5c9c5f3541e405183d0bb7d6fdb8))
* //github.com/krypton225/sass-pire into enhance ([3b2f3dcd](https://github.com/Black-Axis/sass-pire/commit/3b2f3dcdee989af8bcdff39f38da3768c587b3b2))

##### Refactors

* **enhance:**
  *  :recycle: Refine documentation for functions and mixins ([3f33861d](https://github.com/Black-Axis/sass-pire/commit/3f33861df34fcc30a503fd68011c069af7b2fa95))
  *  :recycle: Remove unnecessary error-throwing comments in `flex-props` ([49417a4e](https://github.com/Black-Axis/sass-pire/commit/49417a4ed459a8593191b5608e0f31b343fd25c7))
  *  :recycle: Refactor functions & mixins to use `unitless` helper ([bc9fce58](https://github.com/Black-Axis/sass-pire/commit/bc9fce58c5cc84f2aaba1ca1d6cea51cf7ec9002))
  *  :recycle: Refactor string list related functions to use string module ([b32e97ce](https://github.com/Black-Axis/sass-pire/commit/b32e97cefd4d2a6d32b1ad10aa10892d940187b8))
  *  :recycle: Refactor math & list related functions to use math & list module ([73dd8f36](https://github.com/Black-Axis/sass-pire/commit/73dd8f3639d3f39ab94201223533cf9d196454aa))
  *  :recycle: Refactor namespace & module in list test file ([c1b69b28](https://github.com/Black-Axis/sass-pire/commit/c1b69b281258a667136b2f27705650407fe5c053))
  *  :recycle: Refactor test descriptions to accurately reflect converted values ([a9cdd1ec](https://github.com/Black-Axis/sass-pire/commit/a9cdd1ec45916e08f20e1754bea5fc46ec27e69c))
  *  :recycle: Add `Dev.err` function to test files as dependencies ([0d51c784](https://github.com/Black-Axis/sass-pire/commit/0d51c784a7a58cd15243baac88ba2fa9797f089c))
  *  :recycle: Refactor namespace and module references for global functions ([efd39539](https://github.com/Black-Axis/sass-pire/commit/efd39539930971b49d482d0598010f262035b306))
  *  :recycle: Refactor global `half` function by removing unused example ([f2c5b932](https://github.com/Black-Axis/sass-pire/commit/f2c5b9321c3e026f09c8369d55b9305c8ba8c411))
  *  :recycle: Refactor `half` function to handle non-unitless inputs ([f522cce0](https://github.com/Black-Axis/sass-pire/commit/f522cce0337a92f81f0b7b81d4646ff7496ca66f))
  *  :recycle: Refactor `reset` file to use new mixin names ([25425d9d](https://github.com/Black-Axis/sass-pire/commit/25425d9d555748cfb051706d47f90f4acef74e7e))
  *  :recycle: Update library version in `banner` mixin ([5c7abd96](https://github.com/Black-Axis/sass-pire/commit/5c7abd967d530af403e0748ad55f8d3db2994d5e))
  *  :recycle: Refactor `circle` mixin error handling and unit validation ([2b670748](https://github.com/Black-Axis/sass-pire/commit/2b670748eaa0a43c7a219e370a7b2829f8be6477))
  *  :recycle: Refactor `fade` mixin to handle parameter type validation ([f917f8fc](https://github.com/Black-Axis/sass-pire/commit/f917f8fc2a0b04001b2094e443ae94bc6ba6e721))
  *  :recycle: Refactor `Error.throw` function in `translate-x` mixin ([ab44e346](https://github.com/Black-Axis/sass-pire/commit/ab44e346ea9387aa35df37d9aa23aabe06665f1a))
* **mixins-grid-props:**  :recycle: Refine `col-gap` mixin in its documentation ([8a09bc4b](https://github.com/Black-Axis/sass-pire/commit/8a09bc4b1dea0b91451f312509628e55dc470fae))
* **tests:**
  *  :recycle: Update name of function calls in use statement ([eae7e373](https://github.com/Black-Axis/sass-pire/commit/eae7e373c916ca989b55b969a6365ab16a13c45d))
  *  :white_check_mark: Refactor test description for improved clarity around the `half` function ([6b2e9714](https://github.com/Black-Axis/sass-pire/commit/6b2e97146709fa541d5a2fcd7c93517be3b119ae))

##### Tests

* **enhance:**  :recycle: Refactor function invocation formatting for consistency & readability ([c4f9ff0f](https://github.com/Black-Axis/sass-pire/commit/c4f9ff0f1e5983fda7ee6ff6b55473ba67a6a5b7))
* **tests:**
  *  :white_check_mark: Refactor list module forwards & add `reverse` function test ([8cb441cd](https://github.com/Black-Axis/sass-pire/commit/8cb441cde8f88d18bbbb0dd384dc273ea2109cb9))
  *  :white_check_mark: Forward testing `merge` function for list module ([d60ce682](https://github.com/Black-Axis/sass-pire/commit/d60ce682f5a7bdc14fb681dcb122c3323f5b2e30))
  *  :white_check_mark: Add test cases for `get-last-from` function ([ded83164](https://github.com/Black-Axis/sass-pire/commit/ded83164e0e7bde0f6e51417c3aa28199a6b65ac))
  *  :white_check_mark: Add test module for `get-first-from` function in list module ([45d067b9](https://github.com/Black-Axis/sass-pire/commit/45d067b9e56bb2b6814047d739056df015b876ef))
  *  :white_check_mark: Add test cases for `center-of-list` function ([8b9c4948](https://github.com/Black-Axis/sass-pire/commit/8b9c49486671140222b79df25bfe777a0478d829))
  *  :white_check_mark: Forward list utilities & add testing for `flatten` function ([375ab187](https://github.com/Black-Axis/sass-pire/commit/375ab1871877f8a82327f50c132279828d1e2e63))
  *  :white_check_mark: Refactor `sum` function to accept lists  & add unit tests ([bf54e543](https://github.com/Black-Axis/sass-pire/commit/bf54e543b1f6fd43178b4cfe59d709db1b5359ab))
  *  :white_check_mark: Refactor `is-in-list` function & add unit testing for it ([a0668a41](https://github.com/Black-Axis/sass-pire/commit/a0668a41051fd5f7e7de1d3303f0d7a2372b5ad2))
  *  :white_check_mark: Refactor `has-pos` error message & add unit testing ([0ac88871](https://github.com/Black-Axis/sass-pire/commit/0ac88871c48d92f84b302f0360a4b189b9b04abb))
  *  :white_check_mark: Add unit tests for the `half` function ([189f46b7](https://github.com/Black-Axis/sass-pire/commit/189f46b7e4edc150ff6ad849590a451405acbaec))

