export const useCurrency = () => {
    const { $api } = useNuxtApp();

    const currencies = ref([]);
    const loading = ref(false);
    const error = ref(null);

    const fetchCurrencies = async () => {
        loading.value = true;
        error.value = null;

        try {
            const response = await $api.getCurrencies();
            // Update this to handle the array format instead of object
            currencies.value = response.response.map(currency => ({
                value: currency.short_code,
                label: `${currency.short_code} - ${currency.name}`
            }));
        } catch (err) {
            error.value = err.message || 'Failed to fetch currencies';
        } finally {
            loading.value = false;
        }
    };

    const convertCurrency = async (from, to, amount) => {
        loading.value = true;
        error.value = null;

        try {
            const response = await $api.convertCurrency(from, to, amount);
            // Make sure we're accessing the converted value correctly
            return response.response.value;
        } catch (err) {
            error.value = err.message || 'Failed to convert currency';
            return null;
        } finally {
            loading.value = false;
        }
    };

    return {
        currencies,
        loading,
        error,
        fetchCurrencies,
        convertCurrency
    };
};