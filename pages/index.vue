<template>
  <div>
    <h1 class="text-2xl font-bold text-center mb-8">Convert Currencies in Real Time</h1>

    <div class="max-w-2xl mx-auto">
      <CurrencyConverter />
    </div>

    <div class="mt-12 max-w-3xl mx-auto text-gray-700">
      <h2 class="text-xl font-semibold mb-4">About This Tool</h2>
      <p class="mb-3">
        This currency converter provides real-time exchange rate data for a wide range of global currencies.
        The rates are sourced from Currency Beacon's API and are regularly updated throughout the day.
      </p>
      <p>
        To use the converter, simply select your source currency, target currency, and enter the amount you
        wish to convert. The tool will automatically calculate the equivalent value in your target currency.
      </p>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'default'
});
</script>