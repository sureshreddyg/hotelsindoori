import { p as publicAssetsURL } from '../../renderer.mjs';
import { _ as __nuxt_component_0$2 } from './nuxt-link-CBXZo5aS.mjs';
import { Autoplay, Pagination, Navigation } from 'file:///Users/aimlabs/Projects/sureshreddyg/hotelsindoori/node_modules/swiper/modules/index.mjs';
import { Swiper, SwiperSlide } from 'file:///Users/aimlabs/Projects/sureshreddyg/hotelsindoori/node_modules/swiper/swiper-vue.mjs';
import { useSSRContext, resolveComponent, mergeProps, withCtx, createTextVNode, createVNode } from 'file:///Users/aimlabs/Projects/sureshreddyg/hotelsindoori/node_modules/vue/index.mjs';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderAttr, ssrRenderStyle } from 'file:///Users/aimlabs/Projects/sureshreddyg/hotelsindoori/node_modules/vue/server-renderer/index.mjs';
import { _ as _imports_0$3 } from './banner-1-C-X6-Gm7.mjs';
import { _ as _export_sfc } from '../server.mjs';
import { _ as __nuxt_component_0$1 } from './About-bK7TeLR8.mjs';
import { _ as _imports_0$4, a as _imports_1$2, b as _imports_2$2 } from './room-4-Czjz_4Wd.mjs';
import { _ as _imports_2$1, a as _imports_4$1 } from './room-5-BIF5qKJk.mjs';
import { M as ModalVideo, a as _imports_0$7 } from './mail-BoKji7Pa.mjs';
import { _ as _imports_0$5, a as _imports_1$3, b as _imports_2$3, c as _imports_3$1, d as _imports_4$2, e as _imports_5$1 } from './icon-3-CGsBK_jt.mjs';
import { _ as _imports_0$6, a as _imports_1$4, b as _imports_2$4, c as _imports_3$2 } from './team-4-DTQLLsVK.mjs';
import { _ as _imports_0$8 } from './news-1-BFSCfVos.mjs';
import { _ as _imports_1$5, a as _imports_2$5 } from './news-3-CASv-cBH.mjs';
import 'file:///Users/aimlabs/Projects/sureshreddyg/hotelsindoori/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Users/aimlabs/Projects/sureshreddyg/hotelsindoori/node_modules/h3/dist/index.mjs';
import 'file:///Users/aimlabs/Projects/sureshreddyg/hotelsindoori/node_modules/devalue/index.js';
import 'file:///Users/aimlabs/Projects/sureshreddyg/hotelsindoori/node_modules/ufo/dist/index.mjs';
import 'file:///Users/aimlabs/Projects/sureshreddyg/hotelsindoori/node_modules/@unhead/ssr/dist/index.mjs';
import '../../nitro/nitro-prerenderer.mjs';
import 'file:///Users/aimlabs/Projects/sureshreddyg/hotelsindoori/node_modules/ofetch/dist/node.mjs';
import 'file:///Users/aimlabs/Projects/sureshreddyg/hotelsindoori/node_modules/destr/dist/index.mjs';
import 'file:///Users/aimlabs/Projects/sureshreddyg/hotelsindoori/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Users/aimlabs/Projects/sureshreddyg/hotelsindoori/node_modules/hookable/dist/index.mjs';
import 'file:///Users/aimlabs/Projects/sureshreddyg/hotelsindoori/node_modules/scule/dist/index.mjs';
import 'file:///Users/aimlabs/Projects/sureshreddyg/hotelsindoori/node_modules/klona/dist/index.mjs';
import 'file:///Users/aimlabs/Projects/sureshreddyg/hotelsindoori/node_modules/defu/dist/defu.mjs';
import 'file:///Users/aimlabs/Projects/sureshreddyg/hotelsindoori/node_modules/ohash/dist/index.mjs';
import 'file:///Users/aimlabs/Projects/sureshreddyg/hotelsindoori/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/aimlabs/Projects/sureshreddyg/hotelsindoori/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/aimlabs/Projects/sureshreddyg/hotelsindoori/node_modules/unstorage/drivers/memory.mjs';
import 'file:///Users/aimlabs/Projects/sureshreddyg/hotelsindoori/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///Users/aimlabs/Projects/sureshreddyg/hotelsindoori/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///Users/aimlabs/Projects/sureshreddyg/hotelsindoori/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Users/aimlabs/Projects/sureshreddyg/hotelsindoori/node_modules/pathe/dist/index.mjs';
import 'file:///Users/aimlabs/Projects/sureshreddyg/hotelsindoori/node_modules/unhead/dist/index.mjs';
import 'file:///Users/aimlabs/Projects/sureshreddyg/hotelsindoori/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///Users/aimlabs/Projects/sureshreddyg/hotelsindoori/node_modules/unctx/dist/index.mjs';
import 'file:///Users/aimlabs/Projects/sureshreddyg/hotelsindoori/node_modules/vue-router/dist/vue-router.node.mjs';

