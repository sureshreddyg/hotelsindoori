import { _ as __nuxt_component_0$1 } from "./PageTitle-CR_gY_X3.js";
import { _ as __nuxt_component_0 } from "./About-bK7TeLR8.js";
import { _ as __nuxt_component_1$1, a as __nuxt_component_2 } from "./Booking-BRRyTBRD.js";
import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
import { _ as _imports_0 } from "./client-DSLDF6mi.js";
import { _ as _imports_1, a as _imports_2 } from "./client-3-DuzNQsq5.js";
import { _ as _export_sfc } from "../server.mjs";
import "./nuxt-link-CBXZo5aS.js";
import "ufo";
import "./mail-BoKji7Pa.js";
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
const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "client-section pb-80" }, _attrs))}><div class="bg bg-image" style="${ssrRenderStyle({ "background-image": "url(/images/background/3.jpg)" })}"></div><div class="auto-container"><div class="sec-title light text-center"><span class="sub-title">What says for customer</span><h2>What Client&#39;s Say?</h2></div><div class="row"><div class="client-block col-lg-4 col-sm-6"><div class="inner-box wow fadeInLeft"><h4 class="title">Jina Nillson</h4><span>Founder of Webflex</span><div class="image-box"><figure class="image wow fadeInUp"><img${ssrRenderAttr("src", _imports_0)} alt=""></figure><i class="icon fa fa-circle-check"></i></div><div class="text">Upon they&#39;re seasons green day beast<br>without form man be firmament years shall<br>the appear moveth signs had.</div></div></div><div class="client-block col-lg-4 col-sm-6"><div class="inner-box wow fadeInLeft" data-wow-delay="200ms"><h4 class="title">Donald Browfish</h4><span>Founder of Webflex</span><div class="image-box"><figure class="image wow fadeInUp"><img${ssrRenderAttr("src", _imports_1)} alt=""></figure><i class="icon fa fa-circle-check"></i></div><div class="text">Upon they&#39;re seasons green day beast<br>without form man be firmament years shall<br>the appear moveth signs had.</div></div></div><div class="client-block col-lg-4 col-sm-6"><div class="inner-box wow fadeInLeft" data-wow-delay="300ms"><h4 class="title">Robotor Doses</h4><span>Founder of Webflex</span><div class="image-box"><figure class="image wow fadeInUp"><img${ssrRenderAttr("src", _imports_2)} alt=""></figure><i class="icon fa fa-circle-check"></i></div><div class="text">Upon they&#39;re seasons green day beast<br>without form man be firmament years shall<br>the appear moveth signs had.</div></div></div></div></div></section>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/innerpages/Testimonial.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_SectionsHome1About = __nuxt_component_0;
  const _component_SectionsHome2Video = __nuxt_component_1$1;
  const _component_SectionsHome2Booking = __nuxt_component_2;
  const _component_SectionsInnerpagesTestimonial = __nuxt_component_3;
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_SectionsHome1About, null, null, _parent));
  _push(ssrRenderComponent(_component_SectionsHome2Video, null, null, _parent));
  _push(ssrRenderComponent(_component_SectionsHome2Booking, null, null, _parent));
  _push(ssrRenderComponent(_component_SectionsInnerpagesTestimonial, null, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/innerpages/About.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "page-about",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LayoutPageTitle = __nuxt_component_0$1;
      const _component_SectionsInnerpagesAbout = __nuxt_component_1;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_LayoutPageTitle, { title: "About Us" }, null, _parent));
      _push(ssrRenderComponent(_component_SectionsInnerpagesAbout, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/page-about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=page-about-BU31N79W.js.map
