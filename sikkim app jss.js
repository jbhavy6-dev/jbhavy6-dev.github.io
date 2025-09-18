// Sikkim Monasteries Website JavaScript

// Monastery data
const monasteryData = {
  "rumtek": {
    "id": "rumtek",
    "name": "Rumtek Monastery",
    "subtitle": "Dharma Chakra Centre - The Crown Jewel",
    "location": "24 km from Gangtok, East Sikkim",
    "established": "1740s (rebuilt 1960s)",
    "sect": "Karma Kagyu",
    "elevation": "1,500 meters",
    "significance": "Largest monastery in Sikkim, main seat of Karma Kagyu lineage in exile",
    "description": "Rumtek Monastery serves as the spiritual heart of Sikkim and is the largest monastery in the state. Originally built in the 16th century, it was reconstructed in the 1960s by the 16th Karmapa as his main seat in exile after fleeing Tibet. The monastery houses precious relics, texts, and statues brought from Tibet, including the entire 108-volume canon of Buddha's teachings.",
    "architecture": "Traditional Tibetan style with intricate murals, golden stupa, and elaborate decorations. Features a main prayer hall, retreat center, monastic college, and the jewel-studded Golden Stupa containing relics of the 16th Karmapa.",
    "highlights": ["Golden Stupa with remains of 16th Karmapa", "Karma Shri Nalanda Institute for Higher Buddhist Studies", "World's only complete set of Kangyur texts on handmade paper", "Traditional Tibetan architectural design", "Annual Cham dance during Losar (Tibetan New Year)"],
    "visiting_info": {
      "timings": "9:00 AM - 6:00 PM (Monday-Friday)",
      "entry_fee": "Free",
      "best_time": "October to mid-December, March to June",
      "duration": "2-3 hours",
      "morning_prayer": "6:00 AM (visitors welcome)"
    },
    "festivals": ["Losar (Tibetan New Year)", "Cham Dance", "Saga Dawa"],
    "how_to_reach": "24 km from Gangtok by taxi or shared jeep. Regular transport available from Gangtok.",
    "image": "https://pplx-res.cloudinary.com/image/upload/v1755032011/pplx_project_search_images/180384246c00f12346b2567f3e5d23cf9eba4dc5.png"
  },
  "pemayangtse": {
    "id": "pemayangtse",
    "name": "Pemayangtse Monastery",
    "subtitle": "Perfect Sublime Lotus",
    "location": "2 km from Pelling, West Sikkim",
    "established": "1705 AD",
    "sect": "Nyingma",
    "elevation": "2,085 meters",
    "significance": "One of oldest and premier monasteries, headquarters of Nyingma order in Sikkim",
    "description": "Founded by Lama Lhatsun Chempo in 1705, Pemayangtse means 'Perfect Sublime Lotus'. This three-storied monastery is one of the oldest in Sikkim and was meant only for 'ta-tshang' or pure monks. The monastery's head lama held the unique privilege of anointing the Chogyals (kings) of Sikkim with holy water.",
    "architecture": "Three-storied stone structure with traditional Tibetan design. Features colorfully painted doors and windows, intricate wood carvings, and the famous seven-tiered wooden sculpture 'Zangdokpalri' representing Guru Rinpoche's Heavenly Palace.",
    "highlights": ["Seven-tiered Zangdokpalri wooden sculpture", "Statue of Padmasambhava in wrathful form", "Beautiful wall paintings and murals", "View of ruins of Rabdantse palace", "Traditional Tibetan architectural elements"],
    "visiting_info": {
      "timings": "8:00 AM - 5:00 PM",
      "entry_fee": "Nominal fee charged",
      "best_time": "March to June, September to November",
      "duration": "1-2 hours"
    },
    "festivals": ["Guru Drakmar Chham (February-March)"],
    "how_to_reach": "140 km from Gangtok, 2 km before Pelling. Accessible by taxi from Gangtok or local transport from Pelling.",
    "image": "https://pplx-res.cloudinary.com/image/upload/v1757563898/pplx_project_search_images/0150dd37828891f2f98a2137c7942f89eaa8642e.png"
  },
  "dubdi": {
    "id": "dubdi",
    "name": "Dubdi Monastery",
    "subtitle": "The Hermit's Cell - Oldest Monastery",
    "location": "3 km from Yuksom, West Sikkim",
    "established": "1701 AD",
    "sect": "Nyingma",
    "elevation": "2,100 meters",
    "significance": "Oldest monastery in Sikkim, founded to commemorate the coronation of first Chogyal",
    "description": "Established in 1701 by Chogyal Phuntsog Namgyal, Dubdi is the oldest monastery in Sikkim. Located on a hilltop accessible by an hour's trek from Yuksom, it was built to venerate Patron Saint Gyalwa Lhatsun Chempo. The name 'Dubdi' literally means 'the retreat' in the local language.",
    "architecture": "Two-storied stone architecture with a bell-shaped structure called Gyaltshen atop the roof. Features statues of three lamas and traditional Tibetan design elements adapted to mountain conditions.",
    "highlights": ["Oldest surviving monastery in Sikkim", "Historic significance in Sikkim's founding", "Statues of three founding lamas", "Scenic hilltop location", "Part of Buddhist pilgrimage circuit"],
    "visiting_info": {
      "timings": "Daylight hours",
      "entry_fee": "Free",
      "best_time": "March to June, October to December",
      "duration": "2-3 hours (including trek)"
    },
    "festivals": ["Buddhist calendar festivals"],
    "how_to_reach": "3 km trek from Yuksom. Yuksom accessible by shared jeep from Pelling or Geyzing (2 hours).",
    "image": "https://pplx-res.cloudinary.com/image/upload/v1758195980/pplx_project_search_images/1979a5d4c67ffcfea65426862e77c114e682f26f.png"
  },
  "tashiding": {
    "id": "tashiding",
    "name": "Tashiding Monastery",
    "subtitle": "The Heart of Sikkim",
    "location": "Tashiding, West Sikkim",
    "established": "1651 AD",
    "sect": "Nyingma",
    "elevation": "1,465 meters",
    "significance": "Most sacred monastery in Sikkim, believed to be the spiritual center",
    "description": "Tashiding means 'The Devoted Central Glory' and is considered the most sacred monastery in Sikkim. Founded in 1651, it is located on a hill between the Rathong and Rangeet rivers. The monastery houses the sacred vase of Guru Padmasambhava and is believed to be the spiritual navel of Sikkim.",
    "architecture": "Traditional Nyingma style with prayer flags fluttering around the hilltop location. Features a main temple with sacred relics and traditional Tibetan architectural elements.",
    "highlights": ["Sacred vase of Guru Padmasambhava", "Most sacred monastery in Sikkim", "Bumchu festival predictions", "Scenic location between two rivers", "Historical and religious significance"],
    "visiting_info": {
      "timings": "Sunrise to sunset",
      "entry_fee": "Free",
      "best_time": "February-March (Bumchu festival), October to April",
      "duration": "2-3 hours"
    },
    "festivals": ["Bumchu Festival (February-March)"],
    "how_to_reach": "27 km from Gyalshing, 40 km from Gyalshing town. Accessible by local transport and taxi.",
    "image": "https://pplx-res.cloudinary.com/image/upload/v1758195979/pplx_project_search_images/5efbf37267b6f5329e5c9b6f6923edccb2cfd365.png"
  },
  "enchey": {
    "id": "enchey",
    "name": "Enchey Monastery",
    "subtitle": "The Solitary Temple",
    "location": "3 km from Gangtok center",
    "established": "1840 AD",
    "sect": "Nyingma",
    "elevation": "1,950 meters",
    "significance": "Ancient monastery with legendary tantric master connections",
    "description": "Enchey, meaning 'The Solitary Temple', is a 200-year-old monastery remarkably well-preserved in its original architectural form. Legend says it was built at the site where Lama Druptob Karpo, who possessed the ability to fly, established his hermitage after flying from nearby Maenam Hill.",
    "architecture": "Traditional Tibetan style with well-preserved original architecture. Features intricate decorations and maintains the ancient monastic design principles.",
    "highlights": ["Well-preserved 200-year-old structure", "Legendary tantric master connections", "Detor Cham ritual dance", "Close to Gangtok city center", "Mountain deity residence legends"],
    "visiting_info": {
      "timings": "9:00 AM - 6:00 PM",
      "entry_fee": "Free",
      "best_time": "March to June, September to October",
      "duration": "1-2 hours"
    },
    "festivals": ["Detor Cham (January-February)", "Pang Lhabsol (August-September)"],
    "how_to_reach": "3 km from Gangtok center. Easily accessible by taxi or local transport.",
    "image": "https://pplx-res.cloudinary.com/image/upload/v1756904811/pplx_project_search_images/1f28bff385bc6257f4107e07cf8427fff9eda332.png"
  },
  "phodong": {
    "id": "phodong",
    "name": "Phodong Monastery",
    "subtitle": "Beautiful Mountain Monastery",
    "location": "28 km from Gangtok, North Sikkim",
    "established": "1734 AD",
    "sect": "Kagyu",
    "elevation": "1,372 meters",
    "significance": "One of the six most important Buddhist monasteries in Sikkim",
    "description": "Phodong Monastery, built in the early 18th century, is considered one of the most beautiful monasteries in Sikkim. Located at 4,500 feet altitude, it houses around 260 monks and is rated among the six most important Buddhist monasteries in the state.",
    "architecture": "Features the Dukhang main prayer hall, stupas, chortens, and monks' quarters. Intricate gateways, thangka paintings, wooden carvings, and enticing murals decorate the complex.",
    "highlights": ["One of six most important monasteries", "Houses 260 monks", "Beautiful mountain location", "Cham dance festival", "Traditional Tibetan and Sikkimese architecture"],
    "visiting_info": {
      "timings": "7:00 AM - 5:00 PM",
      "entry_fee": "Free (donations welcome)",
      "best_time": "March to June, September to November",
      "duration": "1-2 hours"
    },
    "festivals": ["Cham Dance"],
    "how_to_reach": "28 km from Gangtok. Accessible by taxi or local transport.",
    "image": "https://pplx-res.cloudinary.com/image/upload/v1756399790/pplx_project_search_images/6eaf58474c20519a21e60c0580701599e5c0c532.png"
  }
};

