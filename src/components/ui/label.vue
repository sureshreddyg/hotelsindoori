<template>
  <Label
    v-bind="delegatedProps"
    :class="
      cn(
        'text-xs leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
        props.class,
      )
    "
  >
    <slot />
  </Label>
</template>

<script setup lang="ts">
import type { HTMLAttributes } from 'vue';

import { reactiveOmit } from '@vueuse/core';
import { Label, type LabelProps } from 'reka-ui';

const props = defineProps<LabelProps & { class?: HTMLAttributes['class'] }>();

const delegatedProps = reactiveOmit(props, 'class');
</script>
