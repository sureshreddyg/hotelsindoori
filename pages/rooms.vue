<template>
  <LayoutPageTitle title="Rooms" />
  <section class="rooms-section pb-100">
    <div class="auto-container">
      <div class="row">
        <!-- room-block -->
        <div class="room-block col-lg-6 col-md-6">
          <div class="inner-box wow fadeIn">
            <div class="image-box">
              <figure class="image-2 overlay-anim">
                <img src="/images/property/comfort-room-1.jpg" alt="" />
              </figure>
            </div>
            <div class="content-box">
              <h6 class="title">Comfort Room</h6>
              <span class="price">150$ / NIGHT</span>
            </div>
            <div class="box-caption">
              <ul class="bx-links">
                <li>
                  <NuxtLink to="room-details" title=""
                    ><i class="fa fa-wifi"></i
                  ></NuxtLink>
                </li>
                <li>
                  <NuxtLink to="room-details" title=""
                    ><i class="fa fa-bed"></i
                  ></NuxtLink>
                </li>
                <li>
                  <NuxtLink to="room-details" title=""
                    ><i class="fa fa-bath"></i
                  ></NuxtLink>
                </li>
                <li>
                  <NuxtLink to="room-details" title=""
                    ><i class="fa fa-shower"></i
                  ></NuxtLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!-- room-block -->
        <div class="room-block col-lg-6 col-md-6">
          <div class="inner-box wow fadeIn">
            <div class="image-box">
              <figure class="image-2 overlay-anim">
                <img src="/images/property/delux-room-1.jpg" alt="" />
              </figure>
            </div>
            <div class="content-box">
              <h6 class="title">Delux Room</h6>
              <span class="price">150$ / NIGHT</span>
            </div>
            <div class="box-caption">
              <ul class="bx-links">
                <li>
                  <NuxtLink to="room-details" title=""
                    ><i class="fa fa-wifi"></i
                  ></NuxtLink>
                </li>
                <li>
                  <NuxtLink to="room-details" title=""
                    ><i class="fa fa-bed"></i
                  ></NuxtLink>
                </li>
                <li>
                  <NuxtLink to="room-details" title=""
                    ><i class="fa fa-bath"></i
                  ></NuxtLink>
                </li>
                <li>
                  <NuxtLink to="room-details" title=""
                    ><i class="fa fa-shower"></i
                  ></NuxtLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!-- room-block -->
        <div class="room-block col-lg-6 col-md-6">
          <div class="inner-box wow fadeIn" data-wow-delay="300ms">
            <div class="image-box">
              <figure class="image-2 overlay-anim">
                <img src="/images/property/executive-room-1.jpg" alt="" />
              </figure>
            </div>
            <div class="content-box">
              <h6 class="title">Executive Room</h6>
              <span class="price">250$ / NIGHT</span>
            </div>
            <div class="box-caption">
              <ul class="bx-links">
                <li>
                  <NuxtLink to="room-details" title=""
                    ><i class="fa fa-wifi"></i
                  ></NuxtLink>
                </li>
                <li>
                  <NuxtLink to="room-details" title=""
                    ><i class="fa fa-bed"></i
                  ></NuxtLink>
                </li>
                <li>
                  <NuxtLink to="room-details" title=""
                    ><i class="fa fa-bath"></i
                  ></NuxtLink>
                </li>
                <li>
                  <NuxtLink to="room-details" title=""
                    ><i class="fa fa-shower"></i
                  ></NuxtLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!-- room-block -->
        <div class="room-block col-lg-6 col-md-6">
          <div class="inner-box large-style wow fadeIn" data-wow-delay="400ms">
            <div class="image-box">
              <figure class="image-2 overlay-anim">
                <img src="/images/property/suite-room-3.jpg" alt="" />
              </figure>
            </div>
            <div class="content-box">
              <h6 class="title">Suite Room</h6>
              <span class="price">250$ / NIGHT</span>
            </div>
            <div class="box-caption">
              <ul class="bx-links">
                <li>
                  <NuxtLink to="room-details" title=""
                    ><i class="fa fa-wifi"></i
                  ></NuxtLink>
                </li>
                <li>
                  <NuxtLink to="room-details" title=""
                    ><i class="fa fa-bed"></i
                  ></NuxtLink>
                </li>
                <li>
                  <NuxtLink to="room-details" title=""
                    ><i class="fa fa-bath"></i
                  ></NuxtLink>
                </li>
                <li>
                  <NuxtLink to="room-details" title=""
                    ><i class="fa fa-shower"></i
                  ></NuxtLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
definePageMeta({
  layout: 'layout2',
});
</script>
