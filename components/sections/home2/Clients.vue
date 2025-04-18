<template>
  <section class="client-section-two">
    <div class="auto-container">
        <!--clients carousel-->
        <swiper :slides-per-view="5" :space-between="30" :loop="true" :autoplay="{
          delay: 7000,
          disableOnInteraction: true,
          }" :breakpoints="{
          320: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          575: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          767: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          991: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          1199: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
          1350: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
          }" :pagination="{
            el: '.swiper-pagination',
            clickable: true,
          }" :navigation="{
            nextEl: '.h1n',
            prevEl: '.h1p',
          }" :modules="modules" class="client-slider">
          <swiper-slide class="slide-item client-block"><NuxtLink to="#"><img src="/images/resource/client1-3.png" alt=""></NuxtLink></swiper-slide>
          <swiper-slide class="slide-item client-block"><NuxtLink to="#"><img src="/images/resource/client1-1.png" alt=""></NuxtLink></swiper-slide>
          <swiper-slide class="slide-item client-block"><NuxtLink to="#"><img src="/images/resource/client1-2.png" alt=""></NuxtLink></swiper-slide>
          <swiper-slide class="slide-item client-block"><NuxtLink to="#"><img src="/images/resource/client1-4.png" alt=""></NuxtLink></swiper-slide>
          <swiper-slide class="slide-item client-block"><NuxtLink to="#"><img src="/images/resource/client1-5.png" alt=""></NuxtLink></swiper-slide>
          <swiper-slide class="slide-item client-block"><NuxtLink to="#"><img src="/images/resource/client1-3.png" alt=""></NuxtLink></swiper-slide>
        </swiper>
    </div>
  </section>
</template>
<script>
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/vue"

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Autoplay, Pagination, Navigation],
    }
  },
}
</script>