<template>
  <!-- <header  :class="{ 'sticky': scroll }">
      Header 1
  </header> -->
  <header class="main-header header-style-two">
    <div class="auto-container">
      <div class="header-top">
        <div class="inner-box">
          <!-- top-left -->
          <div class="top-left">
            <span
              ><i class="icon fa fa-location"></i>5/7, 4th Ln, Brodipet, Guntur,
              Andhra Pradesh 522002</span
            >
          </div>
          <!-- Top-right -->
          <div class="top-right">
            <ul class="social-icon-one">
              <li>Follow Us :</li>
              <li>
                <NuxtLink to="#"><i class="fab fa-facebook"></i></NuxtLink>
              </li>
              <li>
                <NuxtLink to="#"><i class="fab fa-twitter"></i></NuxtLink>
              </li>
              <li>
                <NuxtLink to="#"
                  ><i class="fa-brands fa-linkedin"></i
                ></NuxtLink>
              </li>
              <li>
                <NuxtLink to="#"><i class="fab fa-youtube"></i></NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- Main box -->
      <div class="main-box">
        <div class="logo-box">
          <div class="logo">
            <NuxtLink to="/"
              ><img
                src="/images/logo.png"
                alt=""
                title="Hotel Sindoori"
                width="40"
            /></NuxtLink>
          </div>
        </div>
        <!--Nav Box-->
        <div class="nav-outer">
          <nav class="nav main-menu">
            <LayoutMenu />
          </nav>
          <!-- Main Menu End-->
        </div>
        <div class="outer-box">
          <!-- Mobile Nav toggler -->
          <div class="mobile-nav-toggler" @click="handleToggled">
            <span class="icon lnr-icon-bars"></span>
          </div>
          <!-- Mobile Nav toggler -->
        </div>
      </div>
    </div>

    <!-- Mobile Menu  -->
    <div class="mobile-menu">
      <div class="menu-backdrop" @click="handleToggled"></div>

      <!--Here Menu Will Come Automatically Via Javascript / Same Menu as in Header-->
      <nav class="menu-box">
        <div class="upper-box">
          <div class="nav-logo">
            <NuxtLink to="/"
              ><img src="/images/logo.png" alt="" title=""
            /></NuxtLink>
          </div>
          <div class="close-btn" @click="handleToggled">
            <i class="icon fa fa-times"></i>
          </div>
        </div>
        <LayoutMobileMenu />
        <ul class="contact-list-one">
          <li>
            <!-- Contact Info Box -->
            <div class="contact-info-box">
              <i class="icon lnr-icon-phone-handset"></i>
              <span class="title">Call Now</span>
              <NuxtLink to="tel:+919397119377">+91 9397119377</NuxtLink>
            </div>
          </li>
          <li>
            <!-- Contact Info Box -->
            <div class="contact-info-box">
              <span class="icon lnr-icon-envelope1"></span>
              <span class="title">Send Email</span>
              <NuxtLink to="mailto:hotelsindoorireservations@gmail.com"
                >hotelsindoorireservations@gmail.com
              </NuxtLink>
            </div>
          </li>
          <li>
            <!-- Contact Info Box -->
            <div class="contact-info-box">
              <span class="icon lnr-icon-clock"></span>
              <span class="title">Send Email</span>
              Mon - Sat 8:00 - 6:30, Sunday - CLOSED
            </div>
          </li>
        </ul>
        <ul class="social-links">
          <li>
            <NuxtLink to="#"><i class="fab fa-twitter"></i></NuxtLink>
          </li>
          <li>
            <NuxtLink to="#"><i class="fab fa-facebook-f"></i></NuxtLink>
          </li>
          <li>
            <NuxtLink to="#"><i class="fab fa-pinterest"></i></NuxtLink>
          </li>
          <li>
            <NuxtLink to="#"><i class="fab fa-instagram"></i></NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
    <!-- End Mobile Menu -->

    <!-- Sticky Header  -->
    <div
      class="sticky-header"
      :class="{ 'fixed-header animated slideInDown': scroll }"
    >
      <div class="auto-container">
        <div class="inner-container">
          <!--Logo-->
          <div class="logo">
            <NuxtLink to="/" title=""
              ><img src="/images/logo.png" alt="" title=""
            /></NuxtLink>
          </div>

          <!--Right Col-->
          <div class="nav-outer">
            <!-- Main Menu -->
            <nav class="main-menu">
              <div class="navbar-collapse show collapse clearfix">
                <LayoutMenu />
              </div>
            </nav>
            <!-- Main Menu End-->

            <!--Mobile Navigation Toggler-->
            <div class="mobile-nav-toggler" @click="handleToggled">
              <span class="icon lnr-icon-bars"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End Sticky Menu -->
  </header>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
const scroll = ref(false);
const handleScroll = () => {
  const scrollCheck = window.scrollY > 100;
  if (scrollCheck !== scroll.value) {
    scroll.value = scrollCheck;
  }
};

onMounted(() => {
  document.addEventListener('scroll', handleScroll);
});
onUnmounted(() => {
  document.removeEventListener('scroll', handleScroll);
});

const isToggled = ref(false);
const handleToggled = () => {
  isToggled.value = !isToggled.value;
  document.body.classList.toggle('mobile-menu-visible', isToggled.value);
};
</script>

<style lang="css" scoped>
.main-box {
  padding: 12px 36px 12px 40px;
}
</style>
