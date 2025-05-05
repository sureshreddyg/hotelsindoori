<template>
  <footer class="main-footer footer-style-one">
    <!--Widgets Section-->
    <div class="widgets-section">
      <div class="auto-container">
        <div class="row">
          <!--Footer Column-->
          <div class="footer-column col-xl-3 col-sm-6">
            <div class="footer-widget about-widget">
              <div class="logo">
                <NuxtLink to="/"
                  ><img src="/images/logo.png" alt="" width="40"
                /></NuxtLink>
              </div>
              <div class="text">
                Welcome to the best five-star deluxe hotel in New York. Hotel
                elementum sesue the aucan volutpat.
              </div>
              <ul class="social-icon-two">
                <li>
                  <NuxtLink to="#"><i class="fab fa-twitter"></i></NuxtLink>
                </li>
                <li>
                  <NuxtLink to="#"><i class="fab fa-facebook"></i></NuxtLink>
                </li>
                <li>
                  <NuxtLink to="#"><i class="fab fa-pinterest"></i></NuxtLink>
                </li>
                <li>
                  <NuxtLink to="#"><i class="fab fa-instagram"></i></NuxtLink>
                </li>
              </ul>
            </div>
          </div>
          <!--Footer Column-->
          <div class="footer-column col-lg-2 col-sm-6 mb-0">
            <div
              class="footer-widget links-widget wow fadeInLeft"
              data-wow-delay="200ms"
            >
              <h4 class="widget-title">Quick Links</h4>
              <div class="widget-content">
                <ul class="user-links">
                  <li>
                    <NuxtLink to="/"
                      ><i class="fa-solid fa-crosshairs"></i>Home</NuxtLink
                    >
                  </li>
                  <li>
                    <NuxtLink to="/restaurants"
                      ><i class="fa-solid fa-crosshairs"></i
                      >Restaurants</NuxtLink
                    >
                  </li>
                  <li>
                    <NuxtLink to="/rooms"
                      ><i class="fa-solid fa-crosshairs"></i>Rooms</NuxtLink
                    >
                  </li>
                  <li>
                    <NuxtLink to="/banquets"
                      ><i class="fa-solid fa-crosshairs"></i>Banquets & Board
                      Rooms</NuxtLink
                    >
                  </li>
                  <li>
                    <NuxtLink to="/contact"
                      ><i class="fa-solid fa-crosshairs"></i>Contact</NuxtLink
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <!--Footer Column-->
          <div class="footer-column col-lg-3 col-sm-6">
            <div
              class="footer-widget info-widget wow fadeInLeft"
              data-wow-delay="300ms"
            >
              <h4 class="widget-title">Information</h4>
              <div class="widget-content">
                <!-- Recent Post -->
                <article class="recent-post">
                  <div class="inner">
                    <div class="post-info">
                      <i class="fas fa-phone"></i> +91 9397119377
                    </div>
                    <div class="post-info">
                      <i class="fa fa-envelope"></i>
                      hotelsindoorireservations@gmail.com
                    </div>
                    <div class="post-info">
                      <i class="fas fa-location"></i> 5/7, 4th Ln, Brodipet,
                      Guntur,<br />
                      Andhra Pradesh, 522002
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
          <!-- footer column -->
          <div class="footer-column col-lg-3 col-sm-6">
            <div
              class="footer-widget news-widget wow fadeInLeft"
              data-wow-delay="400ms"
            >
              <h4 class="widget-title">Newsletter</h4>
              <div class="text">
                Lorem ipsum dolor sit amet consectetur Augue id fermentum
              </div>
              <div class="subscribe-form-three">
                <form method="post" action="#">
                  <div class="form-group">
                    <input
                      type="email"
                      name="email"
                      class="email"
                      value=""
                      placeholder="Email Address"
                      required=""
                    />
                    <button type="button" class="theme-btn btn-style-one">
                      <span class="btn-title"
                        ><i class="fa fa-paper-plane"></i
                      ></span>
                    </button>
                  </div>
                </form>
              </div>
              <div class="text">
                <i class="fa-regular fa-circle-check"></i>I agree to all terms
                and policies
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--Footer Bottom-->
    <div class="footer-bottom">
      <div class="auto-container">
        <div class="inner-container">
          <div class="copyright-text">
            Copyright &copy; 2024 Hotel Sindoori . All rights reserved.
          </div>
          <ElementsBackToTop />
        </div>
      </div>
    </div>
  </footer>
</template>
