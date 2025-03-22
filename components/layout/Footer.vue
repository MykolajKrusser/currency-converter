<template>
  <footer class="bg-gray-100 py-6 mt-auto">
    <div class="container mx-auto px-4">
      <div class="text-center text-gray-600">
        <p>© {{ new Date().getFullYear() }} Currency Converter. All rights reserved.</p>
        <p class="mt-2 text-sm">
          Exchange rates provided by
          <a
              href="https://currencybeacon.com"
              target="_blank"
              class="text-primary-600 hover:text-primary-800 transition-colors"
          >
            Currency Beacon
          </a>
        </p>
      </div>
    </div>
  </footer>
</template>
<script setup lang="ts">
</script>