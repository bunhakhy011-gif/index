const pageLinks = document.querySelectorAll('a[data-fade]');
const body = document.body;
const transitionDuration = 360;

window.addEventListener('DOMContentLoaded', () => {
  body.classList.add('loaded');
  initPlanner();
  initCounters();
  bindPageTransitions();
});

function bindPageTransitions() {
  pageLinks.forEach(link => {
    link.addEventListener('click', event => {
      const href = link.getAttribute('href');
      if (!href || href.startsWith('#')) return;
      event.preventDefault();
      body.classList.remove('loaded');
      setTimeout(() => {
        window.location.href = href;
      }, transitionDuration);
    });
  });
}

function initPlanner() {
  const travelForm = document.querySelector('#travelForm');
  if (!travelForm) return;

  const interestButtons = document.querySelectorAll('.chip');
  let selectedInterest = 'Culture';
  const resultContainer = document.querySelector('#itineraryResult');

  interestButtons.forEach(button => {
    button.addEventListener('click', () => {
      interestButtons.forEach(item => item.classList.remove('active'));
      button.classList.add('active');
      selectedInterest = button.dataset.interest;
    });
  });

  travelForm.addEventListener('submit', event => {
    event.preventDefault();
    const budget = document.querySelector('#budget').value;
    const days = Number(document.querySelector('#days').value);
    const itinerary = generateItinerary(budget, days, selectedInterest);
    resultContainer.innerHTML = renderItinerary(itinerary);
  });
}

function generateItinerary(budget, days, interest) {
  const descriptions = {
    Lean: 'efficient and memorable',
    Balanced: 'curated and elevated',
    Premium: 'luxury and immersive'
  };
  const cities = ['Bangkok', 'Reykjavik', 'Kyoto', 'Lisbon', 'Cusco', 'Marrakesh', 'Seoul'];
  const selectedCity = cities[Math.floor(Math.random() * cities.length)];

  const mockActivities = {
    Culture: [
      'Ancient temple tour',
      'Street art walk',
      'Museum after-hours',
      'Local market discovery',
      'Historic theater evening',
      'Gallery launch reception',
      'Cultural festival showcase'
    ],
    Adventure: [
      'Sunrise canyon hike',
      'Coastal e-bike challenge',
      'Kayak reef expedition',
      'Urban climbing session',
      'Zipline forest glade',
      'Desert dune ride',
      'Volcano lookout trek'
    ],
    Food: [
      'Night food market crawl',
      'Chef tasting menu',
      'Street food masterclass',
      'Artisan bakery tour',
      'Wine pairing dinner',
      'Rooftop café brunch',
      'Local flavors walking tour'
    ],
    Wellness: [
      'Wellness sunrise yoga',
      'Forest bathing retreat',
      'Spa recovery session',
      'Meditation crater tour',
      'Cold plunge experience',
      'Nutrition workshop',
      'Aromatherapy lounge visit'
    ],
    Luxury: [
      'Private yacht sunset',
      'Helicopter city view',
      'VIP lounge dinner',
      'Luxury lodge check-in',
      'Bespoke shopping journey',
      'Concierge art tour',
      'Premium tasting flight'
    ]
  };

  const selections = [...mockActivities[interest]];
  const plan = {
    budget,
    days,
    interest,
    city: selectedCity,
    theme: descriptions[budget],
    daysPlan: []
  };

  for (let i = 1; i <= days; i += 1) {
    const dayActivities = [];
    const activityCount = 2;
    for (let j = 0; j < activityCount; j += 1) {
      const index = Math.floor(Math.random() * selections.length);
      dayActivities.push(selections.splice(index, 1)[0] || 'Signature city discovery');
    }
    plan.daysPlan.push({ day: i, activities: dayActivities });
  }

  return plan;
}

function renderItinerary(plan) {
  const header = `
    <div class="itinerary-summary glass-panel">
      <p class="eyebrow">${plan.interest} journey · ${plan.budget} budget</p>
      <h3>${plan.days} days in ${plan.city}</h3>
      <p>Smart itinerary optimized for ${plan.theme} travel. Each day blends local impact, premium rhythm, and memorable moments.</p>
    </div>
  `;

  const daysHtml = plan.daysPlan.map(day => `
    <article class="day-card">
      <h3>Day ${day.day}</h3>
      <ul>
        ${day.activities.map(activity => `<li>${activity}</li>`).join('')}
      </ul>
    </article>
  `).join('');

  return header + daysHtml;
}

function initCounters() {
  const counters = document.querySelectorAll('.counter');
  if (!counters.length) return;

  counters.forEach(counter => {
    const target = parseFloat(counter.dataset.target);
    const increment = target / 120;
    let current = 0;
    const formatter = Number.isInteger(target) ? value => Math.round(value) : value => value.toFixed(1);
    const interval = setInterval(() => {
      current += increment;
      if (current >= target) {
        counter.textContent = formatter(target);
        clearInterval(interval);
      } else {
        counter.textContent = formatter(current);
      }
    }, 18);
  });
}
