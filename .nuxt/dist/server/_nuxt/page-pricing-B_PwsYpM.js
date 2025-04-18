import { _ as __nuxt_component_0$1 } from "./PageTitle-CR_gY_X3.js";
import { _ as __nuxt_component_0 } from "./nuxt-link-CBXZo5aS.js";
import { mergeProps, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import { _ as _imports_0, a as _imports_1 } from "./pricing2-2-BgPB2KcY.js";
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
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "pricing-section-two" }, _attrs))}><div class="auto-container"><div class="row"><div class="pricing-block-two col-lg-6 col-md-6 col-sm-12"><div class="inner-box"><div class="row"><div class="content-column col-lg-4 col-md-6 col-sm-12"><div class="inner-column wow fadeInLeft"><h6 class="title">$200<span> / Night</span></h6><span>Single Room</span><ul class="list-style-two"><li><i class="icon fa fa-circle-check"></i>Pick &amp; Drop Service</li><li><i class="icon fa fa-circle-check"></i>Swimming Pool</li><li><i class="icon fa fa-circle-check"></i>City Tour Guide</li><li><i class="icon fa fa-circle-check"></i>Fibre Internet</li></ul>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "page-contact",
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
  _push(`</div></div><div class="image-column col-lg-8 col-md-6 col-sm-12"><div class="image-box"><figure class="image wow fadeInUp"><img${ssrRenderAttr("src", _imports_0)} alt=""></figure></div></div></div></div></div><div class="pricing-block-two col-lg-6 col-md-6 col-sm-12"><div class="inner-box"><div class="row"><div class="content-column col-lg-4 col-md-6 col-sm-12"><div class="inner-column wow fadeInLeft"><h6 class="title">$250<span> / Night</span></h6><span>Double Room</span><ul class="list-style-two"><li><i class="icon fa fa-circle-check"></i>Pick &amp; Drop Service</li><li><i class="icon fa fa-circle-check"></i>Swimming Pool</li><li><i class="icon fa fa-circle-check"></i>City Tour Guide</li><li><i class="icon fa fa-circle-check"></i>Fibre Internet</li></ul>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "page-contact",
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
  _push(`</div></div><div class="image-column col-lg-8 col-md-6 col-sm-12"><div class="image-box"><figure class="image wow fadeInUp"><img${ssrRenderAttr("src", _imports_1)} alt=""></figure></div></div></div></div></div></div></div></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/innerpages/Pricing.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "page-pricing",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LayoutPageTitle = __nuxt_component_0$1;
      const _component_SectionsInnerpagesPricing = __nuxt_component_1;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_LayoutPageTitle, { title: "Pricing" }, null, _parent));
      _push(ssrRenderComponent(_component_SectionsInnerpagesPricing, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/page-pricing.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=page-pricing-B_PwsYpM.js.map
