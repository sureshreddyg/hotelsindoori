import { _ as __nuxt_component_0$1 } from "./nuxt-link-CBXZo5aS.js";
import { b as _imports_0$1, _ as __nuxt_component_1$1, a as __nuxt_component_2, c as __nuxt_component_1$2 } from "./logo-2-DkRO01ry.js";
import { ref, onUnmounted, mergeProps, withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderClass, ssrRenderSlot } from "vue/server-renderer";
import { _ as _imports_1$1, a as _imports_2 } from "./news-info-2-CpM6A3sd.js";
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
const _imports_0 = "" + __publicAssetsURL("images/logo-v5-black.png");
const _imports_1 = "" + __publicAssetsURL("images/icons/search.png");
const _imports_3 = "" + __publicAssetsURL("images/logo.png");
const _sfc_main$2 = {
  __name: "Header2",
  __ssrInlineRender: true,
  setup(__props) {
    const scroll = ref(false);
    const handleScroll = () => {
      const scrollCheck = (void 0).scrollY > 100;
      if (scrollCheck !== scroll.value) {
        scroll.value = scrollCheck;
      }
    };
    onUnmounted(() => {
      (void 0).removeEventListener("scroll", handleScroll);
    });
    ref(false);
    const isSearch = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_LayoutMenu = __nuxt_component_1$1;
      const _component_LayoutMobileMenu = __nuxt_component_2;
      _push(`<header${ssrRenderAttrs(mergeProps({
        class: ["main-header header-style-two", { "moblie-search-active": isSearch.value }]
      }, _attrs))}><div class="auto-container"><div class="header-top"><div class="inner-box"><div class="top-left"><span><i class="icon fa fa-location"></i>1247/Plot No. 39, 15th Phase, USA</span></div><div class="top-right"><ul class="social-icon-one"><li>Follow Us :</li><li>`);
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
      _push(`</li><li>`);
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
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i class="fa-brands fa-linkedin"${_scopeId}></i>`);
          } else {
            return [
              createVNode("i", { class: "fa-brands fa-linkedin" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
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
      _push(`</li></ul></div></div></div><div class="main-box"><div class="logo-box"><div class="logo">`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="" title="Hoexr"${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_0,
                alt: "",
                title: "Hoexr"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="nav-outer"><nav class="nav main-menu">`);
      _push(ssrRenderComponent(_component_LayoutMenu, null, null, _parent));
      _push(`</nav></div><div class="outer-box"><button class="ui-btn ui-btn search-btn"><img${ssrRenderAttr("src", _imports_1)} alt=""></button><div class="mobile-nav-toggler"><span class="icon lnr-icon-bars"></span></div></div></div></div><div class="mobile-menu"><div class="menu-backdrop"></div><nav class="menu-box"><div class="upper-box"><div class="nav-logo">`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0$1)} alt="" title=""${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_0$1,
                alt: "",
                title: ""
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="close-btn"><i class="icon fa fa-times"></i></div></div>`);
      _push(ssrRenderComponent(_component_LayoutMobileMenu, null, null, _parent));
      _push(`<ul class="contact-list-one"><li><div class="contact-info-box"><i class="icon lnr-icon-phone-handset"></i><span class="title">Call Now</span>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "tel:+92880098670" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`+92 (8800) - 98670`);
          } else {
            return [
              createTextVNode("+92 (8800) - 98670")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></li><li><div class="contact-info-box"><span class="icon lnr-icon-envelope1"></span><span class="title">Send Email</span>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "mailto:help@company.com" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`help@company.com`);
          } else {
            return [
              createTextVNode("help@company.com")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></li><li><div class="contact-info-box"><span class="icon lnr-icon-clock"></span><span class="title">Send Email</span> Mon - Sat 8:00 - 6:30, Sunday - CLOSED </div></li></ul><ul class="social-links"><li>`);
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
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i class="fab fa-facebook-f"${_scopeId}></i>`);
          } else {
            return [
              createVNode("i", { class: "fab fa-facebook-f" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i class="fab fa-pinterest"${_scopeId}></i>`);
          } else {
            return [
              createVNode("i", { class: "fab fa-pinterest" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
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
      _push(`</li></ul></nav></div><div class="search-popup"><span class="search-back-drop"></span><button class="close-search"><span class="fa fa-times"></span></button><div class="search-inner"><form method="post" action=""><div class="form-group"><input type="search" name="search-field" value="" placeholder="Search..." required=""><button type="submit"><i class="fa fa-search"></i></button></div></form></div></div><div class="${ssrRenderClass([{ "fixed-header animated slideInDown": scroll.value }, "sticky-header"])}"><div class="auto-container"><div class="inner-container"><div class="logo">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        title: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_3)} alt="" title=""${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_3,
                alt: "",
                title: ""
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="nav-outer"><nav class="main-menu"><div class="navbar-collapse show collapse clearfix">`);
      _push(ssrRenderComponent(_component_LayoutMenu, null, null, _parent));
      _push(`</div></nav><div class="mobile-nav-toggler"><span class="icon lnr-icon-bars"></span></div></div></div></div></div></header>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/Header2.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = _sfc_main$2;
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$1;
  const _component_ElementsBackToTop = __nuxt_component_1$2;
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "main-footer footer-style-two" }, _attrs))}><div class="widgets-section"><div class="auto-container"><div class="row"><div class="footer-column col-xl-3 col-sm-6"><div class="footer-widget about-widget"><div class="logo">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
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
  _push(`</div><div class="text">Welcome to the best five-star deluxe hotel in New York. Hotel elementum sesue the aucan volutpat.</div><ul class="social-icon-two"><li>`);
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
  _push(`</li><li>`);
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
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<i class="fab fa-pinterest"${_scopeId}></i>`);
      } else {
        return [
          createVNode("i", { class: "fab fa-pinterest" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
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
  _push(`</li></ul></div></div><div class="footer-column col-lg-3 col-sm-6 mb-0"><div class="footer-widget links-widget wow fadeInLeft" data-wow-delay="200ms"><h4 class="widget-title">Services Links</h4><div class="widget-content"><ul class="user-links"><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<i class="fa-solid fa-crosshairs"${_scopeId}></i>Home`);
      } else {
        return [
          createVNode("i", { class: "fa-solid fa-crosshairs" }),
          createTextVNode("Home")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<i class="fa-solid fa-crosshairs"${_scopeId}></i>Suites`);
      } else {
        return [
          createVNode("i", { class: "fa-solid fa-crosshairs" }),
          createTextVNode("Suites")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<i class="fa-solid fa-crosshairs"${_scopeId}></i>Restaurant`);
      } else {
        return [
          createVNode("i", { class: "fa-solid fa-crosshairs" }),
          createTextVNode("Restaurant")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<i class="fa-solid fa-crosshairs"${_scopeId}></i>News`);
      } else {
        return [
          createVNode("i", { class: "fa-solid fa-crosshairs" }),
          createTextVNode("News")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<i class="fa-solid fa-crosshairs"${_scopeId}></i>About Hotel`);
      } else {
        return [
          createVNode("i", { class: "fa-solid fa-crosshairs" }),
          createTextVNode("About Hotel")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul><ul class="user-links"><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<i class="fa-solid fa-crosshairs"${_scopeId}></i>Rooms`);
      } else {
        return [
          createVNode("i", { class: "fa-solid fa-crosshairs" }),
          createTextVNode("Rooms")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<i class="fa-solid fa-crosshairs"${_scopeId}></i>Wellness`);
      } else {
        return [
          createVNode("i", { class: "fa-solid fa-crosshairs" }),
          createTextVNode("Wellness")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<i class="fa-solid fa-crosshairs"${_scopeId}></i>Spa`);
      } else {
        return [
          createVNode("i", { class: "fa-solid fa-crosshairs" }),
          createTextVNode("Spa")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<i class="fa-solid fa-crosshairs"${_scopeId}></i>Gallery`);
      } else {
        return [
          createVNode("i", { class: "fa-solid fa-crosshairs" }),
          createTextVNode("Gallery")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<i class="fa-solid fa-crosshairs"${_scopeId}></i>Contact`);
      } else {
        return [
          createVNode("i", { class: "fa-solid fa-crosshairs" }),
          createTextVNode("Contact")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></div></div></div><div class="footer-column col-lg-3 col-sm-6"><div class="footer-widget news-widget wow fadeInLeft" data-wow-delay="300ms"><h4 class="widget-title">Latest News</h4><div class="news-info"><figure class="image overlay-anim">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
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
  _push(`</figure><h6 class="title">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "#",
    title: ""
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Quisque at Felis <br${_scopeId}>Port Titordga`);
      } else {
        return [
          createTextVNode("Quisque at Felis "),
          createVNode("br"),
          createTextVNode("Port Titordga")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h6><span class="date">14 May 2023</span></div><div class="news-info"><figure class="image overlay-anim">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
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
  _push(`</figure><h6 class="title">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "#",
    title: ""
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Tips For Picking <br${_scopeId}>Vacation`);
      } else {
        return [
          createTextVNode("Tips For Picking "),
          createVNode("br"),
          createTextVNode("Vacation")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h6><span class="date">14 May 2023</span></div></div></div><div class="footer-column col-lg-3 col-sm-6"><div class="footer-widget info-widget wow fadeInLeft" data-wow-delay="300ms"><h4 class="widget-title">Information</h4><div class="widget-content"><article class="recent-post"><div class="inner"><div class="post-info"><i class="fas fa-phone"></i> 1800-121-3637</div><div class="post-info">+91-7052-101-786</div><div class="post-info"><i class="fa fa-envelope"></i> info@example.com</div><div class="post-info"><i class="fas fa-location"></i> 1247/Plot No. 39, 15th Phase, <br>United States of America</div></div></article></div></div></div></div></div></div><div class="footer-bottom"><div class="auto-container"><div class="inner-container"><div class="copyright-text">© Copyright Reserved by kodesolution.com</div>`);
  _push(ssrRenderComponent(_component_ElementsBackToTop, null, null, _parent));
  _push(`</div></div></div></footer>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/Footer2.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_LayoutHeader2 = __nuxt_component_0;
  const _component_LayoutFooter2 = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-wrapper" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_LayoutHeader2, null, null, _parent));
  _push(`<div>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
  _push(ssrRenderComponent(_component_LayoutFooter2, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/layout2.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const layout2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  layout2 as default
};
//# sourceMappingURL=layout2-rNTIDBPY.js.map
