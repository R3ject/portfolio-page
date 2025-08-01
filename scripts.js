// ==== GA4 shim (in case gtag.js hasn’t loaded yet) ====
window.dataLayer = window.dataLayer || [];
window.gtag    = window.gtag    || function(){ dataLayer.push(arguments); };
// Project Details (moved to top to avoid initialization errors)
const projectDetails = {
  project1: {
    title: "Digital Punch Card",
    description: `
      <h3>Overview:</h3>
      <p>Developed an interactive digital punch card application for a restaurant loyalty program...</p>
      <h3>Tech Stack:</h3>
      <ul>
        <li><strong>Frontend:</strong> React, React Router, React-QR-Scanner, React Toastify</li>
        <li><strong>Backend:</strong> Firebase Authentication, Cloud Firestore</li>
        <li><strong>Other Tools:</strong> Geolocation API, localStorage</li>
      </ul>
      <h3>Challenges:</h3>
      <ul>
        <li><strong>Geolocation Accuracy:</strong> Ensuring that punches are only added when within the venue's geolocation.</li>
        <li><strong>UI Consistency:</strong> Avoiding duplicate or overlapping components via proper conditional rendering.</li>
        <li><strong>User Experience:</strong> Preventing manual manipulation of punch counts by disabling unintended interactions.</li>
        <li><strong>Real-Time Updates:</strong> Integrating real-time data updates using Firestore.</li>
      </ul>
      <h3>Accomplishments:</h3>
      <ul>
        <li><strong>Robust Loyalty Tracking:</strong> Successfully implemented QR code scanning integrated with geolocation.</li>
        <li><strong>Enhanced Onboarding:</strong> Developed an interactive onboarding tour for new users.</li>
        <li><strong>Error Handling & Feedback:</strong> Utilized dynamic toast notifications for real-time feedback.</li>
        <li><strong>Scalability & Maintainability:</strong> Built the app with a modular React architecture leveraging Firebase.</li>
      </ul>
      <p>This project demonstrates a full-stack approach to developing an engaging, real-time loyalty application.</p>
    `,
    image: "public/digital-punch.jpeg",
    link: "https://digitalpunchcard-4f53d.web.app/",
    howTo: `
      <h3>How to Use Digital Punch Card</h3>
      <ol>
        <li>Create a new login.</li>
        <li>When you are ready to scan the QR code provided below, click on the "Enable Demo Mode" button in the bottom left corner to bypass geolocation verification.<br><img src="public/punch-card-qr.jpg" alt="Demo QR Code" class="how-to-img"></li>
        <li>Next, click the "Scan QR Code" button in the top right.</li>
        <li>Scan the QR code and watch as your card is punched!</li>
      </ol>
    `
  },
  project2: {
    title: "QR BINGO",
    description: `
      <h3>Overview:</h3>
      <p>Developed an interactive digital Bingo game application for a brewery’s loyalty program...</p>
      <h3>Tech Stack:</h3>
      <ul>
        <li><strong>Frontend:</strong> React, React Router, Firebase Authentication, Firebase Firestore</li>
        <li><strong>Backend:</strong> Firebase Authentication, Firestore, Firebase Storage</li>
        <li><strong>Other Tools:</strong> Firebase Functions, QR Code generation</li>
      </ul>
      <h3>Challenges:</h3>
      <ul>
        <li><strong>Dynamic Task Updates:</strong> Ensuring tasks change every month and are randomly assigned.</li>
        <li><strong>Task Completion Tracking:</strong> Implementing QR code scanning to mark tasks as complete.</li>
        <li><strong>User Authentication:</strong> Ensuring smooth sign-up and sign-in.</li>
        <li><strong>Mobile Optimization:</strong> Creating a responsive interface.</li>
      </ul>
      <h3>Accomplishments:</h3>
      <ul>
        <li><strong>Real-Time Tracking:</strong> Successfully implemented real-time task tracking.</li>
        <li><strong>QR Code Integration:</strong> Integrated QR code scanning for task completion.</li>
        <li><strong>User Experience:</strong> Streamlined authentication and user flow.</li>
        <li><strong>Scalability:</strong> Built with modular components for easy updates.</li>
      </ul>
      <p>This project demonstrates a full-stack approach to building an interactive, real-time loyalty application.</p>
    `,
    image: "public/etx-bingo.png",
    link: "https://www.vividwebdevelopment.com/etx-bingo/",
    howTo: `
      <h3>How to Use QR BINGO</h3>
      <ol>
        <li>Create a new login.</li>
        <li>Click on the "How to Play" button on your randomly generated card.<br><img src="public/bingo-how.png" alt="Bingo how-to play button" class="how-to-img"></li>
        <li>Download the <a href="public/Archive.zip" download>QR Codes</a> and start scanning.</li>
        <li>Go for BINGO!</li>
      </ol>
    `
  },
  project3: {
    title: "TableTracker",
    description: `
      <h3>Overview:</h3>
      <p>Developed a real-time, role-based table management application for a brewpub...</p>
      <h3>Tech Stack:</h3>
      <ul>
        <li><strong>Frontend:</strong> React, Material UI, React Router, React Toastify, Chart.js</li>
        <li><strong>Backend & Data:</strong> Firebase Cloud Firestore, Firebase Authentication, Firebase Storage</li>
        <li><strong>Other Tools:</strong> Geolocation API, localStorage</li>
      </ul>
      <h3>Challenges:</h3>
      <ul>
        <li><strong>Geolocation Accuracy:</strong> Ensuring table status updates occur only with proper on-site verification.</li>
        <li><strong>Real-Time Updates:</strong> Leveraging Firestore for instant updates.</li>
        <li><strong>UI/UX Design:</strong> Creating a clean, interactive interface.</li>
        <li><strong>Rate Limiting:</strong> Preventing abuse by tracking claim attempts.</li>
      </ul>
      <h3>Accomplishments:</h3>
      <ul>
        <li><strong>Comprehensive Management:</strong> Built a system for real-time updates and reservations.</li>
        <li><strong>Multi-Location Support:</strong> Implemented demo mode with multi-location support.</li>
        <li><strong>Accessibility:</strong> Enhanced with ARIA labels and screenshot mode.</li>
        <li><strong>Interactive Feedback:</strong> Integrated sound alerts and dynamic notifications.</li>
      </ul>
      <p>This project demonstrates a full-stack approach to building a scalable, real-time management system.</p>
    `,
    image: "public/tabletracker.png",
    link: "https://table-tracker-3ace2.web.app",
    howTo: `
      <h3>How to Use TableTracker</h3>
      <ol>
        <li>Use the login: <strong>exstaff@ex.com</strong> / <strong>TestAccount</strong> to log in.</li>
        <li>Turn on Demo Mode to simulate real-time updates.<br><img src="public/table-demo.png" alt="Demo button location" class="how-to-img"></li>
        <li>Click through everything to see the app in action!</li>
      </ol>
    `
  },
  project4: {
    title: "Keg Stack Challenge",
    description: `
      <h3>Overview:</h3>
      <p>Created an engaging physics-based game where players stack kegs...</p>
      <h3>Tech Stack:</h3>
      <ul>
        <li><strong>Frontend:</strong> React, Matter.js</li>
        <li><strong>Physics Engine:</strong> Matter.js for collision detection and gravity simulation</li>
        <li><strong>Other Tools:</strong> DeviceOrientation API, CSS for responsive layout</li>
      </ul>
      <h3>Challenges:</h3>
      <ul>
        <li><strong>Physics Integration:</strong> Fine-tuning Matter.js for smooth keg stacking...</li>
        <li><strong>Device-Specific Controls:</strong> Implementing tilt for mobile...</li>
        <li><strong>Viewport Management:</strong> Adjusting desktop height...</li>
        <li><strong>State Sync:</strong> Fixing game over persistence...</li>
      </ul>
      <h3>Accomplishments:</h3>
      <ul>
        <li><strong>Cross-Platform Play:</strong> Built a seamless experience...</li>
        <li><strong>Dynamic Physics:</strong> Gravity increases with each keg...</li>
        <li><strong>Responsive Design:</strong> Tailored viewport...</li>
        <li><strong>Proof of Concept:</strong> Delivered a playable...</li>
      </ul>
      <p>This project highlights physics-based gameplay...</p>
    `,
    image: "public/keg-image.jpeg",
    link: "https://r3ject.github.io/keg-stack-challenge/",
    howTo: `
      <h3>How to Play Keg Stack Challenge</h3>
      <ol>
        <li><strong>Desktop:</strong> Click "Add Keg"...</li>
        <li><strong>Mobile:</strong> Tap "Add Keg"...</li>
        <li>Stack kegs on the base...</li>
        <li>Hit "Reset" to start over...</li>
      </ol>
    `
  },
  project5: {
    title: "Trail Pin",
    description: `
      <h3>Overview:</h3>
      <p>Trail Pin is a mountain biking memory map app...</p>
      <h3>Tech Stack:</h3>
      <ul>
        <li><strong>Frontend:</strong> React, Leaflet.js</li>
        <li><strong>Backend & Data:</strong> Firebase (Authentication, Firestore), Cloudinary...</li>
        <li><strong>Other Tools:</strong> HTML5 File API, CSS for responsive design</li>
      </ul>
      <h3>Challenges:</h3>
      <ul>
        <li><strong>Map Interactivity:</strong> Creating an intuitive...</li>
        <li><strong>Offline Support:</strong> Implementing offline-first...</li>
        <li><strong>Image Handling:</strong> Efficiently uploading...</li>
      </ul>
      <h3>Accomplishments:</h3>
      <ul>
        <li><strong>Intuitive UI:</strong> A clean, visual-first...</li>
        <li><strong>Responsive Design:</strong> A fully responsive...</li>
        <li><strong>Performance:</strong> Code splitting, caching...</li>
      </ul>
      <p>This project demonstrates the creative use...</p>
    `,
    image: "public/trailpin.png",
    link: "https://trailpin-fbdc7.web.app/",
    howTo: `
      <h3>How to Use Trail Pin</h3>
      <ol>
        <li><strong>Add a Pin:</strong> Click or tap on the map...</li>
        <li><strong>Upload Photos:</strong> Attach one to three photos...</li>
        <li><strong>View Timeline:</strong> Browse your rides...</li>
        <li><strong>Filter Rides:</strong> Use the filter options...</li>
      </ol>
    `
  },
  project6: {
    title: "ETX Brewing Co. Chatbot",
    description: `
      <h3>Overview:</h3>
      <p>A fully functional, branded chatbot built for ETX Brewing Co...</p>
      <h3>Features:</h3>
      <ul>
        <li><strong>Conversational Interface:</strong> A React-powered chat UI...</li>
        <li><strong>Prewritten Smart Responses:</strong> Detects keywords...</li>
        <li><strong>Lead Form Integration:</strong> Triggered by keywords...</li>
        <li><strong>Form Validation:</strong> Real-time checks...</li>
        <li><strong>Auto-Close & Confirmation:</strong> Displays a thank you...</li>
        <li><strong>Clear Chat & Scroll Logic:</strong> A "Clear Chat" button...</li>
        <li><strong>Spam Protection & Rate Limiting:</strong> Express middleware...</li>
        <li><strong>Email Notifications & Logging:</strong> Sends email notifications...</li>
        <li><strong>Embeddable:</strong> Deployed to Netlify...</li>
      </ul>
      <h3>Tech Stack:</h3>
      <p><strong>Frontend:</strong> React (Vite), HTML/CSS, JavaScript<br><strong>Backend:</strong> Node.js + Express, REST API<br><strong>Integrations:</strong> Google Apps Script, Gmail SMTP (nodemailer), Google Sheets<br><strong>Deployment:</strong> Netlify (Frontend), Render (API hosting)</p>
      <h3>Why It Matters:</h3>
      <p>This chatbot reduces repetitive questions...</p>
    `,
    image: "public/chatbot.png",
    link: "https://etxbrew.com/",
    howTo: `
      <h3>How to Use the Chatbot</h3>
      <ol>
        <li>Visit the ETX Brewing Co. website.</li>
        <li>Click on the chatbot icon...</li>
        <li>Type in your query...</li>
        <li>If you’re interested in catering...</li>
      </ol>
    `
  },
  project7: {
    title: "Task Console",
    description: `
      <h3>Overview:</h3>
      <p>Task Console is a web app designed for shift-based teams...</p>
      <h3>Tech Stack:</h3>
      <ul>
        <li><strong>Frontend:</strong> React, Tailwind CSS</li>
        <li><strong>Backend & Data:</strong> Firebase Realtime Database, Firebase Hosting</li>
        <li><strong>Email Reports:</strong> EmailJS, NodeJS with Puppeteer + Cron</li>
      </ul>
      <h3>Challenges:</h3>
      <ul>
        <li><strong>Shift Handling:</strong> Built logic for AM/PM task separation...</li>
        <li><strong>Realtime Sync:</strong> Tasks update live...</li>
        <li><strong>Email Logic:</strong> Integrated daily and weekly reporting...</li>
      </ul>
      <h3>Accomplishments:</h3>
      <ul>
        <li><strong>Template System:</strong> Managers can create...</li>
        <li><strong>One-Off Tasks:</strong> Supports fast entry...</li>
        <li><strong>Mobile-First:</strong> Fully optimized for kitchen tablet use...</li>
      </ul>
      <p>This project brings clarity, accountability...</p>
    `,
    image: "public/taskconsole.png",
    link: "https://task-console.netlify.app/",
    howTo: `
      <h3>How to Use Task Console</h3>
      <ol>
        <li><strong>View Tasks:</strong> Staff access a shift-based task list...</li>
        <li><strong>Send Notes:</strong> Staff can send a quick note...</li>
        <li><strong>Manager Access:</strong> Login with a password...</li>
        <li><strong>Create Templates:</strong> Add reusable templates...</li>
        <li><strong>One-Off Tasks:</strong> Add and assign one-day tasks...</li>
      </ol>
    `
  },
  derby: {
    title: "1st Annual Pintwood Derby Case Study",
    image: "public/pintwoodderbyheader.jpg",
    description: `
      <h3>What Is a Pintwood Derby?</h3>
      <p>Get ready to rev your engines...</p>
      <h3>Campaign Strategy</h3>
      <ul>
        <li>3‑month planning: press releases...</li>
        <li>Channels: Facebook, Instagram...</li>
        <li>Budget: $139.90 total...</li>
      </ul>
      <h3>Next Steps & Sponsors</h3>
      <p>New sponsors are already lining up...</p>
    `,
    link: "https://etxbrew.com/pintwood-derby"
  },
  newVenture: {
    title: "New Venture",
    description: `
      <h3>Overview:</h3>
      <p>End-to-end app development and marketing, showcasing project management and strategic planning.</p>
      <h3>Tech Stack:</h3>
      <ul>
        <li><strong>Frontend:</strong> React</li>
        <li><strong>Tools:</strong> Chart.js for visualizations</li>
      </ul>
      <h3>Challenges:</h3>
      <ul>
        <li><strong>Timeline Management:</strong> Balancing development and marketing milestones.</li>
        <li><strong>Data Visualization:</strong> Creating clear, interactive progress charts.</li>
      </ul>
      <h3>Accomplishments:</h3>
      <ul>
        <li><strong>Dynamic Roadmap:</strong> Built an interactive dashboard to track progress.</li>
        <li><strong>Strategic Planning:</strong> Integrated mockups and projections for marketing.</li>
      </ul>
    `,
    image: "public/new-venture-placeholder.jpg"
  }
};

