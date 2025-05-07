// Animate GitHub Link on Load and Hover Effects
window.addEventListener('load', () => {
  const githubLink = document.querySelector('.github-link');
  if (githubLink) {
    gsap.fromTo(githubLink, 
      { scale: 0.8, opacity: 0 }, 
      { scale: 1, opacity: 1, duration: 1, ease: "back.out(1.7)" }
    );
    githubLink.addEventListener('mouseenter', () => {
      gsap.to(githubLink, { scale: 1.1, duration: 0.3, ease: "power1.out" });
    });
    githubLink.addEventListener('mouseleave', () => {
      gsap.to(githubLink, { scale: 1, duration: 0.3, ease: "power1.out" });
    });
  }
});

// ------------------------------
// Project Details
// ------------------------------
const projectDetails = {
  project1: {
    title: "Digital Punch Card",
    description: `
      <h3>Overview:</h3>
      <p>
        Developed an interactive digital punch card application for a restaurant loyalty program. The app allows customers to scan a QR code at the venue to register their purchase and track their progress toward rewards. It also includes an onboarding tour to guide new users.
      </p>
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
        <li>
          When you are ready to scan the QR code provided below, click on the "Enable Demo Mode" button in the bottom left corner to bypass geolocation verification.
          <br>
          <img src="public/demo-button.png" alt="Demo button location" class="how-to-img">
          <br>
          <img src="public/punch-card-qr.jpg" alt="Demo QR Code" class="how-to-img">
        </li>
        <li>Next, click the "Scan QR Code" button in the top right.</li>
        <li>Scan the QR code and watch as your card is punched!</li>
      </ol>
    `
  },
  project2: {
    title: "QR BINGO",
    description: `
      <h3>Overview:</h3>
      <p>
        Developed an interactive digital Bingo game application for a brewery’s loyalty program. Customers complete tasks to earn rewards and mark progress by scanning QR codes.
      </p>
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
        <li>
          Click on the "How to Play" button on your randomly generated card.
          <br>
          <img src="public/bingo-how.png" alt="Bingo how-to play button" class="how-to-img">
        </li>
        <li>Download the <a href="public/Archive.zip" download>QR Codes</a> and start scanning.</li>
        <li>Go for BINGO!</li>
      </ol>
    `
  },
  project3: {
    title: "TableTracker",
    description: `
      <h3>Overview:</h3>
      <p>
        Developed a real-time, role-based table management application for a brewpub. TableTracker allows staff and customers to interact with table status using geolocation verification, predictive wait times, and an intuitive reservation queue.
      </p>
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
        <li>
          Turn on Demo Mode to simulate real-time updates.
          <br>
          <img src="public/table-demo.png" alt="Demo button location" class="how-to-img">
        </li>
        <li>Click through everything to see the app in action!</li>
      </ol>
    `
  },
  project4: {
    title: "Keg Stack Challenge",
    description: `
      <h3>Overview:</h3>
      <p>
        Created an engaging physics-based game where players stack kegs using device tilt (mobile) or arrow keys (desktop). Keg Stack Challenge tests precision and balance, with a dynamic gravity system and real-time collision detection.
      </p>
      <h3>Tech Stack:</h3>
      <ul>
        <li><strong>Frontend:</strong> React, Matter.js</li>
        <li><strong>Physics Engine:</strong> Matter.js for collision detection and gravity simulation</li>
        <li><strong>Other Tools:</strong> DeviceOrientation API, CSS for responsive layout</li>
      </ul>
      <h3>Challenges:</h3>
      <ul>
        <li><strong>Physics Integration:</strong> Fine-tuning Matter.js for smooth keg stacking and gravity escalation.</li>
        <li><strong>Device-Specific Controls:</strong> Implementing tilt for mobile and arrow keys for desktop without overlap.</li>
        <li><strong>Viewport Management:</strong> Adjusting desktop height for more stacking room while preserving mobile layout.</li>
        <li><strong>State Sync:</strong> Fixing game over persistence and duplicate UI elements.</li>
      </ul>
      <h3>Accomplishments:</h3>
      <ul>
        <li><strong>Cross-Platform Play:</strong> Built a seamless experience—tilt on mobile, keys on desktop.</li>
        <li><strong>Dynamic Physics:</strong> Gravity increases with each keg, ramping up difficulty.</li>
        <li><strong>Responsive Design:</strong> Tailored viewport—tall for desktop stacks, compact for mobile.</li>
        <li><strong>Proof of Concept:</strong> Delivered a playable, portfolio-ready game with minimal polish.</li>
      </ul>
      <p>This project highlights physics-based gameplay, responsive design, and creative control schemes in a fun package.</p>
    `,
    image: "public/keg-image.jpeg",
    link: "https://r3ject.github.io/keg-stack-challenge/",
    howTo: `
      <h3>How to Play Keg Stack Challenge</h3>
      <ol>
        <li><strong>Desktop:</strong> Click "Add Keg" to drop a keg, then use <strong>Left/Right Arrow Keys</strong> to position it before it lands.</li>
        <li><strong>Mobile:</strong> Tap "Add Keg" to drop a keg, then press "Enable Tilt" and tilt your device left/right to guide it.</li>
        <li>Stack kegs on the base—don’t let them fall off, or it's game over!</li>
        <li>Hit "Reset" to start over and try for a higher score.</li>
      </ol>
    `
  },
    project5: {
      title: "Trail Pin",
      description: `
        <h3>Overview:</h3>
        <p>
          Trail Pin is a mountain biking memory map app that allows riders to drop pins on an interactive map for every trail they've ridden. Users can attach photos and add notes, creating a digital scrapbook of their rides.
        </p>
        <h3>Tech Stack:</h3>
        <ul>
          <li><strong>Frontend:</strong> React, Leaflet.js</li>
          <li><strong>Backend & Data:</strong> Firebase (Authentication, Firestore), Cloudinary for image uploads</li>
          <li><strong>Other Tools:</strong> HTML5 File API, CSS for responsive design</li>
        </ul>
        <h3>Challenges:</h3>
        <ul>
          <li><strong>Map Interactivity:</strong> Creating an intuitive, responsive map interface that allows users to easily drop and view pins.</li>
          <li><strong>Offline Support:</strong> Implementing offline-first features to let users browse and add pins without constant connectivity.</li>
          <li><strong>Image Handling:</strong> Efficiently uploading and displaying images using Cloudinary.</li>
        </ul>
        <h3>Accomplishments:</h3>
        <ul>
          <li><strong>Intuitive UI:</strong> A clean, visual-first interface that focuses on user experience over heavy data metrics.</li>
          <li><strong>Responsive Design:</strong> A fully responsive layout that adapts seamlessly between mobile and desktop views.</li>
          <li><strong>Performance:</strong> Code splitting, caching, and offline support that enhance load times and user engagement.</li>
        </ul>
        <p>This project demonstrates the creative use of modern web technologies to deliver a unique, user-friendly experience for mountain bikers.</p>
      `,
      image: "public/trailpin.png",
      link: "https://trailpin-fbdc7.web.app/",
      howTo: `
        <h3>How to Use Trail Pin</h3>
        <ol>
          <li><strong>Add a Pin:</strong> Click or tap on the map to drop a pin, then enter the trail name, date, and a brief note.</li>
          <li><strong>Upload Photos:</strong> Attach one to three photos to visually capture your ride.</li>
          <li><strong>View Timeline:</strong> Browse your rides chronologically in the timeline sidebar.</li>
          <li><strong>Filter Rides:</strong> Use the filter options to search by trail name or date range.</li>
        </ol>
      `
    },
    project6: {
      title: "ETX Brewing Co. Chatbot – Support & Lead Capture",
      description: `
        <h3>Overview:</h3>
        <p>
          A fully functional, branded chatbot built for ETX Brewing Co. It answers FAQs, captures lead information, and notifies staff — all without paying for a third-party platform.
        </p>
        <h3>Features:</h3>
        <ul>
          <li><strong>Conversational Interface:</strong> A React-powered chat UI that mimics natural conversation.</li>
          <li><strong>Prewritten Smart Responses:</strong> Detects keywords (e.g., "hours", "menu", "booking") and returns customized replies.</li>
          <li><strong>Lead Form Integration:</strong> Triggered by keywords such as “catering” or “quote”, letting users submit contact details.</li>
          <li><strong>Form Validation:</strong> Real-time checks for valid name, email, phone, and message with immediate feedback.</li>
          <li><strong>Auto-Close & Confirmation:</strong> Displays a thank you message and auto-closes after submission.</li>
          <li><strong>Clear Chat & Scroll Logic:</strong> A "Clear Chat" button with smooth auto-scrolling to keep up with new messages.</li>
          <li><strong>Spam Protection & Rate Limiting:</strong> Express middleware ensures the API is protected from abuse.</li>
          <li><strong>Email Notifications & Logging:</strong> Sends email notifications for new leads and logs submissions to Google Sheets.</li>
          <li><strong>Embeddable:</strong> Deployed to Netlify so that it can be embedded on any website via a simple script tag.</li>
        </ul>
        <h3>Tech Stack:</h3>
        <p>
          <strong>Frontend:</strong> React (Vite), HTML/CSS, JavaScript<br>
          <strong>Backend:</strong> Node.js + Express, REST API<br>
          <strong>Integrations:</strong> Google Apps Script, Gmail SMTP (nodemailer), Google Sheets<br>
          <strong>Deployment:</strong> Netlify (Frontend), Render (API hosting)
        </p>
        <h3>Why It Matters:</h3>
        <p>
          This chatbot reduces repetitive questions for staff, modernizes the brand’s image, and captures valuable leads without the cost of a monthly service.
        </p>
      `,
      image: "public/chatbotetx.png",
      link: "https://etxbrew.com/",
      howTo: `
        <h3>How to Use the Chatbot</h3>
        <ol>
          <li>Visit the ETX Brewing Co. website.</li>
          <li>Click on the chatbot icon located at the bottom corner of the page.</li>
          <li>Type in your query (e.g. "What are your hours?") to see the smart responses.</li>
          <li>If you’re interested in catering or need a quote, follow the prompt to fill out your contact details.</li>
        </ol>
      `
    },

    project7: {
      title: "Task Console",
      description: `
        <h3>Overview:</h3>
        <p>
          Task Console is a web app designed for shift-based teams—specifically kitchen operations. It allows managers to create reusable task templates, assign tasks by shift and date, track completions in real time, and receive daily email summaries.
        </p>
        <h3>Tech Stack:</h3>
        <ul>
          <li><strong>Frontend:</strong> React, Tailwind CSS</li>
          <li><strong>Backend & Data:</strong> Firebase Realtime Database, Firebase Hosting</li>
          <li><strong>Email Reports:</strong> EmailJS, NodeJS with Puppeteer + Cron</li>
        </ul>
        <h3>Challenges:</h3>
        <ul>
          <li><strong>Shift Handling:</strong> Built logic for AM/PM task separation and enforced a cutoff with alarm triggers if tasks are incomplete after grace period.</li>
          <li><strong>Realtime Sync:</strong> Tasks update live between tablets and manager view using Firebase listeners.</li>
          <li><strong>Email Logic:</strong> Integrated daily and weekly reporting with Puppeteer-triggered cron jobs and inline CSV delivery.</li>
        </ul>
        <h3>Accomplishments:</h3>
        <ul>
          <li><strong>Template System:</strong> Managers can create, edit, rename, duplicate, and assign reusable task templates per shift/day.</li>
          <li><strong>One-Off Tasks:</strong> Supports fast entry of individual tasks for one-day use.</li>
          <li><strong>Mobile-First:</strong> Fully optimized for kitchen tablet use with large tap targets and responsive layout.</li>
        </ul>
        <p>This project brings clarity, accountability, and automation to a chaotic kitchen environment using clean, efficient tools.</p>
      `,
      image: "public/taskconsole.png",
      link: "https://task-console.netlify.app/",
      howTo: `
        <h3>How to Use Task Console</h3>
        <ol>
          <li><strong>View Tasks:</strong> Staff access a shift-based task list. They can tap tasks to mark them as complete and select who completed them.</li>
          <li><strong>Send Notes:</strong> Staff can send a quick note to management with their name and message using the "Send Note" button.</li>
          <li><strong>Manager Access:</strong> Login with a password to view live task status, download weekly CSV reports, and manage templates.</li>
          <li><strong>Create Templates:</strong> Add reusable templates with editable task lists, then assign them to any date/shift.</li>
          <li><strong>One-Off Tasks:</strong> Add and assign one-day tasks without saving them to a template.</li>
        </ol>
      `
    },
    
};


