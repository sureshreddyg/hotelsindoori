<template>
  <!-- food-section -->
  <section class="food-section pt-0">
    <div class="auto-container">
      <div class="row">
        <div class="image-column col-xl-4 col-lg-4">
          <div class="inner-column">
            <div class="image-box">
              <figure class="image wow fadeInUp"><img src="/images/resource/food-1.jpg" alt=""></figure>
            </div>
              <NuxtLink @click="openVideo" class="play-now-two" data-fancybox="gallery" data-caption="">
                <i class="icon fa fa-play" aria-hidden="true"></i>
                <span class="ripple"></span>
              </NuxtLink>
            <div class="quote-box">
              <div class="icon-box"><i class="flaticon-quotation"></i></div>
              <div class="text">Great hospitality is the key to Pride of Britain’s longstanding reputation for excellence.</div>
            </div>
          </div>
        </div>
        <div class="content-column col-xl-8">
          <div class="inner-column">
            <div class="sec-title"> <span class="sub-title">EAT FROM THE LAND</span>
              <h2>Enjoy Food and Even<br>
                Better Hospitality</h2>
              <div class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt<br>
                ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo <br>
                viverra maecenas accumsan lacus vel facilisis. </div>
              <div class="healthy-food">
                <div class="food-list">
                  <h4 class="title">Restaurant</h4>
                  <ul>
                    <li><i class="fa-regular fa-square-check"></i>Healthy Food</li>
                    <li><i class="fa-regular fa-square-check"></i>Award-winning Restaurant</li>
                    <li><i class="fa-regular fa-square-check"></i>Individually Styled Bedrooms</li>
                  </ul>
                </div>
                <div class="food-list two">
                  <h4 class="title">SPA & Wellness</h4>
                  <ul>
                    <li><i class="fa-regular fa-square-check"></i>Healthy Food</li>
                    <li><i class="fa-regular fa-square-check"></i>Award-winning Restaurant</li>
                    <li><i class="fa-regular fa-square-check"></i>Individually Styled Bedrooms</li>
                  </ul>
                </div>
              </div>
              <div class="image-box">
                <figure class="image overlay-anim"><img src="/images/resource/food-list.jpg" alt=""></figure>
                <figure class="image overlay-anim"><img src="/images/resource/food-list-2.jpg" alt=""></figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- End food section -->
  <modal-video :channel="videoChannel" :videoId="videoId" v-model:isOpen="videoIsOpen" />
</template>
<script>
import ModalVideo from '../../components/elements/ModalVideo.vue'
export default {
  components: {
      ModalVideo
  },
  data: () => {
      return {
          videoIsOpen: false
      }
  },
  methods: {
      openVideo() {
          this.videoIsOpen = !this.videoIsOpen
      }
  },
  computed: {
      videoChannel: function () {
          //Logic to extract based on URL
          return 'youtube'
      },
      videoId: function () {
          //Logic to extract based on URL
          return 'QiqQoqtnHrk'
      }
  }
}
</script>