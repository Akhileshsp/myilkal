/* ========== APP.JS ========== */

// ==================== AD CAROUSEL ====================
let currentAd = 0;
let adTimer = null;
let adProgressTimer = null;
const AD_INTERVAL = 5000;

function renderAds() {
  const activeAds = (typeof ADS !== 'undefined' ? ADS : []).filter(a => a.active !== false);
  if (activeAds.length === 0) {
    document.getElementById('ad-carousel').style.display = 'none';
    return;
  }
  const track = document.getElementById('ad-track');
  const dots = document.getElementById('ad-dots');

  track.innerHTML = activeAds.map((ad, i) => `
    <div class="ad-slide ${i === 0 ? 'active' : ''}" data-index="${i}" onclick="navigateToAd(${ad.id})">
      <div class="ad-slide-bg" style="background-image:url('${ad.image}')"></div>
      <div class="ad-slide-overlay" style="background:${ad.gradient || 'linear-gradient(135deg, rgba(99,102,241,0.85), rgba(168,85,247,0.75))'}"></div>
      <div class="ad-slide-content">
        ${ad.tag ? `<span class="ad-tag">${ad.tag}</span>` : ''}
        <h2>${ad.title}</h2>
        <p>${ad.subtitle}</p>
        <a href="#advertisements" class="ad-cta" onclick="event.stopPropagation(); scrollToAd(${ad.id})">
          ${ad.buttonText || 'View Details'}
          <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 8h6M8 5l3 3-3 3"/></svg>
        </a>
      </div>
    </div>
  `).join('');

  dots.innerHTML = activeAds.map((_, i) => `
    <button class="ad-dot ${i === 0 ? 'active' : ''}" onclick="event.stopPropagation(); goToAd(${i})"></button>
  `).join('');

  startAdAutoplay();
}

function navigateToAd(adId) {
  scrollToAd(adId);
}

function scrollToAd(adId) {
  const section = document.getElementById('advertisements');
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => highlightAdCard(adId), 600);
  }
}

function highlightAdCard(adId) {
  const card = document.querySelector(`.ad-detail-card[data-ad-id="${adId}"]`);
  if (card) {
    card.style.transition = 'box-shadow 0.3s, transform 0.3s';
    card.style.boxShadow = '0 0 0 3px rgba(99,102,241,0.4), 0 20px 60px rgba(0,0,0,0.12)';
    card.style.transform = 'translateY(-4px)';
    setTimeout(() => {
      card.style.boxShadow = '';
      card.style.transform = '';
    }, 2000);
  }
}

function goToAd(index) {
  const activeAds = (typeof ADS !== 'undefined' ? ADS : []).filter(a => a.active !== false);
  if (activeAds.length === 0) return;
  currentAd = ((index % activeAds.length) + activeAds.length) % activeAds.length;

  const track = document.getElementById('ad-track');
  track.style.transform = `translateX(-${currentAd * 100}%)`;

  document.querySelectorAll('.ad-slide').forEach((s, i) => s.classList.toggle('active', i === currentAd));
  document.querySelectorAll('.ad-dot').forEach((d, i) => d.classList.toggle('active', i === currentAd));

  resetAdProgress();
}

function changeAd(dir) {
  goToAd(currentAd + dir);
}

function startAdAutoplay() {
  clearInterval(adTimer);
  clearInterval(adProgressTimer);

  let progress = 0;
  const bar = document.getElementById('ad-progress-bar');
  const step = 100 / (AD_INTERVAL / 30);

  adProgressTimer = setInterval(() => {
    progress += step;
    if (bar) bar.style.width = Math.min(progress, 100) + '%';
  }, 30);

  adTimer = setInterval(() => {
    changeAd(1);
  }, AD_INTERVAL);
}

function resetAdProgress() {
  clearInterval(adTimer);
  clearInterval(adProgressTimer);
  const bar = document.getElementById('ad-progress-bar');
  if (bar) bar.style.width = '0%';
  startAdAutoplay();
}

