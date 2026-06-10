const siteData = {
  events: [
    { id: 'e1', name: 'Phnom Penh Night Festival', category: 'Festival', location: 'Phnom Penh', date: '2026-07-08', time: '18:00', price: 0, rating: 4.8, attendees: 3200, details: 'A vibrant open-air event with live performances, street food, and cultural showcases in the heart of Phnom Penh. FREE EVENT!', organizer: 'City Stages', banner: 'image/Lantern-boats-dazzle-for-Water-Festival-in-Phnom-Penh.jpg', gallery: ['image/Lantern-boats-dazzle-for-Water-Festival-in-Phnom-Penh.jpg', 'image/Lantern-boats-dazzle-for-Water-Festival-in-Phnom-Penh.jpg', 'https://images.unsplash.com/photo-1555939594-58d7cb561404?w=400&q=80'], tags: ['Festival', 'Cultural', 'Food'] },
    { id: 'e2', name: 'Angkor Sound Concert', category: 'Concert', location: 'Siem Reap', date: '2026-08-12', time: '20:00', price: 55, rating: 4.9, attendees: 2200, details: 'A premium outdoor concert featuring Cambodia’s top artists and a cinematic light show near Angkor Wat.', organizer: 'Temple Nights', banner: 'image/SmileofAngkorinSiemReap.jpg', gallery: ['image/smile-of-angkor-show.jpg', 'image/smile-of-angkor-show.jpg', 'image/smile-of-angkor-show.jpg'], tags: ['Concert', 'Luxury', 'Music'] },
    { id: 'e3', name: 'Koh Rong Food Fair', category: 'Food Fair', location: 'Koh Rong', date: '2026-09-03', time: '12:00', price: 0, rating: 4.6, attendees: 1700, details: 'A seafood and street food festival on the beach, celebrating local chefs, cocktails and sunset dining. FREE EVENT!', organizer: 'SeaTaste', banner: 'image/smile-of-angkor-show.jpg', gallery: ['https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&q=80', 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&q=80', 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&q=80'], tags: ['Food Fair', 'Beach', 'Local'] },
    { id: 'e4', name: 'Battambang Startup Meetup', category: 'Startup Event', location: 'Battambang', date: '2026-07-24', time: '10:00', price: 0, rating: 4.4, attendees: 820, details: 'A founder-focused meetup with panels, networking and local innovation showcases. FREE EVENT!', organizer: 'Cambodia Founders', banner: 'image/Lantern-boats-dazzle-for-Water-Festival-in-Phnom-Penh.jpg', gallery: ['https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&q=80', 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&q=80', 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&q=80'], tags: ['Startup', 'Networking', 'Business'] },
    { id: 'e5', name: 'Mondulkiri Eco Adventure', category: 'Sports', location: 'Mondulkiri', date: '2026-08-18', time: '07:00', price: 40, rating: 4.7, attendees: 940, details: 'Guided trail runs, waterfall hikes, and elephant sanctuary tours in Cambodia’s wild eastern province.', organizer: 'Wild Way', banner: 'image/SmileofAngkorinSiemReap.jpg', gallery: ['https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&q=80', 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&q=80', 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&q=80'], tags: ['Sports', 'Adventure', 'Nature'] },
    { id: 'e6', name: 'Battambang Film & Culture', category: 'Cultural Event', location: 'Battambang', date: '2026-07-29', time: '19:00', price: 22, rating: 4.5, attendees: 1100, details: 'An intimate film screening and discussion led by leading Cambodian filmmakers and storytellers.', organizer: 'ArtHouse', banner: 'image/smile-of-angkor-show.jpg', gallery: ['https://images.unsplash.com/photo-1478720568477-152d9e3287f0?w=400&q=80', 'https://images.unsplash.com/photo-1478720568477-152d9e3287f0?w=400&q=80', 'https://images.unsplash.com/photo-1478720568477-152d9e3287f0?w=400&q=80'], tags: ['Cultural', 'Film', 'Art'] },
    { id: 'e7', name: 'Kampot Pepper Supper Club', category: 'Food Fair', location: 'Kampot', date: '2026-08-05', time: '18:30', price: 30, rating: 4.8, attendees: 740, details: 'A tasting event celebrating Kampot pepper cuisine, riverside dining and chef storytelling.', organizer: 'Supper Club', banner: 'image/Lantern-boats-dazzle-for-Water-Festival-in-Phnom-Penh.jpg', gallery: ['https://images.unsplash.com/photo-1504674900967-a694f68d3c7d?w=400&q=80', 'https://images.unsplash.com/photo-1504674900967-a694f68d3c7d?w=400&q=80', 'https://images.unsplash.com/photo-1504674900967-a694f68d3c7d?w=400&q=80'], tags: ['Food Fair', 'Gourmet', 'Local'] },
    { id: 'e8', name: 'Phnom Penh Startup Carnival', category: 'Startup Event', location: 'Phnom Penh', date: '2026-09-11', time: '09:00', price: 20, rating: 4.5, attendees: 1300, details: 'A startup showcase, pitch stage and investor lounge for regional founders and digital creators.', organizer: 'LaunchHub', banner: 'image/SmileofAngkorinSiemReap.jpg', gallery: ['https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&q=80', 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&q=80', 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&q=80'], tags: ['Startup', 'Festival', 'Tech'] }
  ],
  attractions: [
    { id: 'a1', name: 'Angkor Wat Sunrise Tour', region: 'Siem Reap', rating: 4.9, description: 'A premium guided dawn visit to the temples with cultural narration and local breakfast.', nearby: ['Angkor Sound Concert', 'Phnom Penh Night Festival'] },
    { id: 'a2', name: 'Koh Rong Beach Escape', region: 'Sihanoukville', rating: 4.7, description: 'A relaxed seaside experience with hidden coves, seafood dining and sunset cruises.', nearby: ['Koh Rong Food Fair'] },
    { id: 'a3', name: 'Kampot Riverside Retreat', region: 'Kampot', rating: 4.8, description: 'Chill riverside stays, pepper farm tours and elegant dining by the water.', nearby: ['Kampot Pepper Supper Club'] },
    { id: 'a4', name: 'Phnom Penh Heritage Walk', region: 'Phnom Penh', rating: 4.6, description: 'A curated city walking route through colonial landmarks, markets and hidden cafes.', nearby: ['Phnom Penh Night Festival', 'Phnom Penh Startup Carnival'] },
    { id: 'a5', name: 'Mondulkiri Waterfall Trek', region: 'Mondulkiri', rating: 4.7, description: 'A scenic nature trek to waterfalls, hill tribe villages and eco camps.', nearby: ['Mondulkiri Eco Adventure'] },
    { id: 'a6', name: 'Battambang Art Trail', region: 'Battambang', rating: 4.5, description: 'A creative tour of galleries, suspension bridge views and riverside street art.', nearby: ['Battambang Film & Culture', 'Battambang Startup Meetup'] }
  ],
  travelers: [
    { name: 'Sophea', city: 'Phnom Penh', review: 'CamEvent Explorer helped me find surprising local shows and food markets in one page.', rating: 5 },
    { name: 'Tom', city: 'London', review: 'The event recommendations were polished and felt like a real product pitch.', rating: 4.8 },
    { name: 'Maly', city: 'Siem Reap', review: 'I booked a premium concert and cultural tour from the same platform instantly.', rating: 4.9 }
  ],
  users: [
    { id: 'u1', name: 'Sok', email: 'sok@cambodia.com', role: 'traveler' },
    { id: 'u2', name: 'Nita', email: 'nita@camexplorer.com', role: 'organizer' },
    { id: 'u3', name: 'Ari', email: 'ari@camadmin.com', role: 'admin' }
  ],
  bookings: [
    { id: 'b1', eventId: 'e2', name: 'Sok', quantity: 2, type: 'VIP', total: 110, ticketNumber: 'CAM-4937', status: 'Confirmed' }
  ],
  savedEvents: ['e3', 'e6'],
  savedAttractions: ['a1', 'a4'],
  orgEvents: [
    { id: 'o1', name: 'Cambodia Culture Exchange', date: '2026-10-05', location: 'Phnom Penh', category: 'Cultural Event', sales: 780, revenue: 15600 }
  ],
  reports: [
    { id: 'r1', user: 'Tom', issue: 'Missing ticket confirmation', status: 'Resolved' },
    { id: 'r2', user: 'Sophea', issue: 'Event date update', status: 'Pending' }
  ],
  planner: {
    budgets: ['Lean', 'Balanced', 'Premium'],
    interests: ['Culture', 'Food', 'Adventure', 'Wellness', 'Luxury']
  }
};

