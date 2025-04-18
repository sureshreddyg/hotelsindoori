<template>
  <section class="testimonial-section">
    <div class="bg bg-image" style="background-image: url(images/background/testi-bg.jpg);"></div>
    <div class="auto-container">
      <div class="row">
        <div class="col-lg-4 hide-on-tablet"></div>
        <div class="testimonial-column col-lg-8 col-md-12">
          <div class="inner-column">
            <div class="sec-title light wow fadeInUp">
              <span class="sub-title">What says for customer</span>
              <h2> What Client's Say?</h2>
            </div>
    <swiper :slides-per-view="1" :space-between="0" :loop="true" :autoplay="{
      delay: 5000,
      disableOnInteraction: true,
      }" :pagination="{
          el: '.swiper-pagination',
          clickable: true,
      }" :navigation="{
          nextEl: '.h1n',
          prevEl: '.h1p',
      }" :modules="modules" class="testimonial-slider">
      <!-- Slide Item -->
      <swiper-slide class="testimonial-slide slide-item">
                <div class="content-box">
                  <div class="image-box" data-animation-in="fadeInLeft" data-delay-in="0.1">
                    <figure class="thumb"><img src="/images/resource/testi-1.jpg" alt=""></figure>
                  </div>
                  <div class="info-box">
                    <ul class="rating-list" data-animation-in="fadeInUp" data-delay-in="0.2">
                      <li><i class="fa-solid fa-star"></i></li>
                      <li><i class="fa-solid fa-star"></i></li>
                      <li><i class="fa-solid fa-star"></i></li>
                      <li><i class="fa-solid fa-star"></i></li>
                      <li><i class="fa-solid fa-star"></i></li>
                    </ul>
                    <div class="text" data-animation-in="fadeInUp" data-delay-in="0.3">The utanislen quam nestibulum ac quame odion elementum sceisue
                    the aucan. <br>Orci varius natoque penatibus
                    et magnis disney parturient monte nascete ridiculus<br>
                    mus nellen etesque habitant morbine.</div>
                    <div class="auther-info" data-animation-in="fadeInUp" data-delay-in="0.4">
                      <h4 class="title">Jackson Smith</h4>
                      <span class="designation">Guest Review</span>
                    </div>
                    <div class="icon-box" data-animation-in="fadeInUp" data-delay-in="0.5"><figure class="image"><img src="/images/resource/comas.png" alt=""></figure></div>
                  </div>
                </div>
      </swiper-slide>

      <!-- Slide Item -->
      <swiper-slide class="testimonial-slide slide-item">
                <div class="content-box">
                  <div class="image-box" data-animation-in="fadeInLeft" data-delay-in="0.1">
                    <figure class="thumb"><img src="/images/resource/testi-1.jpg" alt=""></figure>
                  </div>
                  <div class="info-box">
                    <ul class="rating-list" data-animation-in="fadeInUp" data-delay-in="0.2">
                      <li><i class="fa-solid fa-star"></i></li>
                      <li><i class="fa-solid fa-star"></i></li>
                      <li><i class="fa-solid fa-star"></i></li>
                      <li><i class="fa-solid fa-star"></i></li>
                      <li><i class="fa-solid fa-star"></i></li>
                    </ul>
                    <div class="text" data-animation-in="fadeInUp" data-delay-in="0.3">The utanislen quam nestibulum ac quame odion elementum sceisue
                    the aucan. <br>Orci varius natoque penatibus
                    et magnis disney parturient monte nascete ridiculus<br>
                    mus nellen etesque habitant morbine.</div>
                    <div class="auther-info" data-animation-in="fadeInUp" data-delay-in="0.4">
                      <h4 class="title">Jackson Smith</h4>
                      <span class="designation">Guest Review</span>
                    </div>
                    <div class="icon-box" data-animation-in="fadeInUp" data-delay-in="0.5"><figure class="image"><img src="/images/resource/comas.png" alt=""></figure></div>
                  </div>
                </div>
      </swiper-slide>
    </swiper>
          </div>
        </div>
      </div>
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