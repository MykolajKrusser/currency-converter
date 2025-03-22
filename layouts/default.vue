<template>
  <div class="flex flex-col min-h-screen">
    <LayoutHeader />
    <main class="flex-grow container mx-auto px-4 py-8">
      <slot />
    </main>
    <LayoutFooter />
  </div>
</template>
<script setup lang="ts">
</script>