// ------------------------------
// Global Functions for Modals
// ------------------------------

// Open How-To Modal (global)
function openHowToModal(projectId) {
  const project = projectDetails[projectId];
  const howToBody = document.getElementById('howToBody');
  if (project && project.howTo) {
    howToBody.innerHTML = project.howTo;
  } else {
    howToBody.innerHTML = `<p>No instructions available for this project.</p>`;
  }
  document.getElementById('howToModal').style.display = "flex";
  gsap.fromTo("#howToModal .modal-content", 
    { opacity: 0, y: -50 }, 
    { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
  );
}

// Close How-To Modal (global)
function closeHowToModal() {
  document.getElementById('howToModal').style.display = "none";
}

// Open Project Modal
function openModal(projectId) {
  const modal = document.getElementById('projectModal');
  const modalBody = document.getElementById('modal-body');
  const project = projectDetails[projectId];
  
  // Animate badges with a stagger effect after a short delay
  setTimeout(() => {
    gsap.fromTo(".badge", 
      { opacity: 0, y: 20 }, 
      { opacity: 1, y: 0, duration: 1.5, stagger: 0.1 }
    );
  }, 200);
  
  if (project) {
    modalBody.innerHTML = `
      <h2>${project.title}</h2>
      <img src="${project.image}" alt="${project.title}" style="width:100%; border-radius: 4px;" />
      <div class="modal-tabs">
        <button class="tab-button active" data-tab="overview">Overview</button>
        <button class="tab-button" data-tab="tech">Tech Stack</button>
        <button class="tab-button" data-tab="challenges">Challenges</button>
        <button class="tab-button" data-tab="accomplishments">Accomplishments</button>
      </div>
      <div class="modal-tab-content">
        <div class="tab-content active" id="overview">
          ${extractSection(project.description, 'Overview')}
        </div>
        <div class="tab-content" id="tech">
          ${extractSection(project.description, 'Tech Stack')}
        </div>
        <div class="tab-content" id="challenges">
          ${extractSection(project.description, 'Challenges')}
        </div>
        <div class="tab-content" id="accomplishments">
          ${extractSection(project.description, 'Accomplishments')}
        </div>
      </div>
      <div class="how-to-section">
        <button class="how-to-btn" onclick="openHowToModal('${projectId}')">How to Use This App</button>
      </div>
      <a href="${project.link}" target="_blank" class="project-btn">View Project</a>
    `;
  } else {
    modalBody.innerHTML = "<p>No details available for this project.</p>";
  }
  modal.style.display = "flex";
  gsap.fromTo(".modal-content", 
    { opacity: 0, y: -50, scale: 0.9 },
    { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: "power2.out" }
  );
  initTabSwitching();
}

// Helper function to extract a section from the project description
function extractSection(htmlString, header) {
  const regex = new RegExp(`<h3>\\s*${header}\\s*:?\\s*</h3>([\\s\\S]*?)(?=<h3>|$)`, 'i');
  const match = htmlString.match(regex);
  return match ? match[1].trim() : `No ${header} section available.`;
}

// Initialize Tab Switching in the Project Modal
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
        gsap.fromTo(tabContent, { opacity: 0 }, { opacity: 1, duration: 0.5 });
      }
    });
  });
}

