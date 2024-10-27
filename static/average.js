const avg = document.querySelector('#average');
const btn = document.querySelector('.btn-accent');
const notif = document.querySelector('.toast');

btn.addEventListener('click', () => {
    const input1 = Number(document.querySelector('#input1').value);
    const input2 = Number(document.querySelector('#input2').value);

    if (!isNaN(input1) && !isNaN(input2)) {
        const average = (input1 + input2) / 2;
        avg.textContent = `Average: ${average}`;
    } else {
        notif.classList.remove('hidden');
        setTimeout(() => {
            notif.classList.add('hidden');
        }, 3000);
    }
});
