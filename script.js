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