// DOM Elements
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const modal = document.getElementById('monastery-modal');
const modalTitle = document.getElementById('modal-title');
const modalBody = document.getElementById('modal-body');
const inquiryForm = document.getElementById('inquiry-form');

// Navigation functionality
hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
  });
});

// Smooth scroll functionality
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    const navHeight = document.querySelector('.navbar').offsetHeight;
    const targetPosition = section.offsetTop - navHeight;
    
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  }
}

// Add smooth scroll to navigation links
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    scrollToSection(targetId);
  });
});

// Monastery modal functionality
function openMonasteryModal(monasteryId) {
  const monastery = monasteryData[monasteryId];
  if (!monastery) return;

  modalTitle.textContent = monastery.name;
  
  const modalContent = `
    <img src="${monastery.image}" alt="${monastery.name}" class="modal-image">
    
    <div class="modal-details">
      <div class="detail-item">
        <div class="detail-label">Established</div>
        <p class="detail-value">${monastery.established}</p>
      </div>
      <div class="detail-item">
        <div class="detail-label">Buddhist Sect</div>
        <p class="detail-value">${monastery.sect}</p>
      </div>
      <div class="detail-item">
        <div class="detail-label">Elevation</div>
        <p class="detail-value">${monastery.elevation}</p>
      </div>
      <div class="detail-item">
        <div class="detail-label">Location</div>
        <p class="detail-value">${monastery.location}</p>
      </div>
    </div>

    <h3>About This Sacred Place</h3>
    <p>${monastery.description}</p>

    <h4>Architecture & Design</h4>
    <p>${monastery.architecture}</p>

    <h4>Key Highlights</h4>
    <ul class="highlights-list">
      ${monastery.highlights.map(highlight => `<li>${highlight}</li>`).join('')}
    </ul>

    <div class="visiting-info">
      <h4>🕰️ Visiting Information</h4>
      <div class="info-grid">
        <div class="info-item-small">
          <strong>Timings:</strong>
          <p>${monastery.visiting_info.timings}</p>
        </div>
        <div class="info-item-small">
          <strong>Entry Fee:</strong>
          <p>${monastery.visiting_info.entry_fee}</p>
        </div>
        <div class="info-item-small">
          <strong>Best Time to Visit:</strong>
          <p>${monastery.visiting_info.best_time}</p>
        </div>
        <div class="info-item-small">
          <strong>Duration:</strong>
          <p>${monastery.visiting_info.duration}</p>
        </div>
      </div>
      ${monastery.visiting_info.morning_prayer ? `
        <div class="info-item-small">
          <strong>Morning Prayer:</strong>
          <p>${monastery.visiting_info.morning_prayer}</p>
        </div>
      ` : ''}
    </div>

    <h4>🎭 Festivals & Events</h4>
    <p>${monastery.festivals.join(', ')}</p>

    <h4>🚗 How to Reach</h4>
    <p>${monastery.how_to_reach}</p>

    <h4>✨ Significance</h4>
    <p>${monastery.significance}</p>
  `;

  modalBody.innerHTML = modalContent;
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeMonasteryModal() {
  modal.classList.add('hidden');
  document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    closeMonasteryModal();
  }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeMonasteryModal();
  }
});

