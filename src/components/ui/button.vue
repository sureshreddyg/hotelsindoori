<template>
  <component
    :is="as"
    :class="cn(buttonVariants({ variant, size }), $attrs.class ?? '')"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
import { cva } from 'class-variance-authority';

const buttonVariants = cva(
  'ring-offset-background focus-visible:ring-ring inline-flex cursor-pointer items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50',
  {
    defaultVariants: {
      size: 'default',
      variant: 'default',
    },
    variants: {
      size: {
        default: 'h-10 px-4 py-2',
        icon: 'h-10 w-10',
        lg: 'h-11 rounded-md px-8',
        sm: 'h-9 rounded-md px-3',
      },
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
        outline:
          'border-input bg-background hover:bg-accent hover:text-accent-foreground border',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80',
      },
    },
  },
);

interface Props {
  as?: string;
  size?: NonNullable<Parameters<typeof buttonVariants>[0]>['size'];
  variant?: NonNullable<Parameters<typeof buttonVariants>[0]>['variant'];
}

withDefaults(defineProps<Props>(), {
  as: 'button',
  size: 'default',
  variant: 'default',
});
</script>
