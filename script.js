const input = document.getElementById('dateInput');
const btn = document.getElementById('calendarBtn');
const popup = document.getElementById('calendarPopup');
const days = document.querySelectorAll('.day');

// 1. Logic ẩn hiện
function toggleCalendar() {
    popup.classList.toggle('hidden');
}

btn.addEventListener('click', toggleCalendar);
input.addEventListener('click', toggleCalendar);

// 2. Logic chọn ngày
days.forEach(dayCell => {
    dayCell.addEventListener('click', () => {
        const day = dayCell.innerText.padStart(2, '0');
        // Ở bản UI tĩnh này mình mặc định tháng 12/2022
        input.value = `${day} / 12 / 2022`;
        toggleCalendar(); // Đóng sau khi chọn
    });
});

// 3. Đóng khi click ra ngoài
document.addEventListener('click', (e) => {
    if (!e.target.closest('.datepicker-container')) {
        popup.classList.add('hidden');
    }
});