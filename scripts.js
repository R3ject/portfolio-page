window.addEventListener('load', () => {
  const githubLink = document.querySelector('.github-link');
  if (githubLink) {
    // Initial pop-in animation on page load
    gsap.fromTo(githubLink, 
      { scale: 0.8, opacity: 0 }, 
      { scale: 1, opacity: 1, duration: 1, ease: "back.out(1.7)" }
    );

    // Add GSAP hover animations (optional, as CSS hover already applies a scale)
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
        <li><strong>Other Tools:</strong> Geolocation API for location verification, localStorage for persistent user flags</li>
      </ul>
      <h3>Challenges:</h3>
      <ul>
        <li><strong>Geolocation Accuracy:</strong> Ensuring that punches are only added when a user is within the venue's geolocation parameters.</li>
        <li><strong>UI Consistency:</strong> Avoiding duplicate or overlapping components via conditional rendering and proper state management.</li>
        <li><strong>User Experience:</strong> Preventing manual manipulation of punch counts by disabling unintended interactions.</li>
        <li><strong>Real-Time Updates:</strong> Integrating real-time data updates using Firestore.</li>
      </ul>
      <h3>Accomplishments:</h3>
      <ul>
        <li><strong>Robust Loyalty Tracking:</strong> Successfully implemented QR code scanning integrated with geolocation.</li>
        <li><strong>Enhanced Onboarding:</strong> Developed an interactive onboarding tour for new users.</li>
        <li><strong>Error Handling & Feedback:</strong> Utilized dynamic toast notifications for real-time feedback.</li>
        <li><strong>Scalability & Maintainability:</strong> Built the app with a modular React architecture and leveraged Firebase for scalability.</li>
      </ul>
      <p>
        This project demonstrates a full-stack approach to developing an engaging, real-time loyalty application.
      </p>
    `,
    image: "public/digital-punch.jpeg",
    link: "https://digitalpunchcard-4f53d.web.app/",
    howTo: `
      <h3>How to Use Digital Punch Card</h3>
      <ol>
        <li>Create a new login.</li>
        <li>When you are ready to scan the QR code provided below, click on the "Enable Demo Mode" button in the bottom left corner of the Punch Card page to bypass the geolocation verification.
        <br />
        <img src="public/demo-button.png" alt="Demo button locatoin" class="how-to-img">
        <br />
        <img src="public/punch-card-qr.jpg" alt="Demo QR Code" class="how-to-img">
        </li>
        <li>Next, click the "Scan QR Code" button in the top right of the page.</li>
        <li>Scan the QR code and watch as your card is punched!</li>
      </ol>
    `
  },
  project2: {
    title: "QR BINGO",
    description: `
      <h3>Overview:</h3>
      <p>
        Developed an interactive digital Bingo game application for a brewery’s loyalty program. Customers engage with the app by completing various tasks, earning rewards once they complete a row or column.
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
        <li><strong>User Authentication:</strong> Ensuring smooth user sign-up and sign-in.</li>
        <li><strong>Mobile Optimization:</strong> Creating a responsive interface.</li>
      </ul>
      <h3>Accomplishments:</h3>
      <ul>
        <li><strong>Real-Time Tracking:</strong> Successfully implemented real-time task tracking.</li>
        <li><strong>QR Code Integration:</strong> Integrated QR code scanning for task completion.</li>
        <li><strong>User Experience:</strong> Streamlined authentication and user flow.</li>
        <li><strong>Scalability:</strong> Built with modular components for easy updates.</li>
      </ul>
      <p>
        This project demonstrates a full-stack approach to building an interactive, real-time loyalty application.
      </p>
    `,
    image: "public/etx-bingo.png",
    link: "https://www.vividwebdevelopment.com/etx-bingo/",
    howTo: `
      <h3>How to Use QR BINGO</h3>
      <ol>
        <li>Create a new login.</li>
        <li>Click on the "How to Play" button towards the top of your randomly generated card.
        <br />
        <img src="public/bingo-how.png" alt="bingo how to play button" class="how-to-img">
        </li>
        <li>Download the <a href="public/Archive.zip">QR Codes</a> and start scanning to see the BINGO card react.</li>
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
        <li><strong>Geolocation Accuracy:</strong> Ensuring table status updates only occur with proper on-site verification.</li>
        <li><strong>Real-Time Updates:</strong> Leveraging Firestore for instant updates.</li>
        <li><strong>UI/UX Design:</strong> Creating a clean, interactive interface.</li>
        <li><strong>Rate Limiting:</strong> Preventing abuse by tracking claim attempts.</li>
      </ul>
      <h3>Accomplishments:</h3>
      <ul>
        <li><strong>Comprehensive Management:</strong> Built a system handling real-time updates and reservations.</li>
        <li><strong>Multi-Location Support:</strong> Implemented demo mode with multi-location support.</li>
        <li><strong>Accessibility:</strong> Enhanced with ARIA labels and screenshot mode.</li>
        <li><strong>Interactive Feedback:</strong> Integrated sound alerts and dynamic notifications.</li>
      </ul>
      <p>
        This project demonstrates a full-stack approach to building a scalable, real-time management system.
      </p>
    `,
    image: "public/tabletracker.png",
    link: "https://table-tracker-3ace2.web.app",
    howTo: `
      <h3>How to Use TableTracker</h3>
      <ol>
        <li>Use the login: USER:exstaff@ex.com PASSWORD:TestAccount to log in,</li>
        <li>Turn on Demo Mode to simulate real-time updates.
        <br />
        <img src="public/table-demo.png" alt="demo button location" class="how-to-img">
        </li>
        <li>Click through everything to see the app in action!</li>
      </ol>
    `
  }
  // Additional projects can be added similarly...
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
      // Remove active class from all tab buttons and tab contents
      buttons.forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
      
      // Activate the clicked tab button
      btn.classList.add('active');
      
      // Show the corresponding tab content
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

// tsParticles initialization (configuration remains unchanged)
tsParticles.load("tsparticles", {
  background: {
    color: {
      value: "#1a1a1a"
    }
  },
  fpsLimit: 60,
  particles: {
    number: {
      value: 40,
      density: {
        enable: true,
        area: 800
      }
    },
    color: {
      value: "#006400"
    },
    shape: {
      type: "polygon",
      polygon: {
        nb_sides: 6
      }
    },
    opacity: {
      value: 0.7,
      random: true,
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0.3,
        sync: false
      }
    },
    size: {
      value: { min: 3, max: 8 },
      random: true,
      anim: {
        enable: true,
        speed: 3,
        size_min: 2,
        sync: false
      }
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: true,
      straight: false,
      outMode: "out"
    }
  },
  interactivity: {
    detectsOn: "canvas",
    events: {
      onHover: {
        enable: true,
        mode: "repulse"
      },
      onClick: {
        enable: true,
        mode: "push"
      },
      resize: true
    },
    modes: {
      repulse: {
        distance: 120,
        duration: 0.4
      },
      push: {
        quantity: 4
      }
    }
  },
  retina_detect: true
});
