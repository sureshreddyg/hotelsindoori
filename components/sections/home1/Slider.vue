<template>
  <section class="banner-section">
    <swiper :slides-per-view="1" :space-between="0" :loop="true" :autoplay="{
      delay: 6000,
      disableOnInteraction: true,
      }" :pagination="{
          el: '.swiper-pagination',
          clickable: true,
      }" :navigation="{
          nextEl: '.h1n',
          prevEl: '.h1p',
      }" :modules="modules" class="banner-slider">
      <!-- Slide Item -->
      <swiper-slide class="banner-slide slide-item">
        <figure class="image"><img src="/images/banner/banner-1.jpg" alt=""></figure>   
        <div class="content-box" data-wow-duration="2s" data-wow-delay="5s">
          <span class="sub-title animate-4" data-animation-in="fadeInUp" data-delay-in="0.1">unique place and luxury hotel</span>
          <h1 class="animate-5" data-animation-in="fadeInUp" data-delay-in="0.3">life enjoy with <br>the great moments</h1>
          <NuxtLink to="page-about" class="btn animate-6" data-animation-in="fadeInUp" data-delay-in="0.5">rooms & suites</NuxtLink>
        </div>
      </swiper-slide>

      <!-- Slide Item -->
      <swiper-slide class="banner-slide slide-item">
        <figure class="image"><img src="/images/banner/banner-1.jpg" alt=""></figure>   
        <div class="content-box">
          <span class="sub-title animate-4" data-animation-in="fadeInUp" data-delay-in="0.1">unique place and luxury hotel</span>
          <h1 class="animate-5" data-animation-in="fadeInUp" data-delay-in="0.3">life enjoy with <br>the great moments</h1>
          <NuxtLink to="page-about" class="btn animate-6" data-animation-in="fadeInUp" data-delay-in="0.5">rooms & suites</NuxtLink>
        </div>
      </swiper-slide>
    </swiper>
    <div class="checkout-form-section">
      <div class="auto-container">
        <div class="checkout-form">
          <div class="checkout-field">
            <h6>Check in</h6>
            <div class="chk-field">
              <input class="date-pick" type="text" placeholder="20 June, 2023" />
              <i class="fa fa-calendar"></i>
            </div>
          </div>
          <div class="checkout-field">
            <h6>Check out</h6>
            <div class="chk-field">
              <input class="date-pick" type="text" placeholder="20 June, 2023" />
              <i class="fa fa-calendar"></i>
            </div>
          </div>
          <div class="checkout-field br-0">
            <h6>Room</h6>
            <div class="chk-field">
              <i class="fa fa-angle-down"></i>
              <select>
                <option>Standard Room Size </option>
                <option>Standard Room Size </option>
                <option>Standard Room Size </option>
                <option>Standard Room Size </option>
              </select>
            </div>
          </div>
          <NuxtLink to="/" class="theme-btn btn-style-one"><span class="btn-title">check now</span></NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="js">
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