<template>
  <UiCard title="Currency Converter">
    <div v-if="error" class="mb-4 p-4 bg-red-100 text-red-700 rounded-lg">
      {{ error }}
    </div>

    <div class="space-y-6">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <UiSelect
              v-model="fromCurrency"
              :options="currencies"
              label="From Currency"
              placeholder="Select currency"
              :disabled="loading || !currencies.length"
          />
        </div>
        <div>
          <UiSelect
              v-model="toCurrency"
              :options="currencies"
              label="To Currency"
              placeholder="Select currency"
              :disabled="loading || !currencies.length"
          />
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <UiInput
              v-model="amount"
              type="number"
              label="Amount"
              placeholder="Enter amount"
              :disabled="loading"
              min="0"
              step="0.01"
          />
        </div>
        <div>
          <UiInput
              v-model="convertedAmount"
              type="number"
              label="Converted Amount"
              placeholder="Converted value"
              disabled
          />
        </div>
      </div>

      <div class="flex justify-center">
        <UiButton
            @click="convert"
            :disabled="loading || !canConvert"
            class="mt-4"
        >
          {{ loading ? 'Converting...' : 'Convert' }}
        </UiButton>
      </div>

      <div class="min-h-5">
        <div v-if="lastUpdated" class="text-sm text-gray-500 text-center mt-2">
          Last updated: {{ lastUpdated }}
        </div>
      </div>
    </div>
  </UiCard>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue';
import { useCurrency } from '~/composables/useCurrency';

const { currencies, loading, error, fetchCurrencies, convertCurrency } = useCurrency();

// State
const fromCurrency = ref('');
const toCurrency = ref('');
const amount = ref('1');
const convertedAmount = ref('');
const lastUpdated = ref('');

// Computed
const canConvert = computed(() => {
  return fromCurrency.value &&
      toCurrency.value &&
      amount.value &&
      parseFloat(amount.value) > 0;
});

// Methods
const convert = async () => {
  if (!canConvert.value) return;

  const result = await convertCurrency(
      fromCurrency.value,
      toCurrency.value,
      parseFloat(amount.value)
  );

  if (result !== null) {
    convertedAmount.value = result.toFixed(2);
    lastUpdated.value = new Date().toLocaleString();
  }
};

// Auto-convert when inputs change
watch([fromCurrency, toCurrency, amount], () => {
  if (canConvert.value) {
    convert();
  }
}, { deep: true });

// Load currencies on mount
onMounted(async () => {
  await fetchCurrencies();

  // Set default currencies if available
  if (currencies.value.length > 0) {
    // Find USD and EUR if available, otherwise use first two currencies
    const usdCurrency = currencies.value.find(c => c.value === 'USD');
    const eurCurrency = currencies.value.find(c => c.value === 'EUR');

    fromCurrency.value = usdCurrency ? usdCurrency.value : currencies.value[0].value;
    toCurrency.value = eurCurrency ? eurCurrency.value : (
        currencies.value[1] ? currencies.value[1].value : currencies.value[0].value
    );
  }
});
</script>