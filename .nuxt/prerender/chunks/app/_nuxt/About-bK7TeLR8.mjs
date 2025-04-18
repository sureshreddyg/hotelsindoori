import { p as publicAssetsURL } from '../../renderer.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-CBXZo5aS.mjs';
import { M as ModalVideo, _ as _imports_2 } from './mail-BoKji7Pa.mjs';
import { resolveComponent, withCtx, createVNode, useSSRContext } from 'file:///Users/aimlabs/Projects/sureshreddyg/hotelsindoori/node_modules/vue/index.mjs';
import { ssrRenderComponent, ssrRenderAttr } from 'file:///Users/aimlabs/Projects/sureshreddyg/hotelsindoori/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from '../server.mjs';

const _imports_0 = "" + publicAssetsURL("images/resource/about1-1.jpg");
const _imports_1 = "" + publicAssetsURL("images/resource/about1-2.jpg");
const _sfc_main = {
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
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0$1;
  const _component_modal_video = resolveComponent("modal-video");
  _push(`<!--[--><section class="about-section"><div class="auto-container"><div class="row"><div class="content-column col-xl-6 col-lg-6 order-lg-2 wow fadeInRight" data-wow-delay="600ms"><div class="inner-column"><div class="sec-title"><span class="sub-title">Hoexr Luxury Hotel</span><h2>Most Safe &amp; Rated <br>Hotel in London.</h2><div class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br>tempor incididunt ut labore et dolore magna aliqua. Quis ipsum <br>suspendisse ultrices gravida. Risus commodo maecenas accumsan<br> lacus vel facilisis.</div></div><div class="outer-box"><div class="info-block"><div class="inner"><div class="icon-box"><i class="flaticon-light"></i></div><h4 class="title">The Best <br>Lighting</h4></div></div><div class="info-block"><div class="inner"><div class="icon-box"><i class="flaticon-pool"></i></div><h4 class="title">The Best <br>Swiming</h4></div></div></div><div class="btn-box">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "page-about.html",
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
  _push(`<div class="contact-info"><div class="icon-box"><i class="flaticon-customer-service"></i></div><span>Booking Now</span><h4 class="title">956 220 6666</h4></div></div></div></div><div class="image-column col-xl-6 col-lg-6"><div class="inner-column wow fadeInLeft"><figure class="image-1 overlay-anim wow fadeInUp"><img${ssrRenderAttr("src", _imports_0)} alt=""></figure><figure class="image-2 overlay-anim wow fadeInLeft"><img${ssrRenderAttr("src", _imports_1)} alt=""></figure><div class="btn-box">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    onClick: $options.openVideo,
    class: "play-now-two",
    "data-fancybox": "gallery",
    "data-caption": ""
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<i class="icon fa fa-play" aria-hidden="true"${_scopeId}></i><span class="ripple"${_scopeId}></span>`);
      } else {
        return [
          createVNode("i", {
            class: "icon fa fa-play",
            "aria-hidden": "true"
          }),
          createVNode("span", { class: "ripple" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="exp-box bounce-y"><figure class="overlay-anim wow fadeInLeft"><img${ssrRenderAttr("src", _imports_2)} alt=""></figure><h4 class="title">Luxury Room</h4><div class="text">Donec in quis the asd <br>pellentesque velit. Donec id <br>velit arcu posuere blane.</div></div></div></div></div></div></section>`);
  _push(ssrRenderComponent(_component_modal_video, {
    channel: $options.videoChannel,
    videoId: $options.videoId,
    isOpen: _ctx.videoIsOpen,
    "onUpdate:isOpen": ($event) => _ctx.videoIsOpen = $event
  }, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/home1/About.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_0 as _ };
//# sourceMappingURL=About-bK7TeLR8.mjs.map
