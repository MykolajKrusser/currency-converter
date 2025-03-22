export default defineNuxtPlugin(nuxtApp => {
    const config = useRuntimeConfig();

    const apiBaseUrl = config.public.apiBaseUrl;
    const apiKey = config.public.apiKey;

    return {
        provide: {
            api: {
                getCurrencies: async () => {
                    try {
                        const response = await fetch(`${apiBaseUrl}/currencies?api_key=${apiKey}`);
                        if (!response.ok) throw new Error('Failed to fetch currencies');
                        return await response.json();
                    } catch (error) {
                        console.error('Error fetching currencies:', error);
                        throw error;
                    }
                },
                convertCurrency: async (from, to, amount) => {
                    try {
                        const response = await fetch(
                            `${apiBaseUrl}/convert?api_key=${apiKey}&from=${from}&to=${to}&amount=${amount}`
                        );
                        if (!response.ok) throw new Error('Failed to convert currency');
                        return await response.json();
                    } catch (error) {
                        console.error('Error converting currency:', error);
                        throw error;
                    }
                }
            }
        }
    };
});
