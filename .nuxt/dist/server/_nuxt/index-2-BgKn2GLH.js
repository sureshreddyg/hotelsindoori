import { _ as __nuxt_component_0$1 } from "./nuxt-link-CBXZo5aS.js";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import { resolveComponent, mergeProps, withCtx, createTextVNode, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderStyle } from "vue/server-renderer";
import { _ as _imports_0$5 } from "./banner-1-C-X6-Gm7.js";
import { _ as _export_sfc } from "../server.mjs";
import { _ as _imports_2$1 } from "./mail-BoKji7Pa.js";
import { _ as _imports_0$6, a as _imports_1$3 } from "./pricing2-2-BgPB2KcY.js";
import { _ as __nuxt_component_1$1, a as __nuxt_component_2$1 } from "./Booking-BRRyTBRD.js";
import { _ as _imports_0$7 } from "./client-DSLDF6mi.js";
import { _ as _imports_1$4, a as _imports_2$2 } from "./client-3-DuzNQsq5.js";
import { _ as _imports_1$5, a as _imports_2$3 } from "./news-3-CASv-cBH.js";
import "ufo";
import "#internal/nitro";
import "ofetch";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "defu";
import "klona";
import "devalue";
const _imports_0$4 = "" + __publicAssetsURL("images/banner/banner-2.jpg");
const _sfc_main$8 = {
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
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_swiper = resolveComponent("swiper");
  const _component_swiper_slide = resolveComponent("swiper-slide");
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "banner-section-two" }, _attrs))}>`);
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
        _push2(ssrRenderComponent(_component_swiper_slide, { class: "banner-slide-v2 slide-item" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="outer-box"${_scopeId2}><figure class="image wow fadeInUp"${_scopeId2}><img${ssrRenderAttr("src", _imports_0$4)} alt=""${_scopeId2}></figure><div class="content-box"${_scopeId2}><span class="sub-title" data-animation-in="fadeInUp" data-delay-in="0.1"${_scopeId2}>unique place and luxury hotel</span><h1 data-animation-in="fadeInUp" data-delay-in="0.3"${_scopeId2}>life enjoy with <br${_scopeId2}>the great moments</h1>`);
              _push3(ssrRenderComponent(_component_NuxtLink, {
                to: "page-about",
                class: "btn",
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
              _push3(`</div></div>`);
            } else {
              return [
                createVNode("div", { class: "outer-box" }, [
                  createVNode("figure", { class: "image wow fadeInUp" }, [
                    createVNode("img", {
                      src: _imports_0$4,
                      alt: ""
                    })
                  ]),
                  createVNode("div", { class: "content-box" }, [
                    createVNode("span", {
                      class: "sub-title",
                      "data-animation-in": "fadeInUp",
                      "data-delay-in": "0.1"
                    }, "unique place and luxury hotel"),
                    createVNode("h1", {
                      "data-animation-in": "fadeInUp",
                      "data-delay-in": "0.3"
                    }, [
                      createTextVNode("life enjoy with "),
                      createVNode("br"),
                      createTextVNode("the great moments")
                    ]),
                    createVNode(_component_NuxtLink, {
                      to: "page-about",
                      class: "btn",
                      "data-animation-in": "fadeInUp",
                      "data-delay-in": "0.5"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("rooms & suites")
                      ]),
                      _: 1
                    })
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_swiper_slide, { class: "banner-slide-v2 slide-item" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<figure class="image"${_scopeId2}><img${ssrRenderAttr("src", _imports_0$5)} alt=""${_scopeId2}></figure><div class="content-box"${_scopeId2}><span class="sub-title animate-4" data-animation-in="fadeInUp" data-delay-in="0.1"${_scopeId2}>unique place and luxury hotel</span><h1 class="animate-5" data-animation-in="fadeInUp" data-delay-in="0.3"${_scopeId2}>life enjoy with <br${_scopeId2}>the great moments</h1>`);
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
                    src: _imports_0$5,
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
          createVNode(_component_swiper_slide, { class: "banner-slide-v2 slide-item" }, {
            default: withCtx(() => [
              createVNode("div", { class: "outer-box" }, [
                createVNode("figure", { class: "image wow fadeInUp" }, [
                  createVNode("img", {
                    src: _imports_0$4,
                    alt: ""
                  })
                ]),
                createVNode("div", { class: "content-box" }, [
                  createVNode("span", {
                    class: "sub-title",
                    "data-animation-in": "fadeInUp",
                    "data-delay-in": "0.1"
                  }, "unique place and luxury hotel"),
                  createVNode("h1", {
                    "data-animation-in": "fadeInUp",
                    "data-delay-in": "0.3"
                  }, [
                    createTextVNode("life enjoy with "),
                    createVNode("br"),
                    createTextVNode("the great moments")
                  ]),
                  createVNode(_component_NuxtLink, {
                    to: "page-about",
                    class: "btn",
                    "data-animation-in": "fadeInUp",
                    "data-delay-in": "0.5"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("rooms & suites")
                    ]),
                    _: 1
                  })
                ])
              ])
            ]),
            _: 1
          }),
          createVNode(_component_swiper_slide, { class: "banner-slide-v2 slide-item" }, {
            default: withCtx(() => [
              createVNode("figure", { class: "image" }, [
                createVNode("img", {
                  src: _imports_0$5,
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
  _push(`<div class="checkout-form-section v2 wow slideInUp"><div class="auto-container"><div class="checkout-form"><div class="checkout-field"><h6>Check in</h6><div class="chk-field"><input class="date-pick" type="text" placeholder="20 June, 2023"><i class="fa fa-calendar"></i></div></div><div class="checkout-field"><h6>Check out</h6><div class="chk-field"><input class="date-pick" type="text" placeholder="20 June, 2023"><i class="fa fa-calendar"></i></div></div><div class="checkout-field br-0"><h6>Room</h6><div class="chk-field"><i class="fa fa-angle-down"></i><select><option>Standard Room Size </option><option>Standard Room Size </option><option>Standard Room Size </option><option>Standard Room Size </option></select></div></div><a href="" class="theme-btn btn-style-one"><span class="btn-title">check now</span></a></div></div></div></section>`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/home2/Slider.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$7]]);
const _imports_0$3 = "" + __publicAssetsURL("images/resource/about2-1.jpg");
const _imports_1$2 = "" + __publicAssetsURL("images/resource/about2-2.jpg");
const _sfc_main$7 = {};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "about-section-two" }, _attrs))}><div class="auto-container"><div class="row"><div class="content-column col-lg-7 wow fadeInRight" data-wow-delay="600ms"><div class="inner-column"><div class="sec-title"><span class="sub-title">Hoexr Luxury Hotel</span><h2>We Provide Outdoor <br>Activities To All Visitors</h2><div class="text">San Francisco has hills with views, the coast, excellent food &amp; <br>has been voted the happiest, healthiest and fittest city in the <br>States many times.</div></div><div class="outer-box"><div class="info-block"><div class="inner"><div class="icon-box"><i class="flaticon-light"></i></div><h4 class="title">The Best <br>Lighting</h4></div></div><div class="info-block"><div class="inner"><div class="icon-box"><i class="flaticon-pool"></i></div><h4 class="title">The Best <br>Swiming</h4></div></div></div><ul class="list-style-two"><li><i class="icon fa fa-circle-check"></i>It is a long fact that a reader will be distracted by the readable</li><li><i class="icon fa fa-circle-check"></i>Lorem Ipsum is simply dummy of the printing and industry</li><li><i class="icon fa fa-circle-check"></i>There are many variations of Lorem Ipsum majority</li></ul><div class="btn-box">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "page-about",
    class: "theme-btn btn-style-one"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span class="btn-title"${_scopeId}>Discover More</span>`);
      } else {
        return [
          createVNode("span", { class: "btn-title" }, "Discover More")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div><div class="image-column col-lg-5"><div class="inner-column wow fadeInLeft"><figure class="image-1 overlay-anim wow fadeInUp"><img${ssrRenderAttr("src", _imports_0$3)} alt=""></figure><figure class="image-2 overlay-anim wow fadeInLeft"><img${ssrRenderAttr("src", _imports_1$2)} alt=""></figure><div class="exp-box bounce-y"><figure class="overlay-anim wow fadeInLeft"><img${ssrRenderAttr("src", _imports_2$1)} alt=""></figure><h4 class="title">Luxury Room</h4><div class="text">Donec in quis the asd <br>pellentesque velit. Donec id <br>velit arcu posuere blane.</div></div></div></div></div></div></section>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/home2/About.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$6]]);
const _imports_0$2 = "" + __publicAssetsURL("images/resource/service2-1.jpg");
const _sfc_main$6 = {};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "service-section-two" }, _attrs))}><div class="auto-container"><div class="sec-title text-center wow fadeInUp"><span class="sub-title">Hoexr SERVICES</span><h2>Hotel Facilities</h2></div><div class="row"><div class="service-block-two col-lg-4 col-sm-6"><div class="inner-box wow fadeInLeft"><div class="image-box"><div class="icon-box wow fadeInUp"><i class="flaticon-bed-2"></i></div><h4 class="title">`);
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
  _push(`</h4></div><div class="content-box"><div class="text">Orci varius natoque penatibus magnis ders disney parturient ridiculus</div></div></div></div><div class="service-block-two col-lg-4 col-sm-6"><div class="inner-box wow fadeInLeft" data-wow-delay="200ms"><div class="image-box"><div class="icon-box wow fadeInUp"><i class="flaticon-swimming-pool"></i></div><h4 class="title">`);
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
  _push(`</h4></div><div class="content-box"><div class="text">Orci varius natoque penatibus magnis ders disney parturient ridiculus</div></div></div></div><div class="service-block-two col-lg-4 col-sm-6"><div class="inner-box wow fadeInLeft" data-wow-delay="300ms"><div class="image-box"><div class="icon-box wow fadeInUp"><i class="flaticon-car"></i></div><h4 class="title">`);
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
  _push(`</h4></div><div class="content-box"><div class="text">Orci varius natoque penatibus magnis ders disney parturient ridiculus</div></div></div></div><div class="service-block-two col-lg-4 col-sm-6"><div class="inner-box wow fadeInLeft" data-wow-delay="400ms"><div class="image-box"><div class="icon-box wow fadeInUp"><i class="flaticon-breakfast"></i></div><h4 class="title">`);
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
  _push(`</h4></div><div class="content-box"><div class="text">Orci varius natoque penatibus magnis ders disney parturient ridiculus</div></div></div></div><div class="service-block-two col-lg-4 col-sm-6"><div class="inner-box wow fadeInLeft" data-wow-delay="500ms"><div class="image-box"><div class="icon-box wow fadeInUp"><i class="flaticon-travel"></i></div><h4 class="title">`);
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
  _push(`</h4></div><div class="content-box"><div class="text">Orci varius natoque penatibus magnis ders disney parturient ridiculus</div></div></div></div><div class="service-block-two col-lg-4 col-sm-6"><div class="inner-box-two wow fadeInLeft" data-wow-delay="600ms"><div class="image-box"><figure class="image wow fadeInUp overlay-anim"><img${ssrRenderAttr("src", _imports_0$2)} alt=""></figure></div></div></div></div></div></section>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/home2/Services.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$5]]);