// tsParticles initialization with enhanced debugging
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM fully loaded, initializing tsParticles...');
  const tsparticlesDiv = document.getElementById('tsparticles');
  if (!tsparticlesDiv) {
    console.error('Error: #tsparticles div not found in DOM');
    return;
  }

  tsParticles.load({
    id: "tsparticles",
    options: {
      background: { color: { value: "#1a1a1a" } },
      fpsLimit: 60,
      particles: {
        number: { value: 20 },
        color: { value: ["#2e7d32", "#4a3728", "#ff6600"] }, // Earthy theme colors
        shape: { type: "circle" },
        size: { value: { min: 2, max: 5 }, random: true },
        opacity: { value: 0.5, random: true, anim: { enable: false } },
        move: {
          enable: true,
          speed: { min: 0.5, max: 2 },
          direction: "none",
          outModes: "out",
          random: true,
          straight: false
        }
      },
      interactivity: {
        events: {
          onHover: { enable: true, mode: "bubble" },
          onClick: { enable: true, mode: "push" },
          resize: { enable: true }
        },
        modes: {
          bubble: { distance: 200, size: 8, duration: 2, opacity: 0.8 },
          push: { quantity: 2 }
        }
      },
      detectRetina: true,
      fullScreen: { enable: true, zIndex: -10 }
    }
  }).then(container => {
    if (!container) {
      console.error('tsParticles container not initialized');
      return;
    }
    console.log('tsParticles initialized:', container);
    const canvas = document.querySelector('#tsparticles canvas');
    if (canvas) {
      canvas.style.zIndex = '-10';
      canvas.style.opacity = '0.5';
      console.log('Canvas found:', canvas, 'Dimensions:', canvas.width, canvas.height);
      console.log('Canvas styles:', window.getComputedStyle(canvas));
      // Verify particle rendering
      setTimeout(() => {
        if (container && container.particles) {
          console.log('Checking particles after 2s:', container.particles.count, 'particles active');
        } else {
          console.error('Particle container or particles not available');
        }
      }, 2000);
    } else {
      console.error('Canvas not found in #tsparticles');
    }
  }).catch(error => {
    console.error('tsParticles load failed:', error);
  });

  // Log any runtime errors
  window.addEventListener('error', e => {
    console.error('Runtime error:', e.message, 'at', e.filename, e.lineno);
  });
});

