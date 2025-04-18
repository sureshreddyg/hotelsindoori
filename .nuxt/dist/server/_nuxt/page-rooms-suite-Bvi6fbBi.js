import { _ as __nuxt_component_0$1 } from "./PageTitle-CR_gY_X3.js";
import { _ as __nuxt_component_0 } from "./nuxt-link-CBXZo5aS.js";
import { mergeProps, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
import { _ as _imports_0, a as _imports_1, b as _imports_2, c as _imports_3, d as _imports_4, e as _imports_5 } from "./icon-3-CGsBK_jt.js";
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
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "feature-section" }, _attrs))}><div class="auto-container"><div class="row feature-row g-0 wow slideInUp" data-wow-delay="100ms"><div class="image-column col-lg-4 col-md-12 col-sm-12"><div class="inner-column"><div class="image-box"><figure class="image overlay-anim"><img${ssrRenderAttr("src", _imports_0)} alt=""></figure></div></div></div><div class="content-column col-lg-8 col-md-12 col-sm-12"><div class="inner-column"><div class="content-box"><div class="sec-title"><span class="sub-title">MODERN</span><h2>Fitness Center</h2><div class="text">Restaurant inilla duiman at elit finibus viverra nec a lacus themo the <br>nesudea seneoice misuscipit non sagie the fermen ziverra tristiue duru <br>the ivite dianne onen nivami acsestion augue artine.</div></div>`);
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
  _push(`<figure class="image-2"><img${ssrRenderAttr("src", _imports_1)} alt=""></figure></div></div></div></div><div class="row feature-row g-0 wow slideInUp" data-wow-delay="200ms"><div class="content-column col-lg-8 col-md-12 col-sm-12"><div class="inner-column"><div class="content-box"><div class="sec-title"><span class="sub-title">DISCOVER</span><h2>The Restaurant</h2><div class="text">Restaurant inilla duiman at elit finibus viverra nec a lacus themo the <br>nesudea seneoice misuscipit non sagie the fermen ziverra tristiue duru <br>the ivite dianne onen nivami acsestion augue artine.</div></div>`);
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
  _push(`<figure class="image-2"><img${ssrRenderAttr("src", _imports_2)} alt=""></figure></div></div></div><div class="image-column col-lg-4 col-md-12 col-sm-12"><div class="inner-column"><div class="image-box"><figure class="image overlay-anim"><img${ssrRenderAttr("src", _imports_3)} alt=""></figure></div></div></div></div><div class="row feature-row g-0 wow slideInUp" data-wow-delay="300ms"><div class="image-column col-lg-4 col-md-12 col-sm-12"><div class="inner-column"><div class="image-box"><figure class="image overlay-anim"><img${ssrRenderAttr("src", _imports_4)} alt=""></figure></div></div></div><div class="content-column col-lg-8 col-md-12 col-sm-12"><div class="inner-column"><div class="content-box"><div class="sec-title"><span class="sub-title">EXPERIENCES</span><h2>Spa Center</h2><div class="text">Restaurant inilla duiman at elit finibus viverra nec a lacus themo the <br>nesudea seneoice misuscipit non sagie the fermen ziverra tristiue duru <br>the ivite dianne onen nivami acsestion augue artine.</div></div>`);
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
  _push(`<figure class="image-2"><img${ssrRenderAttr("src", _imports_5)} alt=""></figure></div></div></div></div></div></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/innerpages/Roomsuite.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "page-rooms-suite",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LayoutPageTitle = __nuxt_component_0$1;
      const _component_SectionsInnerpagesRoomsuite = __nuxt_component_1;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_LayoutPageTitle, { title: "Rooms And Suits" }, null, _parent));
      _push(ssrRenderComponent(_component_SectionsInnerpagesRoomsuite, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/page-rooms-suite.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=page-rooms-suite-Bvi6fbBi.js.map