const state = {
  currentUser: null,
  activeSlide: 0,
  toastIndex: 0,
  savedEvents: [...siteData.savedEvents],
  savedAttractions: [...siteData.savedAttractions],
  darkMode: false,
  plannerInterest: 'Culture'
};

const regionLocationCenters = {
  'Phnom Penh': [11.5564, 104.9282],
  'Siem Reap': [13.3611, 103.8599],
  'Koh Rong': [10.6260, 103.2168],
  'Kampot': [10.6161, 104.1810],
  'Mondulkiri': [12.4387, 107.1839],
  'Battambang': [13.0995, 103.2040]
};

window.addEventListener('DOMContentLoaded', () => {
  initLoadingScreen();
  initTheme();
  bindNav();
  bindMobileMenu();
  bindBackToTop();
  bindPageTransitions();
  initToastContainer();
  renderPage();
  initScrollAnimations();
  // register service worker for offline support
  registerServiceWorker();
  // restore any reminders set previously
  processSavedReminders();
});

function initLoadingScreen() {
  const loader = document.querySelector('#loading-screen');
  if (!loader) return;
  setTimeout(() => {
    loader.style.opacity = '0';
    setTimeout(() => loader.remove(), 500);
  }, 650);
}

function initTheme() {
  const storedTheme = localStorage.getItem('camdark');
  if (storedTheme === 'true') {
    document.body.classList.add('dark-mode');
    state.darkMode = true;
  }
  const themeToggle = document.querySelector('#darkToggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      state.darkMode = !state.darkMode;
      document.body.classList.toggle('dark-mode', state.darkMode);
      localStorage.setItem('camdark', state.darkMode);
      themeToggle.classList.toggle('active', state.darkMode);
    });
  }
}

function bindNav() {
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    if (link.href === window.location.href) {
      link.classList.add('active');
    }
  });
}

function bindMobileMenu() {
  const toggle = document.querySelector('.mobile-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');
  const closeBtn = document.querySelector('#mobileClose');
  if (!toggle || !mobileMenu) return;
  toggle.addEventListener('click', () => mobileMenu.classList.toggle('open'));
  closeBtn?.addEventListener('click', () => mobileMenu.classList.remove('open'));
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => mobileMenu.classList.remove('open'));
  });
}

function bindBackToTop() {
  const back = document.querySelector('#backTop');
  if (!back) return;
  window.addEventListener('scroll', () => {
    back.classList.toggle('visible', window.scrollY > 380);
  });
  back.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

function bindPageTransitions() {
  document.querySelectorAll('a[href]').forEach(link => {
    link.addEventListener('click', (event) => {
      const href = link.getAttribute('href');
      if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('javascript:')) return;
      if (link.target === '_blank') return;
      event.preventDefault();
      document.body.style.opacity = '0';
      setTimeout(() => { window.location.href = href; }, 260);
    });
  });
}

function initToastContainer() {
  if (!document.querySelector('#toast-container')) {
    const container = document.createElement('div');
    container.id = 'toast-container';
    document.body.appendChild(container);
  }
}