// Animate GitHub Link on Load and Hover
window.addEventListener('load', () => {
  const gh = document.querySelector('.github-link');
  if (!gh) {
    console.error('GitHub link not found');
    return;
  }
  gsap.fromTo(gh, { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1, duration: 1, ease: 'back.out(1.7)' });
  gh.addEventListener('mouseenter', () => gsap.to(gh, { scale: 1.1, duration: 0.3 }));
  gh.addEventListener('mouseleave', () => gsap.to(gh, { scale: 1, duration: 0.3 }));
});

// Roadmap data (JSON only)
const roadmap = [
  { id: 'phase1', name: 'Phase 1', status: 'in-progress', startDate: '2025-06-01', endDate: '2025-06-30', notes: 'Initial planning and ideation' },
  { id: 'phase2', name: 'Phase 2', status: 'in-progress', startDate: '2025-06-18', endDate: '2025-09-15', notes: 'Core feature development' },
  { id: 'phase3', name: 'Phase 3', status: 'pending', startDate: '2025-09-16', endDate: '2025-12-01', notes: 'Marketing campaign setup' }
];

// Projections data
const projections = [
  { month: 'Week 1', users: 50 },
  { month: 'Month 1', users: 200 },
  { month: 'Month 3', users: 1000 }
];

// Initialize roadmap and projections
window.addEventListener('load', () => {
  // Roadmap chart
  const roadmapCtx = document.getElementById('roadmap-chart')?.getContext('2d');
  if (roadmapCtx) {
    new Chart(roadmapCtx, {
      type: 'bar',
      data: {
        labels: roadmap.map(m => m.name),
        datasets: [{
          label: 'Project Progress',
          data: roadmap.map(m => m.status === 'completed' ? 100 : m.status === 'in-progress' ? 60 : 0),
          backgroundColor: roadmap.map(m => m.status === 'completed' ? '#2e7d32' : m.status === 'in-progress' ? '#ff6600' : '#616161'),
          borderColor: '#4a3728',
          borderWidth: 1
        }]
      },
      options: {
        indexAxis: 'y',
        scales: { x: { display: false }, y: { title: { display: true, text: 'Milestones' } } },
        plugins: { legend: { display: false }, tooltip: { callbacks: { label: ctx => `${ctx.dataset.label}: ${ctx.parsed.x}%` } } }
      }
    });
  }

  // Projections chart
  const projectionsCtx = document.getElementById('projections-chart')?.getContext('2d');
  if (projectionsCtx) {
    new Chart(projectionsCtx, {
      type: 'line',
      data: {
        labels: projections.map(p => p.month),
        datasets: [{
          label: 'Projected Users',
          data: projections.map(p => p.users),
          borderColor: '#ff6600',
          backgroundColor: 'rgba(255, 102, 0, 0.2)',
          fill: true,
          tension: 0.4
        }]
      },
      options: {
        scales: {
          y: { beginAtZero: true, title: { display: true, text: 'Users' } },
          x: { title: { display: true, text: 'Time' } }
        },
        plugins: { legend: { display: false } }
      }
    });
  }

  // Update milestone cards
  roadmap.forEach(milestone => {
    const card = document.getElementById(`milestone-${milestone.id}`);
    if (card) {
      card.classList.remove('completed', 'in-progress');
      if (milestone.status === 'completed') card.classList.add('completed');
      if (milestone.status === 'in-progress') card.classList.add('in-progress');
    }
  });
});