// Touch / swipe support for ads
let adTouchStartX = 0;
document.addEventListener('DOMContentLoaded', () => {
  const carousel = document.getElementById('ad-carousel');
  if (carousel) {
    carousel.addEventListener('touchstart', e => { adTouchStartX = e.touches[0].clientX; }, { passive: true });
    carousel.addEventListener('touchend', e => {
      const diff = adTouchStartX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 50) changeAd(diff > 0 ? 1 : -1);
    }, { passive: true });
  }
});


// ==================== ADVERTISEMENTS DETAIL SECTION ====================
function renderAdsDetailSection() {
  const activeAds = (typeof ADS_DETAIL !== 'undefined' ? ADS_DETAIL : []).filter(a => a.active !== false);
  const grid = document.getElementById('ads-detail-grid');
  if (!grid) return;
  if (activeAds.length === 0) {
    grid.innerHTML = '<p style="text-align:center;color:var(--text-muted);padding:40px;">No advertisements available at the moment.</p>';
    return;
  }

  grid.innerHTML = activeAds.map(ad => `
    <div class="ad-detail-card reveal" data-ad-id="${ad.id}">
      <div class="ad-detail-image">
        <img src="${ad.image}" alt="${ad.title}" loading="lazy" />
        ${ad.tag ? `<span class="ad-detail-tag">${ad.tag}</span>` : ''}
      </div>
      <div class="ad-detail-body">
        <h3>${ad.title}</h3>
        <p class="ad-desc">${ad.description}</p>
        ${ad.address ? `
          <div class="ad-address">
            <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
            ${ad.address}
          </div>
        ` : ''}
        <div class="ad-detail-footer">
          <div class="owner-info">
            <div class="owner-avatar">${getInitials(ad.ownerName || 'AD')}</div>
            <div>
              <div class="owner-name">${ad.ownerName || 'Advertiser'}</div>
              <div class="owner-phone">${ad.ownerPhone || ''}</div>
            </div>
          </div>
          <div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap;">
            ${ad.ownerPhone ? `
              <a href="tel:${ad.ownerPhone.replace(/\s/g, '')}" class="call-btn">
                <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                Call Now
              </a>
            ` : ''}
            <button class="wa-share-btn" onclick="shareOnWhatsApp(getAdShareText(ADS_DETAIL.find(a=>a.id===${ad.id})))">
              ${WA_ICON} Share
            </button>
          </div>
        </div>
      </div>
    </div>
  `).join('');

  // Trigger reveal
  setTimeout(() => {
    grid.querySelectorAll('.ad-detail-card.reveal').forEach((card, i) => {
      setTimeout(() => card.classList.add('visible'), i * 150);
    });
  }, 100);
}


