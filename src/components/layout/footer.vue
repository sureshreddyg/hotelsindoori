<script setup lang="ts">
import { footerLinks } from '~/configs/footer-link';
</script>

<template>
  <footer class="bg-background border-t px-6">
    <div class="mx-auto max-w-7xl">
      <div class="grid grid-cols-1 gap-8 py-6 sm:grid-cols-2 lg:grid-cols-6">
        <div class="sm:order-1 lg:order-1 lg:col-span-2">
          <NuxtImg
            alt=""
            class="mb-3 h-full max-h-16 w-auto sm:mb-3.5"
            :preload="true"
            src="/images/logo.png"
          />
          <h2 class="mb-2 font-serif text-lg sm:text-xl">Hotel Sindoori</h2>
          <p class="text-muted-foreground text-sm">
            A premium destination for comfort, hospitality, and elegance.
            Experience exceptional stays, fine dining, and top-tier services in
            the heart of the city.
          </p>
        </div>
        <div class="sm:order-3 sm:pt-6 lg:order-2">
          <h2 class="mb-3 font-medium">Socials</h2>
          <div class="flex flex-col items-start gap-y-4 text-sm">
            <FooterLink
              v-for="socialMediaWebsite in footerLinks.socialMediaWebsites"
              :key="socialMediaWebsite.name"
              :link="socialMediaWebsite.link"
              :logo="socialMediaWebsite.logo"
              :name="socialMediaWebsite.name"
            />
          </div>
        </div>
        <div class="sm:order-4 sm:pt-6 lg:order-3">
          <h2 class="mb-3 font-medium">Order our Food</h2>
          <div class="flex flex-col items-start gap-y-4 text-sm">
            <FooterLink
              v-for="foodOrderWebsite in footerLinks.foodOrderWebsites"
              :key="foodOrderWebsite.name"
              :link="foodOrderWebsite.link"
              :logo="foodOrderWebsite.logo"
              :name="foodOrderWebsite.name"
            />
          </div>
        </div>
        <div class="sm:order-2 sm:pt-6 lg:order-4 lg:col-span-2">
          <h2 class="mb-3 font-medium">Contact</h2>
          <div class="space-y-4">
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
      </div>
      <hr />
      <div class="py-6">
        <p class="text-muted-foreground text-xs font-medium">
          © 2025 Hotel Sindoori. All rights reserved
        </p>
      </div>
    </div>
  </footer>
</template>
