// toggle code 
function showSectionById(id){
    document.getElementById('donation-section-view').classList.add('hidden');
    document.getElementById('transaction-history').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden');
}
function showBtnInfo(id){
    document.getElementById('d-btn').classList.remove('bg-btn');
    document.getElementById('h-btn').classList.remove('bg-btn');

    document.getElementById(id).classList.add('bg-btn');
}

document.getElementById('donation-btn').addEventListener('click', function() {
    showSectionById('donation-section-view');
    showBtnInfo('d-btn');
});

document.getElementById('history-btn').addEventListener('click', function() {
    showSectionById('transaction-history');
    showBtnInfo('h-btn');
});



function handleDonation(coinAvailable, coinDonated, donationInput,cause){
    const donationInputValue = donationInput.value;
    const donationAmount = parseInt(donationInputValue);

    if (donationInputValue === '' || donationAmount <= 0 || isNaN(donationAmount)) {
        alert('Please enter a valid amount');
        donationInput.value = ''; 
        return;
    }
    const donationTotal = donationAmount + parseInt(coinDonated.innerText);
    const coinAvailableTotal = parseInt(coinAvailable.innerText) - donationAmount;

    if (coinAvailableTotal >= 0) {
        coinAvailable.innerText = coinAvailableTotal;
        coinDonated.innerText = donationTotal;
        my_modal_1.showModal();
        addTransactionHistory(donationAmount, cause);
    } else {
        alert('Insufficient funds');
    }
    donationInput.value = '';
}

// history 
function addTransactionHistory(amount, cause) {
    const transactionHistory = document.getElementById('transaction-history');
    const transactionEntry = document.createElement('div');
    transactionEntry.classList.add('bg-white', 'p-4', 'rounded-lg', 'mb-4', 'border', 'shadow-md');
    transactionEntry.innerHTML = `
        <p class="font-bold text-lg mb-2">${amount} Taka is Donated for ${cause}</p>
        <p class="text-sm text-gray-600">Date : ${new Date().toString()}</p>
    `;
    transactionHistory.appendChild(transactionEntry);

}


document.getElementById('noakhaliDonationBtn').addEventListener('click', function() {
    const coinAvailable = document.getElementById('coinAvailable');
    const coinDonated = document.getElementById('coinDonated');
    const noakhaliDonationInput = document.getElementById('noakhaliDonationInput');
    handleDonation(coinAvailable, coinDonated, noakhaliDonationInput,'famine-2024 at Feni, Bangladesh');
});
document.getElementById('feniDonationBtn').addEventListener('click', function() {
    const coinAvailable = document.getElementById('coinAvailable');
    const coinDonated = document.getElementById('coinDonatedFeni');
    const feniDonationInput = document.getElementById('feniDonationInput');
    handleDonation(coinAvailable, coinDonated, feniDonationInput,'Flood Relief in Feni,Bangladesh');
});
document.getElementById('quotaDonationBtn').addEventListener('click', function() {
    const coinAvailable = document.getElementById('coinAvailable');
    const coinDonated = document.getElementById('coinDonatedQouta');
    const quotaDonationInput = document.getElementById('quotaDonationInput');
    handleDonation(coinAvailable, coinDonated, quotaDonationInput,'Aid for Injured in the Quota Movement, Bangladesh');
});





































































// const coinAvailable = document.getElementById('coinAvailable'); 
// const coinDonated = document.getElementById('coinDonated'); 
// const noakhaliDonationInput = document.getElementById('noakhaliDonationInput');

// noakhaliDonationBtn

// document.getElementById('noakhaliDonationBtn').addEventListener('click', function(){
//     const noakhaliDonationInputValue = noakhaliDonationInput.value;
//     const noakhaliDonationAmount = parseInt(noakhaliDonationInputValue);

//     if (noakhaliDonationInputValue === '' ||noakhaliDonationInputValue <=0 || isNaN(noakhaliDonationInputValue)) {
//         alert('Please enter a valid amount');
//         noakhaliDonationInput.value = '';
//         return;
//     }

//     const noakhaliDonationTotal = noakhaliDonationAmount + parseInt(coinDonated.innerText);
//     const coinAvailableTotal = parseInt(coinAvailable.innerText) - noakhaliDonationAmount;

//     if(coinAvailableTotal>=0){
//         coinAvailable.innerText = coinAvailableTotal;
//         coinDonated.innerText = noakhaliDonationTotal;
//         my_modal_1.showModal();

//     }
//     else{
//         alert('Insufficient fund');
//     }


//     noakhaliDonationInput.value = '';  
// });
