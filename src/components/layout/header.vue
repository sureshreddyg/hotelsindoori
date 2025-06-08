<template>
  <header class="bg-background">
    <div class="h-16 border-b px-6">
      <div
        class="text-primary mx-auto flex h-full max-w-7xl items-center justify-between"
      >
        <NuxtLink class="flex h-full items-center gap-x-2 py-2" to="/">
          <NuxtImg
            alt=""
            class="mb-2.5 h-full w-auto sm:mb-3"
            :preload="true"
            src="/images/logo.png"
          />
          <h1 class="font-serif text-xl sm:pl-1 sm:text-2xl">Hotel Sindoori</h1>
        </NuxtLink>
        <div class="hidden flex-row gap-x-8 text-sm sm:flex">
          <div class="flex items-center gap-x-2">
            <Icon class="text-base" name="heroicons:map-pin" />
            <NuxtLink
              external
              class="uppercase underline underline-offset-2"
              href="https://maps.app.goo.gl/79iLatZsZKZZ1PyR7"
              target="_blank"
            >
              Directions
            </NuxtLink>
          </div>
          <div class="flex items-center gap-x-2">
            <Icon class="text-base" name="heroicons:device-phone-mobile" />
            <NuxtLink
              class="underline underline-offset-2"
              href="tel:+919397119377"
            >
              +91-9397119377
            </NuxtLink>
          </div>
          <div class="flex items-center gap-x-2">
            <Icon class="text-base" name="heroicons:phone" />
            <NuxtLink
              class="underline underline-offset-2"
              href="tel:08632245599"
            >
              0863 2245599
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
    <div class="hidden h-16 border-b px-6 md:block">
      <div
        class="mx-auto flex h-full w-full max-w-7xl items-center justify-center text-sm"
      >
        <p class="text-center">
          Hotel Sindoori is the first star rated hotel in Guntur city in the
          state of Andhra Pradesh with 49 well appointed rooms, 3 restaurants, 3
          banquet halls & 3 board rooms.
        </p>
      </div>
    </div>
  </header>
</template>
