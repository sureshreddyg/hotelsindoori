import { _ as __nuxt_component_0$1 } from "./PageTitle-CR_gY_X3.js";
import { _ as __nuxt_component_0 } from "./nuxt-link-CBXZo5aS.js";
import { ref, resolveComponent, mergeProps, withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import { Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import { _ as _imports_0, a as _imports_1, b as _imports_2 } from "./room-4-Czjz_4Wd.js";
import { _ as _imports_1$1, a as _imports_2$1 } from "./news-info-2-CpM6A3sd.js";
import { _ as _export_sfc } from "../server.mjs";
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
const _imports_3 = "" + __publicAssetsURL("images/resource/room-6.jpg");
const _sfc_main$1 = {
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    const thumbsSwiper = ref(null);
    const setThumbsSwiper = (swiper) => {
      thumbsSwiper.value = swiper;
    };
    return {
      Thumbs,
      thumbsSwiper,
      setThumbsSwiper
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_swiper = resolveComponent("swiper");
  const _component_swiper_slide = resolveComponent("swiper-slide");
  const _component_NuxtLink = __nuxt_component_0;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "blog-details pt-120 pb-120" }, _attrs))}><div class="auto-container"><div class="row"><div class="col-xl-8 col-lg-7 product-details rd-page"><div class="testimonials bxslider"><div class="swiper-container testimonial-content-home5">`);
  _push(ssrRenderComponent(_component_swiper, {
    modules: [$setup.Thumbs],
    thumbs: { swiper: $setup.thumbsSwiper },
    "slides-per-view": 1,
    "space-between": 30,
    onSwiper: _ctx.onSwiper,
    onSlideChange: _ctx.onSlideChange
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_swiper_slide, { class: "testimonial-block-home5" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="inner-box"${_scopeId2}><div class="image-box"${_scopeId2}><figure class="image"${_scopeId2}><img${ssrRenderAttr("src", _imports_0)} alt=""${_scopeId2}></figure></div></div>`);
            } else {
              return [
                createVNode("div", { class: "inner-box" }, [
                  createVNode("div", { class: "image-box" }, [
                    createVNode("figure", { class: "image" }, [
                      createVNode("img", {
                        src: _imports_0,
                        alt: ""
                      })
                    ])
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_swiper_slide, { class: "testimonial-block-home5" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="inner-box"${_scopeId2}><div class="image-box"${_scopeId2}><figure class="image"${_scopeId2}><img${ssrRenderAttr("src", _imports_1)} alt=""${_scopeId2}></figure></div></div>`);
            } else {
              return [
                createVNode("div", { class: "inner-box" }, [
                  createVNode("div", { class: "image-box" }, [
                    createVNode("figure", { class: "image" }, [
                      createVNode("img", {
                        src: _imports_1,
                        alt: ""
                      })
                    ])
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_swiper_slide, { class: "testimonial-block-home5" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="inner-box"${_scopeId2}><div class="image-box"${_scopeId2}><figure class="image"${_scopeId2}><img${ssrRenderAttr("src", _imports_2)} alt=""${_scopeId2}></figure></div></div>`);
            } else {
              return [
                createVNode("div", { class: "inner-box" }, [
                  createVNode("div", { class: "image-box" }, [
                    createVNode("figure", { class: "image" }, [
                      createVNode("img", {
                        src: _imports_2,
                        alt: ""
                      })
                    ])
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_swiper_slide, { class: "testimonial-block-home5" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="inner-box"${_scopeId2}><div class="image-box"${_scopeId2}><figure class="image"${_scopeId2}><img${ssrRenderAttr("src", _imports_3)} alt=""${_scopeId2}></figure></div></div>`);
            } else {
              return [
                createVNode("div", { class: "inner-box" }, [
                  createVNode("div", { class: "image-box" }, [
                    createVNode("figure", { class: "image" }, [
                      createVNode("img", {
                        src: _imports_3,
                        alt: ""
                      })
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
          createVNode(_component_swiper_slide, { class: "testimonial-block-home5" }, {
            default: withCtx(() => [
              createVNode("div", { class: "inner-box" }, [
                createVNode("div", { class: "image-box" }, [
                  createVNode("figure", { class: "image" }, [
                    createVNode("img", {
                      src: _imports_0,
                      alt: ""
                    })
                  ])
                ])
              ])
            ]),
            _: 1
          }),
          createVNode(_component_swiper_slide, { class: "testimonial-block-home5" }, {
            default: withCtx(() => [
              createVNode("div", { class: "inner-box" }, [
                createVNode("div", { class: "image-box" }, [
                  createVNode("figure", { class: "image" }, [
                    createVNode("img", {
                      src: _imports_1,
                      alt: ""
                    })
                  ])
                ])
              ])
            ]),
            _: 1
          }),
          createVNode(_component_swiper_slide, { class: "testimonial-block-home5" }, {
            default: withCtx(() => [
              createVNode("div", { class: "inner-box" }, [
                createVNode("div", { class: "image-box" }, [
                  createVNode("figure", { class: "image" }, [
                    createVNode("img", {
                      src: _imports_2,
                      alt: ""
                    })
                  ])
                ])
              ])
            ]),
            _: 1
          }),
          createVNode(_component_swiper_slide, { class: "testimonial-block-home5" }, {
            default: withCtx(() => [
              createVNode("div", { class: "inner-box" }, [
                createVNode("div", { class: "image-box" }, [
                  createVNode("figure", { class: "image" }, [
                    createVNode("img", {
                      src: _imports_3,
                      alt: ""
                    })
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
  _push(`</div><div class="swiper-container testimonial-thumbs-home5"><div class="swiper-wrapper">`);
  _push(ssrRenderComponent(_component_swiper, {
    class: "thumb-box ms-0",
    "slides-per-view": 4,
    modules: [$setup.Thumbs],
    "watch-slides-progress": "",
    onSwiper: $setup.setThumbsSwiper,
    "space-between": 10
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_swiper_slide, { class: "testimonial-thumb" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<figure class="image item"${_scopeId2}><img${ssrRenderAttr("src", _imports_0)} alt=""${_scopeId2}></figure>`);
            } else {
              return [
                createVNode("figure", { class: "image item" }, [
                  createVNode("img", {
                    src: _imports_0,
                    alt: ""
                  })
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_swiper_slide, { class: "testimonial-thumb" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<figure class="image item"${_scopeId2}><img${ssrRenderAttr("src", _imports_1)} alt=""${_scopeId2}></figure>`);
            } else {
              return [
                createVNode("figure", { class: "image item" }, [
                  createVNode("img", {
                    src: _imports_1,
                    alt: ""
                  })
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_swiper_slide, { class: "testimonial-thumb" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<figure class="image item"${_scopeId2}><img${ssrRenderAttr("src", _imports_2)} alt=""${_scopeId2}></figure>`);
            } else {
              return [
                createVNode("figure", { class: "image item" }, [
                  createVNode("img", {
                    src: _imports_2,
                    alt: ""
                  })
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_swiper_slide, { class: "testimonial-thumb" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<figure class="image item"${_scopeId2}><img${ssrRenderAttr("src", _imports_3)} alt=""${_scopeId2}></figure>`);
            } else {
              return [
                createVNode("figure", { class: "image item" }, [
                  createVNode("img", {
                    src: _imports_3,
                    alt: ""
                  })
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_swiper_slide, { class: "testimonial-thumb" }, {
            default: withCtx(() => [
              createVNode("figure", { class: "image item" }, [
                createVNode("img", {
                  src: _imports_0,
                  alt: ""
                })
              ])
            ]),
            _: 1
          }),
          createVNode(_component_swiper_slide, { class: "testimonial-thumb" }, {
            default: withCtx(() => [
              createVNode("figure", { class: "image item" }, [
                createVNode("img", {
                  src: _imports_1,
                  alt: ""
                })
              ])
            ]),
            _: 1
          }),
          createVNode(_component_swiper_slide, { class: "testimonial-thumb" }, {
            default: withCtx(() => [
              createVNode("figure", { class: "image item" }, [
                createVNode("img", {
                  src: _imports_2,
                  alt: ""
                })
              ])
            ]),
            _: 1
          }),
          createVNode(_component_swiper_slide, { class: "testimonial-thumb" }, {
            default: withCtx(() => [
              createVNode("figure", { class: "image item" }, [
                createVNode("img", {
                  src: _imports_3,
                  alt: ""
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
  _push(`</div></div></div><div class="room-details__left"><div class="wrapper"><h3>Description of Room</h3><p class="text">Mauris non dignissim purus, ac commodo diam. Donec sit amet lacinia nulla. Aliquam quis purus in justo pulvinar tempor. Aliquam tellus nulla, sollicitudin at euismod nec, feugiat at nisi. Quisque vitae odio nec lacus interdum tempus. Phasellus a rhoncus erat. Vivamus vel eros vitae est aliquet pellentesque vitae et nunc. Sed vitae leo vitae nisl pellentesque semper.</p><div class="row justify-content-center"><div class="col-xl-12"><div class="room-details__content-right mb-40 mt-20"><div class="room-details__details-box"><div class="row"><div class="col-6 col-md-3"><p class="text mb-0">Room Size</p><h6>600Sq</h6></div><div class="col-6 col-md-3"><p class="text mb-0">Rooms Bed</p><h6>2 Single Bed</h6></div><div class="col-6 col-md-3"><p class="text mb-0">Occupancy</p><h6>Three Persons</h6></div><div class="col-6 col-md-3"><p class="text mb-0">View</p><h6>Sea View</h6></div></div></div></div></div></div><p class="text">Mauris non dignissim purus, ac commodo diam. Donec sit amet lacinia nulla. Aliquam quis purus in justo pulvinar tempor. Aliquam tellus nulla, sollicitudin at euismod nec, feugiat at nisi. Quisque vitae odio nec lacus interdum tempus. Phasellus a rhoncus erat. Vivamus vel eros vitae est aliquet pellentesque vitae et nunc. Sed vitae leo vitae nisl pellentesque semper.</p></div><div class="mt-40"><h4>Room Facilities</h4><div class="row room-facility-list mb-40"><div class="col-sm-6 col-xl-4"><div class="list-one d-flex align-items-center me-sm-4 mb-3"><div class="icon text-theme-color1 mr-10 flex-shrink-0"><i class="far fa-air-conditioner"></i></div><h6 class="title m-0">Air Conditionar</h6></div></div><div class="col-sm-6 col-xl-4"><div class="list-one d-flex align-items-center me-sm-4 mb-3"><div class="icon text-theme-color1 mr-10 flex-shrink-0"><i class="far fa-swimming-pool"></i></div><h6 class="title m-0">Swiming Pool</h6></div></div><div class="col-sm-6 col-xl-4"><div class="list-one d-flex align-items-center me-sm-4 mb-3"><div class="icon text-theme-color1 mr-10 flex-shrink-0"><i class="far fa-dumbbell"></i></div><h6 class="title m-0">Gymnasium</h6></div></div><div class="col-sm-6 col-xl-4"><div class="list-one d-flex align-items-center me-sm-4 mb-3"><div class="icon text-theme-color1 mr-10 flex-shrink-0"><i class="fas fa-parking-circle"></i></div><h6 class="title m-0">Parking</h6></div></div><div class="col-sm-6 col-xl-4"><div class="list-one d-flex align-items-center me-sm-4 mb-3"><div class="icon text-theme-color1 mr-10 flex-shrink-0"><i class="far fa-shield-check"></i></div><h6 class="title m-0">Security</h6></div></div><div class="col-sm-6 col-xl-4"><div class="list-one d-flex align-items-center me-sm-4"><div class="icon text-theme-color1 mr-10 flex-shrink-0"><i class="far fa-child"></i></div><h6 class="title m-0">Playground</h6></div></div></div></div><div class="d-sm-flex align-items-sm-center justify-content-sm-between pt-40 pb-40 border-top"><h6 class="my-sm-0">Share Details</h6><div class="blog-details__social-list">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "news-details" }, {
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
  _push(` `);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "news-details" }, {
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
  _push(` `);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "news-details" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<i class="fab fa-pinterest-p"${_scopeId}></i>`);
      } else {
        return [
          createVNode("i", { class: "fab fa-pinterest-p" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(` `);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "news-details" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<i class="fab fa-instagram"${_scopeId}></i>`);
      } else {
        return [
          createVNode("i", { class: "fab fa-instagram" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><div class="p-4 p-lg-5 bg-light"><h4 class="mt-0">Send Us Your Question</h4><form id="contact_form" name="contact_form" class="" action="includes/sendmail.php" method="post"><div class="row"><div class="col-sm-6 col-xl-4"><div class="mb-3"><input name="form_name" class="form-control bg-white" type="text" placeholder="Enter Name"></div></div><div class="col-sm-6 col-xl-4"><div class="mb-3"><input name="form_email" class="form-control bg-white required email" type="email" placeholder="Enter Email"></div></div><div class="col-xl-4"><div class="mb-3"><input name="form_phone" class="form-control bg-white required phone" type="number" placeholder="Enter Phone"></div></div></div><div class="mb-3"><textarea name="form_message" class="form-control bg-white required" rows="5" placeholder="Enter Message"></textarea></div><div class="mb-0"><input name="form_botcheck" class="form-control" type="hidden" value=""><button type="submit" class="theme-btn btn-style-one" data-loading-text="Please wait..."><span class="btn-title">Submit Comment</span></button></div></form></div></div></div><div class="col-xl-4 col-lg-5"><div class="sidebar"><div class="sidebar__post mb-30"><form id="contact_form2" name="contact_form" class="" action="#" method="post"><div class="row"><div class="col-sm-12"><div class="mb-3"><label class="form-label">Check In</label><input name="form_name" class="form-control bg-white" type="text" placeholder="Arrive Date"></div></div><div class="col-sm-12"><div class="mb-3"><label class="form-label">Check Out</label><input name="form_name" class="form-control bg-white" type="text" placeholder="Departure Date"></div></div><div class="col-sm-12"><div class="mb-3"><label class="form-label">Guests</label><select class="form-select form-control bg-white"><option selected disabled value="">Select</option><option>1</option><option>2</option><option>3</option><option>4</option><option>More</option></select></div></div></div><div class="mb-3"><input name="form_botcheck" class="form-control" type="hidden" value=""><button type="submit" class="theme-btn btn-style-one w-100" data-loading-text="Please wait..."><span class="btn-title">Book Now</span></button></div></form></div><div class="sidebar__single sidebar__post"><h3 class="sidebar__title">Compare Room</h3><ul class="sidebar__post-list list-unstyled"><li><div class="sidebar__post-image"><img${ssrRenderAttr("src", _imports_1$1)} alt=""></div><div class="sidebar__post-content"><h3><span class="sidebar__post-content-meta"><i class="far fa-door-open"></i>Economy Room</span> `);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`$175/Night`);
      } else {
        return [
          createTextVNode("$175/Night")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h3></div></li><li><div class="sidebar__post-image"><img${ssrRenderAttr("src", _imports_2$1)} alt=""></div><div class="sidebar__post-content"><h3><span class="sidebar__post-content-meta"><i class="far fa-door-open"></i>Deluxe Room</span> `);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`$250`);
      } else {
        return [
          createTextVNode("$250")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h3></div></li><li><div class="sidebar__post-image"><img${ssrRenderAttr("src", _imports_1$1)} alt=""></div><div class="sidebar__post-content"><h3><span class="sidebar__post-content-meta"><i class="far fa-door-open"></i>Super Deluxe Room</span> `);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`$320`);
      } else {
        return [
          createTextVNode("$320")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h3></div></li></ul></div></div></div></div></div></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/innerpages/Roomsdetails.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "room-details",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LayoutPageTitle = __nuxt_component_0$1;
      const _component_SectionsInnerpagesRoomsdetails = __nuxt_component_1;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_LayoutPageTitle, { title: "Rooms Details" }, null, _parent));
      _push(ssrRenderComponent(_component_SectionsInnerpagesRoomsdetails, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/room-details.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=room-details-CZwRjJp8.js.map
