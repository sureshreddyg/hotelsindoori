<template>
  <header class="bg-background">
    <div class="h-20 border-b px-6">
      <div class="mx-auto flex h-full max-w-7xl items-center justify-between">
        <NuxtLink class="flex h-full items-center gap-x-2 py-4" to="/">
          <NuxtImg
            alt=""
            class="mb-3 h-full w-auto sm:mb-3.5"
            :preload="true"
            src="/images/logo.png"
          />
          <h1 class="not-sr-only font-serif text-lg sm:text-xl md:sr-only">
            Hotel Sindoori
          </h1>
        </NuxtLink>
        <nav class="hidden md:block">
          <ul class="flex gap-x-4">
            <li v-for="link in navigationMenuLinksConfig" :key="link.name">
              <NuxtLink
                class="[&.router-link-exact-active]:border-b-primary [&.router-link-exact-active]:text-primary hover:text-primary border-b-2 border-b-transparent p-1 py-2 text-sm font-medium transition-colors"
                :to="link.path"
              >
                {{ link.name }}
              </NuxtLink>
            </li>
          </ul>
        </nav>
        <UiSheet :open="menuOpen">
          <UiSheetTrigger class="md:hidden" @click="openMenu">
            <Icon class="text-xl" name="heroicons:bars-3-solid" />
            <div class="sr-only">Open Mobile Navigation Menu</div>
          </UiSheetTrigger>
          <UiSheetContent class="md:hidden">
            <UiSheetHeader class="border-b">
              <UiSheetTitle>
                <div class="flex h-full items-center gap-x-2">
                  <NuxtImg
                    alt=""
                    class="mb-2 h-full max-h-9 w-auto sm:mb-2.5"
                    src="/images/logo.png"
                  />
                  <div class="font-serif text-lg font-normal sm:text-xl">
                    Hotel Sindoori
                  </div>
                </div>
              </UiSheetTitle>
              <UiSheetDescription class="sr-only">
                Mobile Navigation Menu
              </UiSheetDescription>
              <UiSheetClose
                class="ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-7 right-4 z-50 size-5 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none"
                @click="closeMenu"
              >
                <Icon class="text-xl" name="heroicons:x-mark-solid" />
                <span class="sr-only">Close Mobile Navigation Menu</span>
              </UiSheetClose>
            </UiSheetHeader>
            <nav>
              <ul class="flex flex-col text-lg font-medium sm:text-xl">
                <li
                  v-for="link in navigationMenuLinksConfig"
                  :key="link.name"
                  class="border-b border-dashed"
                >
                  <NuxtLink
                    class="text-muted-foreground hover:text-foreground relative flex h-full w-full items-center justify-between px-6 py-3 transition-colors"
                    :to="link.path"
                    @click="closeMenu"
                  >
                    {{ link.name }}
                  </NuxtLink>
                </li>
              </ul>
            </nav>
          </UiSheetContent>
        </UiSheet>
      </div>
    </div>
    <div class="hidden h-14 border-b px-6 md:block">
      <div class="mx-auto flex h-full max-w-7xl items-center justify-between">
        <div class="font-serif text-2xl">Hotel Sindoori</div>
        <div class="flex flex-row gap-x-8 text-sm">
          <div class="flex items-center gap-x-2">
            <Icon class="text-base" name="heroicons:map-pin" />
            <NuxtLink
              external
              class="underline underline-offset-2"
              href="https://maps.app.goo.gl/79iLatZsZKZZ1PyR7"
              target="_blank"
            >
              VIEW MAP
            </NuxtLink>
          </div>
          <div class="flex items-center gap-x-2">
            <Icon class="text-base" name="heroicons:phone" />
            <NuxtLink
              class="underline underline-offset-2"
              href="tel:+919397119377"
            >
              +91-9397119377
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { navigationMenuLinksConfig } from '@/configs/navigation-menu-links';

const menuOpen = ref(false);

function closeMenu() {
  console.log('Closed');
  menuOpen.value = false;
}

function openMenu() {
  menuOpen.value = true;
}
</script>
