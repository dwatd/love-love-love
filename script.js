document.querySelector('button').addEventListener('click', function () {
    let yourName = document.getElementById('yourName').value.trim().toLowerCase();
    let loverName = document.getElementById('loverName').value.trim().toLowerCase();

    if (!yourName || !loverName) {
        alert('Please enter both names!');
        return;
    }

    let lovePercentage = Math.floor((Math.random() * 100) + 1)
    
    const query = new URLSearchParams({
        yourName,
        loverName,
        lovePercentage
    });

    window.location.href = `love.html?${query.toString()}`;

    yourName.value = '';
    loverName.value = '';
})