// ==================== PARTICLE ANIMATION ====================
function initParticles() {
  const canvas = document.getElementById('hero-particles');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let particles = [];
  let w, h;

  function resize() {
    w = canvas.width = canvas.parentElement.offsetWidth;
    h = canvas.height = canvas.parentElement.offsetHeight;
  }

  function createParticles() {
    particles = [];
    const count = Math.min(80, Math.floor((w * h) / 15000));
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 2 + 0.5,
        alpha: Math.random() * 0.3 + 0.08
      });
    }
  }

  function draw() {
    ctx.clearRect(0, 0, w, h);
    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0) p.x = w;
      if (p.x > w) p.x = 0;
      if (p.y < 0) p.y = h;
      if (p.y > h) p.y = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(99, 102, 241, ${p.alpha})`;
      ctx.fill();
    });

    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(99, 102, 241, ${0.05 * (1 - dist / 120)})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(draw);
  }

  resize();
  createParticles();
  draw();
  window.addEventListener('resize', () => { resize(); createParticles(); });
}


// ==================== COUNTER ANIMATION ====================
function animateCounters() {
  const counters = document.querySelectorAll('.stat-number[data-count]');
  counters.forEach(counter => {
    const target = parseInt(counter.dataset.count);
    const duration = 2000;
    const startTime = performance.now();

    function update(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      counter.textContent = Math.floor(target * eased);
      if (progress < 1) requestAnimationFrame(update);
      else counter.textContent = target;
    }
    requestAnimationFrame(update);
  });
}


// ==================== SCROLL EFFECTS ====================
function initScrollEffects() {
  const header = document.getElementById('site-header');
  const scrollBtn = document.getElementById('scroll-top');
  let counterAnimated = false;

  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    if (header) header.classList.toggle('scrolled', y > 50);
    if (scrollBtn) scrollBtn.classList.toggle('visible', y > 400);

    if (!counterAnimated) {
      const statsSection = document.querySelector('.hero-stats');
      if (statsSection) {
        const rect = statsSection.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.85) {
          counterAnimated = true;
          animateCounters();
        }
      }
    }

    document.querySelectorAll('.reveal:not(.visible)').forEach(el => {
      if (el.getBoundingClientRect().top < window.innerHeight * 0.88) {
        el.classList.add('visible');
      }
    });
  });
}


// ==================== MOBILE MENU ====================
function toggleMobileMenu() {
  const nav = document.getElementById('main-nav');
  const hamburger = document.getElementById('hamburger');
  nav.classList.toggle('open');
  hamburger.classList.toggle('active');
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', () => {
      document.getElementById('main-nav').classList.remove('open');
      document.getElementById('hamburger').classList.remove('active');
    });
  });
});


// ==================== WHATSAPP SHARE ====================
const WA_ICON = '<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>';

function shareOnWhatsApp(text) {
  const url = 'https://wa.me/?text=' + encodeURIComponent(text);
  window.open(url, '_blank');
}

function getListingShareText(listing) {
  return `🏠 *${listing.title}*${listing.bhk ? ' (' + listing.bhk + ')' : ''}

💰 Rent: ${formatRupee(listing.rent)}/month
💰 Advance: ${formatRupee(listing.advance)}
📍 ${listing.address}
👤 Owner: ${listing.ownerName}
📞 ${listing.ownerPhone}
${listing.description ? '\n' + listing.description : ''}

Found on Ilkal.com`;
}

function getAdShareText(ad) {
  return `📢 *${ad.title}*

${ad.description ? ad.description.substring(0, 200) + '...' : ''}
${ad.address ? '\n📍 ' + ad.address : ''}
${ad.ownerName ? '\n👤 ' + ad.ownerName : ''}
${ad.ownerPhone ? '\n📞 ' + ad.ownerPhone : ''}

Found on Ilkal.com`;
}

function getDirShareText(b) {
  return `📋 *${b.name}*
${b.specialty}

📍 ${b.address}
${b.timings ? '🕐 ' + b.timings : ''}
📞 ${b.phone}

