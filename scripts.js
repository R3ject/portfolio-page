
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
          <li><strong>Geolocation Accuracy:</strong> Ensuring that punches are only added when a user is within the venue's geolocation parameters, including managing asynchronous geolocation calls and handling errors gracefully.</li>
          <li><strong>UI Consistency:</strong> Avoiding duplicate or overlapping components (e.g., onboarding tour indicators) by implementing conditional rendering logic and proper state management.</li>
          <li><strong>User Experience:</strong> Preventing manual manipulation of punch counts by disabling unintended interactions (e.g., removing click handlers from reward icons).</li>
          <li><strong>Real-Time Updates:</strong> Integrating real-time data updates using Firestore, ensuring that changes to the punch card were immediately reflected in the user interface.</li>
        </ul>
        <h3>Accomplishments:</h3>
        <ul>
          <li><strong>Robust Loyalty Tracking:</strong> Successfully implemented QR code scanning integrated with geolocation, ensuring only legitimate venue punches were recorded.</li>
          <li><strong>Enhanced Onboarding:</strong> Developed an interactive onboarding tour that runs only for new users, improving first-time user experience.</li>
          <li><strong>Error Handling & Feedback:</strong> Utilized dynamic toast notifications to provide real-time feedback on scan results, geolocation errors, and transaction outcomes.</li>
          <li><strong>Scalability & Maintainability:</strong> Built the application with a modular React component architecture and leveraged Firebase for scalable backend services, enabling easy future integrations (e.g., potential ToastTab Loyalty Integration).</li>
        </ul>
        <p>
          This project demonstrates a full-stack approach to developing an engaging, real-time loyalty application with a focus on user experience and data integrity.
        </p>
      `,
      image: "public/digital-punch.jpeg",
      link: "https://digitalpunchcard-4f53d.web.app/"
    },
    project2: {
      title: "QR BINGO",
      description: `
        <h3>Overview:</h3>
        <p>
          Developed an interactive digital Bingo game application for a brewery’s loyalty program. Customers engage with the app by completing various tasks throughout the month, and once they complete a row or column, they earn rewards. The app features dynamic task updates, user sign-up and authentication, and task completion tracking through QR code scanning. It is optimized for mobile use, ensuring an intuitive experience for users on the go.
        </p>
        <h3>Tech Stack:</h3>
        <ul>
          <li><strong>Frontend:</strong> React, React Router, Firebase Authentication, Firebase Firestore</li>
          <li><strong>Backend:</strong> Firebase Authentication, Firestore (for storing user data and tasks), Firebase Storage</li>
          <li><strong>Other Tools:</strong> Firebase Functions (for server-side operations), QR Code generation for task completion tracking</li>
        </ul>
        <h3>Challenges:</h3>
        <ul>
          <li><strong>Dynamic Task Updates:</strong> Ensuring tasks change every month and are randomly assigned while keeping track of user progress in real-time using Firebase Firestore.</li>
          <li><strong>Task Completion Tracking:</strong> Implementing a QR code scanning feature that marks tasks as completed. This involved integrating QR code generation and ensuring users could scan codes without the possibility of manipulation.</li>
          <li><strong>User Authentication:</strong> Implementing Firebase Authentication to handle user sign-up, sign-in, and password reset, and ensuring smooth user flow and secure account management.</li>
          <li><strong>Mobile Optimization:</strong> Creating a fully responsive interface with mobile-first design to ensure a smooth and consistent experience across devices.</li>
        </ul>
        <h3>Accomplishments:</h3>
        <ul>
          <li><strong>Task Tracking & Rewards:</strong> Successfully implemented a real-time task completion tracking system that dynamically generates tasks and stores them in Firestore, updating the app in real-time when a task is completed.</li>
          <li><strong>QR Code Integration:</strong> Integrated a QR code system that allows users to scan codes at the brewery to mark tasks as completed, ensuring task tracking is accurate and seamless.</li>
          <li><strong>User Experience Improvements:</strong> Streamlined user authentication with Firebase and ensured easy access to the Bingo grid and task list for registered users.</li>
          <li><strong>Scalability & Maintainability:</strong> Built the app with a modular structure, using React for scalable components and Firebase for cloud-based storage, allowing easy future updates and enhancements.</li>
        </ul>
        <p>
          This project demonstrates a full-stack approach to building an interactive, real-time loyalty application with an engaging user experience and robust task tracking system.
        </p>
      `,
      image: "public/etx-bingo.png",
      link: "https://www.vividwebdevelopment.com/etx-bingo/"
    },
    project3: {
      title: "TableTracker",
      description: `
        <h3>Overview:</h3>
        <p>
          Developed a real-time, role-based table management application for a brewpub. TableTracker allows staff and customers to interact with table status using geolocation verification, predictive wait times, and an intuitive reservation queue. The system also includes features like table history logging, multi-location support, and dynamic analytics export.
        </p>
        <h3>Tech Stack:</h3>
        <ul>
          <li><strong>Frontend:</strong> React, Material UI, React Router, React Toastify, Chart.js</li>
          <li><strong>Backend & Data:</strong> Firebase Cloud Firestore, Firebase Authentication, Firebase Storage (for assets)</li>
          <li><strong>Other Tools:</strong> Geolocation API for on-site verification, localStorage for state persistence</li>
        </ul>
        <h3>Challenges:</h3>
        <ul>
          <li><strong>Geolocation Accuracy:</strong> Implemented robust on-site verification to ensure table status changes occur only when users are physically present, including support for demo mode and multi-location geofencing.</li>
          <li><strong>Real-Time Data Updates:</strong> Leveraged Firestore's real-time capabilities to instantly reflect table status changes and reservation queue updates in the user interface.</li>
          <li><strong>UI/UX Design:</strong> Created a clean, interactive interface with features like table history, dynamic analytics export, and sound notifications for staff alerts.</li>
          <li><strong>Rate Limiting:</strong> Integrated a rate limiting mechanism to prevent abuse by tracking claim attempts and displaying remaining claims to the user.</li>
        </ul>
        <h3>Accomplishments:</h3>
        <ul>
          <li><strong>Comprehensive Table Management:</strong> Built an application that handles real-time table updates, predictive wait times, and reservation queuing with an intuitive UI.</li>
          <li><strong>Demo & Multi-Location Modes:</strong> Implemented demo mode with a UI toggle and a brewpub selector to support multiple locations, enhancing the app's flexibility and portfolio appeal.</li>
          <li><strong>Enhanced Accessibility & Presentation:</strong> Added ARIA labels and screenshot mode for improved accessibility and portfolio-ready presentations.</li>
          <li><strong>Sound & Visual Feedback:</strong> Integrated sound alerts for staff notifications and dynamic toast messages to enhance user experience and operational responsiveness.</li>
        </ul>
        <p>
          This project demonstrates a full-stack approach to building a scalable, real-time management system with a focus on robust geolocation, intuitive design, and interactive user feedback.
        </p>
      `,
      image: "public/tabletracker.png",
      link: "https://table-tracker-3ace2.web.app"
    }
    
    // Add more projects here
  };
  
  // Use one extractSection function (the robust version)
  function extractSection(htmlString, header) {
    const regex = new RegExp(`<h3>\\s*${header}\\s*:?\\s*</h3>([\\s\\S]*?)(?=<h3>|$)`, 'i');
    const match = htmlString.match(regex);
    return match ? match[1].trim() : `No ${header} section available.`;
  }
  
  function openModal(projectId) {
    const modal = document.getElementById('projectModal');
    const modalBody = document.getElementById('modal-body');
    const project = projectDetails[projectId];
  
    // Debug logs
    console.log('Overview:', extractSection(project.description, 'Overview'));
    console.log('Tech Stack:', extractSection(project.description, 'Tech Stack'));
    console.log('Challenges:', extractSection(project.description, 'Challenges'));
    console.log('Accomplishments:', extractSection(project.description, 'Accomplishments'));
  
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
  
  function initTabSwitching() {
    const buttons = document.querySelectorAll('.tab-button');
    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        // Remove active class from all buttons and tab contents
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
  
  function closeModal() {
    document.getElementById('projectModal').style.display = "none";
  }
  
  // Close modal when clicking outside the modal content
  window.onclick = function(event) {
    const modal = document.getElementById('projectModal');
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
  
  window.addEventListener('load', () => {
    AOS.refreshHard();
  });
  
  // tsParticles initialization (your configuration remains unchanged)
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
  