// JavaScript for any interactive elements
        document.addEventListener('DOMContentLoaded', function() {
            const ctaButton = document.querySelector('.cta-button');
            
            ctaButton.addEventListener('click', function() {
                alert('Thank you for your interest! This is a demo page.');
            });
        });

        document.addEventListener('DOMContentLoaded', function() {
            const videoElement = document.querySelector('.video-element');
            const playButton = document.querySelector('.play-button');
            const playIcon = document.querySelector('.play-icon');
            const pauseIcon = document.querySelector('.pause-icon');

            // Function to toggle play/pause
            function togglePlay() {
                if (videoElement.paused || videoElement.ended) {
                    videoElement.play();
                    playIcon.style.display = 'none';
                    pauseIcon.style.display = 'block';
                } else {
                    videoElement.pause();
                    playIcon.style.display = 'block';
                    pauseIcon.style.display = 'none';
                }
            }

            // Add click event to play button
            playButton.addEventListener('click', togglePlay);

            // Reset button state when video ends
            videoElement.addEventListener('ended', function() {
                playIcon.style.display = 'block';
                pauseIcon.style.display = 'none';
            });

            // Handle video click to toggle play/pause
            videoElement.addEventListener('click', togglePlay);
        });
        document.addEventListener('DOMContentLoaded', function() {
            const tryFreeBtn = document.querySelector('.try-free-btn');
            
            tryFreeBtn.addEventListener('click', function() {
                // You can add functionality for the button here
                alert('Thank you for your interest! This is a demo.');
            });
        });

          function makeActive(element) {
      // Remove active class from all cards
      const cards = document.querySelectorAll('.pricing-card');
      cards.forEach(card => {
        card.classList.remove('active');
      });
      
      // Add active class to clicked card
      element.classList.add('active');
    }
        document.addEventListener('DOMContentLoaded', function() {
            const newsletterForm = document.getElementById('newsletter-form');
            
            newsletterForm.addEventListener('submit', function(e) {
                e.preventDefault();
                const emailInput = document.querySelector('.email-input');
                const email = emailInput.value.trim();
                
                if(email) {
                    // Here you would typically send the email to your server
                    alert('Thank you for subscribing with: ' + email);
                    emailInput.value = '';
                } else {
                    alert('Please enter a valid email address');
                }
            });
        });
        // JavaScript can be added here if needed for interactivity
    document.querySelector('.cta-button').addEventListener('click', function() {
      alert('Button clicked! Add your desired functionality here.');
    });
  document.addEventListener("DOMContentLoaded", function () {
    // Testimonials Data
    const messages = [
      {
        text: "Most calendars are designed for teams. Slate is designed for freelancers who want a simple way to plan their schedule.",
        name: "John Doe",
        title: "UI designer",
      },
      {
        text: "Slate helps you see how many more days you need to work to reach your financial goal for the month and year.",
        name: "Jane Smith",
        title: "Product Designer",
      },
      {
        text: "When you add work to your Slate calendar we automatically calculate useful insights about your schedule.",
        name: "Mike Johnson",
        title: "Frontend Developer",
      },
    ];

    const dots = document.querySelectorAll(".dot");
    const paragraph = document.querySelector(".testimonial-section p");
    const nameEl = document.querySelector(".testimonial-profile strong");
    const titleEl = document.querySelector(".testimonial-profile small");

    let activeIndex = 0;

    function updateTestimonial(index) {
      const msg = messages[index];
      paragraph.textContent = msg.text;
      nameEl.textContent = msg.name;
      titleEl.textContent = msg.title;

      dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === index);
      });
    }

    // Manual dot click
    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        activeIndex = index;
        updateTestimonial(activeIndex);
      });
    });

    // Auto-slide every 6 seconds
    setInterval(() => {
      activeIndex = (activeIndex + 1) % messages.length;
      updateTestimonial(activeIndex);
    }, 6000);

    updateTestimonial(activeIndex); // Initialize with first testimonial

    // Contact form logic
    const contactForm = document.getElementById("contactForm");
    const successModal = document.getElementById("successModal");
    const closeModal = document.getElementById("closeModal");
    const body = document.body;

    if (contactForm) {
      contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        successModal.style.display = "flex";
        body.classList.add("no-scroll");
        contactForm.reset();
      });
    }

    if (closeModal) {
      closeModal.addEventListener("click", function () {
        successModal.style.display = "none";
        body.classList.remove("no-scroll");
      });

      successModal.addEventListener("click", function (e) {
        if (e.target === successModal) {
          successModal.style.display = "none";
          body.classList.remove("no-scroll");
        }
      });
    }

    // Footer link logs
    const footerLinks = document.querySelectorAll(".footer-link");
    footerLinks.forEach((link) => {
      link.addEventListener("click", function () {
        console.log("Footer link clicked:", this.textContent);
      });
    });

    // Social media logs
    const socialLinks = document.querySelectorAll(".social-icon-link");
    socialLinks.forEach((link) => {
      link.addEventListener("click", function () {
        console.log("Social media link clicked:", this.className);
      });
    });
  });