// Show milestone details
function showDetails() {
  const modal = document.getElementById('projectModal');
  const body = document.getElementById('modal-body');
  body.innerHTML = `
    <h2>New Venture Milestones</h2>
    <ul>
      ${roadmap.map(m => `
        <li>
          <h3>${m.name}</h3>
          <p>Status: ${m.status}</p>
          <p>Dates: ${m.startDate} to ${m.endDate}</p>
          <p>Notes: ${m.notes}</p>
        </li>
      `).join('')}
    </ul>
  `;
  modal.style.display = 'flex';
  gsap.fromTo('.modal-content', { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 0.5, ease: 'power2.out' });
}

// Global Functions for Modals
function openModal(id) {
  const p = projectDetails[id];
  if (!p) {
    console.error('Project not found:', id);
    return;
  }
  const body = document.getElementById('modal-body');

  let html = `
    <h2>${p.title}</h2>
    <img src="${p.image}" alt="${p.title}" class="modal-img" />
  `;

  if (id === 'derby') {
    html += `
      <div class="tab-content active">${p.description}</div>
      <h3>Key Metrics</h3>
      <canvas id="derbyMetricsChart" style="max-width: 100%; height: auto;"></canvas>
      <div class="modal-buttons">
        ${p.link ? `<a href="${p.link}" target="_blank" class="project-btn">View Event Page</a>` : ''}
      </div>
    `;
  } else {
    html += `
      <div class="modal-tabs">
        <button class="tab-button active" data-tab="overview">Overview</button>
        <button class="tab-button" data-tab="tech">Tech Stack</button>
        <button class="tab-button" data-tab="challenges">Challenges</button>
        <button class="tab-button" data-tab="accomplishments">Accomplishments</button>
      </div>
      <div class="modal-tab-content">
        <div class="tab-content active" id="overview">${extractSection(p.description, 'Overview')}</div>
        <div class="tab-content" id="tech">${extractSection(p.description, 'Tech Stack')}</div>
        <div class="tab-content" id="challenges">${extractSection(p.description, 'Challenges')}</div>
        <div class="tab-content" id="accomplishments">${extractSection(p.description, 'Accomplishments')}</div>
      </div>
      <div class="modal-buttons">
        ${p.howTo ? `<button class="how-to-btn" onclick="openHowToModal('${id}')">How to Use</button>` : ''}
        ${p.link ? `<a href="${p.link}" target="_blank" class="project-btn">View Project</a>` : ''}
      </div>
    `;
  }

  body.innerHTML = html;

  const modal = document.getElementById('projectModal');
  modal.style.display = 'flex';
  gsap.fromTo('.modal-content', { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 0.5, ease: 'power2.out' });

  if (id !== 'derby') {
    initTabSwitching();
  } else {
    initDerbyChart();
  }
}

