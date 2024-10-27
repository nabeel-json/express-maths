const perc = document.querySelector('#percentage');
const btn = document.querySelector('.btn-accent');
const notif = document.querySelector('.toast');

btn.addEventListener('click', () => {
    const input1 = Number(document.querySelector('#input1').value);
    const input2 = Number(document.querySelector('#input2').value);

    if (!isNaN(input1) && !isNaN(input2)) {
        const percentage = (input1 / input2) * 100;
        perc.textContent = `Percentage: ${percentage}%`;
    } else {
        notif.classList.remove('hidden');
        setTimeout(() => {
            notif.classList.add('hidden');
        }, 3000);
    }
});
