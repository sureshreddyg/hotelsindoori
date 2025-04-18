<template>
  <!-- video-section -->
  <section class="video-section">
    <div class="bg bg-image" style="background-image: url(images/background/1.jpg);"></div>
    <div class="auto-container">
      <div class="row">
        <div class="content-column col-lg-9 col-md-12 col-sm-12">
          <div class="inner-column">
            <div class="sec-title-two light wow slideInUp">
              <span class="sub-title">Promotional Video</span>
              <h2> Book Hotal Rooms, <br>et Deals & Book Flights Online.</h2>
            </div>
          </div>
        </div>
        <div class="btn-column col-lg-3 col-md-12 col-sm-12">
          <div class="inner-column">
              <NuxtLink @click="openVideo" class="play-now-two" data-fancybox="gallery" data-caption="">
                <img src="/images/icons/play.png" alt="" />
                <span class="ripple"></span>
              </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- End video section -->
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