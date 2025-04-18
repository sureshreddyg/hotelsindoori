import { _ as __nuxt_component_0 } from "./nuxt-link-CBXZo5aS.js";
import { M as ModalVideo, a as _imports_0$1 } from "./mail-BoKji7Pa.js";
import { resolveComponent, withCtx, createVNode, useSSRContext, mergeProps } from "vue";
import { ssrRenderAttr, ssrRenderComponent, ssrRenderAttrs } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
const _imports_0 = "" + __publicAssetsURL("images/resource/food-1.jpg");
const _imports_1 = "" + __publicAssetsURL("images/resource/food-list.jpg");
const _imports_2 = "" + __publicAssetsURL("images/resource/food-list-2.jpg");
const _sfc_main$1 = {
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
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0;
  const _component_modal_video = resolveComponent("modal-video");
  _push(`<!--[--><section class="food-section pt-0"><div class="auto-container"><div class="row"><div class="image-column col-xl-4 col-lg-4"><div class="inner-column"><div class="image-box"><figure class="image wow fadeInUp"><img${ssrRenderAttr("src", _imports_0)} alt=""></figure></div>`);
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
  _push(`<div class="quote-box"><div class="icon-box"><i class="flaticon-quotation"></i></div><div class="text">Great hospitality is the key to Pride of Britain’s longstanding reputation for excellence.</div></div></div></div><div class="content-column col-xl-8"><div class="inner-column"><div class="sec-title"><span class="sub-title">EAT FROM THE LAND</span><h2>Enjoy Food and Even<br> Better Hospitality</h2><div class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt<br> ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo <br> viverra maecenas accumsan lacus vel facilisis. </div><div class="healthy-food"><div class="food-list"><h4 class="title">Restaurant</h4><ul><li><i class="fa-regular fa-square-check"></i>Healthy Food</li><li><i class="fa-regular fa-square-check"></i>Award-winning Restaurant</li><li><i class="fa-regular fa-square-check"></i>Individually Styled Bedrooms</li></ul></div><div class="food-list two"><h4 class="title">SPA &amp; Wellness</h4><ul><li><i class="fa-regular fa-square-check"></i>Healthy Food</li><li><i class="fa-regular fa-square-check"></i>Award-winning Restaurant</li><li><i class="fa-regular fa-square-check"></i>Individually Styled Bedrooms</li></ul></div></div><div class="image-box"><figure class="image overlay-anim"><img${ssrRenderAttr("src", _imports_1)} alt=""></figure><figure class="image overlay-anim"><img${ssrRenderAttr("src", _imports_2)} alt=""></figure></div></div></div></div></div></div></section>`);
  _push(ssrRenderComponent(_component_modal_video, {
    channel: $options.videoChannel,
    videoId: $options.videoId,
    isOpen: _ctx.videoIsOpen,
    "onUpdate:isOpen": ($event) => _ctx.videoIsOpen = $event
  }, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/home2/Video.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "call-to-action pt-0" }, _attrs))}><div class="auto-container"><div class="row"><div class="content-colum col-lg-6 col-md-12 col-sm-12"><div class="inner-column wow fadeInLeft"><div class="sec-title"><span class="sub-title">Call to action</span><h2>The Thin Escape.</h2></div><div class="call-block"><div class="inner-box"><div class="icon-box"><i class="flaticon-airplane"></i></div><h4 class="title">Easy &amp; Free Transport</h4><div class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br> eiusmod tempor incididunt dolore magna aliqua.</div></div></div><div class="call-block"><div class="inner-box"><div class="icon-box"><i class="flaticon-fast-food"></i></div><h4 class="title">Clean &amp; Fresh Food</h4><div class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br> eiusmod tempor incididunt dolore magna aliqua.</div></div></div><div class="call-block"><div class="inner-box"><div class="icon-box"><i class="flaticon-swimming-pool-1"></i></div><h4 class="title">Play Ground &amp; Swimming Pool</h4><div class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br> eiusmod tempor incididunt dolore magna aliqua.</div></div></div><div class="btn-box"><a href="" class="read-more">Book A Hotel</a></div></div></div><div class="col-lg-6 booking-form-column"><div class="inner-column wow fadeInRight" data-wow-delay="200ms"><div class="sec-title"><span class="sub-title">ROOMS &amp; SUITES</span><h2>Hotel Booking </h2></div><form class="bk-form"><div class="frm-field"><input type="text" name="check-in" class="date-pick" placeholder="Check in"><img${ssrRenderAttr("src", _imports_0$1)} alt=""></div><div class="frm-field"><input type="text" name="check-in" class="date-pick" placeholder="Check out"><img${ssrRenderAttr("src", _imports_0$1)} alt=""></div><div class="frm-field"><select><option>Adult</option><option>Adult</option><option>Adult</option><option>Adult</option></select><i class="fa fa-angle-down"></i></div><div class="frm-field"><select><option>Children</option><option>Children</option><option>Children</option><option>Children</option></select><i class="fa fa-angle-down"></i></div><div class="form-submit"><button type="submit">Check Availability</button></div></form></div></div></div></div></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/home2/Booking.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __nuxt_component_1 as _,
  __nuxt_component_2 as a
};
//# sourceMappingURL=Booking-BRRyTBRD.js.map
