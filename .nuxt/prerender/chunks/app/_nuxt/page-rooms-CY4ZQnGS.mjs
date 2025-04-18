import { _ as __nuxt_component_0 } from './PageTitle-CR_gY_X3.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-CBXZo5aS.mjs';
import { useSSRContext, mergeProps, withCtx, createTextVNode, createVNode } from 'file:///Users/aimlabs/Projects/sureshreddyg/hotelsindoori/node_modules/vue/index.mjs';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderAttr } from 'file:///Users/aimlabs/Projects/sureshreddyg/hotelsindoori/node_modules/vue/server-renderer/index.mjs';
import { _ as _imports_0, a as _imports_1, b as _imports_2$1 } from './room-4-Czjz_4Wd.mjs';
import { _ as _imports_2, a as _imports_4 } from './room-5-BIF5qKJk.mjs';
import { _ as _export_sfc } from '../server.mjs';
import 'file:///Users/aimlabs/Projects/sureshreddyg/hotelsindoori/node_modules/ufo/dist/index.mjs';
import '../../renderer.mjs';
import 'file:///Users/aimlabs/Projects/sureshreddyg/hotelsindoori/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Users/aimlabs/Projects/sureshreddyg/hotelsindoori/node_modules/h3/dist/index.mjs';
import 'file:///Users/aimlabs/Projects/sureshreddyg/hotelsindoori/node_modules/devalue/index.js';
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

const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "rooms-section pb-100" }, _attrs))}><div class="auto-container"><div class="row"><div class="room-block col-lg-6 col-md-6"><div class="inner-box wow fadeIn"><div class="image-box"><figure class="image-2 overlay-anim"><img${ssrRenderAttr("src", _imports_0)} alt=""></figure></div><div class="content-box"><h6 class="title">`);
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
  _push(`</li></ul></div></div></div><div class="room-block col-lg-6 col-md-6"><div class="inner-box wow fadeIn" data-wow-delay="200ms"><div class="image-box"><figure class="image-2 overlay-anim"><img${ssrRenderAttr("src", _imports_1)} alt=""></figure></div><div class="content-box"><h6 class="title">`);
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
  _push(`</li></ul></div></div></div><div class="room-block col-lg-3 col-md-6"><div class="inner-box wow fadeIn" data-wow-delay="300ms"><div class="image-box"><figure class="image-2 overlay-anim"><img${ssrRenderAttr("src", _imports_2)} alt=""></figure></div><div class="content-box"><h6 class="title">`);
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
  _push(`</li></ul></div></div></div><div class="room-block col-lg-6 col-md-6"><div class="inner-box large-style wow fadeIn" data-wow-delay="400ms"><div class="image-box"><figure class="image-2 overlay-anim"><img${ssrRenderAttr("src", _imports_2$1)} alt=""></figure></div><div class="content-box"><h6 class="title">`);
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
  _push(`</li></ul></div></div></div><div class="room-block col-lg-3 col-md-6"><div class="inner-box wow fadeIn" data-wow-delay="500ms"><div class="image-box"><figure class="image-2 overlay-anim"><img${ssrRenderAttr("src", _imports_4)} alt=""></figure></div><div class="content-box"><h6 class="title">`);
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/innerpages/Rooms.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "page-rooms",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LayoutPageTitle = __nuxt_component_0;
      const _component_SectionsInnerpagesRooms = __nuxt_component_1;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_LayoutPageTitle, { title: "Rooms" }, null, _parent));
      _push(ssrRenderComponent(_component_SectionsInnerpagesRooms, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/page-rooms.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=page-rooms-CY4ZQnGS.mjs.map
