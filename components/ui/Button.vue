<template>
  <button
      :class="[
      'btn',
      variant === 'primary' ? 'btn-primary' : 'bg-gray-200 hover:bg-gray-300',
      block ? 'w-full' : '',
      size === 'sm' ? 'text-sm py-1' : size === 'lg' ? 'text-lg py-3' : ''
    ]"
      :disabled="disabled"
      @click="$emit('click')"
  >
    <slot></slot>
  </button>
</template>

<script setup>
defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'secondary'].includes(value)
  },
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg'].includes(value)
  },
  block: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  }
});

defineEmits(['click']);
</script>