// Close Project Modal
function closeModal() {
  document.getElementById('projectModal').style.display = "none";
}

// Close project modal when clicking outside the modal content
window.onclick = function(event) {
  const modal = document.getElementById('projectModal');
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

window.addEventListener('load', () => {
  AOS.refreshHard();
});

// tsParticles initialization
tsParticles.load("tsparticles", {
  background: {
    color: { value: "#1a1a1a" }
  },
  fpsLimit: 60,
  particles: {
    number: { value: 40, density: { enable: true, area: 800 } },
    color: { value: "#006400" },
    shape: { type: "polygon", polygon: { nb_sides: 6 } },
    opacity: { value: 0.7, random: true, anim: { enable: true, speed: 1, opacity_min: 0.3, sync: false } },
    size: { value: { min: 3, max: 8 }, random: true, anim: { enable: true, speed: 3, size_min: 2, sync: false } },
    move: { enable: true, speed: 2, direction: "none", random: true, straight: false, outMode: "out" }
  },
  interactivity: {
    detectsOn: "canvas",
    events: { onHover: { enable: true, mode: "repulse" }, onClick: { enable: true, mode: "push" }, resize: true },
    modes: { repulse: { distance: 120, duration: 0.4 }, push: { quantity: 4 } }
  },
  retina_detect: true
});
