<template>
  <div class="bg-white shadow-md rounded-lg overflow-hidden">
    <div v-if="title" class="px-6 py-4 border-b border-gray-200">
      <h3 class="text-lg font-medium text-gray-900">{{ title }}</h3>
    </div>
    <div class="px-6 py-4">
      <slot></slot>
    </div>
    <div v-if="$slots.footer" class="px-6 py-4 bg-gray-50 border-t border-gray-200">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: ''
  }
});
</script>