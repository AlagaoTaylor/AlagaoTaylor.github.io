document.addEventListener("DOMContentLoaded", function () {

    // NAVIGATION BAR
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("navLinks");

    if (hamburger && navLinks) {
        hamburger.addEventListener("click", () => {
            navLinks.classList.toggle("active");
        });
    }


    // ABOUT TIMELINE
    const items = document.querySelectorAll('.timeline-item');

    if (items.length > 0) {
        window.addEventListener('scroll', () => {
            items.forEach(item => {
                const itemTop = item.getBoundingClientRect().top;
                if (itemTop < window.innerHeight - 100) {
                    item.classList.add('active');
                }
            });
        });
    }


    // TYPING 
    function typingEffect(elementId, text, speed = 100, callback) {
        const el = document.getElementById(elementId);
        if (!el) return; // 👈 Prevent crash on pages without this element

        let i = 0;
        el.innerHTML = ""; // Clear existing text first

        function type() {
            if (i < text.length) {
                el.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            } else if (callback) {
                callback();
            }
        }

        type();
    }

    // Only runs if element exists
    typingEffect("intro", 'Not just a career portfolio, but my journal on navigating "the real world!"', 100);
    typingEffect("about", 'My journey on getting to today!', 100);
    typingEffect("icpc",'Teams of 3, fighting for 1st!', 100);

    // PROJECTS LIST
    const projectContainer = document.getElementById("projects");

    if (projectContainer) {
        const projects = [
            {
                name: "Weather App",
                description: "A weather app using an API",
                link: "https://google.com"
            },
            {
                name: "Task Manager",
                description: "To-do list app with local storage",
                link: "https://google.com"
            }
        ];

        projects.forEach(project => {
            const div = document.createElement("div");
            div.classList.add("project");

            div.innerHTML = `
                <h3>${project.name}</h3>
                <p>${project.description}</p>
                <a href="${project.link}" target="_blank">View Project</a>
            `;

            projectContainer.appendChild(div);
        });
    }


    // CONNECTS LIST
    const connectContainer = document.getElementById("connects");

    if (connectContainer) {
        const connects = [
            {
                name: "LinkedIn",
                link: "https://linkedin.com/in/taylor-alagao",
                image: "social_icons/LinkedIn_icon.png"
            }
        ];

        connects.forEach(connect => {
            const div = document.createElement("div");
            div.classList.add("connect");

            div.innerHTML = `
                <a href="${connect.link}" target="_blank">
                    <img src="${connect.image}" alt="${connect.name} logo" />
                </a>
            `;

            connectContainer.appendChild(div);
        });
    }

});

document.querySelectorAll('.project').forEach(project => {
    project.addEventListener('click', () => {
      const url = project.getAttribute('data-url');
      if (url) {
        window.location.href = url; // opens in same tab
      }
    });
  });