const _sfc_main$a = {
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    return {
      modules: [Autoplay, Pagination, Navigation]
    };
  }
};
function _sfc_ssrRender$a(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_swiper = resolveComponent("swiper");
  const _component_swiper_slide = resolveComponent("swiper-slide");
  const _component_NuxtLink = __nuxt_component_0$2;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "banner-section" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_swiper, {
    "slides-per-view": 1,
    "space-between": 0,
    loop: true,
    autoplay: {
      delay: 6e3,
      disableOnInteraction: true
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    navigation: {
      nextEl: ".h1n",
      prevEl: ".h1p"
    },
    modules: $setup.modules,
    class: "banner-slider"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_swiper_slide, { class: "banner-slide slide-item" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<figure class="image"${_scopeId2}><img${ssrRenderAttr("src", _imports_0$3)} alt=""${_scopeId2}></figure><div class="content-box" data-wow-duration="2s" data-wow-delay="5s"${_scopeId2}><span class="sub-title animate-4" data-animation-in="fadeInUp" data-delay-in="0.1"${_scopeId2}>unique place and luxury hotel</span><h1 class="animate-5" data-animation-in="fadeInUp" data-delay-in="0.3"${_scopeId2}>life enjoy with <br${_scopeId2}>the great moments</h1>`);
              _push3(ssrRenderComponent(_component_NuxtLink, {
                to: "page-about",
                class: "btn animate-6",
                "data-animation-in": "fadeInUp",
                "data-delay-in": "0.5"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`rooms &amp; suites`);
                  } else {
                    return [
                      createTextVNode("rooms & suites")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</div>`);
            } else {
              return [
                createVNode("figure", { class: "image" }, [
                  createVNode("img", {
                    src: _imports_0$3,
                    alt: ""
                  })
                ]),
                createVNode("div", {
                  class: "content-box",
                  "data-wow-duration": "2s",
                  "data-wow-delay": "5s"
                }, [
                  createVNode("span", {
                    class: "sub-title animate-4",
                    "data-animation-in": "fadeInUp",
                    "data-delay-in": "0.1"
                  }, "unique place and luxury hotel"),
                  createVNode("h1", {
                    class: "animate-5",
                    "data-animation-in": "fadeInUp",
                    "data-delay-in": "0.3"
                  }, [
                    createTextVNode("life enjoy with "),
                    createVNode("br"),
                    createTextVNode("the great moments")
                  ]),
                  createVNode(_component_NuxtLink, {
                    to: "page-about",
                    class: "btn animate-6",
                    "data-animation-in": "fadeInUp",
                    "data-delay-in": "0.5"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("rooms & suites")
                    ]),
                    _: 1
                  })
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_swiper_slide, { class: "banner-slide slide-item" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<figure class="image"${_scopeId2}><img${ssrRenderAttr("src", _imports_0$3)} alt=""${_scopeId2}></figure><div class="content-box"${_scopeId2}><span class="sub-title animate-4" data-animation-in="fadeInUp" data-delay-in="0.1"${_scopeId2}>unique place and luxury hotel</span><h1 class="animate-5" data-animation-in="fadeInUp" data-delay-in="0.3"${_scopeId2}>life enjoy with <br${_scopeId2}>the great moments</h1>`);
              _push3(ssrRenderComponent(_component_NuxtLink, {
                to: "page-about",
                class: "btn animate-6",
                "data-animation-in": "fadeInUp",
                "data-delay-in": "0.5"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`rooms &amp; suites`);
                  } else {
                    return [
                      createTextVNode("rooms & suites")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</div>`);
            } else {
              return [
                createVNode("figure", { class: "image" }, [
                  createVNode("img", {
                    src: _imports_0$3,
                    alt: ""
                  })
                ]),
                createVNode("div", { class: "content-box" }, [
                  createVNode("span", {
                    class: "sub-title animate-4",
                    "data-animation-in": "fadeInUp",
                    "data-delay-in": "0.1"
                  }, "unique place and luxury hotel"),
                  createVNode("h1", {
                    class: "animate-5",
                    "data-animation-in": "fadeInUp",
                    "data-delay-in": "0.3"
                  }, [
                    createTextVNode("life enjoy with "),
                    createVNode("br"),
                    createTextVNode("the great moments")
                  ]),
                  createVNode(_component_NuxtLink, {
                    to: "page-about",
                    class: "btn animate-6",
                    "data-animation-in": "fadeInUp",
                    "data-delay-in": "0.5"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("rooms & suites")
                    ]),
                    _: 1
                  })
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_swiper_slide, { class: "banner-slide slide-item" }, {
            default: withCtx(() => [
              createVNode("figure", { class: "image" }, [
                createVNode("img", {
                  src: _imports_0$3,
                  alt: ""
                })
              ]),
              createVNode("div", {
                class: "content-box",
                "data-wow-duration": "2s",
                "data-wow-delay": "5s"
              }, [
                createVNode("span", {
                  class: "sub-title animate-4",
                  "data-animation-in": "fadeInUp",
                  "data-delay-in": "0.1"
                }, "unique place and luxury hotel"),
                createVNode("h1", {
                  class: "animate-5",
                  "data-animation-in": "fadeInUp",
                  "data-delay-in": "0.3"
                }, [
                  createTextVNode("life enjoy with "),
                  createVNode("br"),
                  createTextVNode("the great moments")
                ]),
                createVNode(_component_NuxtLink, {
                  to: "page-about",
                  class: "btn animate-6",
                  "data-animation-in": "fadeInUp",
                  "data-delay-in": "0.5"
                }, {
                  default: withCtx(() => [
                    createTextVNode("rooms & suites")
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          createVNode(_component_swiper_slide, { class: "banner-slide slide-item" }, {
            default: withCtx(() => [
              createVNode("figure", { class: "image" }, [
                createVNode("img", {
                  src: _imports_0$3,
                  alt: ""
                })
              ]),
              createVNode("div", { class: "content-box" }, [
                createVNode("span", {
                  class: "sub-title animate-4",
                  "data-animation-in": "fadeInUp",
                  "data-delay-in": "0.1"
                }, "unique place and luxury hotel"),
                createVNode("h1", {
                  class: "animate-5",
                  "data-animation-in": "fadeInUp",
                  "data-delay-in": "0.3"
                }, [
                  createTextVNode("life enjoy with "),
                  createVNode("br"),
                  createTextVNode("the great moments")
                ]),
                createVNode(_component_NuxtLink, {
                  to: "page-about",
                  class: "btn animate-6",
                  "data-animation-in": "fadeInUp",
                  "data-delay-in": "0.5"
                }, {
                  default: withCtx(() => [
                    createTextVNode("rooms & suites")
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="checkout-form-section"><div class="auto-container"><div class="checkout-form"><div class="checkout-field"><h6>Check in</h6><div class="chk-field"><input class="date-pick" type="text" placeholder="20 June, 2023"><i class="fa fa-calendar"></i></div></div><div class="checkout-field"><h6>Check out</h6><div class="chk-field"><input class="date-pick" type="text" placeholder="20 June, 2023"><i class="fa fa-calendar"></i></div></div><div class="checkout-field br-0"><h6>Room</h6><div class="chk-field"><i class="fa fa-angle-down"></i><select><option>Standard Room Size </option><option>Standard Room Size </option><option>Standard Room Size </option><option>Standard Room Size </option></select></div></div>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/",
    class: "theme-btn btn-style-one"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span class="btn-title"${_scopeId}>check now</span>`);
      } else {
        return [
          createVNode("span", { class: "btn-title" }, "check now")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div></section>`);
}
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/home1/Slider.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["ssrRender", _sfc_ssrRender$a]]);
const _sfc_main$9 = {};
function _sfc_ssrRender$9(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$2;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "rooms-section pb-100" }, _attrs))}><div class="auto-container"><div class="sec-title text-center wow fadeInUp"><span class="sub-title">Hoexr Luxury Rooms</span><h2>Luxury Rooms &amp; Suites</h2></div><div class="row"><div class="room-block col-lg-6 col-md-6 col-sm-12"><div class="inner-box wow fadeIn"><div class="image-box"><figure class="image-2 overlay-anim"><img${ssrRenderAttr("src", _imports_0$4)} alt=""></figure></div><div class="content-box"><h6 class="title">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "room-details" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Junior Suite`);
      } else {
        return [
          createTextVNode("Junior Suite")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h6><span class="price">150$ / NIGHT</span></div><div class="box-caption">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "room-details",
    title: "",
    class: "book-btn"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`book now`);
      } else {
        return [
          createTextVNode("book now")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<ul class="bx-links"><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "room-details",
    title: ""
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<i class="fa fa-wifi"${_scopeId}></i>`);
      } else {
        return [
          createVNode("i", { class: "fa fa-wifi" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "room-details",
    title: ""
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<i class="fa fa-bed"${_scopeId}></i>`);
      } else {
        return [
          createVNode("i", { class: "fa fa-bed" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "room-details",
    title: ""
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<i class="fa fa-bath"${_scopeId}></i>`);
      } else {
        return [
          createVNode("i", { class: "fa fa-bath" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "room-details",
    title: ""
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<i class="fa fa-shower"${_scopeId}></i>`);
      } else {
        return [
          createVNode("i", { class: "fa fa-shower" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></div></div></div><div class="room-block col-lg-6 col-md-6 col-sm-12"><div class="inner-box wow fadeIn" data-wow-delay="200ms"><div class="image-box"><figure class="image-2 overlay-anim"><img${ssrRenderAttr("src", _imports_1$2)} alt=""></figure></div><div class="content-box"><h6 class="title">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "room-details" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Family Room`);
      } else {
        return [
          createTextVNode("Family Room")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h6><span class="price">200$ / NIGHT</span></div><div class="box-caption">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "room-details",
    title: "",
    class: "book-btn"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`book now`);
      } else {
        return [
          createTextVNode("book now")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<ul class="bx-links"><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "room-details",
    title: ""
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<i class="fa fa-wifi"${_scopeId}></i>`);
      } else {
        return [
          createVNode("i", { class: "fa fa-wifi" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "room-details",
    title: ""
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<i class="fa fa-bed"${_scopeId}></i>`);
      } else {
        return [
          createVNode("i", { class: "fa fa-bed" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "room-details",
    title: ""
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<i class="fa fa-bath"${_scopeId}></i>`);
      } else {
        return [
          createVNode("i", { class: "fa fa-bath" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "room-details",
    title: ""
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<i class="fa fa-shower"${_scopeId}></i>`);
      } else {
        return [
          createVNode("i", { class: "fa fa-shower" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></div></div></div><div class="room-block col-lg-3 col-md-6 col-sm-12"><div class="inner-box wow fadeIn" data-wow-delay="300ms"><div class="image-box"><figure class="image-2 overlay-anim"><img${ssrRenderAttr("src", _imports_2$1)} alt=""></figure></div><div class="content-box"><h6 class="title">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "room-details" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Double Room`);
      } else {
        return [
          createTextVNode("Double Room")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h6><span class="price">250$ / NIGHT</span></div><div class="box-caption">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "room-details",
    title: "",
    class: "book-btn"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`book now`);
      } else {
        return [
          createTextVNode("book now")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<ul class="bx-links"><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "room-details",
    title: ""
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<i class="fa fa-wifi"${_scopeId}></i>`);
      } else {
        return [
          createVNode("i", { class: "fa fa-wifi" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "room-details",
    title: ""
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<i class="fa fa-bed"${_scopeId}></i>`);
      } else {
        return [
          createVNode("i", { class: "fa fa-bed" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "room-details",
    title: ""
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<i class="fa fa-bath"${_scopeId}></i>`);
      } else {
        return [
          createVNode("i", { class: "fa fa-bath" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "room-details",
    title: ""
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<i class="fa fa-shower"${_scopeId}></i>`);
      } else {
        return [
          createVNode("i", { class: "fa fa-shower" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></div></div></div><div class="room-block col-lg-6 col-md-6 col-sm-12"><div class="inner-box large-style wow fadeIn" data-wow-delay="400ms"><div class="image-box"><figure class="image-2 overlay-anim"><img${ssrRenderAttr("src", _imports_2$2)} alt=""></figure></div><div class="content-box"><h6 class="title">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "room-details" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Double Room`);
      } else {
        return [
          createTextVNode("Double Room")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h6><span class="price">250$ / NIGHT</span></div><div class="box-caption">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "room-details",
    title: "",
    class: "book-btn"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`book now`);
      } else {
        return [
          createTextVNode("book now")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<ul class="bx-links"><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "room-details",
    title: ""
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<i class="fa fa-wifi"${_scopeId}></i>`);
      } else {
        return [
          createVNode("i", { class: "fa fa-wifi" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "room-details",
    title: ""
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<i class="fa fa-bed"${_scopeId}></i>`);
      } else {
        return [
          createVNode("i", { class: "fa fa-bed" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "room-details",
    title: ""
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<i class="fa fa-bath"${_scopeId}></i>`);
      } else {
        return [
          createVNode("i", { class: "fa fa-bath" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "room-details",
    title: ""
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<i class="fa fa-shower"${_scopeId}></i>`);
      } else {
        return [
          createVNode("i", { class: "fa fa-shower" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></div></div></div><div class="room-block col-lg-3 col-md-6 col-sm-12"><div class="inner-box wow fadeIn" data-wow-delay="500ms"><div class="image-box"><figure class="image-2 overlay-anim"><img${ssrRenderAttr("src", _imports_4$1)} alt=""></figure></div><div class="content-box"><h6 class="title">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "room-details" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Deluxe Room`);
      } else {
        return [
          createTextVNode("Deluxe Room")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h6><span class="price">300$ / NIGHT</span></div><div class="box-caption">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "room-details",
    title: "",
    class: "book-btn"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`book now`);
      } else {
        return [
          createTextVNode("book now")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<ul class="bx-links"><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "room-details",
    title: ""
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<i class="fa fa-wifi"${_scopeId}></i>`);
      } else {
        return [
          createVNode("i", { class: "fa fa-wifi" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "room-details",
    title: ""
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<i class="fa fa-bed"${_scopeId}></i>`);
      } else {
        return [
          createVNode("i", { class: "fa fa-bed" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "room-details",
    title: ""
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<i class="fa fa-bath"${_scopeId}></i>`);
      } else {
        return [
          createVNode("i", { class: "fa fa-bath" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "room-details",
    title: ""
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<i class="fa fa-shower"${_scopeId}></i>`);
      } else {
        return [
          createVNode("i", { class: "fa fa-shower" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></div></div></div></div></div></section>`);
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/home1/Room.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender$9]]);
const _sfc_main$8 = {};
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$2;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "service-section" }, _attrs))}><div class="auto-container"><div class="sec-title text-center wow slideInUp"><span class="sub-title">Hoexr SERVICES</span><h2>Hotel Facilities</h2></div><div class="row"><div class="service-block col-lg-4 col-md-6 col-sm-12"><div class="inner-box wow fadeIn" data-wow-delay="100ms"><div class="icon-box wow fadeInUp"><i class="flaticon-bed-2"></i></div><div class="content-box"><h4 class="title">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "page-service-details" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Room Service`);
      } else {
        return [
          createTextVNode("Room Service")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h4><div class="text">Orci varius natoque penatibus magnis ders disney parturient ridiculus</div></div></div></div><div class="service-block col-lg-4 col-md-6 col-sm-12"><div class="inner-box wow fadeIn" data-wow-delay="200ms"><div class="icon-box wow fadeInUp"><i class="flaticon-travel"></i></div><div class="content-box"><h4 class="title">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "page-service-details" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Pick Up &amp; Drop`);
      } else {
        return [
          createTextVNode("Pick Up & Drop")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h4><div class="text">Orci varius natoque penatibus magnis ders disney parturient ridiculus</div></div></div></div><div class="service-block col-lg-4 col-md-6 col-sm-12"><div class="inner-box wow fadeIn" data-wow-delay="300ms"><div class="icon-box wow fadeInUp"><i class="flaticon-wifi"></i></div><div class="content-box"><h4 class="title">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "page-service-details" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Fibre Internet`);
      } else {
        return [
          createTextVNode("Fibre Internet")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h4><div class="text">Orci varius natoque penatibus magnis ders disney parturient ridiculus</div></div></div></div><div class="service-block col-lg-4 col-md-6 col-sm-12"><div class="inner-box wow fadeIn" data-wow-delay="400ms"><div class="icon-box wow fadeInUp"><i class="flaticon-breakfast"></i></div><div class="content-box"><h4 class="title">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "page-service-details" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Breakfast`);
      } else {
        return [
          createTextVNode("Breakfast")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h4><div class="text">Orci varius natoque penatibus magnis ders disney parturient ridiculus</div></div></div></div><div class="service-block col-lg-4 col-md-6 col-sm-12"><div class="inner-box wow fadeIn" data-wow-delay="500ms"><div class="icon-box wow fadeInUp"><i class="flaticon-swimming-pool"></i></div><div class="content-box"><h4 class="title">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "page-service-details" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Swimming Pool`);
      } else {
        return [
          createTextVNode("Swimming Pool")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h4><div class="text">Orci varius natoque penatibus magnis ders disney parturient ridiculus</div></div></div></div><div class="service-block col-lg-4 col-md-6 col-sm-12"><div class="inner-box wow fadeIn" data-wow-delay="600ms"><div class="icon-box wow fadeInUp"><i class="flaticon-car"></i></div><div class="content-box"><h4 class="title">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "page-service-details" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Parking Space`);
      } else {
        return [
          createTextVNode("Parking Space")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h4><div class="text">Orci varius natoque penatibus magnis ders disney parturient ridiculus</div></div></div></div></div></div></section>`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/home1/Services.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$8]]);
const _imports_0$2 = "" + publicAssetsURL("images/icons/play.png");
const _sfc_main$7 = {
  components: {
    ModalVideo
  },
  data: () => {
    return {
      videoIsOpen: false
    };
  },
  methods: {
    openVideo() {
      this.videoIsOpen = !this.videoIsOpen;
    }
  },
  computed: {
    videoChannel: function() {
      return "youtube";
    },
    videoId: function() {
      return "QiqQoqtnHrk";
    }
  }
};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0$2;
  const _component_modal_video = resolveComponent("modal-video");
  _push(`<!--[--><section class="video-section"><div class="bg bg-image" style="${ssrRenderStyle({ "background-image": "url(images/background/1.jpg)" })}"></div><div class="auto-container"><div class="row"><div class="content-column col-lg-9 col-md-12 col-sm-12"><div class="inner-column"><div class="sec-title-two light wow slideInUp"><span class="sub-title">Promotional Video</span><h2> Book Hotal Rooms, <br>et Deals &amp; Book Flights Online.</h2></div></div></div><div class="btn-column col-lg-3 col-md-12 col-sm-12"><div class="inner-column">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    onClick: $options.openVideo,
    class: "play-now-two",
    "data-fancybox": "gallery",
    "data-caption": ""
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_0$2)} alt=""${_scopeId}><span class="ripple"${_scopeId}></span>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_0$2,
            alt: ""
          }),
          createVNode("span", { class: "ripple" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div></div></section>`);
  _push(ssrRenderComponent(_component_modal_video, {
    channel: $options.videoChannel,
    videoId: $options.videoId,
    isOpen: _ctx.videoIsOpen,
    "onUpdate:isOpen": ($event) => _ctx.videoIsOpen = $event
  }, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/home1/Video.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$7]]);
const _sfc_main$6 = {};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$2;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "feature-section" }, _attrs))}><div class="auto-container"><div class="row feature-row g-0 wow slideInUp" data-wow-delay="100ms"><div class="image-column col-lg-4"><div class="inner-column"><div class="image-box"><figure class="image overlay-anim"><img${ssrRenderAttr("src", _imports_0$5)} alt=""></figure></div></div></div><div class="content-column col-lg-8"><div class="inner-column"><div class="content-box"><div class="sec-title"><span class="sub-title">MODERN</span><h2>Fitness Center</h2><div class="text">Restaurant inilla duiman at elit finibus viverra nec a lacus themo the <br>nesudea seneoice misuscipit non sagie the fermen ziverra tristiue duru <br>the ivite dianne onen nivami acsestion augue artine.</div></div>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "room-details",
    class: "theme-btn btn-style-one read-more"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Discover More`);
      } else {
        return [
          createTextVNode("Discover More")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<figure class="image-2"><img${ssrRenderAttr("src", _imports_1$3)} alt=""></figure></div></div></div></div><div class="row feature-row g-0 wow slideInUp" data-wow-delay="200ms"><div class="content-column col-lg-8"><div class="inner-column"><div class="content-box"><div class="sec-title"><span class="sub-title">DISCOVER</span><h2>The Restaurant</h2><div class="text">Restaurant inilla duiman at elit finibus viverra nec a lacus themo the <br>nesudea seneoice misuscipit non sagie the fermen ziverra tristiue duru <br>the ivite dianne onen nivami acsestion augue artine.</div></div>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "room-details",
    class: "theme-btn btn-style-one read-more"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Discover More`);
      } else {
        return [
          createTextVNode("Discover More")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<figure class="image-2"><img${ssrRenderAttr("src", _imports_2$3)} alt=""></figure></div></div></div><div class="image-column col-lg-4"><div class="inner-column"><div class="image-box"><figure class="image overlay-anim"><img${ssrRenderAttr("src", _imports_3$1)} alt=""></figure></div></div></div></div><div class="row feature-row g-0 wow slideInUp" data-wow-delay="300ms"><div class="image-column col-lg-4"><div class="inner-column"><div class="image-box"><figure class="image overlay-anim"><img${ssrRenderAttr("src", _imports_4$2)} alt=""></figure></div></div></div><div class="content-column col-lg-8"><div class="inner-column"><div class="content-box"><div class="sec-title"><span class="sub-title">EXPERIENCES</span><h2>Spa Center</h2><div class="text">Restaurant inilla duiman at elit finibus viverra nec a lacus themo the <br>nesudea seneoice misuscipit non sagie the fermen ziverra tristiue duru <br>the ivite dianne onen nivami acsestion augue artine.</div></div>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "room-details",
    class: "theme-btn btn-style-one read-more"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Discover More`);
      } else {
        return [
          createTextVNode("Discover More")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<figure class="image-2"><img${ssrRenderAttr("src", _imports_5$1)} alt=""></figure></div></div></div></div></div></section>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/home1/Features.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$6]]);
const _imports_0$1 = "" + publicAssetsURL("images/resource/testi-1.jpg");
const _imports_1$1 = "" + publicAssetsURL("images/resource/comas.png");
const _sfc_main$5 = {
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    return {
      modules: [Autoplay, Pagination, Navigation]
    };
  }
};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_swiper = resolveComponent("swiper");
  const _component_swiper_slide = resolveComponent("swiper-slide");
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "testimonial-section" }, _attrs))}><div class="bg bg-image" style="${ssrRenderStyle({ "background-image": "url(images/background/testi-bg.jpg)" })}"></div><div class="auto-container"><div class="row"><div class="col-lg-4 hide-on-tablet"></div><div class="testimonial-column col-lg-8 col-md-12"><div class="inner-column"><div class="sec-title light wow fadeInUp"><span class="sub-title">What says for customer</span><h2> What Client&#39;s Say?</h2></div>`);
  _push(ssrRenderComponent(_component_swiper, {
    "slides-per-view": 1,
    "space-between": 0,
    loop: true,
    autoplay: {
      delay: 5e3,
      disableOnInteraction: true
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    navigation: {
      nextEl: ".h1n",
      prevEl: ".h1p"
    },
    modules: $setup.modules,
    class: "testimonial-slider"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_swiper_slide, { class: "testimonial-slide slide-item" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="content-box"${_scopeId2}><div class="image-box" data-animation-in="fadeInLeft" data-delay-in="0.1"${_scopeId2}><figure class="thumb"${_scopeId2}><img${ssrRenderAttr("src", _imports_0$1)} alt=""${_scopeId2}></figure></div><div class="info-box"${_scopeId2}><ul class="rating-list" data-animation-in="fadeInUp" data-delay-in="0.2"${_scopeId2}><li${_scopeId2}><i class="fa-solid fa-star"${_scopeId2}></i></li><li${_scopeId2}><i class="fa-solid fa-star"${_scopeId2}></i></li><li${_scopeId2}><i class="fa-solid fa-star"${_scopeId2}></i></li><li${_scopeId2}><i class="fa-solid fa-star"${_scopeId2}></i></li><li${_scopeId2}><i class="fa-solid fa-star"${_scopeId2}></i></li></ul><div class="text" data-animation-in="fadeInUp" data-delay-in="0.3"${_scopeId2}>The utanislen quam nestibulum ac quame odion elementum sceisue the aucan. <br${_scopeId2}>Orci varius natoque penatibus et magnis disney parturient monte nascete ridiculus<br${_scopeId2}> mus nellen etesque habitant morbine.</div><div class="auther-info" data-animation-in="fadeInUp" data-delay-in="0.4"${_scopeId2}><h4 class="title"${_scopeId2}>Jackson Smith</h4><span class="designation"${_scopeId2}>Guest Review</span></div><div class="icon-box" data-animation-in="fadeInUp" data-delay-in="0.5"${_scopeId2}><figure class="image"${_scopeId2}><img${ssrRenderAttr("src", _imports_1$1)} alt=""${_scopeId2}></figure></div></div></div>`);
            } else {
              return [
                createVNode("div", { class: "content-box" }, [
                  createVNode("div", {
                    class: "image-box",
                    "data-animation-in": "fadeInLeft",
                    "data-delay-in": "0.1"
                  }, [
                    createVNode("figure", { class: "thumb" }, [
                      createVNode("img", {
                        src: _imports_0$1,
                        alt: ""
                      })
                    ])
                  ]),
                  createVNode("div", { class: "info-box" }, [
                    createVNode("ul", {
                      class: "rating-list",
                      "data-animation-in": "fadeInUp",
                      "data-delay-in": "0.2"
                    }, [
                      createVNode("li", null, [
                        createVNode("i", { class: "fa-solid fa-star" })
                      ]),
                      createVNode("li", null, [
                        createVNode("i", { class: "fa-solid fa-star" })
                      ]),
                      createVNode("li", null, [
                        createVNode("i", { class: "fa-solid fa-star" })
                      ]),
                      createVNode("li", null, [
                        createVNode("i", { class: "fa-solid fa-star" })
                      ]),
                      createVNode("li", null, [
                        createVNode("i", { class: "fa-solid fa-star" })
                      ])
                    ]),
                    createVNode("div", {
                      class: "text",
                      "data-animation-in": "fadeInUp",
                      "data-delay-in": "0.3"
                    }, [
                      createTextVNode("The utanislen quam nestibulum ac quame odion elementum sceisue the aucan. "),
                      createVNode("br"),
                      createTextVNode("Orci varius natoque penatibus et magnis disney parturient monte nascete ridiculus"),
                      createVNode("br"),
                      createTextVNode(" mus nellen etesque habitant morbine.")
                    ]),
                    createVNode("div", {
                      class: "auther-info",
                      "data-animation-in": "fadeInUp",
                      "data-delay-in": "0.4"
                    }, [
                      createVNode("h4", { class: "title" }, "Jackson Smith"),
                      createVNode("span", { class: "designation" }, "Guest Review")
                    ]),
                    createVNode("div", {
                      class: "icon-box",
                      "data-animation-in": "fadeInUp",
                      "data-delay-in": "0.5"
                    }, [
                      createVNode("figure", { class: "image" }, [
                        createVNode("img", {
                          src: _imports_1$1,
                          alt: ""
                        })
                      ])
                    ])
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_swiper_slide, { class: "testimonial-slide slide-item" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="content-box"${_scopeId2}><div class="image-box" data-animation-in="fadeInLeft" data-delay-in="0.1"${_scopeId2}><figure class="thumb"${_scopeId2}><img${ssrRenderAttr("src", _imports_0$1)} alt=""${_scopeId2}></figure></div><div class="info-box"${_scopeId2}><ul class="rating-list" data-animation-in="fadeInUp" data-delay-in="0.2"${_scopeId2}><li${_scopeId2}><i class="fa-solid fa-star"${_scopeId2}></i></li><li${_scopeId2}><i class="fa-solid fa-star"${_scopeId2}></i></li><li${_scopeId2}><i class="fa-solid fa-star"${_scopeId2}></i></li><li${_scopeId2}><i class="fa-solid fa-star"${_scopeId2}></i></li><li${_scopeId2}><i class="fa-solid fa-star"${_scopeId2}></i></li></ul><div class="text" data-animation-in="fadeInUp" data-delay-in="0.3"${_scopeId2}>The utanislen quam nestibulum ac quame odion elementum sceisue the aucan. <br${_scopeId2}>Orci varius natoque penatibus et magnis disney parturient monte nascete ridiculus<br${_scopeId2}> mus nellen etesque habitant morbine.</div><div class="auther-info" data-animation-in="fadeInUp" data-delay-in="0.4"${_scopeId2}><h4 class="title"${_scopeId2}>Jackson Smith</h4><span class="designation"${_scopeId2}>Guest Review</span></div><div class="icon-box" data-animation-in="fadeInUp" data-delay-in="0.5"${_scopeId2}><figure class="image"${_scopeId2}><img${ssrRenderAttr("src", _imports_1$1)} alt=""${_scopeId2}></figure></div></div></div>`);
            } else {
              return [
                createVNode("div", { class: "content-box" }, [
                  createVNode("div", {
                    class: "image-box",
                    "data-animation-in": "fadeInLeft",
                    "data-delay-in": "0.1"
                  }, [
                    createVNode("figure", { class: "thumb" }, [
                      createVNode("img", {
                        src: _imports_0$1,
                        alt: ""
                      })
                    ])
                  ]),
                  createVNode("div", { class: "info-box" }, [
                    createVNode("ul", {
                      class: "rating-list",
                      "data-animation-in": "fadeInUp",
                      "data-delay-in": "0.2"
                    }, [
                      createVNode("li", null, [
                        createVNode("i", { class: "fa-solid fa-star" })
                      ]),
                      createVNode("li", null, [
                        createVNode("i", { class: "fa-solid fa-star" })
                      ]),
                      createVNode("li", null, [
                        createVNode("i", { class: "fa-solid fa-star" })
                      ]),
                      createVNode("li", null, [
                        createVNode("i", { class: "fa-solid fa-star" })
                      ]),
                      createVNode("li", null, [
                        createVNode("i", { class: "fa-solid fa-star" })
                      ])
                    ]),
                    createVNode("div", {
                      class: "text",
                      "data-animation-in": "fadeInUp",
                      "data-delay-in": "0.3"
                    }, [
                      createTextVNode("The utanislen quam nestibulum ac quame odion elementum sceisue the aucan. "),
                      createVNode("br"),
                      createTextVNode("Orci varius natoque penatibus et magnis disney parturient monte nascete ridiculus"),
                      createVNode("br"),
                      createTextVNode(" mus nellen etesque habitant morbine.")
                    ]),
                    createVNode("div", {
                      class: "auther-info",
                      "data-animation-in": "fadeInUp",
                      "data-delay-in": "0.4"
                    }, [
                      createVNode("h4", { class: "title" }, "Jackson Smith"),
                      createVNode("span", { class: "designation" }, "Guest Review")
                    ]),
                    createVNode("div", {
                      class: "icon-box",
                      "data-animation-in": "fadeInUp",
                      "data-delay-in": "0.5"
                    }, [
                      createVNode("figure", { class: "image" }, [
                        createVNode("img", {
                          src: _imports_1$1,
                          alt: ""
                        })
                      ])
                    ])
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_swiper_slide, { class: "testimonial-slide slide-item" }, {
            default: withCtx(() => [
              createVNode("div", { class: "content-box" }, [
                createVNode("div", {
                  class: "image-box",
                  "data-animation-in": "fadeInLeft",
                  "data-delay-in": "0.1"
                }, [
                  createVNode("figure", { class: "thumb" }, [
                    createVNode("img", {
                      src: _imports_0$1,
                      alt: ""
                    })
                  ])
                ]),
                createVNode("div", { class: "info-box" }, [
                  createVNode("ul", {
                    class: "rating-list",
                    "data-animation-in": "fadeInUp",
                    "data-delay-in": "0.2"
                  }, [
                    createVNode("li", null, [
                      createVNode("i", { class: "fa-solid fa-star" })
                    ]),
                    createVNode("li", null, [
                      createVNode("i", { class: "fa-solid fa-star" })
                    ]),
                    createVNode("li", null, [
                      createVNode("i", { class: "fa-solid fa-star" })
                    ]),
                    createVNode("li", null, [
                      createVNode("i", { class: "fa-solid fa-star" })
                    ]),
                    createVNode("li", null, [
                      createVNode("i", { class: "fa-solid fa-star" })
                    ])
                  ]),
                  createVNode("div", {
                    class: "text",
                    "data-animation-in": "fadeInUp",
                    "data-delay-in": "0.3"
                  }, [
                    createTextVNode("The utanislen quam nestibulum ac quame odion elementum sceisue the aucan. "),
                    createVNode("br"),
                    createTextVNode("Orci varius natoque penatibus et magnis disney parturient monte nascete ridiculus"),
                    createVNode("br"),
                    createTextVNode(" mus nellen etesque habitant morbine.")
                  ]),
                  createVNode("div", {
                    class: "auther-info",
                    "data-animation-in": "fadeInUp",
                    "data-delay-in": "0.4"
                  }, [
                    createVNode("h4", { class: "title" }, "Jackson Smith"),
                    createVNode("span", { class: "designation" }, "Guest Review")
                  ]),
                  createVNode("div", {
                    class: "icon-box",
                    "data-animation-in": "fadeInUp",
                    "data-delay-in": "0.5"
                  }, [
                    createVNode("figure", { class: "image" }, [
                      createVNode("img", {
                        src: _imports_1$1,
                        alt: ""
                      })
                    ])
                  ])
                ])
              ])
            ]),
            _: 1
          }),
          createVNode(_component_swiper_slide, { class: "testimonial-slide slide-item" }, {
            default: withCtx(() => [
              createVNode("div", { class: "content-box" }, [
                createVNode("div", {
                  class: "image-box",
                  "data-animation-in": "fadeInLeft",
                  "data-delay-in": "0.1"
                }, [
                  createVNode("figure", { class: "thumb" }, [
                    createVNode("img", {
                      src: _imports_0$1,
                      alt: ""
                    })
                  ])
                ]),
                createVNode("div", { class: "info-box" }, [
                  createVNode("ul", {
                    class: "rating-list",
                    "data-animation-in": "fadeInUp",
                    "data-delay-in": "0.2"
                  }, [
                    createVNode("li", null, [
                      createVNode("i", { class: "fa-solid fa-star" })
                    ]),
                    createVNode("li", null, [
                      createVNode("i", { class: "fa-solid fa-star" })
                    ]),
                    createVNode("li", null, [
                      createVNode("i", { class: "fa-solid fa-star" })
                    ]),
                    createVNode("li", null, [
                      createVNode("i", { class: "fa-solid fa-star" })
                    ]),
                    createVNode("li", null, [
                      createVNode("i", { class: "fa-solid fa-star" })
                    ])
                  ]),
                  createVNode("div", {
                    class: "text",
                    "data-animation-in": "fadeInUp",
                    "data-delay-in": "0.3"
                  }, [
                    createTextVNode("The utanislen quam nestibulum ac quame odion elementum sceisue the aucan. "),
                    createVNode("br"),
                    createTextVNode("Orci varius natoque penatibus et magnis disney parturient monte nascete ridiculus"),
                    createVNode("br"),
                    createTextVNode(" mus nellen etesque habitant morbine.")
                  ]),
                  createVNode("div", {
                    class: "auther-info",
                    "data-animation-in": "fadeInUp",
                    "data-delay-in": "0.4"
                  }, [
                    createVNode("h4", { class: "title" }, "Jackson Smith"),
                    createVNode("span", { class: "designation" }, "Guest Review")
                  ]),
                  createVNode("div", {
                    class: "icon-box",
                    "data-animation-in": "fadeInUp",
                    "data-delay-in": "0.5"
                  }, [
                    createVNode("figure", { class: "image" }, [
                      createVNode("img", {
                        src: _imports_1$1,
                        alt: ""
                      })
                    ])
                  ])
                ])
              ])
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div></div></section>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/home1/Testimonial.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_6 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$5]]);
const _imports_0 = "" + publicAssetsURL("images/resource/pricing1-1.png");
const _imports_1 = "" + publicAssetsURL("images/resource/pricing1-2.png");
const _imports_2 = "" + publicAssetsURL("images/resource/pricing1-3.png");
const _imports_3 = "" + publicAssetsURL("images/resource/pricing1-4.png");
const _imports_4 = "" + publicAssetsURL("images/resource/pricing1-5.png");
const _imports_5 = "" + publicAssetsURL("images/resource/pricing1-6.png");
const _imports_6 = "" + publicAssetsURL("images/resource/pricing1-7.png");
const _imports_7 = "" + publicAssetsURL("images/resource/pricing1-8.png");
const _sfc_main$4 = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$2;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "pricing-section" }, _attrs))}><div class="auto-container"><div class="sec-title text-center wow fadeInUp"><span class="sub-title">Hoexr best menus</span><h2>Specialities Foods</h2></div><div class="row wow slideInUp"><div class="pricing-block col-lg-6 col-md-6 col-sm-12"><div class="inner-box"><figure class="thumb overlay-anim">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "page-pricing" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_0)} alt=""${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_0,
            alt: ""
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</figure><div class="content-box"><span class="designation">Lorem Ipsum is that it smt</span><h6 class="title">Pasta With Fish<span>$39</span></h6></div><span class="food-pack">starter</span></div></div><div class="pricing-block col-lg-6 col-md-6 col-sm-12"><div class="inner-box"><figure class="thumb overlay-anim">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "page-pricing" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_1)} alt=""${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_1,
            alt: ""
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</figure><div class="content-box"><span class="designation">Lorem Ipsum is that it smt</span><h6 class="title">Noodles<span>$16</span></h6></div><span class="food-pack">new</span></div></div><div class="pricing-block col-lg-6 col-md-6 col-sm-12"><div class="inner-box"><figure class="thumb overlay-anim">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "page-pricing" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_2)} alt=""${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_2,
            alt: ""
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</figure><div class="content-box"><span class="designation">Lorem Ipsum is that it smt</span><h6 class="title">Fresh Meat<span>$26</span></h6></div><span class="food-pack">new</span></div></div><div class="pricing-block col-lg-6 col-md-6 col-sm-12"><div class="inner-box"><figure class="thumb overlay-anim">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "page-pricing" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_3)} alt=""${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_3,
            alt: ""
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</figure><div class="content-box"><span class="designation">Lorem Ipsum is that it smt</span><h6 class="title">Chicken<span>$19</span></h6></div><span class="food-pack">vegan</span></div></div><div class="pricing-block col-lg-6 col-md-6 col-sm-12"><div class="inner-box"><figure class="thumb overlay-anim">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "page-pricing" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_4)} alt=""${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_4,
            alt: ""
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</figure><div class="content-box"><span class="designation">Lorem Ipsum is that it smt</span><h6 class="title">Spaghetti<span>$37</span></h6></div><span class="food-pack">new</span></div></div><div class="pricing-block col-lg-6 col-md-6 col-sm-12"><div class="inner-box"><figure class="thumb overlay-anim">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "page-pricing" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_5)} alt=""${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_5,
            alt: ""
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</figure><div class="content-box"><span class="designation">Lorem Ipsum is that it smt</span><h6 class="title">Vegetarian Fried<span>$34</span></h6></div><span class="food-pack">new</span></div></div><div class="pricing-block col-lg-6 col-md-6 col-sm-12"><div class="inner-box"><figure class="thumb overlay-anim">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "page-pricing" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_6)} alt=""${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_6,
            alt: ""
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</figure><div class="content-box"><span class="designation">Lorem Ipsum is that it smt</span><h6 class="title">Vegetarian Soup<span>$42</span></h6></div><span class="food-pack">glutan free</span></div></div><div class="pricing-block col-lg-6 col-md-6 col-sm-12"><div class="inner-box"><figure class="thumb overlay-anim">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "page-pricing" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_7)} alt=""${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_7,
            alt: ""
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</figure><div class="content-box"><span class="designation">Lorem Ipsum is that it smt</span><h6 class="title">Salmon Pasta<span>$71</span></h6></div><span class="food-pack">fish</span></div></div></div></div></section>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/home1/Pricing.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_7 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$3 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$2;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "team-section" }, _attrs))}><div class="auto-container"><div class="sec-title text-center wow fadeInUp"><span class="sub-title">Hoexr Hotel team</span><h2>Expert Team Persons</h2></div><div class="row"><div class="team-block col-lg-3 col-sm-6"><div class="inner-box wow fadeInLeft"><div class="image-box"><figure class="image overlay-anim">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "page-team-details" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_0$6)} alt=""${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_0$6,
            alt: ""
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</figure><div class="info-box"><span class="designation">Event Platnner</span><h4 class="name">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "page-team-details" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Michael Dean`);
      } else {
        return [
          createTextVNode("Michael Dean")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h4><div class="social-links">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<i class="fab fa-facebook"${_scopeId}></i>`);
      } else {
        return [
          createVNode("i", { class: "fab fa-facebook" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<i class="fab fa-twitter"${_scopeId}></i>`);
      } else {
        return [
          createVNode("i", { class: "fab fa-twitter" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<i class="fab fa-linkedin"${_scopeId}></i>`);
      } else {
        return [
          createVNode("i", { class: "fab fa-linkedin" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<i class="fab fa-youtube"${_scopeId}></i>`);
      } else {
        return [
          createVNode("i", { class: "fab fa-youtube" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div></div></div><div class="team-block col-lg-3 col-sm-6"><div class="inner-box wow fadeInLeft" data-wow-delay="200ms"><div class="image-box"><figure class="image overlay-anim">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "page-team-details" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_1$4)} alt=""${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_1$4,
            alt: ""
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</figure><div class="info-box"><span class="designation">Kitchen Manager</span><h4 class="name">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "page-team-details" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Frank Burton`);
      } else {
        return [
          createTextVNode("Frank Burton")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h4><div class="social-links">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<i class="fab fa-facebook"${_scopeId}></i>`);
      } else {
        return [
          createVNode("i", { class: "fab fa-facebook" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<i class="fab fa-twitter"${_scopeId}></i>`);
      } else {
        return [
          createVNode("i", { class: "fab fa-twitter" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<i class="fab fa-linkedin"${_scopeId}></i>`);
      } else {
        return [
          createVNode("i", { class: "fab fa-linkedin" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<i class="fab fa-youtube"${_scopeId}></i>`);
      } else {
        return [
          createVNode("i", { class: "fab fa-youtube" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div></div></div><div class="team-block col-lg-3 col-sm-6"><div class="inner-box wow fadeInLeft" data-wow-delay="300ms"><div class="image-box"><figure class="image overlay-anim">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "page-team-details" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_2$4)} alt=""${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_2$4,
            alt: ""
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</figure><div class="info-box"><span class="designation">Hotel Manager</span><h4 class="name">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "page-team-details" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Mya Mullins`);
      } else {
        return [
          createTextVNode("Mya Mullins")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h4><div class="social-links">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<i class="fab fa-facebook"${_scopeId}></i>`);
      } else {
        return [
          createVNode("i", { class: "fab fa-facebook" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<i class="fab fa-twitter"${_scopeId}></i>`);
      } else {
        return [
          createVNode("i", { class: "fab fa-twitter" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<i class="fab fa-linkedin"${_scopeId}></i>`);
      } else {
        return [
          createVNode("i", { class: "fab fa-linkedin" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<i class="fab fa-youtube"${_scopeId}></i>`);
      } else {
        return [
          createVNode("i", { class: "fab fa-youtube" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div></div></div><div class="team-block col-lg-3 col-sm-6"><div class="inner-box wow fadeInLeft" data-wow-delay="400ms"><div class="image-box"><figure class="image overlay-anim">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "page-team-details" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_3$2)} alt=""${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_3$2,
            alt: ""
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</figure><div class="info-box"><span class="designation">Room Service</span><h4 class="name">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "page-team-details" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Ralph Nguyen`);
      } else {
        return [
          createTextVNode("Ralph Nguyen")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h4><div class="social-links">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<i class="fab fa-facebook"${_scopeId}></i>`);
      } else {
        return [
          createVNode("i", { class: "fab fa-facebook" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<i class="fab fa-twitter"${_scopeId}></i>`);
      } else {
        return [
          createVNode("i", { class: "fab fa-twitter" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<i class="fab fa-linkedin"${_scopeId}></i>`);
      } else {
        return [
          createVNode("i", { class: "fab fa-linkedin" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<i class="fab fa-youtube"${_scopeId}></i>`);
      } else {
        return [
          createVNode("i", { class: "fab fa-youtube" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div></div></div></div></div></section>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/home1/Team.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_8 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$2 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "booking-section" }, _attrs))}><div class="auto-container"><div class="row"><div class="col-lg-6 booking-form-column wow fadeInUp"><div class="inner-column"><div class="sec-title"><span class="sub-title">ROOMS &amp; SUITES</span><h2>Hotel Booking </h2></div><form class="bk-form"><div class="frm-field"><input type="text" name="check-in" class="date-pick" placeholder="Check in"><img${ssrRenderAttr("src", _imports_0$7)} alt=""></div><div class="frm-field"><input type="text" name="check-in" class="date-pick" placeholder="Check out"><img${ssrRenderAttr("src", _imports_0$7)} alt=""></div><div class="frm-field"><select><option>Adult</option><option>Adult</option><option>Adult</option><option>Adult</option></select><i class="fa fa-angle-down"></i></div><div class="frm-field"><select><option>Children</option><option>Children</option><option>Children</option><option>Children</option></select><i class="fa fa-angle-down"></i></div><div class="form-submit"><button type="submit">Check Availability</button></div></form></div></div><div class="col-lg-6 booking-content-column wow fadeInRight" data-wow-delay="200ms"><div class="inner-column"><div class="sec-title white"><span class="sub-title">Hoexr HOTEL</span><h2>Check Availability </h2></div><p>Each of our guest rooms feature a private bath, wi-fi, cable television and include full breakfast.</p><p>Mea nibh meis philosophia eu. Duis legimus efficiantur ea sea. Id placerat tacimates definitionem sea, prima quidam vim no. Duo nobis persecuti cu.</p><div class="contact-info"><div class="icon-box"><i class="flaticon-customer-service"></i></div><span>Booking Now</span><h4 class="title">956 220 6666</h4></div></div></div></div></div></section>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/home1/Booking.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_9 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$2;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "news-section" }, _attrs))}><div class="auto-container"><div class="sec-title text-center wow fadeInUp"><span class="sub-title">Hoexr Hotel News</span><h2>Latest News Update</h2></div><div class="row"><div class="news-block col-lg-4 col-md-6 wow fadeInUp"><div class="inner-box wow fadeInLeft"><div class="image-box"><figure class="image overlay-anim">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "news-details" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_0$8)} alt=""${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_0$8,
            alt: ""
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</figure><span class="date">DEC<br><small>20</small></span></div><div class="content-box"><ul class="post-info"><li><i class="fa fa-user"></i>Admin</li><li><i class="fa fa-comments"></i>October 19, 2022</li></ul><h4 class="title">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "news-details" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Retore Lighting Design <br${_scopeId}>in The Hotel`);
      } else {
        return [
          createTextVNode("Retore Lighting Design "),
          createVNode("br"),
          createTextVNode("in The Hotel")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h4>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "news-details",
    class: "read-more"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Read More<i class="fa-solid fa-arrow-right"${_scopeId}></i>`);
      } else {
        return [
          createTextVNode("Read More"),
          createVNode("i", { class: "fa-solid fa-arrow-right" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div><div class="news-block col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="300ms"><div class="inner-box wow fadeInLeft" data-wow-delay="200ms"><div class="image-box"><figure class="image overlay-anim">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "news-details" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_1$5)} alt=""${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_1$5,
            alt: ""
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</figure><span class="date">DEC<br><small>20</small></span></div><div class="content-box"><ul class="post-info"><li><i class="fa-solid fa-user"></i>Admin</li><li><i class="fa-solid fa-comments"></i>0 comments</li></ul><h4 class="title">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "news-details" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Swiming Benefits is <br${_scopeId}>Good For Your Health`);
      } else {
        return [
          createTextVNode("Swiming Benefits is "),
          createVNode("br"),
          createTextVNode("Good For Your Health")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h4>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "news-details",
    class: "read-more"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Read More<i class="fa-solid fa-arrow-right"${_scopeId}></i>`);
      } else {
        return [
          createTextVNode("Read More"),
          createVNode("i", { class: "fa-solid fa-arrow-right" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div><div class="news-block col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="600ms"><div class="inner-box wow fadeInLeft" data-wow-delay="300ms"><div class="image-box"><figure class="image overlay-anim">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "news-details" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_2$5)} alt=""${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_2$5,
            alt: ""
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</figure><span class="date">DEC<br><small>20</small></span></div><div class="content-box"><ul class="post-info"><li><i class="fa-solid fa-user"></i>Category</li><li><i class="fa-solid fa-comments"></i>October 19, 2022</li></ul><h4 class="title">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "news-details" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Avalible Now Health <br${_scopeId}>Club For Your Fitness `);
      } else {
        return [
          createTextVNode("Avalible Now Health "),
          createVNode("br"),
          createTextVNode("Club For Your Fitness ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h4>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "news-details",
    class: "read-more"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Read More<i class="fa-solid fa-arrow-right"${_scopeId}></i>`);
      } else {
        return [
          createTextVNode("Read More"),
          createVNode("i", { class: "fa-solid fa-arrow-right" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div></div></div></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/home1/News.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_10 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_SectionsHome1Slider = __nuxt_component_0;
  const _component_SectionsHome1About = __nuxt_component_0$1;
  const _component_SectionsHome1Room = __nuxt_component_2;
  const _component_SectionsHome1Services = __nuxt_component_3;
  const _component_SectionsHome1Video = __nuxt_component_4;
  const _component_SectionsHome1Features = __nuxt_component_5;
  const _component_SectionsHome1Testimonial = __nuxt_component_6;
  const _component_SectionsHome1Pricing = __nuxt_component_7;
  const _component_SectionsHome1Team = __nuxt_component_8;
  const _component_SectionsHome1Booking = __nuxt_component_9;
  const _component_SectionsHome1News = __nuxt_component_10;
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_SectionsHome1Slider, null, null, _parent));
  _push(ssrRenderComponent(_component_SectionsHome1About, null, null, _parent));
  _push(ssrRenderComponent(_component_SectionsHome1Room, null, null, _parent));
  _push(ssrRenderComponent(_component_SectionsHome1Services, null, null, _parent));
  _push(ssrRenderComponent(_component_SectionsHome1Video, null, null, _parent));
  _push(ssrRenderComponent(_component_SectionsHome1Features, null, null, _parent));
  _push(ssrRenderComponent(_component_SectionsHome1Testimonial, null, null, _parent));
  _push(ssrRenderComponent(_component_SectionsHome1Pricing, null, null, _parent));
  _push(ssrRenderComponent(_component_SectionsHome1Team, null, null, _parent));
  _push(ssrRenderComponent(_component_SectionsHome1Booking, null, null, _parent));
  _push(ssrRenderComponent(_component_SectionsHome1News, null, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-BemiICBd.mjs.map