Found on Ilkal.com - Local Business Directory`;
}


// ==================== LISTINGS ====================
const ITEMS_PER_PAGE = 20;
let currentPage = 1;
let currentFilteredData = [];

function formatRupee(amount) {
  return '\u20B9' + amount.toLocaleString('en-IN');
}

function getInitials(name) {
  return name.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2);
}

function prefLabel(pref) {
  const map = { family: 'Family Only', bachelor: 'Bachelors Allowed', any: 'Family & Bachelors' };
  return map[pref] || pref;
}

function badgeClass(pref) {
  const map = { family: 'badge-family', bachelor: 'badge-bachelor', any: 'badge-any' };
  return map[pref] || '';
}

function renderCard(listing) {
  const mainImg = listing.images[0] || 'images/placeholder.jpg';
  if (listing.available === false) return '';

  return `
    <div class="card reveal" data-id="${listing.id}">
      <div class="card-image" onclick="openModal(${listing.id})">
        <img src="${mainImg}" alt="${listing.title}" loading="lazy" />
        <span class="card-badge ${badgeClass(listing.preference)}">${prefLabel(listing.preference)}</span>
      </div>
      <div class="card-body">
        <h3 class="card-title">${listing.title}${listing.bhk ? ' &middot; ' + listing.bhk : ''}</h3>
        <div class="card-address">
          <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
          ${listing.address}
        </div>
        <div class="card-details">
          <div class="detail-item">
            <div class="detail-label">Rent / Month</div>
            <div class="detail-value">${formatRupee(listing.rent)}</div>
          </div>
          <div class="detail-item">
            <div class="detail-label">Advance</div>
            <div class="detail-value">${formatRupee(listing.advance)}</div>
          </div>
        </div>
        <div class="card-tags">
          <span class="tag ${listing.nonVegAllowed ? 'tag-nonveg-yes' : 'tag-nonveg-no'}">
            ${listing.nonVegAllowed ? 'Non-Veg Allowed' : 'Veg Only'}
          </span>
          ${listing.furnishing ? `<span class="tag tag-preference">${listing.furnishing}</span>` : ''}
        </div>
      </div>
      <div class="card-footer">
        <div class="owner-info">
          <div class="owner-avatar">${getInitials(listing.ownerName)}</div>
          <div>
            <div class="owner-name">${listing.ownerName}</div>
            <div class="owner-phone">${listing.ownerPhone}</div>
          </div>
        </div>
        <div style="display:flex;gap:8px;align-items:center;">
          <a href="tel:${listing.ownerPhone.replace(/\s/g, '')}" class="call-btn">
            <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
            Call
          </a>
          <button class="wa-share-btn" onclick="event.stopPropagation();shareOnWhatsApp(getListingShareText(LISTINGS.find(l=>l.id===${listing.id})))">
            ${WA_ICON} Share
          </button>
        </div>
      </div>
    </div>
  `;
}

function renderListings(data) {
  currentFilteredData = data;
  currentPage = 1;
  renderPage();
}

function renderPage() {
  const grid = document.getElementById('listings-grid');
  const noResults = document.getElementById('no-results');
  const totalItems = currentFilteredData.length;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

  if (currentPage < 1) currentPage = 1;
  if (currentPage > totalPages && totalPages > 0) currentPage = totalPages;

  const start = (currentPage - 1) * ITEMS_PER_PAGE;
  const end = start + ITEMS_PER_PAGE;
  const pageData = currentFilteredData.slice(start, end);

  grid.innerHTML = pageData.map(renderCard).join('');
  noResults.style.display = totalItems === 0 ? 'block' : 'none';

  renderPagination(totalItems, totalPages);

  setTimeout(() => {
    grid.querySelectorAll('.card.reveal').forEach((card, i) => {
      setTimeout(() => card.classList.add('visible'), i * 80);
    });
  }, 50);
}

function renderPagination(totalItems, totalPages) {
  const container = document.getElementById('pagination');
  if (!container) return;

  if (totalItems <= ITEMS_PER_PAGE) {
    container.innerHTML = '';
    return;
  }

  let html = '';

  // Prev button
  html += `<button class="page-btn page-arrow" onclick="goToPage(${currentPage - 1})" ${currentPage === 1 ? 'disabled' : ''}>&#10094; Prev</button>`;

  // Page numbers
  const maxVisible = 5;
  let startPage = Math.max(1, currentPage - Math.floor(maxVisible / 2));
  let endPage = Math.min(totalPages, startPage + maxVisible - 1);
  if (endPage - startPage < maxVisible - 1) {
    startPage = Math.max(1, endPage - maxVisible + 1);
  }

  if (startPage > 1) {
    html += `<button class="page-btn" onclick="goToPage(1)">1</button>`;
    if (startPage > 2) html += `<span class="page-info">...</span>`;
  }

  for (let i = startPage; i <= endPage; i++) {
    html += `<button class="page-btn ${i === currentPage ? 'active' : ''}" onclick="goToPage(${i})">${i}</button>`;
  }

  if (endPage < totalPages) {
    if (endPage < totalPages - 1) html += `<span class="page-info">...</span>`;
    html += `<button class="page-btn" onclick="goToPage(${totalPages})">${totalPages}</button>`;
  }

  // Next button
  html += `<button class="page-btn page-arrow" onclick="goToPage(${currentPage + 1})" ${currentPage === totalPages ? 'disabled' : ''}>Next &#10095;</button>`;

  // Page info
  const startItem = (currentPage - 1) * ITEMS_PER_PAGE + 1;
  const endItem = Math.min(currentPage * ITEMS_PER_PAGE, totalItems);
  html += `<div class="page-info" style="width:100%;text-align:center;margin-top:8px;">Showing ${startItem}-${endItem} of ${totalItems} listings</div>`;

  container.innerHTML = html;
}

