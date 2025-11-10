// Dates: Sept 25 → Oct 28
const start = new Date(2024, 8, 25);
const end   = new Date(2024, 10, 2);

const calendar = document.getElementById('calendar');
let dayNumber = 1;

// Create lightbox element
const lightbox = document.createElement('div');
lightbox.className = 'lightbox';
document.body.appendChild(lightbox);

lightbox.addEventListener('click', () => {
  lightbox.classList.remove('visible');
  lightbox.innerHTML = '';
});

for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
  const dayDiv = document.createElement('div');
  dayDiv.className = 'day';

  const dateStr = d.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit' });
  const imgPath = `images/day${dayNumber}.jpg`;

  const img = document.createElement('img');
  img.src = imgPath;
  img.alt = `Day ${dayNumber}`;

  // placeholder if image missing
  img.onerror = function() {
    this.replaceWith(Object.assign(document.createElement('div'), {
      className: 'placeholder',
      innerText: 'No photo yet'
    }));
  };

  // click → show in lightbox
  img.addEventListener('click', (e) => {
    e.stopPropagation(); // prevent triggering parent click
    const lightImg = document.createElement('img');
    lightImg.src = imgPath;
    lightbox.innerHTML = '';
    lightbox.appendChild(lightImg);
    lightbox.classList.add('visible');
  });

  const label = document.createElement('div');
  label.className = 'date';
  label.innerText = `Day ${dayNumber} – ${dateStr}`;

  dayDiv.appendChild(img);
  dayDiv.appendChild(label);

  calendar.appendChild(dayDiv);

  dayNumber++;
}


const countdownElement = document.getElementById('countdown');
const targetDate = new Date('January 13, 2026 00:00:00').getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance < 0) {
    countdownElement.innerHTML = "✨ ¡Llego el día! ✨";
    clearInterval(interval);
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countdownElement.innerHTML = `
    <h2>✨ ¡Días restantes hasta vernos! ✨</h2>
    <p>${days} días, ${hours} horas, ${minutes} minutos, ${seconds} segundos</p>
  `;
}

const interval = setInterval(updateCountdown, 1000);
updateCountdown();