function closeModal() {
  document.getElementById('projectModal').style.display = 'none';
}

window.onclick = e => {
  if (e.target.id === 'projectModal') closeModal();
};

function initDerbyChart() {
  const ctx = document.getElementById('derbyMetricsChart')?.getContext('2d');
  if (!ctx) return;
  if (Chart.getChart(ctx)) Chart.getChart(ctx).destroy();
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Reach', 'Link Clicks', 'Engagements'],
      datasets: [{
        label: 'Derby Metrics',
        data: [50000, 521, 785],
        backgroundColor: ['rgba(255,102,0,0.6)', 'rgba(54,162,235,0.6)', 'rgba(75,192,192,0.6)'],
        borderColor: ['rgba(255,102,0,1)', 'rgba(54,162,235,1)', 'rgba(75,192,192,1)'],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          type: 'logarithmic',
          title: { display: true, text: 'Value (log scale)' },
          beginAtZero: false,
          ticks: { callback: function(value) { return Number.isInteger(value) ? value : null; } }
        },
        x: { title: { display: true, text: 'Metric' } }
      },
      plugins: {
        legend: { display: false },
        tooltip: { callbacks: { label: ctx => `${ctx.dataset.label}: ${ctx.parsed.y}` } }
      }
    }
  });
}

function extractSection(htmlString, header) {
  const regex = new RegExp(`<h3>\\s*${header}\\s*:?\\s*</h3>(.*?)(?=(?:<h3>|</div>|$))`, 'is');
  const match = htmlString.match(regex);
  return match ? match[1].trim() : `No ${header} section available.`;
}