function goToPage(page) {
  const totalPages = Math.ceil(currentFilteredData.length / ITEMS_PER_PAGE);
  if (page < 1 || page > totalPages) return;
  currentPage = page;
  renderPage();

  // Scroll to top of listings section
  const section = document.getElementById('listings');
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

function applyFilters() {
  const type = document.getElementById('filter-type').value;
  const nonveg = document.getElementById('filter-nonveg').value;
  const maxRent = document.getElementById('filter-rent').value;
  const search = document.getElementById('filter-search').value.toLowerCase().trim();

  let filtered = LISTINGS.filter(l => l.available !== false);

  if (type !== 'all') filtered = filtered.filter(l => l.preference === type);
  if (nonveg === 'yes') filtered = filtered.filter(l => l.nonVegAllowed === true);
  else if (nonveg === 'no') filtered = filtered.filter(l => l.nonVegAllowed === false);
  if (maxRent) filtered = filtered.filter(l => l.rent <= parseInt(maxRent));
  if (search) {
    filtered = filtered.filter(l =>
      l.title.toLowerCase().includes(search) ||
      l.address.toLowerCase().includes(search) ||
      l.ownerName.toLowerCase().includes(search) ||
      (l.description && l.description.toLowerCase().includes(search))
    );
  }
  renderListings(filtered);
}

function resetFilters() {
  document.getElementById('filter-type').value = 'all';
  document.getElementById('filter-nonveg').value = 'all';
  document.getElementById('filter-rent').value = '';
  document.getElementById('filter-search').value = '';
  renderListings(LISTINGS.filter(l => l.available !== false));
}


// ==================== MODAL / LIGHTBOX ====================
let currentModalImages = [];
let currentImageIndex = 0;

function openModal(id) {
  const listing = LISTINGS.find(l => l.id === id);
  if (!listing) return;

  currentModalImages = listing.images;
  currentImageIndex = 0;

  const modal = document.getElementById('modal-overlay');
  const body = document.getElementById('modal-body');

  body.innerHTML = `
    <div class="modal-gallery">
      <img id="modal-main-img" src="${listing.images[0]}" alt="${listing.title}" />
      ${listing.images.length > 1 ? `
        <button class="gallery-nav gallery-prev" onclick="changeImage(-1)">&#10094;</button>
        <button class="gallery-nav gallery-next" onclick="changeImage(1)">&#10095;</button>
        <div class="gallery-dots">
          ${listing.images.map((_, i) => `
            <button class="gallery-dot ${i === 0 ? 'active' : ''}" onclick="goToImage(${i})"></button>
          `).join('')}
        </div>
      ` : ''}
    </div>
    <h2>${listing.title}${listing.bhk ? ' &middot; ' + listing.bhk : ''}</h2>
    ${listing.description ? `<p style="color:var(--text-secondary);margin-bottom:12px;">${listing.description}</p>` : ''}
    <div style="color:var(--text-muted);font-size:0.88rem;margin-bottom:8px;display:flex;align-items:flex-start;gap:6px;word-break:break-word;">
      <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" style="flex-shrink:0;margin-top:2px;"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
      ${listing.address}
    </div>
    <div class="modal-details">
      <div class="modal-detail">
        <div class="label">Monthly Rent</div>
        <div class="value">${formatRupee(listing.rent)}</div>
      </div>
      <div class="modal-detail">
        <div class="label">Advance / Deposit</div>
        <div class="value">${formatRupee(listing.advance)}</div>
      </div>
      <div class="modal-detail">
        <div class="label">Preference</div>
        <div class="value" style="font-size:0.88rem;-webkit-text-fill-color:var(--text-primary);background:none;">${prefLabel(listing.preference)}</div>
      </div>
      <div class="modal-detail">
        <div class="label">Non-Veg</div>
        <div class="value" style="font-size:0.88rem;-webkit-text-fill-color:${listing.nonVegAllowed ? '#16a34a' : '#dc2626'};background:none;">${listing.nonVegAllowed ? 'Allowed' : 'Not Allowed'}</div>
      </div>
      ${listing.bhk ? `
      <div class="modal-detail">
        <div class="label">Type</div>
        <div class="value" style="font-size:0.88rem;-webkit-text-fill-color:var(--text-primary);background:none;">${listing.bhk}</div>
      </div>` : ''}
      ${listing.furnishing ? `
      <div class="modal-detail">
        <div class="label">Furnishing</div>
        <div class="value" style="font-size:0.88rem;-webkit-text-fill-color:var(--text-primary);background:none;">${listing.furnishing}</div>
      </div>` : ''}
    </div>
    <div class="modal-owner">
      <div class="owner-avatar">${getInitials(listing.ownerName)}</div>
      <div style="flex:1;min-width:0;">
        <div style="font-weight:600;color:var(--text-primary);word-break:break-word;">${listing.ownerName}</div>
        <div style="color:var(--text-muted);font-size:0.88rem;">${listing.ownerPhone}</div>
      </div>
      <a href="tel:${listing.ownerPhone.replace(/\s/g, '')}" class="call-btn">
        <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
        Call Owner
      </a>
    </div>
  `;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modal-overlay').classList.remove('active');
  document.body.style.overflow = '';
}

function changeImage(dir) {
  currentImageIndex = (currentImageIndex + dir + currentModalImages.length) % currentModalImages.length;
  updateModalImage();
}

function goToImage(i) {
  currentImageIndex = i;
  updateModalImage();
}

function updateModalImage() {
  const img = document.getElementById('modal-main-img');
  if (img) img.src = currentModalImages[currentImageIndex];
  document.querySelectorAll('.gallery-dot').forEach((dot, i) => {
    dot.classList.toggle('active', i === currentImageIndex);
  });
}

document.addEventListener('keydown', e => {
  const modal = document.getElementById('modal-overlay');
  if (!modal.classList.contains('active')) return;
  if (e.key === 'Escape') closeModal();
  if (e.key === 'ArrowLeft') changeImage(-1);
  if (e.key === 'ArrowRight') changeImage(1);
});


// ==================== BUSINESS DIRECTORY ====================
const DIR_CATEGORIES = {
  all: { label: 'All', icon: '🏪' },
  doctor: { label: 'Doctors', icon: '🩺' },
  electrician: { label: 'Electricians', icon: '⚡' },
  plumber: { label: 'Plumbers', icon: '🔧' },
  grocery: { label: 'Grocery', icon: '🛒' },
  restaurant: { label: 'Restaurants', icon: '🍽️' },
  hardware: { label: 'Hardware', icon: '🔨' },
  tailor: { label: 'Tailors', icon: '🧵' },
  auto: { label: 'Auto & Taxi', icon: '🛺' },
  mobile: { label: 'Mobile', icon: '📱' },
  salon: { label: 'Salon', icon: '💈' },
  school: { label: 'Schools', icon: '🏫' },
  lawyer: { label: 'Lawyers', icon: '⚖️' },
  pharmacy: { label: 'Pharmacy', icon: '💊' },
  other: { label: 'Other', icon: '📌' }
};
let activeDirCategory = 'all';

function renderDirectoryCategories() {
  const container = document.getElementById('dir-categories');
  if (!container) return;
  const businesses = (typeof DIRECTORY !== 'undefined' ? DIRECTORY : []).filter(b => b.active !== false);

  // Count per category
  const counts = {};
  businesses.forEach(b => { counts[b.category] = (counts[b.category] || 0) + 1; });

  // Only show categories that have businesses
  const cats = ['all', ...Object.keys(DIR_CATEGORIES).filter(c => c !== 'all' && counts[c])];

  container.innerHTML = cats.map(cat => {
    const info = DIR_CATEGORIES[cat] || { label: cat, icon: '📌' };
    const count = cat === 'all' ? businesses.length : (counts[cat] || 0);
    return `<button class="dir-cat-chip ${activeDirCategory === cat ? 'active' : ''}" onclick="setDirCategory('${cat}')">
      ${info.icon} ${info.label} <span class="chip-count">${count}</span>
    </button>`;
  }).join('');
}

function setDirCategory(cat) {
  activeDirCategory = cat;
  renderDirectoryCategories();
  filterDirectory();
}

function filterDirectory() {
  const businesses = (typeof DIRECTORY !== 'undefined' ? DIRECTORY : []).filter(b => b.active !== false);
  const search = (document.getElementById('dir-search')?.value || '').toLowerCase().trim();

  let filtered = businesses;
  if (activeDirCategory !== 'all') {
    filtered = filtered.filter(b => b.category === activeDirCategory);
  }
  if (search) {
    filtered = filtered.filter(b =>
      b.name.toLowerCase().includes(search) ||
      b.specialty.toLowerCase().includes(search) ||
      b.address.toLowerCase().includes(search) ||
      (DIR_CATEGORIES[b.category]?.label || '').toLowerCase().includes(search)
    );
  }

  // Sort: featured first
  filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));

  renderDirectoryCards(filtered);
}

