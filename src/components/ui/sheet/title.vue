<template>
  <DialogTitle
    data-slot="sheet-title"
    :class="cn('text-foreground font-medium', props.class)"
    v-bind="delegatedProps"
  >
    <slot />
  </DialogTitle>
</template>

<script setup lang="ts">
import type { HTMLAttributes } from 'vue';

import { reactiveOmit } from '@vueuse/core';
import { DialogTitle, type DialogTitleProps } from 'reka-ui';

const props = defineProps<
  DialogTitleProps & { class?: HTMLAttributes['class'] }
>();

const delegatedProps = reactiveOmit(props, 'class');
</script>