function initTabSwitching() {
  const buttons = document.querySelectorAll('.tab-button');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
      btn.classList.add('active');
      const tabId = btn.getAttribute('data-tab');
      const tabContent = document.getElementById(tabId);
      if (tabContent) {
        tabContent.classList.add('active');
        gsap.fromTo(tabContent, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' });
      }
    });
  });
}

function openHowToModal(projectId) {
  const project = projectDetails[projectId];
  const howToBody = document.getElementById('howToBody');
  if (project && project.howTo) {
    howToBody.innerHTML = project.howTo;
  } else {
    howToBody.innerHTML = `<p>No instructions available for this project.</p>`;
  }
  document.getElementById('howToModal').style.display = 'flex';
  gsap.fromTo('#howToModal .modal-content', { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' });
}

function closeHowToModal() {
  document.getElementById('howToModal').style.display = 'none';
}

// Animate badges with a stagger effect
setTimeout(() => {
  gsap.fromTo('.badge', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1.5, stagger: 0.1 });
}, 200);

// Initialize AOS and case study button
window.addEventListener('load', () => {
  AOS.refreshHard();
  document.querySelectorAll('.case-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const projectId = btn.getAttribute('data-project-id') || 'newVenture';
      openModal(projectId);
    });
  });
 // ==== GA4 Event Tracking ====  
  (function() {
    // Resume downloads
    const resumeLink = document.querySelector('.resume-link');
    if (resumeLink) {
      resumeLink.addEventListener('click', () => {
        gtag('event', 'download_resume', {
          event_category: 'engagement',
          event_label: 'Resume Download'
        });
      });
    }

    // GitHub clicks
    const ghLink = document.querySelector('.github-link');
    if (ghLink) {
      ghLink.addEventListener('click', () => {
        gtag('event', 'click_github', {
          event_category: 'engagement',
          event_label: 'GitHub Profile'
        });
      });
    }

    // LinkedIn link clicks
    const liLink = document.querySelector('.linkedin-btn');
    if (liLink) {
      liLink.addEventListener('click', () => {
        gtag('event', 'click_linkedin', {
          event_category: 'engagement',
          event_label: 'LinkedIn Connect'
        });
      });
    }
  })();
});