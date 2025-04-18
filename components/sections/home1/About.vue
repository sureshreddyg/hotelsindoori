<template>
	<!-- About Section -->
  <section class="about-section">
    <div class="auto-container">
      <div class="row">
        <!-- Content Column -->
        <div class="content-column col-xl-6 col-lg-6 order-lg-2 wow fadeInRight" data-wow-delay="600ms">
          <div class="inner-column">
            <div class="sec-title">
              <span class="sub-title">Hoexr Luxury Hotel</span>
              <h2>Most Safe & Rated <br>Hotel in London.</h2>
              <div class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br>tempor incididunt ut labore et dolore magna aliqua. Quis ipsum <br>suspendisse ultrices gravida. Risus commodo maecenas accumsan<br> lacus vel facilisis.</div>
            </div>
            <div class="outer-box">
              <div class="info-block">
                <div class="inner">
                  <div class="icon-box"><i class="flaticon-light"></i></div>
                  <h4 class="title">The Best <br>Lighting</h4>
                </div>
              </div>
              <div class="info-block">
                <div class="inner">
                  <div class="icon-box"><i class="flaticon-pool"></i></div>
                  <h4 class="title">The Best <br>Swiming</h4>
                </div>
              </div>
            </div>
            <div class="btn-box">
              <NuxtLink to="page-about.html" class="theme-btn btn-style-one"><span class="btn-title">Discover More</span></NuxtLink>
              <div class="contact-info">
                <div class="icon-box"><i class="flaticon-customer-service"></i></div>
                <span>Booking Now</span>
                <h4 class="title">956 220 6666</h4>
              </div>
            </div>
          </div>
        </div>

        <!-- Image Column -->
        <div class="image-column col-xl-6 col-lg-6">
          <div class="inner-column wow fadeInLeft">
            <figure class="image-1 overlay-anim wow fadeInUp"><img src="/images/resource/about1-1.jpg" alt=""></figure>
            <figure class="image-2 overlay-anim wow fadeInLeft"><img src="/images/resource/about1-2.jpg" alt=""></figure>
            <div class="btn-box">
              <NuxtLink @click="openVideo" class="play-now-two" data-fancybox="gallery" data-caption="">
                <i class="icon fa fa-play" aria-hidden="true"></i>
                <span class="ripple"></span>
              </NuxtLink>
            </div>
            <div class="exp-box bounce-y">
              <figure class=" overlay-anim wow fadeInLeft"><img src="/images/resource/exp-icon.png" alt=""></figure>
              <h4 class="title">Luxury Room</h4>
              <div class="text">Donec in quis the asd <br>pellentesque velit. Donec id <br>velit arcu posuere blane.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
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