// Form submission handling
if (inquiryForm) {
  inquiryForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(inquiryForm);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      monastery: formData.get('monastery'),
      message: formData.get('message')
    };

    // Simulate form submission
    const submitBtn = inquiryForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;

    // Simulate API call delay
    setTimeout(() => {
      alert(`Thank you, ${data.name}! Your inquiry has been received. We'll respond to ${data.email} within 24 hours.`);
      
      // Reset form
      inquiryForm.reset();
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
    }, 1500);
  });
}

// Scroll to top functionality
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// Add scroll-to-top button (hidden by default, shows on scroll)
function addScrollToTopButton() {
  const scrollBtn = document.createElement('button');
  scrollBtn.innerHTML = '↑';
  scrollBtn.className = 'scroll-to-top';
  scrollBtn.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: var(--color-primary);
    color: var(--color-btn-primary-text);
    border: none;
    font-size: 20px;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 1000;
    box-shadow: var(--shadow-lg);
  `;
  
  scrollBtn.addEventListener('click', scrollToTop);
  document.body.appendChild(scrollBtn);

  // Show/hide scroll button based on scroll position
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
      scrollBtn.style.opacity = '1';
      scrollBtn.style.visibility = 'visible';
    } else {
      scrollBtn.style.opacity = '0';
      scrollBtn.style.visibility = 'hidden';
    }
  });
}

// Initialize scroll-to-top button
addScrollToTopButton();

// Navbar background on scroll
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.pageYOffset > 100) {
    navbar.style.background = 'rgba(19, 52, 59, 0.98)';
  } else {
    navbar.style.background = 'rgba(19, 52, 59, 0.95)';
  }
});

// Add loading animation for images
document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('img');
  
  images.forEach(img => {
    img.addEventListener('load', () => {
      img.style.opacity = '1';
    });
    
    // Set initial opacity for fade-in effect
    img.style.opacity = '0';
    img.style.transition = 'opacity 0.5s ease';
  });
});

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.transform = 'translateY(0)';
      entry.target.style.opacity = '1';
    }
  });
}, observerOptions);

// Observe elements for scroll animations
document.addEventListener('DOMContentLoaded', () => {
  const animateElements = document.querySelectorAll('.monastery-card, .feature-card, .festival-card');
  
  animateElements.forEach(el => {
    el.style.transform = 'translateY(20px)';
    el.style.opacity = '0';
    el.style.transition = 'transform 0.6s ease, opacity 0.6s ease';
    observer.observe(el);
  });
});

// Search functionality (if needed in future)
function searchMonasteries(query) {
  const results = Object.values(monasteryData).filter(monastery => 
    monastery.name.toLowerCase().includes(query.toLowerCase()) ||
    monastery.location.toLowerCase().includes(query.toLowerCase()) ||
    monastery.sect.toLowerCase().includes(query.toLowerCase())
  );
  return results;
}

// Export functions for global use
window.scrollToSection = scrollToSection;
window.openMonasteryModal = openMonasteryModal;
window.closeMonasteryModal = closeMonasteryModal;
window.searchMonasteries = searchMonasteries;