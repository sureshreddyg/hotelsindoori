import { p as publicAssetsURL } from '../../renderer.mjs';
import { _ as __nuxt_component_0 } from './PageTitle-CR_gY_X3.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-CBXZo5aS.mjs';
import { useSSRContext, mergeProps, withCtx, createVNode, createTextVNode } from 'file:///Users/aimlabs/Projects/sureshreddyg/hotelsindoori/node_modules/vue/index.mjs';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderAttr } from 'file:///Users/aimlabs/Projects/sureshreddyg/hotelsindoori/node_modules/vue/server-renderer/index.mjs';
import { a as _imports_2, _ as _imports_1 } from './client-3-DuzNQsq5.mjs';
import { _ as _imports_0$1 } from './news-1-BFSCfVos.mjs';
import { _ as _imports_1$1, a as _imports_2$1 } from './news-3-CASv-cBH.mjs';
import { _ as _export_sfc } from '../server.mjs';
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

const _imports_0 = "" + publicAssetsURL("images/resource/news-details.jpg");
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "blog-details" }, _attrs))}><div class="container"><div class="row"><div class="col-xl-8 col-lg-7"><div class="blog-details__left"><div class="blog-details__img"><img${ssrRenderAttr("src", _imports_0)} alt=""><div class="blog-details__date"><span class="day">28</span><span class="month">Aug</span></div></div><div class="blog-details__content"><ul class="list-unstyled blog-details__meta"><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "news-details" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<i class="fas fa-user-circle"${_scopeId}></i> Admin`);
      } else {
        return [
          createVNode("i", { class: "fas fa-user-circle" }),
          createTextVNode(" Admin")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "news-details" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<i class="fas fa-comments"${_scopeId}></i> 02 Comments`);
      } else {
        return [
          createVNode("i", { class: "fas fa-comments" }),
          createTextVNode(" 02 Comments")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul><h3 class="blog-details__title">Delivering the best web design agency</h3><p class="blog-details__text-2">Mauris non dignissim purus, ac commodo diam. Donec sit amet lacinia nulla. Aliquam quis purus in justo pulvinar tempor. Aliquam tellus nulla, sollicitudin at euismod nec, feugiat at nisi. Quisque vitae odio nec lacus interdum tempus. Phasellus a rhoncus erat. Vivamus vel eros vitae est aliquet pellentesque vitae et nunc. Sed vitae leo vitae nisl pellentesque semper. </p><p class="blog-details__text-2">Mauris non dignissim purus, ac commodo diam. Donec sit amet lacinia nulla. Aliquam quis purus in justo pulvinar tempor. Aliquam tellus nulla, sollicitudin at euismod nec, feugiat at nisi. Quisque vitae odio nec lacus interdum tempus. Phasellus a rhoncus erat. Vivamus vel eros vitae est aliquet pellentesque vitae et nunc. Sed vitae leo vitae nisl pellentesque semper. </p><p class="blog-details__text-2">Mauris non dignissim purus, ac commodo diam. Donec sit amet lacinia nulla. Aliquam quis purus in justo pulvinar tempor. Aliquam tellus nulla, sollicitudin at euismod nec, feugiat at nisi. Quisque vitae odio nec lacus interdum tempus. Phasellus a rhoncus erat. Vivamus vel eros vitae est aliquet pellentesque vitae et nunc. Sed vitae leo vitae nisl pellentesque semper. </p></div><div class="blog-details__bottom"><p class="blog-details__tags"><span>Tags</span> `);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "news-details" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Business`);
      } else {
        return [
          createTextVNode("Business")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(` `);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "news-details" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Agency`);
      } else {
        return [
          createTextVNode("Agency")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</p><div class="blog-details__social-list">`);
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
  _push(`</div></div><div class="nav-links"><div class="prev">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "news-details",
    rel: "prev"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Bring to the table win-win survival strategies`);
      } else {
        return [
          createTextVNode("Bring to the table win-win survival strategies")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="next">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "news-details",
    rel: "next"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`How to lead a healthy &amp; well-balanced life`);
      } else {
        return [
          createTextVNode("How to lead a healthy & well-balanced life")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><div class="comment-one"><h3 class="comment-one__title">2 Comments</h3><div class="comment-one__single"><div class="comment-one__image"><img${ssrRenderAttr("src", _imports_2)} alt=""></div><div class="comment-one__content"><h3>Kevin Martin</h3><p>Mauris non dignissim purus, ac commodo diam. Donec sit amet lacinia nulla. Aliquam quis purus in justo pulvinar tempor. Aliquam tellus nulla, sollicitudin at euismod. </p>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "news-details",
    class: "theme-btn btn-style-one comment-one__btn"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span class="btn-title"${_scopeId}>Reply</span>`);
      } else {
        return [
          createVNode("span", { class: "btn-title" }, "Reply")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><div class="comment-one__single"><div class="comment-one__image"><img${ssrRenderAttr("src", _imports_1)} alt=""></div><div class="comment-one__content"><h3>Sarah Albert</h3><p>Mauris non dignissim purus, ac commodo diam. Donec sit amet lacinia nulla. Aliquam quis purus in justo pulvinar tempor. Aliquam tellus nulla, sollicitudin at euismod. </p>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "news-details",
    class: "theme-btn btn-style-one comment-one__btn"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span class="btn-title"${_scopeId}>Reply</span>`);
      } else {
        return [
          createVNode("span", { class: "btn-title" }, "Reply")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><div class="comment-form"><h3 class="comment-form__title">Leave a Comment</h3><form id="contact_form" name="contact_form" class="" action="includes/sendmail.php" method="post"><div class="row"><div class="col-sm-6"><div class="mb-3"><input name="form_name" class="form-control" type="text" placeholder="Enter Name"></div></div><div class="col-sm-6"><div class="mb-3"><input name="form_email" class="form-control required email" type="email" placeholder="Enter Email"></div></div></div><div class="mb-3"><textarea name="form_message" class="form-control required" rows="5" placeholder="Enter Message"></textarea></div><div class="mb-3"><input name="form_botcheck" class="form-control" type="hidden" value=""><button type="submit" class="theme-btn btn-style-one" data-loading-text="Please wait..."><span class="btn-title">Submit Comment</span></button></div></form></div></div></div></div><div class="col-xl-4 col-lg-5"><div class="sidebar"><div class="sidebar__single sidebar__search"><form action="#" class="sidebar__search-form"><input type="search" placeholder="Search here"><button type="submit"><i class="lnr-icon-search"></i></button></form></div><div class="sidebar__single sidebar__post"><h3 class="sidebar__title">Latest Posts</h3><ul class="sidebar__post-list list-unstyled"><li><div class="sidebar__post-image"><img${ssrRenderAttr("src", _imports_0$1)} alt=""></div><div class="sidebar__post-content"><h3><span class="sidebar__post-content-meta"><i class="fas fa-user-circle"></i>Admin</span> `);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "news-details" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Top crypto exchange influencers`);
      } else {
        return [
          createTextVNode("Top crypto exchange influencers")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h3></div></li><li><div class="sidebar__post-image"><img${ssrRenderAttr("src", _imports_1$1)} alt=""></div><div class="sidebar__post-content"><h3><span class="sidebar__post-content-meta"><i class="fas fa-user-circle"></i>Admin</span> `);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "news-details" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Necessity may give us best virtual court`);
      } else {
        return [
          createTextVNode("Necessity may give us best virtual court")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h3></div></li><li><div class="sidebar__post-image"><img${ssrRenderAttr("src", _imports_2$1)} alt=""></div><div class="sidebar__post-content"><h3><span class="sidebar__post-content-meta"><i class="fas fa-user-circle"></i>Admin</span> `);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "news-details" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`You should know about business plan`);
      } else {
        return [
          createTextVNode("You should know about business plan")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h3></div></li></ul></div><div class="sidebar__single sidebar__category"><h3 class="sidebar__title">Categories</h3><ul class="sidebar__category-list list-unstyled"><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "news-details" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Business<span class="icon-right-arrow"${_scopeId}></span>`);
      } else {
        return [
          createTextVNode("Business"),
          createVNode("span", { class: "icon-right-arrow" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="active">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "news-details" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Digital Agency<span class="icon-right-arrow"${_scopeId}></span>`);
      } else {
        return [
          createTextVNode("Digital Agency"),
          createVNode("span", { class: "icon-right-arrow" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "news-details" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Introductions<span class="icon-right-arrow"${_scopeId}></span>`);
      } else {
        return [
          createTextVNode("Introductions"),
          createVNode("span", { class: "icon-right-arrow" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "news-details" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`New Technologies<span class="icon-right-arrow"${_scopeId}></span>`);
      } else {
        return [
          createTextVNode("New Technologies"),
          createVNode("span", { class: "icon-right-arrow" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "news-details" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Parallax Effects<span class="icon-right-arrow"${_scopeId}></span>`);
      } else {
        return [
          createTextVNode("Parallax Effects"),
          createVNode("span", { class: "icon-right-arrow" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "news-details" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Web Development<span class="icon-right-arrow"${_scopeId}></span>`);
      } else {
        return [
          createTextVNode("Web Development"),
          createVNode("span", { class: "icon-right-arrow" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></div><div class="sidebar__single sidebar__tags"><h3 class="sidebar__title">Tags</h3><div class="sidebar__tags-list">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Consulting`);
      } else {
        return [
          createTextVNode("Consulting")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(` `);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Agency`);
      } else {
        return [
          createTextVNode("Agency")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(` `);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Business`);
      } else {
        return [
          createTextVNode("Business")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(` `);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Digital`);
      } else {
        return [
          createTextVNode("Digital")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(` `);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Experience`);
      } else {
        return [
          createTextVNode("Experience")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(` `);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Technology`);
      } else {
        return [
          createTextVNode("Technology")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><div class="sidebar__single sidebar__comments"><h3 class="sidebar__title">Recent Comments</h3><ul class="sidebar__comments-list list-unstyled"><li><div class="sidebar__comments-icon"><i class="fas fa-comments"></i></div><div class="sidebar__comments-text-box"><p>A wordpress commenter on <br> launch new mobile app</p></div></li><li><div class="sidebar__comments-icon"><i class="fas fa-comments"></i></div><div class="sidebar__comments-text-box"><p><span>John Doe</span> on template:</p><h5>comments</h5></div></li><li><div class="sidebar__comments-icon"><i class="fas fa-comments"></i></div><div class="sidebar__comments-text-box"><p>A wordpress commenter on <br> launch new mobile app</p></div></li><li><div class="sidebar__comments-icon"><i class="fas fa-comments"></i></div><div class="sidebar__comments-text-box"><p><span>John Doe</span> on template:</p><h5>comments</h5></div></li></ul></div></div></div></div></div></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/innerpages/Newsdetails.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "news-details",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LayoutPageTitle = __nuxt_component_0;
      const _component_SectionsInnerpagesNewsdetails = __nuxt_component_1;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_LayoutPageTitle, { title: "News Details" }, null, _parent));
      _push(ssrRenderComponent(_component_SectionsInnerpagesNewsdetails, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/news-details.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=news-details-B1rn3nuA.mjs.map