function showToast(title, message) {
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<strong>${title}</strong><p>${message}</p>`;
  document.querySelector('#toast-container').appendChild(toast);
  setTimeout(() => { toast.remove(); }, 4200);
}

function renderPage() {
  const page = document.body.dataset.page;
  if (page === 'home') renderHome();
  if (page === 'events') renderEvents();
  if (page === 'event-details') renderEventDetails();
  if (page === 'book') renderBooking();
  if (page === 'attractions') renderAttractions();
  if (page === 'login') renderLogin();
  if (page === 'signup') renderSignup();
  if (page === 'dashboard') renderDashboard();
  if (page === 'organizer') renderOrganizer();
  if (page === 'admin') renderAdmin();
}

function renderHome() {
  renderHeroSlides();
  renderFeaturedEvents();
  renderTrendingAttractions();
  renderStats();
  renderTestimonials();
  renderTravelPlanner();
  bindHomeSearch();
  bindNearbyMap();
  renderRecommendations();
  loadSimulatedEvents();
  renderUpcomingEvents();
  bindLiveControls();
  startLiveSimulator();
}

function bindNearbyMap() {
  const locateButton = document.querySelector('#locateButton');
  const locationStatus = document.querySelector('#locationStatus');
  const locationSelect = document.querySelector('#searchLocation');

  if (locateButton) {
    locateButton.addEventListener('click', () => {
      if (!navigator.geolocation) {
        locationStatus.textContent = 'Geolocation is not available in this browser.';
        return;
      }
      locationStatus.textContent = 'Detecting your Cambodia location…';
      navigator.geolocation.getCurrentPosition((position) => {
        const region = resolveRegionFromCoords(position.coords.latitude, position.coords.longitude);
        locationStatus.textContent = `Detected location: ${region}`;
        renderNearbyEvents(region);
      }, () => {
        locationStatus.textContent = 'Location permission denied or unavailable.';
        showToast('Location unavailable', 'Allow location access or choose a location manually.');
      }, { timeout: 10000, maximumAge: 60000 });
    });
  }

  locationSelect?.addEventListener('change', () => {
    if (locationSelect.value) {
      const region = locationSelect.value;
      locationStatus.textContent = `Showing events for ${region}`;
      renderNearbyEvents(region);
    }
  });
}

function resolveRegionFromCoords(lat, lon) {
  let nearest = null;
  let bestDistance = Infinity;
  Object.entries(regionLocationCenters).forEach(([region, [rlat, rlon]]) => {
    const distance = getDistance(lat, lon, rlat, rlon);
    if (distance < bestDistance) {
      bestDistance = distance;
      nearest = region;
    }
  });
  return nearest || 'Phnom Penh';
}

function getDistance(lat1, lon1, lat2, lon2) {
  const toRad = (value) => value * Math.PI / 180;
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a = Math.sin(dLat / 2) ** 2 + Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return 6371 * c;
}

function renderNearbyEvents(region) {
  const list = document.querySelector('#nearbyEventsList');
  const locationStatus = document.querySelector('#locationStatus');
  if (!list || !locationStatus) return;
  const matches = siteData.events.filter(event => event.location === region);
  setMapPinHighlights(region);

  if (!matches.length) {
    list.innerHTML = `
      <div class="nearby-event">
        <strong>No nearby events found</strong>
        <p class="body-small">We couldn’t find active events in ${region}. Try Phnom Penh, Siem Reap, or Kampot for more options.</p>
      </div>
    `;
    return;
  }

  list.innerHTML = matches.map(event => `
    <div class="nearby-event">
      <strong>${event.name}</strong>
      <p class="body-small">${event.date} • ${event.time}</p>
      <p class="body-small">${event.details}</p>
    </div>
  `).join('');
}

function setMapPinHighlights(region) {
  document.querySelectorAll('.map-pin').forEach(pin => {
    pin.classList.toggle('active', pin.dataset.location === region);
  });
}

function renderHeroSlides() {
  const slides = document.querySelectorAll('.slide');
  if (!slides.length) return;
  slides[state.activeSlide].classList.add('active');
  setInterval(() => {
    slides[state.activeSlide].classList.remove('active');
    state.activeSlide = (state.activeSlide + 1) % slides.length;
    slides[state.activeSlide].classList.add('active');
  }, 5200);
}

function renderFeaturedEvents() {
  const container = document.querySelector('#featuredEvents');
  if (!container) return;
  container.innerHTML = siteData.events.map(event => {
    const active = state.savedEvents.includes(event.id) ? 'active' : '';
    return `
      <article class="event-card">
        <div class="card-hero overlay" style="background-image: url('${event.banner}'); background-size: cover; background-position: center;">
          <span>${event.category}</span>
        </div>
        <div class="card-body">
          <h3 class="card-title">${event.name}</h3>
          <div class="card-meta"><span>${event.date}</span><span>${event.location}</span><span>${event.time}</span></div>
          <p class="card-text">${event.details}</p>
          <div class="card-actions">
            <button class="favorite-toggle ${active}" data-event="${event.id}" aria-label="Favorite event">❤</button>
            <a class="btn btn-primary" href="event-details.html?id=${event.id}">Book Ticket</a>
          </div>
        </div>
      </article>
    `;
  }).join('');
  bindFavoriteButtons();
}

function renderTrendingAttractions() {
  const container = document.querySelector('#trendingAttractions');
  if (!container) return;
  container.innerHTML = siteData.attractions.map(item => `
    <article class="trend-card glass-card">
      <h3>${item.name}</h3>
      <p>${item.description}</p>
      <div class="rating">${item.rating} ★ <span>${item.region}</span></div>
      <p class="body-small">Nearby: ${item.nearby.join(', ')}</p>
      <a class="btn btn-secondary" href="attractions.html#${item.id}">Explore</a>
    </article>
  `).join('');
}

function renderStats() {
  const counters = document.querySelectorAll('.stat-count');
  if (!counters.length) return;
  const values = [1200, 500, 50000, 25];
  counters.forEach((counter, index) => {
    let start = 0;
    const end = values[index];
    const step = Math.ceil(end / 110);
    const interval = setInterval(() => {
      start += step;
      if (start >= end) {
        counter.textContent = end.toLocaleString();
        clearInterval(interval);
      } else {
        counter.textContent = start.toLocaleString();
      }
    }, 18);
  });
}

function renderTestimonials() {
  const card = document.querySelector('#testimonialCard');
  if (!card) return;
  let current = 0;
  const update = () => {
    const review = siteData.travelers[current];
    card.innerHTML = `
      <p>“${review.review}”</p>
      <div class="testimonial-author">
        <div class="avatar">${review.name.charAt(0)}</div>
        <div>
          <strong>${review.name}</strong>
          <p class="body-small">${review.city}</p>
        </div>
      </div>
    `;
  };
  update();
  document.querySelector('#testimonialPrev')?.addEventListener('click', () => {
    current = (current - 1 + siteData.travelers.length) % siteData.travelers.length;
    update();
  });
  document.querySelector('#testimonialNext')?.addEventListener('click', () => {
    current = (current + 1) % siteData.travelers.length;
    update();
  });
}

function renderTravelPlanner() {
  const interestButtons = document.querySelectorAll('.planner-chip');
  interestButtons.forEach(button => {
    button.addEventListener('click', () => {
      interestButtons.forEach(el => el.classList.remove('active'));
      button.classList.add('active');
      state.plannerInterest = button.dataset.interest;
    });
  });
  const form = document.querySelector('#plannerForm');
  if (!form) return;
  const result = document.querySelector('#plannerResult');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const budget = form.querySelector('#plannerBudget').value;
    const days = Number(form.querySelector('#plannerDays').value);
    const plan = generatePlanner(budget, days, state.plannerInterest);
    result.innerHTML = renderPlanner(plan);
  });
}

function generatePlanner(budget, days, interest) {
  const descriptions = { Lean: 'efficient and memorable', Balanced: 'curated and elevated', Premium: 'luxury and immersive' };
  const cities = ['Siem Reap', 'Phnom Penh', 'Koh Rong', 'Kampot', 'Mondulkiri'];
  const activities = {
    Culture: ['Angkor Wat sunrise', 'Pagoda storytelling', 'Heritage museum tour', 'Traditional dance dinner', 'Artisan souk visit'],
    Food: ['Night market tasting', 'Chef’s table', 'Pepper farm lunch', 'Street food crawl', 'Coffee roastery stop'],
    Adventure: ['Mangrove kayak ride', 'Waterfall trek', 'Hilltribe village walk', 'Zipline forest pass', 'Cave discovery'],
    Wellness: ['Yoga by the lake', 'Spa recovery session', 'Herbal cooking class', 'Meditation garden', 'Wellness market'],
    Luxury: ['Private yacht dinner', 'VIP temple tour', 'Helicopter sunset', 'Luxury lodge stay', 'Concierge shopping']
  };
  const city = cities[Math.floor(Math.random() * cities.length)];
  const pool = [...activities[interest]];
  const daysPlan = [];
  for (let i = 1; i <= days; i++) {
    const choices = [];
    for (let j = 0; j < 2; j++) {
      const idx = Math.floor(Math.random() * pool.length);
      choices.push(pool.splice(idx, 1)[0] ?? 'Local highlight session');
    }
    daysPlan.push({ day: i, activities: choices });
  }
  return { budget, days, interest, city, description: descriptions[budget], daysPlan };
}

function renderPlanner(plan) {
  return `
    <div class="detail-card">
      <div class="section-title"><h2>${plan.interest} Journey · ${plan.budget}</h2></div>
      <p class="body-small">${plan.days} days in ${plan.city} with a ${plan.description} itinerary.</p>
    </div>
    ${plan.daysPlan.map(day => `
      <article class="schedule-item">
        <strong>Day ${day.day}</strong>
        <ul>${day.activities.map(item => `<li>${item}</li>`).join('')}</ul>
      </article>
    `).join('')}
  `;
}

function bindHomeSearch() {
  const searchInput = document.querySelector('#searchEvent');
  const suggestionBox = document.querySelector('#searchSuggestions');
  if (!searchInput || !suggestionBox) return;
  searchInput.addEventListener('input', () => {
    const value = searchInput.value.toLowerCase().trim();
    const matches = fuzzySearch(value, siteData.events).slice(0, 5);
    suggestionBox.innerHTML = matches.map(match => `<button type="button" data-value="${match.name}">${match.name}</button>`).join('');
    suggestionBox.style.display = matches.length ? 'block' : 'none';
    suggestionBox.querySelectorAll('button').forEach(button => {
      button.addEventListener('click', () => {
        searchInput.value = button.dataset.value;
        suggestionBox.style.display = 'none';
      });
    });
  });
  document.addEventListener('click', (event) => {
    if (!searchInput.contains(event.target) && !suggestionBox.contains(event.target)) {
      suggestionBox.style.display = 'none';
    }
  });
}

function bindFavoriteButtons() {
  document.querySelectorAll('.favorite-toggle').forEach(button => {
    button.addEventListener('click', () => {
      const id = button.dataset.event;
      toggleFavorite(id);
      button.classList.toggle('active');
    });
  });
}

function toggleFavorite(eventId) {
  const index = state.savedEvents.indexOf(eventId);
  if (index >= 0) {
    state.savedEvents.splice(index, 1);
    showToast('Saved removed', 'This event is no longer in your favorites.');
  } else {
    state.savedEvents.push(eventId);
    showToast('Saved', 'Event added to your favorites.');
  }
}

function renderEvents() {
  const categoryButtons = document.querySelectorAll('.category-chip');
  const sortSelect = document.querySelector('#sortEvents');
  const searchInput = document.querySelector('#eventsSearch');
  const results = document.querySelector('#eventsGrid');
  const activeFilters = new Set();

  categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
      button.classList.toggle('active');
      const value = button.dataset.category;
      if (activeFilters.has(value)) activeFilters.delete(value);
      else activeFilters.add(value);
      updateEvents();
    });
  });

  sortSelect?.addEventListener('change', updateEvents);
  searchInput?.addEventListener('input', updateEvents);

  function updateEvents() {
    const query = searchInput?.value.toLowerCase().trim() || '';
    const sort = sortSelect?.value || 'featured';
    let events = [...siteData.events];
    if (activeFilters.size) {
      events = events.filter(event => activeFilters.has(event.category));
    }
    if (query) {
      events = fuzzySearch(query, events);
    }
    if (sort === 'price-asc') events.sort((a,b) => a.price - b.price);
    if (sort === 'price-desc') events.sort((a,b) => b.price - a.price);
    if (sort === 'date') events.sort((a,b) => new Date(a.date) - new Date(b.date));
    results.innerHTML = events.map(event => `
      <article class="event-card">
        <div class="card-hero overlay" style="background-image: url('${event.banner}'); background-size: cover; background-position: center;"></div>
        <div class="card-body">
          <h3 class="card-title">${event.name}</h3>
          <div class="tag-grid">${event.tags.map(tag => `<span class="tag-pill">${tag}</span>`).join('')}</div>
          <div class="event-meta"><span>${event.location}</span><span>${event.date}</span><span>${event.time}</span></div>
          <div class="card-actions">
            <a class="btn btn-secondary" href="event-details.html?id=${event.id}">Details</a>
            <span class="event-badge ${event.price === 0 ? 'badge-free' : ''}">${event.price === 0 ? 'FREE' : '$' + event.price}</span>
          </div>
        </div>
      </article>
    `).join('');
  }

  updateEvents();
}

function renderEventDetails() {
  const params = new URLSearchParams(window.location.search);
  const eventId = params.get('id') || 'e1';
  const event = siteData.events.find(item => item.id === eventId) || siteData.events[0];
  const banner = document.querySelector('#detailBanner');
  const title = document.querySelector('#detailTitle');
  const meta = document.querySelector('#detailMeta');
  const description = document.querySelector('#detailDescription');
  const organizer = document.querySelector('#detailOrganizer');
  const details = document.querySelector('#detailDetails');
  const schedule = document.querySelector('#eventSchedule');
  const gallery = document.querySelector('#galleryGrid');
  const related = document.querySelector('#relatedEvents');
  const bookLink = document.querySelector('#bookTicketLink');
  const saveBtn = document.querySelector('#saveEventBtn');

  if (!event || !banner) return;
  banner.style.backgroundImage = `url('${event.banner}')`; banner.style.backgroundSize = 'cover'; banner.style.backgroundPosition = 'center';
  title.textContent = event.name;
  meta.innerHTML = `
    <span>Date: <strong>${event.date}</strong></span>
    <span>Time: <strong>${event.time}</strong></span>
    <span>Location: <strong>${event.location}</strong></span>
  `;
  description.textContent = event.details;
  organizer.textContent = event.organizer;
  details.textContent = `Ticket price: ${event.price === 0 ? 'FREE' : '$' + event.price}. Category: ${event.category}. This premium experience is tailored for travelers seeking authentic Cambodian discovery.`;
  bookLink.href = `book.html?id=${event.id}`;
  document.querySelector('#detailLocation').textContent = event.location;
  saveBtn.addEventListener('click', () => {
    toggleFavorite(event.id);
    saveBtn.classList.toggle('active');
  });
  schedule.innerHTML = [
    { time: '09:00', label: 'Welcome and local orientation' },
    { time: '11:00', label: 'Main experience or show' },
    { time: '14:00', label: 'Local tasting or networking pause' },
    { time: '18:00', label: 'Sunset cultural closing' }
  ].map(item => `
    <div class="schedule-item">
      <strong>${item.time}</strong>
      <p>${item.label}</p>
    </div>
  `).join('');
  gallery.innerHTML = event.gallery.map((imageUrl, index) => `
    <div class="gallery-tile" style="background-image: url('${imageUrl}'); background-size: cover; background-position: center;">
      <button type="button" data-image="${imageUrl}" class="gallery-open"></button>
    </div>
  `).join('');
  document.querySelectorAll('.gallery-open').forEach(button => {
    button.addEventListener('click', () => openModal(button.dataset.image));
  });
  related.innerHTML = siteData.events.filter(item => item.id !== event.id).slice(0, 3).map(item => `
    <article class="related-card glass-card">
      <h4>${item.name}</h4>
      <p class="body-small">${item.location} • ${item.date}</p>
      <a class="btn btn-secondary" href="event-details.html?id=${item.id}">View</a>
    </article>
  `).join('');
}

function openModal(imageUrl) {
  const modal = document.querySelector('#galleryModal');
  const modalContent = modal.querySelector('.modal-content');
  modalContent.style.backgroundImage = `url('${imageUrl}')`;
  modalContent.style.backgroundSize = 'cover';
  modalContent.style.backgroundPosition = 'center';
  modal.classList.add('open');
}

function closeModal() {
  document.querySelector('#galleryModal')?.classList.remove('open');
}

function renderBooking() {
  const params = new URLSearchParams(window.location.search);
  const eventId = params.get('id') || 'e1';
  const event = siteData.events.find(item => item.id === eventId) || siteData.events[0];
  const summary = document.querySelector('#bookingSummary');
  const form = document.querySelector('#bookingForm');
  const resultPanel = document.querySelector('#bookingResult');
  const total = document.querySelector('#bookingTotal');
  const typeSelect = document.querySelector('#ticketType');
  const quantityInput = document.querySelector('#ticketQuantity');
  const priceText = document.querySelector('#ticketPrice');

  priceText.textContent = event.price === 0 ? 'FREE' : `$${event.price}`;
  summary.innerHTML = `
    <h3>${event.name}</h3>
    <p class="body-small">${event.location} • ${event.date} • ${event.time}</p>
    <div class="summary-row"><span>Ticket</span><strong>${event.price === 0 ? 'FREE' : '$' + event.price}</strong></div>
  `;
  const updateTotal = () => {
    const qty = Number(quantityInput.value) || 1;
    const multiplier = typeSelect.value === 'VIP' ? 1.6 : 1;
    const totalValue = event.price === 0 ? 0 : qty * event.price * multiplier;
    total.textContent = event.price === 0 ? 'FREE' : `$${totalValue.toFixed(2)}`;
  };
  updateTotal();
  typeSelect?.addEventListener('change', updateTotal);
  quantityInput?.addEventListener('input', updateTotal);
  form?.addEventListener('submit', (eventSubmit) => {
    eventSubmit.preventDefault();
    const name = form.querySelector('#fullName').value.trim();
    const email = form.querySelector('#email').value.trim();
    const phone = form.querySelector('#phone').value.trim();
    const quantity = Number(quantityInput.value);
    const type = typeSelect.value;
    const multiplier = type === 'VIP' ? 1.6 : 1;
    const totalValue = quantity * event.price * multiplier;
    const ticketNumber = `CAM-${Math.floor(Math.random() * 9000) + 1000}`;
    resultPanel.innerHTML = `
      <div class="booking-success">
        <h2>Booking Successful</h2>
        <p>Your ticket is confirmed for ${event.name}.</p>
        <div class="qr-code">QR CODE<br><strong>${ticketNumber}</strong></div>
        <p class="body-small">Name: ${name}<br>Email: ${email}<br>Type: ${type} • Quantity: ${quantity}<br>Total: ${event.price === 0 ? 'FREE' : '$' + totalValue.toFixed(2)}</p>
      </div>
    `;
    showToast('Booking success', 'Your fake ticket has been generated.');
    siteData.bookings.push({ id: `b${siteData.bookings.length + 2}`, eventId: event.id, name, quantity, type, total: totalValue, ticketNumber, status: 'Confirmed' });
    form.reset();
    updateTotal();
  });
}

function renderAttractions() {
  const container = document.querySelector('#attractionGrid');
  if (!container) return;
  container.innerHTML = siteData.attractions.map(item => `
    <article class="attraction-card">
      <div class="card-hero overlay" style="background-image: url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80'); background-size: cover; background-position: center;"></div>
      <div class="card-body">
        <h3 class="card-title">${item.name}</h3>
        <div class="card-meta"><span>${item.region}</span><span>${item.rating} ★</span></div>
        <p class="card-text">${item.description}</p>
        <p class="body-small">Nearby events: ${item.nearby.join(', ')}</p>
        <a class="btn btn-primary" href="events.html">Explore</a>
      </div>
    </article>
  `).join('');
}

function renderLogin() {
  const form = document.querySelector('#loginForm');
  form?.addEventListener('submit', (event) => {
    event.preventDefault();
    const email = form.querySelector('#loginEmail').value.trim();
    const password = form.querySelector('#loginPassword').value.trim();
    const user = siteData.users.find(u => u.email === email);
    if (!user || password.length < 4) {
      showToast('Login failed', 'Please enter valid credentials for the demo.');
      return;
    }
    sessionStorage.setItem('camuser', JSON.stringify(user));
    showToast('Login successful', `Welcome back, ${user.name}.`);
    setTimeout(() => window.location.href = 'dashboard.html', 800);
  });
  document.querySelector('#googleLogin')?.addEventListener('click', () => {
    showToast('Continue with Google', 'Simulated login complete.');
    sessionStorage.setItem('camuser', JSON.stringify(siteData.users[0]));
    setTimeout(() => window.location.href = 'dashboard.html', 800);
  });
}

function renderSignup() {
  const form = document.querySelector('#signupForm');
  form?.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = form.querySelector('#signupName').value.trim();
    const email = form.querySelector('#signupEmail').value.trim();
    const password = form.querySelector('#signupPassword').value.trim();
    const confirm = form.querySelector('#signupConfirm').value.trim();
    if (!name || !email || password.length < 6 || password !== confirm) {
      showToast('Signup error', 'Please complete the form and match passwords.');
      return;
    }
    const user = { id: `u${siteData.users.length + 1}`, name, email, role: 'traveler' };
    siteData.users.push(user);
    showToast('Account created', 'Your startup-ready account is now simulated.');
    setTimeout(() => form.reset(), 300);
  });
}

function renderDashboard() {
  const user = getCurrentUser();
  const profile = document.querySelector('#profileCard');
  const savedEventsList = document.querySelector('#savedEventsList');
  const savedAttractionsList = document.querySelector('#savedAttractionsList');
  const ticketsList = document.querySelector('#myTicketsList');
  const notificationsList = document.querySelector('#notificationsList');
  if (!user || !profile) return;
  profile.innerHTML = `
    <h2>Welcome, ${user.name}</h2>
    <p class="body-small">Member since 2026. Role: ${user.role}</p>
    <div class="tag-grid"><span class="tag-pill">Traveler dashboard</span></div>
  `;
  savedEventsList.innerHTML = state.savedEvents.length ? state.savedEvents.map(eventId => {
    const event = siteData.events.find(item => item.id === eventId);
    return `<li>${event?.name || 'Event'} • ${event?.date || ''}</li>`;
  }).join('') : '<li>No saved events yet.</li>';
  savedAttractionsList.innerHTML = state.savedAttractions.length ? state.savedAttractions.map(id => {
    const item = siteData.attractions.find(at => at.id === id);
    return `<li>${item?.name || 'Attraction'} • ${item?.region || ''}</li>`;
  }).join('') : '<li>No saved attractions yet.</li>';
  ticketsList.innerHTML = siteData.bookings.map(book => {
    const event = siteData.events.find(item => item.id === book.eventId);
    return `<li>${event?.name || book.eventId} • ${book.quantity} x ${book.type} • $${book.total.toFixed(2)}</li>`;
  }).join('');
  notificationsList.innerHTML = `
    <li>New events added in Phnom Penh.</li>
    <li>Booking confirmation is ready for your next trip.</li>
    <li>Organizers updated a schedule near you.</li>
  `;
}

function renderOrganizer() {
  const analytics = document.querySelector('#organizerAnalytics');
  const eventList = document.querySelector('#organizerEvents');
  const form = document.querySelector('#organizerForm');
  if (!analytics || !eventList || !form) return;
  analytics.innerHTML = `
    <div class="analytics-card"><strong>${siteData.orgEvents.length}</strong><p>Total Events</p></div>
    <div class="analytics-card"><strong>${siteData.orgEvents.reduce((sum, item) => sum + item.sales, 0)}</strong><p>Tickets Sold</p></div>
    <div class="analytics-card"><strong>$${siteData.orgEvents.reduce((sum, item) => sum + item.revenue, 0)}</strong><p>Revenue</p></div>
  `;
  eventList.innerHTML = siteData.orgEvents.map(item => `
    <article class="list-card">
      <h4>${item.name}</h4>
      <p class="body-small">${item.location} • ${item.date} • ${item.category}</p>
      <div class="summary-row"><span>Sales</span><strong>${item.sales}</strong></div>
      <div class="summary-row"><span>Revenue</span><strong>$${item.revenue}</strong></div>
    </article>
  `).join('');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = form.querySelector('#eventName').value.trim();
    const date = form.querySelector('#eventDate').value;
    const location = form.querySelector('#eventLocation').value.trim();
    const category = form.querySelector('#eventCategory').value;
    if (!name || !date || !location) {
      showToast('Create event failed', 'Please fill in all fields for creator mode.');
      return;
    }
    siteData.orgEvents.push({ id: `o${siteData.orgEvents.length + 1}`, name, date, location, category, sales: 0, revenue: 0 });
    showToast('Event created', `${name} has been added to your organizer dashboard.`);
    form.reset();
    renderOrganizer();
  });
}

function renderAdmin() {
  const totals = document.querySelector('#adminTotals');
  const userTable = document.querySelector('#adminUsers');
  const eventTable = document.querySelector('#adminEvents');
  const reportTable = document.querySelector('#adminReports');
  if (!totals || !userTable || !eventTable || !reportTable) return;
  totals.innerHTML = `
    <div class="metric-card"><strong>${siteData.users.length}</strong><p>Total Users</p></div>
    <div class="metric-card"><strong>${siteData.events.length}</strong><p>Total Events</p></div>
    <div class="metric-card"><strong>${siteData.bookings.length}</strong><p>Total Bookings</p></div>
    <div class="metric-card"><strong>$${siteData.bookings.reduce((sum, book) => sum + book.total, 0).toFixed(0)}</strong><p>Total Revenue</p></div>
  `;
  userTable.innerHTML = siteData.users.map(user => `<tr><td>${user.id}</td><td>${user.name}</td><td>${user.email}</td><td>${user.role}</td></tr>`).join('');
  eventTable.innerHTML = siteData.events.map(event => `<tr><td>${event.id}</td><td>${event.name}</td><td>${event.location}</td><td>${event.category}</td></tr>`).join('');
  reportTable.innerHTML = siteData.reports.map(report => `<tr><td>${report.id}</td><td>${report.user}</td><td>${report.issue}</td><td>${report.status}</td></tr>`).join('');
}

function getCurrentUser() {
  if (state.currentUser) return state.currentUser;
  const stored = sessionStorage.getItem('camuser');
  if (stored) {
    state.currentUser = JSON.parse(stored);
  } else {
    state.currentUser = siteData.users[0];
  }
  return state.currentUser;
}

function initScrollAnimations() {
  const elements = document.querySelectorAll('[data-reveal]');
  if (!elements.length) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });
  elements.forEach(el => observer.observe(el));
}

window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeModal();
});

/* ======= Additional features: calendar export, reminders, fuzzy search, recommendations, service worker ======= */

function generateICS(eventObj) {
  // Basic .ics file content
  const startDate = (eventObj.date || '').replace(/-/g, '') + 'T' + (eventObj.time || '00:00').replace(':','') + '00';
  const uid = `cam-${eventObj.id}-${Date.now()}`;
  const ics = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//CamEvent Explorer//EN',
    'BEGIN:VEVENT',
    `UID:${uid}`,
    `DTSTAMP:${startDate}`,
    `DTSTART:${startDate}`,
    `SUMMARY:${eventObj.name}`,
    `DESCRIPTION:${eventObj.details}`,
    `LOCATION:${eventObj.location}`,
    'END:VEVENT',
    'END:VCALENDAR'
  ].join('\r\n');
  return new Blob([ics], { type: 'text/calendar' });
}

function downloadICS(eventObj) {
  const blob = generateICS(eventObj);
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${eventObj.name.replace(/\s+/g,'_')}.ics`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

function addReminder(eventId, minutesBefore = 60) {
  const ev = siteData.events.find(e => e.id === eventId);
  if (!ev) return showToast('Reminder failed', 'Event not found');
  const start = new Date(ev.date + 'T' + (ev.time || '00:00'));
  const trigger = new Date(start.getTime() - minutesBefore * 60000);
  const reminders = JSON.parse(localStorage.getItem('cam_reminders') || '[]');
  reminders.push({ id: eventId, at: trigger.getTime() });
  localStorage.setItem('cam_reminders', JSON.stringify(reminders));
  scheduleReminderTimers();
  showToast('Reminder set', `We will notify you ${minutesBefore} minutes before ${ev.name}`);
}

function scheduleReminderTimers() {
  const reminders = JSON.parse(localStorage.getItem('cam_reminders') || '[]');
  const now = Date.now();
  reminders.forEach(r => {
    const ms = r.at - now;
    if (ms > 0) {
      setTimeout(() => {
        const ev = siteData.events.find(e => e.id === r.id);
        if (!ev) return;
        // show notification if permitted
        if (Notification && Notification.permission === 'granted') {
          new Notification('Event reminder', { body: `${ev.name} starts at ${ev.time} • ${ev.location}` });
        } else {
          showToast('Reminder', `${ev.name} starts at ${ev.time}`);
        }
      }, ms);
    }
  });
}

function processSavedReminders() {
  if ('Notification' in window && Notification.permission !== 'granted') {
    // ask permission softly
    Notification.requestPermission();
  }
  scheduleReminderTimers();
}

function fuzzySearch(query, list) {
  if (!query) return list.slice();
  const q = query.toLowerCase();
  // score by occurrences and startsWith
  return list.map(item => {
    const name = (item.name || '').toLowerCase();
    const loc = (item.location || '').toLowerCase();
    let score = 0;
    if (name.includes(q)) score += 40;
    if (loc.includes(q)) score += 20;
    if (name.startsWith(q)) score += 20;
    // simple character overlap
    const overlap = q.split('').filter(c => name.includes(c)).length;
    score += overlap;
    return { item, score };
  }).filter(x => x.score > 0).sort((a,b) => b.score - a.score).map(x => x.item);
}

function renderRecommendations() {
  const container = document.querySelector('#recommendedList');
  if (!container) return;
  // basic personalization: based on saved events' categories, else top-rated
  const saved = state.savedEvents.slice();
  let picks = [];
  if (saved.length) {
    const savedCats = saved.map(id => siteData.events.find(e => e.id === id)?.category).filter(Boolean);
    picks = siteData.events.filter(e => savedCats.includes(e.category) && !saved.includes(e.id));
  }
  if (!picks.length) picks = siteData.events.slice().sort((a,b) => b.rating - a.rating).slice(0,4);
  container.innerHTML = picks.map(e => `
    <article class="event-card">
      <div class="card-hero overlay" style="background: ${e.banner};"></div>
      <div class="card-body">
        <h3 class="card-title">${e.name}</h3>
        <div class="card-meta"><span>${e.date}</span><span>${e.location}</span></div>
        <div class="card-actions"><a class="btn btn-primary" href="event-details.html?id=${e.id}">View</a></div>
      </div>
    </article>
  `).join('');
}

function renderUpcomingEvents() {
  const container = document.querySelector('#upcomingLive');
  if (!container) return;
  // upcoming = events sorted by date ascending
  const upcoming = siteData.events.slice().sort((a,b) => new Date(a.date) - new Date(b.date)).slice(0,6);
  container.innerHTML = upcoming.map(e => `
    <article class="event-card">
      <div class="card-hero overlay" style="background-image: url('${e.banner}'); background-size: cover; background-position: center;"></div>
      <div class="card-body">
        <h3 class="card-title">${e.name}</h3>
        <div class="card-meta"><span>${e.date}</span><span>${e.location}</span></div>
        <div class="card-actions"><a class="btn btn-primary" href="event-details.html?id=${e.id}">Details</a></div>
      </div>
    </article>
  `).join('');
}

// Live simulator: creates a mock event every N seconds to showcase live updates
let liveSimulatorTimer = null;
let livePaused = false;

function startLiveSimulator(intervalSeconds = 18) {
  if (liveSimulatorTimer) return;
  liveSimulatorTimer = setInterval(() => {
    const newEvent = makeMockEvent();
    siteData.events.unshift(newEvent);
    renderUpcomingEvents();
    renderFeaturedEvents();
    renderRecommendations();
    showToast('New event live', `${newEvent.name} in ${newEvent.location}`);
    saveSimulatedEvent(newEvent);
  }, intervalSeconds * 1000);
}

function stopLiveSimulator() {
  if (!liveSimulatorTimer) return;
  clearInterval(liveSimulatorTimer);
  liveSimulatorTimer = null;
}

function makeMockEvent() {
  const id = `mx${Math.floor(Math.random()*9000)+1000}`;
  const locs = Object.keys(regionLocationCenters);
  const loc = locs[Math.floor(Math.random() * locs.length)];
  const names = ['Sunset Beats', 'River Food Night', 'Art & Film Pop-up', 'Startup Pitch Night', 'Local Market Fair'];
  const name = names[Math.floor(Math.random() * names.length)];
  const date = new Date(Date.now() + Math.floor(Math.random()*10+1)*24*3600*1000);
  const isoDate = date.toISOString().split('T')[0];
  return { id, name: `${name} (${loc})`, category: 'Live', location: loc, date: isoDate, time: '18:00', price: 0, rating: 4.3, attendees: 0, details: 'This is a live-simulated event for demonstration purposes.', organizer: 'CamEvent Live', banner: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=1200&q=80', gallery: ['https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&q=80', 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&q=80'], tags: ['Live','Featured'], _simulated: true };
}

