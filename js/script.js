// Load portfolio data from JSON
async function loadPortfolioData() {
    try {
        const response = await fetch('data/portfolio.json');
        const data = await response.json();
        populatePortfolio(data);
    } catch (error) {
        console.error('Error loading portfolio data:', error);
    }
}

// Populate portfolio with data
function populatePortfolio(data) {
    // Personal Info
    document.getElementById('userName').textContent = data.personal.name || 'YOUR NAME';
    document.getElementById('userTitle').textContent = data.personal.title || 'Your Professional Title';
    document.getElementById('userBio').textContent = data.personal.bio || 'Your short bio description goes here';
    document.getElementById('profileImage').src = data.personal.profileImage || 'https://via.placeholder.com/150';
    
    // About Section
    document.getElementById('aboutIntro').textContent = data.about.intro || '';
    document.getElementById('aboutDescription').textContent = data.about.description || '';

    // Skills Section
    populateSkills(data.skills);

    // Projects Section
    populateProjects(data.projects);

    // Social Links
    populateSocialLinks(data.social);
}

// Populate Skills
function populateSkills(skills) {
    const skillsContainer = document.getElementById('skillsContainer');
    skillsContainer.innerHTML = '';

    skills.forEach(category => {
        const skillCategory = document.createElement('div');
        skillCategory.className = 'skill-category';
        
        let skillsHTML = `<h3>${category.category}</h3><div class="skill-list">`;
        
        category.skills.forEach(skill => {
            skillsHTML += `<span class="skill-tag">${skill}</span>`;
        });
        
        skillsHTML += '</div>';
        skillCategory.innerHTML = skillsHTML;
        skillsContainer.appendChild(skillCategory);
    });
}

// Populate Projects
function populateProjects(projects) {
    const projectsContainer = document.getElementById('projectsContainer');
    projectsContainer.innerHTML = '';

    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        
        let linksHTML = '';
        if (project.githubLink) {
            linksHTML += `<a href="${project.githubLink}" target="_blank" class="project-link">GitHub</a>`;
        }
        if (project.demoLink) {
            linksHTML += `<a href="${project.demoLink}" target="_blank" class="project-link">Demo</a>`;
        }
        if (project.projectLink) {
            linksHTML += `<a href="${project.projectLink}" target="_blank" class="project-link">View Project</a>`;
        }

        projectCard.innerHTML = `
            <div class="project-header">
                <h3>${project.title}</h3>
                <span class="project-category">${project.category}</span>
            </div>
            <div class="project-body">
                <p class="project-description">${project.description}</p>
                <div class="project-links">
                    ${linksHTML}
                </div>
            </div>
        `;

        projectsContainer.appendChild(projectCard);
    });
}

// Populate Social Links
function populateSocialLinks(social) {
    const socialLinks = document.getElementById('socialLinks');
    socialLinks.innerHTML = '';

    Object.keys(social).forEach(platform => {
        if (social[platform]) {
            const socialLink = document.createElement('a');
            socialLink.href = social[platform];
            socialLink.target = '_blank';
            socialLink.className = 'social-link';
            socialLink.title = platform.charAt(0).toUpperCase() + platform.slice(1);
            socialLink.textContent = platform.charAt(0).toUpperCase() + platform.slice(1);
            socialLinks.appendChild(socialLink);
        }
    });
}

// Smooth scroll navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
            updateActiveNav(this);
        }
    });
});

// Update active navigation link
function updateActiveNav(activeLink) {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    activeLink.classList.add('active');
}

// Update nav on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section, header');
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Contact Form Handler
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const message = this.querySelector('textarea').value;

    // Create mailto link (update email address in portfolio.json)
    const mailtoLink = `mailto:your-email@example.com?subject=Message from ${name}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Reset form
    this.reset();
});

// Load data on page load
document.addEventListener('DOMContentLoaded', loadPortfolioData);