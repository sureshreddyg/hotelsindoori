<template>
  <div class="flex items-center gap-x-2">
    <div class="size-5">
      <NuxtImg alt="" class="h-full w-full object-contain" :src="props.logo" />
    </div>
    <NuxtLink class="underline underline-offset-2" external :href="props.link">
      {{ props.name }}
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
export type footerLinkProps = {
  link: string;
  logo: string;
  name: string;
};

const props = defineProps<footerLinkProps>();
</script>