// Persist simulated events separately so demo history survives reloads
function loadSimulatedEvents() {
  try {
    const raw = localStorage.getItem('cam_sim_events');
    if (!raw) return;
    const sims = JSON.parse(raw);
    if (!Array.isArray(sims) || sims.length === 0) return;
    // prepend simulated events if not already present
    sims.reverse().forEach(ev => {
      if (!siteData.events.find(e => e.id === ev.id)) siteData.events.unshift(ev);
    });
  } catch (e) { console.warn('Failed to load simulated events', e); }
}

function saveSimulatedEvent(ev) {
  try {
    const raw = localStorage.getItem('cam_sim_events');
    const arr = raw ? JSON.parse(raw) : [];
    arr.push(ev);
    const trimmed = arr.slice(-50);
    localStorage.setItem('cam_sim_events', JSON.stringify(trimmed));
  } catch (e) { console.warn('Failed to save simulated event', e); }
}

function clearSimulatedEvents() {
  localStorage.removeItem('cam_sim_events');
}

function bindLiveControls() {
  const toggle = document.getElementById('liveToggle');
  const intervalInput = document.getElementById('liveInterval');
  const clearBtn = document.getElementById('clearSim');
  if (!toggle || !intervalInput) return;
  toggle.addEventListener('click', () => {
    livePaused = !livePaused;
    if (livePaused) {
      stopLiveSimulator();
      toggle.textContent = 'Resume Live';
    } else {
      startLiveSimulator(Number(intervalInput.value) || 18);
      toggle.textContent = 'Pause Live';
    }
  });
  intervalInput.addEventListener('change', () => {
    const val = Number(intervalInput.value) || 18;
    if (!livePaused) {
      stopLiveSimulator();
      startLiveSimulator(val);
    }
  });
  clearBtn?.addEventListener('click', () => {
    clearSimulatedEvents();
    siteData.events = siteData.events.filter(e => !e._simulated);
    renderUpcomingEvents();
    renderFeaturedEvents();
  });
}


function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').then(() => {
      console.log('Service worker registered');
    }).catch(() => console.log('Service worker registration failed'));
  }
}