const _sfc_main$5 = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "pricing-section-two" }, _attrs))}><div class="auto-container"><div class="sec-title text-center"><span class="sub-title">Best price</span><h2>The Best Luxury Rooms <br> And Suites</h2></div><div class="row"><div class="pricing-block-two col-sm-6"><div class="inner-box"><div class="row"><div class="content-column col-lg-4 col-md-6"><div class="inner-column wow fadeInLeft"><h6 class="title">$200<span> / Night</span></h6><span>Single Room</span><ul class="list-style-two"><li><i class="icon fa fa-circle-check"></i>Pick &amp; Drop Service</li><li><i class="icon fa fa-circle-check"></i>Swimming Pool</li><li><i class="icon fa fa-circle-check"></i>City Tour Guide</li><li><i class="icon fa fa-circle-check"></i>Fibre Internet</li></ul>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "page-pricing",
    class: "book-now"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Book Now`);
      } else {
        return [
          createTextVNode("Book Now")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><div class="image-column col-lg-8 col-md-6"><div class="image-box"><figure class="image wow fadeInUp"><img${ssrRenderAttr("src", _imports_0$6)} alt=""></figure></div></div></div></div></div><div class="pricing-block-two col-sm-6"><div class="inner-box"><div class="row"><div class="content-column col-lg-4 col-md-6"><div class="inner-column wow fadeInLeft"><h6 class="title">$250<span> / Night</span></h6><span>Double Room</span><ul class="list-style-two"><li><i class="icon fa fa-circle-check"></i>Pick &amp; Drop Service</li><li><i class="icon fa fa-circle-check"></i>Swimming Pool</li><li><i class="icon fa fa-circle-check"></i>City Tour Guide</li><li><i class="icon fa fa-circle-check"></i>Fibre Internet</li></ul>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "page-pricing",
    class: "book-now"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Book Now`);
      } else {
        return [
          createTextVNode("Book Now")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><div class="image-column col-lg-8 col-md-6"><div class="image-box"><figure class="image wow fadeInUp"><img${ssrRenderAttr("src", _imports_1$3)} alt=""></figure></div></div></div></div></div></div></div></section>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/home2/Pricing.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$4 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "client-section" }, _attrs))}><div class="bg bg-image" style="${ssrRenderStyle({ "background-image": "url(/images/background/3.jpg)" })}"></div><div class="auto-container"><div class="sec-title light text-center"><span class="sub-title">What says for customer</span><h2>What Client&#39;s Say?</h2></div><div class="row"><div class="client-block col-lg-4 col-sm-6"><div class="inner-box wow fadeInLeft"><h4 class="title">Jina Nillson</h4><span>Founder of Webflex</span><div class="image-box"><figure class="image wow fadeInUp"><img${ssrRenderAttr("src", _imports_0$7)} alt=""></figure><i class="icon fa fa-circle-check"></i></div><div class="text">Upon they&#39;re seasons green day beast<br>without form man be firmament years shall<br>the appear moveth signs had.</div></div></div><div class="client-block col-lg-4 col-sm-6"><div class="inner-box wow fadeInLeft" data-wow-delay="200ms"><h4 class="title">Donald Browfish</h4><span>Founder of Webflex</span><div class="image-box"><figure class="image wow fadeInUp"><img${ssrRenderAttr("src", _imports_1$4)} alt=""></figure><i class="icon fa fa-circle-check"></i></div><div class="text">Upon they&#39;re seasons green day beast<br>without form man be firmament years shall<br>the appear moveth signs had.</div></div></div><div class="client-block col-lg-4 col-sm-6"><div class="inner-box wow fadeInLeft" data-wow-delay="300ms"><h4 class="title">Robotor Doses</h4><span>Founder of Webflex</span><div class="image-box"><figure class="image wow fadeInUp"><img${ssrRenderAttr("src", _imports_2$2)} alt=""></figure><i class="icon fa fa-circle-check"></i></div><div class="text">Upon they&#39;re seasons green day beast<br>without form man be firmament years shall<br>the appear moveth signs had.</div></div></div></div></div></section>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/home2/Testimonial.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_6 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$3 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "offer-banner wow slideInUp" }, _attrs))}><div class="auto-container"><div class="outer-box"><div class="row"><div class="content-colum col-lg-8 col-md-12 col-sm-12"><div class="inner-column"><div class="content-box"><span>Risus commodo viverra accumsan lacus vel facilisis. </span><h6 class="title">Special Holiday Offer</h6></div></div></div><div class="btn-column col-lg-4 col-md-12 col-sm-12"><div class="inner-column">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "page-contact",
    class: "read-more"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Book Now`);
      } else {
        return [
          createTextVNode("Book Now")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div></div></div></section>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/home2/Offer.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_7 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$2]]);
const _imports_0$1 = "" + __publicAssetsURL("images/resource/news2-1.jpg");
const _imports_1$1 = "" + __publicAssetsURL("images/resource/news-thumb.jpg");
const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "news-section-two" }, _attrs))}><div class="auto-container"><div class="sec-title text-center wow fadeInUp"><span class="sub-title">Hoexr Hotel News</span><h2>Latest News Update</h2></div><div class="row"><div class="news-block-two col-lg-4 col-sm-6 wow fadeInUp"><div class="inner-box wow fadeInLeft"><div class="image-box"><figure class="image overlay-anim">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "news-details" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_0$1)} alt=""${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_0$1,
            alt: ""
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</figure><span class="date">DEC<br><small>20</small></span></div><div class="content-box"><div class="info-box"><figure class="thumb">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "news-details" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_1$1)} alt=""${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_1$1,
            alt: ""
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</figure><span class="designation">Jonica Michel</span></div><h4 class="title">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "news-details" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Retore Lighting Design <br${_scopeId}> in The Hotel`);
      } else {
        return [
          createTextVNode("Retore Lighting Design "),
          createVNode("br"),
          createTextVNode(" in The Hotel")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h4><div class="btn-box"><span><i class="icon fa fa-comments"></i>0 Comments</span>`);
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
  _push(`</div></div></div></div><div class="news-block-two col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay="300ms"><div class="inner-box wow fadeInLeft" data-wow-delay="200ms"><div class="image-box"><figure class="image overlay-anim">`);
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
  _push(`</figure><span class="date">DEC<br><small>20</small></span></div><div class="content-box"><div class="info-box"><figure class="thumb">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "news-details" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_1$1)} alt=""${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_1$1,
            alt: ""
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</figure><span class="designation">Jonica Michel</span></div><h4 class="title">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "news-details" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Swiming Benefits is <br${_scopeId}> Good For Your Health`);
      } else {
        return [
          createTextVNode("Swiming Benefits is "),
          createVNode("br"),
          createTextVNode(" Good For Your Health")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h4><div class="btn-box"><span><i class="icon fa fa-comments"></i>0 Comments</span>`);
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
  _push(`</div></div></div></div><div class="news-block-two col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay="600ms"><div class="inner-box wow fadeInLeft" data-wow-delay="300ms"><div class="image-box"><figure class="image overlay-anim">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "news-details" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_2$3)} alt=""${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_2$3,
            alt: ""
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</figure><span class="date">DEC<br><small>20</small></span></div><div class="content-box"><div class="info-box"><figure class="thumb">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "news-details" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_1$1)} alt=""${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_1$1,
            alt: ""
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</figure><span class="designation">Jonica Michel</span></div><h4 class="title">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "news-details" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Avalible Now Health <br${_scopeId}> Club For Your Fitness `);
      } else {
        return [
          createTextVNode("Avalible Now Health "),
          createVNode("br"),
          createTextVNode(" Club For Your Fitness ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h4><div class="btn-box"><span><i class="icon fa fa-comments"></i>0 Comments</span>`);
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
  _push(`</div></div></div></div></div></div></section>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/home2/News.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_8 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const _imports_0 = "" + __publicAssetsURL("images/resource/client1-3.png");
const _imports_1 = "" + __publicAssetsURL("images/resource/client1-1.png");
const _imports_2 = "" + __publicAssetsURL("images/resource/client1-2.png");
const _imports_3 = "" + __publicAssetsURL("images/resource/client1-4.png");
const _imports_4 = "" + __publicAssetsURL("images/resource/client1-5.png");
const _sfc_main$1 = {
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
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_swiper = resolveComponent("swiper");
  const _component_swiper_slide = resolveComponent("swiper-slide");
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "client-section-two" }, _attrs))}><div class="auto-container">`);
  _push(ssrRenderComponent(_component_swiper, {
    "slides-per-view": 5,
    "space-between": 30,
    loop: true,
    autoplay: {
      delay: 7e3,
      disableOnInteraction: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 30
      },
      575: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      767: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      991: {
        slidesPerView: 4,
        spaceBetween: 30
      },
      1199: {
        slidesPerView: 5,
        spaceBetween: 30
      },
      1350: {
        slidesPerView: 5,
        spaceBetween: 30
      }
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
    class: "client-slider"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_swiper_slide, { class: "slide-item client-block" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<img${ssrRenderAttr("src", _imports_0)} alt=""${_scopeId3}>`);
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
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_NuxtLink, { to: "#" }, {
                  default: withCtx(() => [
                    createVNode("img", {
                      src: _imports_0,
                      alt: ""
                    })
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_swiper_slide, { class: "slide-item client-block" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<img${ssrRenderAttr("src", _imports_1)} alt=""${_scopeId3}>`);
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
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_NuxtLink, { to: "#" }, {
                  default: withCtx(() => [
                    createVNode("img", {
                      src: _imports_1,
                      alt: ""
                    })
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_swiper_slide, { class: "slide-item client-block" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<img${ssrRenderAttr("src", _imports_2)} alt=""${_scopeId3}>`);
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
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_NuxtLink, { to: "#" }, {
                  default: withCtx(() => [
                    createVNode("img", {
                      src: _imports_2,
                      alt: ""
                    })
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_swiper_slide, { class: "slide-item client-block" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<img${ssrRenderAttr("src", _imports_3)} alt=""${_scopeId3}>`);
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
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_NuxtLink, { to: "#" }, {
                  default: withCtx(() => [
                    createVNode("img", {
                      src: _imports_3,
                      alt: ""
                    })
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_swiper_slide, { class: "slide-item client-block" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<img${ssrRenderAttr("src", _imports_4)} alt=""${_scopeId3}>`);
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
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_NuxtLink, { to: "#" }, {
                  default: withCtx(() => [
                    createVNode("img", {
                      src: _imports_4,
                      alt: ""
                    })
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_swiper_slide, { class: "slide-item client-block" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<img${ssrRenderAttr("src", _imports_0)} alt=""${_scopeId3}>`);
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
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_NuxtLink, { to: "#" }, {
                  default: withCtx(() => [
                    createVNode("img", {
                      src: _imports_0,
                      alt: ""
                    })
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_swiper_slide, { class: "slide-item client-block" }, {
            default: withCtx(() => [
              createVNode(_component_NuxtLink, { to: "#" }, {
                default: withCtx(() => [
                  createVNode("img", {
                    src: _imports_0,
                    alt: ""
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(_component_swiper_slide, { class: "slide-item client-block" }, {
            default: withCtx(() => [
              createVNode(_component_NuxtLink, { to: "#" }, {
                default: withCtx(() => [
                  createVNode("img", {
                    src: _imports_1,
                    alt: ""
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(_component_swiper_slide, { class: "slide-item client-block" }, {
            default: withCtx(() => [
              createVNode(_component_NuxtLink, { to: "#" }, {
                default: withCtx(() => [
                  createVNode("img", {
                    src: _imports_2,
                    alt: ""
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(_component_swiper_slide, { class: "slide-item client-block" }, {
            default: withCtx(() => [
              createVNode(_component_NuxtLink, { to: "#" }, {
                default: withCtx(() => [
                  createVNode("img", {
                    src: _imports_3,
                    alt: ""
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(_component_swiper_slide, { class: "slide-item client-block" }, {
            default: withCtx(() => [
              createVNode(_component_NuxtLink, { to: "#" }, {
                default: withCtx(() => [
                  createVNode("img", {
                    src: _imports_4,
                    alt: ""
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(_component_swiper_slide, { class: "slide-item client-block" }, {
            default: withCtx(() => [
              createVNode(_component_NuxtLink, { to: "#" }, {
                default: withCtx(() => [
                  createVNode("img", {
                    src: _imports_0,
                    alt: ""
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/home2/Clients.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_9 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "index-2",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SectionsHome2Slider = __nuxt_component_0;
      const _component_SectionsHome2About = __nuxt_component_1;
      const _component_SectionsHome2Services = __nuxt_component_2;
      const _component_SectionsHome2Pricing = __nuxt_component_3;
      const _component_SectionsHome2Video = __nuxt_component_1$1;
      const _component_SectionsHome2Booking = __nuxt_component_2$1;
      const _component_SectionsHome2Testimonial = __nuxt_component_6;
      const _component_SectionsHome2Offer = __nuxt_component_7;
      const _component_SectionsHome2News = __nuxt_component_8;
      const _component_SectionsHome2Clients = __nuxt_component_9;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_SectionsHome2Slider, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionsHome2About, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionsHome2Services, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionsHome2Pricing, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionsHome2Video, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionsHome2Booking, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionsHome2Testimonial, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionsHome2Offer, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionsHome2News, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionsHome2Clients, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index-2.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-2-BgKn2GLH.js.map