function renderDirectoryCards(data) {
  const grid = document.getElementById('dir-grid');
  const noResults = document.getElementById('dir-no-results');
  if (!grid) return;

  if (data.length === 0) {
    grid.innerHTML = '';
    if (noResults) noResults.style.display = 'block';
    return;
  }
  if (noResults) noResults.style.display = 'none';

  grid.innerHTML = data.map(b => {
    const catInfo = DIR_CATEGORIES[b.category] || { label: b.category, icon: '📌' };
    const hasImage = b.image;

    return `
      <div class="dir-card ${b.featured ? 'featured' : ''} reveal" style="position:relative;">
        ${hasImage ? `
          <div class="dir-card-img">
            <img src="${b.image}" alt="${b.name}" loading="lazy" />
            <span class="dir-cat-badge dir-cat-${b.category}">${catInfo.icon} ${catInfo.label}</span>
          </div>
        ` : `
          <div class="dir-card-no-img">
            <div class="dir-icon-circle dir-cat-${b.category}" style="color:#fff;padding:10px;border-radius:12px;">
              ${catInfo.icon}
            </div>
            <div>
              <span class="dir-cat-badge dir-cat-${b.category}" style="position:static;display:inline-block;">${catInfo.label}</span>
            </div>
          </div>
        `}
        <div class="dir-card-body">
          <h3>${b.name}</h3>
          <div class="dir-specialty">${b.specialty}</div>
          <div class="dir-address">
            <svg width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
            ${b.address}
          </div>
          ${b.timings ? `
            <div class="dir-timings">
              <svg width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
              ${b.timings}
            </div>
          ` : ''}
        </div>
        <div class="dir-card-footer">
          <div class="dir-phone">
            <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
            ${b.phone}
          </div>
          <div style="display:flex;gap:6px;align-items:center;">
            <a href="tel:${b.phone.replace(/\s/g, '')}" class="call-btn">
              <svg width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
              Call
            </a>
            <button class="wa-share-btn" onclick="shareOnWhatsApp(getDirShareText(DIRECTORY.find(d=>d.id===${b.id})))">
              ${WA_ICON}
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');

  // Trigger reveal animation
  setTimeout(() => {
    grid.querySelectorAll('.dir-card.reveal').forEach((card, i) => {
      setTimeout(() => card.classList.add('visible'), i * 60);
    });
  }, 50);
}


// ==================== INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', () => {
  renderAds();
  renderAdsDetailSection();
  renderListings(LISTINGS.filter(l => l.available !== false));
  renderDirectoryCategories();
  filterDirectory();
  initParticles();
  initScrollEffects();

  document.querySelectorAll('.feature-card, .contact-card').forEach(el => {
    if (!el.classList.contains('reveal')) el.classList.add('reveal');
  });

  window.dispatchEvent(new Event('scroll'));
});
