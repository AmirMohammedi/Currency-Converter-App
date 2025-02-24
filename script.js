const apiKey = 'YOUR_API_KEY'; // Replace with your API key
const apiUrl = 'https://api.exchangerate-api.com/v4/latest/'; // Free API endpoint for currency rates

async function convertCurrency() {
    const amount = document.getElementById('amount').value;
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;

    if (!amount || amount <= 0) {
        alert('Please enter a valid amount');
        return;
    }

    const url = `${apiUrl}${fromCurrency}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        const conversionRate = data.rates[toCurrency];
        const result = (amount * conversionRate).toFixed(2);
        document.getElementById('result').innerText = `${amount} ${fromCurrency} = ${result} ${toCurrency}`;
    } catch (error) {
        document.getElementById('result').innerText = 'Error fetching data. Please try again later.';
    }
}
