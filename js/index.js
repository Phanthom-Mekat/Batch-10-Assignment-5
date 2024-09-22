
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

