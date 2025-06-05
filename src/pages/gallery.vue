<template>
  <div class="px-6 py-12">
    <div class="mx-auto h-full max-w-7xl">
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
  </div>
</template>

<script setup lang="ts">
import { galleryImages } from '~/configs/gallery-images';

useSeoMeta({
  description:
    'Explore the visual charm of Hotel Sindoori. View our hotel interiors, banquet setups, dining spaces, and guest experiences through our photo gallery.',
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
