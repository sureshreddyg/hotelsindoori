<template>
  <div>
    <div
      class="relative h-[calc(100dvh-64px)] w-full sm:h-[calc(100dvh-128px)]"
    >
      <NuxtImg
        alt=""
        class="absolute h-full w-full object-cover"
        src="/images/property/reception-1.webp"
        :preload="true"
      />
    </div>
    <div class="mx-auto w-full max-w-7xl px-6 py-12">
      <div
        v-for="section in galleryImages"
        :key="section.name"
        class="mb-8 last-of-type:mb-0"
      >
        <h2
          class="text-muted-foreground py-4 text-center text-sm font-medium uppercase"
        >
          {{ section.name }}
        </h2>
        <div class="gallery-section-grid grid grid-cols-4 gap-2">
          <div
            v-for="(image, sectionIndex) in section.images"
            :key="image.src"
            :class="cn('h-full w-full overflow-hidden', image.gridAreaClass)"
          >
            <NuxtImg
              :alt="image.name"
              :src="image.src"
              class="h-full w-full object-cover"
              :preload="sectionIndex === 0 ? true : false"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="mx-auto w-full max-w-7xl px-6 py-12">
      <div class="grid grid-cols-1 gap-10 md:grid-cols-2">
        <div class="space-y-6">
          <div>
            <h2 class="mb-3 font-serif text-4xl">
              Your feedback helps us improve
            </h2>
            <p class="text-muted-foreground">
              We are here to help you and we'd love to hear from you. Reach out
              to us for reservations, event bookings, or any queries.
            </p>
          </div>

          <div class="space-y-6">
            <div>
              <div class="mb-1 flex items-center gap-1 text-sm font-medium">
                <Icon name="heroicons:map-pin" />
                <p>Address</p>
              </div>
              <p class="text-muted-foreground text-sm">
                Hotel Sindoori, 5/7, 4th Ln, Brodipet, Guntur, Andhra Pradesh
                522002
              </p>
            </div>
            <div>
              <div class="mb-1 flex items-center gap-1 text-sm font-medium">
                <Icon name="heroicons:phone" />
                <p>Phone</p>
              </div>
              <div
                class="text-muted-foreground flex flex-col items-start gap-2 text-sm"
              >
                <NuxtLink
                  class="underline underline-offset-2"
                  href="tel:+919397119377"
                >
                  +91 9397119377
                </NuxtLink>
                <NuxtLink
                  class="underline underline-offset-2"
                  href="tel:+919397119322"
                >
                  +91 9397119322
                </NuxtLink>
                <NuxtLink
                  class="underline underline-offset-2"
                  href="tel:+919397119355"
                >
                  +91 9397119355
                </NuxtLink>
              </div>
            </div>
            <div>
              <div class="mb-1 flex items-center gap-1 text-sm font-medium">
                <Icon name="heroicons:envelope" />
                <p>Email</p>
              </div>
              <NuxtLink
                class="text-muted-foreground text-sm underline underline-offset-2"
                href="mailto:hotelsindoorireservations@gmail.com"
              >
                hotelsindoorireservations@gmail.com
              </NuxtLink>
            </div>
          </div>
        </div>

        <form class="space-y-2" @submit.prevent="submitForm">
          <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <UiLabel for="firstname">First Name</UiLabel>
              <UiInput
                id="firstname"
                v-model="form.firstname"
                type="text"
                required
              />
            </div>

            <div>
              <UiLabel for="lastname">Last Name</UiLabel>
              <UiInput
                id="lastname"
                v-model="form.lastname"
                type="text"
                required
              />
            </div>
          </div>

          <div>
            <UiLabel for="phone">Phone</UiLabel>
            <UiInput id="phone" v-model="form.phone" type="tel" required />
          </div>

          <div>
            <UiLabel for="email">Email</UiLabel>
            <UiInput id="email" v-model="form.email" type="email" required />
          </div>

          <div>
            <UiLabel for="message">Message</UiLabel>
            <UiTextarea
              id="message"
              v-model="form.message"
              rows="5"
              class="resize-none"
              required
            />
          </div>

          <div class="pt-2">
            <UiButton class="w-full sm:w-auto" type="submit">
              Send Message
            </UiButton>
          </div>
        </form>
      </div>
      <div class="mt-12 border-1">
        <iframe
          :allowfullscreen="false"
          height="400"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3829.4036071593705!2d80.43446707519783!3d16.302308984411475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4a7543997f079d%3A0xc763412aa6e7aede!2sHotel%20Sindoori!5e0!3m2!1sen!2sin!4v1749103449899!5m2!1sen!2sin"
          style="border: 0"
          title="Location of Hotel Sindoori on Google Maps"
          width="100%"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import { galleryImages } from '~/configs/gallery-images';

const form = ref({
  email: '',
  firstname: '',
  lastname: '',
  message: '',
  phone: '',
});

function submitForm() {
  console.log('Form submitted:', form.value);
  form.value = {
    email: '',
    firstname: '',
    lastname: '',
    message: '',
    phone: '',
  };
}

useSeoMeta({
  description:
    'Welcome to Hotel Sindoori, Guntur - a premium destination for comfort, hospitality, and elegance. Experience exceptional stays, fine dining, and top-tier services in the heart of the city.',
});
</script>

<style scoped>
.gallery-section-grid {
  grid-template-rows: repeat(3, 240px);
}

@media (max-width: 768px) {
  .gallery-section-grid {
    grid-template-rows: repeat(3, 140px);
  }
}
</style>
