const profileData = {
  fullName: "Arnaldo Espinola Ramírez",
  birthDate: "1999-10-29",
  phone: "0971 174 420",
  phoneInternational: "+595971174420",
  email: "arnaldoespinola85@gmail.com",
  location: "Villarrica - Barrio San Miguel",
  idNumber: "6913204",
  startCareerYear: 2019,
  roles: [
    "Diseñador Gráfico",
    "Programador Web",
    "Editor de Video",
    "Community Manager"
  ],
  experience: [
    {
      role: "Diseñador Gráfico",
      company: "Multicont S.A.",
      period: "2019 - 2021",
      description: "Me desempeñé como diseñador gráfico y community manager, realizando flyers, logos, videos, reels y piezas visuales para distintos objetivos de comunicación."
    },
    {
      role: "Diseñador Gráfico",
      company: "Municipalidad de Villarrica",
      period: "2023 - 2024",
      description: "Realicé flyers, logos, videos, reels y transmisiones en vivo con zócalos, apoyando la comunicación institucional y visual de la entidad."
    },
    {
      role: "Diseñador Gráfico",
      company: "Con V de Virginia (Facebook)",
      period: "2023 - 2024",
      description: "Me desempeñé como editor y productor de videos, además de desarrollar flyers y contenidos visuales para publicaciones y transmisiones."
    },
    {
      role: "Diseñador Gráfico Independiente y Programador",
      company: "Trabajo freelance / Actualmente",
      period: "Actualidad",
      description: "Community manager de varias empresas en Villarrica, además de diseñador de páginas web y desarrollador de sistemas informáticos a medida."
    }
  ],
  skills: [
    { name: "Microsoft Office", level: 85 },
    { name: "Adobe Illustrator", level: 100 },
    { name: "OBS Studio", level: 95 },
    { name: "Adobe Photoshop", level: 100 },
    { name: "Vegas Pro", level: 100 },
    { name: "CapCut", level: 100 },
    { name: "Adobe Premiere Pro", level: 100 },
    { name: "CorelDRAW", level: 85 },
    { name: "Prog. Web (HTML - CSS - JS)", level: 99 },
    { name: "Java - Python - MySQL", level: 85 }
  ],
  education: [
    {
      title: "Educación Primaria",
      institution: "Colegio San Roque González de Santa Cruz, Paraguarí",
      year: "2014",
      description: "Formación escolar primaria completada."
    },
    {
      title: "Educación Secundaria",
      institution: "Colegio San Roque González de Santa Cruz",
      year: "2017",
      description: "Bachillerato Científico con énfasis en Ciencias Básicas."
    },
    {
      title: "Operador Básico de Computadoras",
      institution: "SNPP",
      year: "2018",
      description: "Curso de Windows, Word y Excel con certificación."
    },
    {
      title: "Diseñador de Página en Publisher",
      institution: "SNPP",
      year: "2018",
      description: "Curso con certificación de diseñador."
    },
    {
      title: "Conferencia de Redes Sociales y Robótica",
      institution: "UNVES",
      year: "2018",
      description: "Participación en jornada formativa realizada en salón de eventos."
    },
    {
      title: "Ingeniería en Sistemas Informáticos",
      institution: "Facultad Politécnica UNVES Villarrica",
      year: "Actual",
      description: "Actualmente cursando la carrera en sexto año."
    },
    {
      title: "Cursos complementarios",
      institution: "Formación técnica",
      year: "Especialización",
      description: "Cursos de Photoshop y Sony Vegas Pro 17."
    }
  ],
  personalInfo: [
    { label: "Teléfono", value: "0971 174 420" },
    { label: "Correo", value: "arnaldoespinola85@gmail.com" },
    { label: "Nacimiento", value: "29/10/1999" },
    { label: "Cédula", value: "6913204" },
    { label: "Ubicación", value: "Villarrica - Barrio San Miguel" }
  ]
};

const qs = (selector) => document.querySelector(selector);
const qsa = (selector) => document.querySelectorAll(selector);

function calculateAge(dateString) {
  const birth = new Date(dateString);
  const today = new Date();
  let age = today.getFullYear() - birth.getFullYear();
  const monthDiff = today.getMonth() - birth.getMonth();

  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    age--;
  }

  return age;
}

function calculateExperienceYears(startYear) {
  const currentYear = new Date().getFullYear();
  return Math.max(1, currentYear - startYear);
}

function renderAboutSummary() {
  const years = calculateExperienceYears(profileData.startCareerYear);
  const summary = `Profesional creativo con más de ${years} años de experiencia en diseño gráfico, producción de contenido y desarrollo web. Combino estética, funcionalidad y tecnología para crear soluciones visuales modernas e impactantes.`;
  qs("#about-summary").textContent = summary;
}

function renderPersonalInfo() {
  const list = qs("#personal-info");
  list.innerHTML = profileData.personalInfo
    .map(
      (item) => `
        <li>
          <strong>${item.label}</strong>
          <span>${item.value}</span>
        </li>
      `
    )
    .join("");
}

function renderExperience() {
  const container = qs("#experienceTimeline");
  container.innerHTML = profileData.experience
    .map(
      (item) => `
        <article class="timeline__item reveal">
          <div class="timeline__content">
            <div class="timeline__header">
              <div>
                <h4>${item.role}</h4>
                <div class="timeline__company">${item.company}</div>
              </div>
              <span class="timeline__year">${item.period}</span>
            </div>
            <p>${item.description}</p>
          </div>
        </article>
      `
    )
    .join("");
}

function renderSkills() {
  const container = qs("#skillsList");
  container.innerHTML = profileData.skills
    .map(
      (skill) => `
        <div class="skill-item reveal">
          <div class="skill-top">
            <span>${skill.name}</span>
            <span>${skill.level}%</span>
          </div>
          <div class="skill-bar">
            <div class="skill-progress" data-width="${skill.level}%"></div>
          </div>
        </div>
      `
    )
    .join("");
}

function renderEducation() {
  const container = qs("#educationGrid");
  container.innerHTML = profileData.education
    .map(
      (item) => `
        <article class="education-card reveal">
          <small>${item.year}</small>
          <h4>${item.title}</h4>
          <p>${item.institution}</p>
          <p>${item.description}</p>
        </article>
      `
    )
    .join("");
}

function animateCounters() {
  qsa(".counter").forEach((counter) => {
    const target = Number(counter.dataset.target);
    const duration = 1500;
    const startTime = performance.now();

    const updateCounter = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      counter.textContent = Math.floor(progress * target);
      if (progress < 1) requestAnimationFrame(updateCounter);
      else counter.textContent = target;
    };

    requestAnimationFrame(updateCounter);
  });
}

function animateSkillBars() {
  qsa(".skill-progress").forEach((bar) => {
    requestAnimationFrame(() => {
      bar.style.width = bar.dataset.width;
    });
  });
}

function setupReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      });
    },
    { threshold: 0.12 }
  );

  qsa(".reveal").forEach((item) => observer.observe(item));
}

function startTypewriter() {
  const element = qs("#typed-role");
  const words = profileData.roles;
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    const currentWord = words[wordIndex];
    element.textContent = currentWord.slice(0, charIndex);

    if (!isDeleting && charIndex < currentWord.length) {
      charIndex++;
      setTimeout(type, 85);
      return;
    }

    if (isDeleting && charIndex > 0) {
      charIndex--;
      setTimeout(type, 45);
      return;
    }

    if (!isDeleting) {
      isDeleting = true;
      setTimeout(type, 1400);
    } else {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      setTimeout(type, 220);
    }
  }

  type();
}

function setupNavigation() {
  const navToggle = qs("#navToggle");
  const navMenu = qs("#navMenu");
  const navLinks = qsa(".nav-menu a");

  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("open");
    document.body.classList.toggle("menu-open");
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("open");
      document.body.classList.remove("menu-open");
    });
  });

  const sections = [...qsa("main section[id]")];
  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY + 120;
    sections.forEach((section) => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute("id");
      const link = document.querySelector(`.nav-menu a[href="#${id}"]`);
      if (!link) return;

      if (scrollY >= top && scrollY < top + height) {
        navLinks.forEach((item) => item.classList.remove("active"));
        link.classList.add("active");
      }
    });
  });
}

function setupButtons() {
  qs("#printCv").addEventListener("click", () => window.print());
  qs("#backToTop").addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

function setupDynamicData() {
  const age = calculateAge(profileData.birthDate);
  const years = calculateExperienceYears(profileData.startCareerYear);
  qs("#dynamic-age").textContent = age;
  qs(".counter[data-target='4']").dataset.target = years;
  qs("#currentYear").textContent = new Date().getFullYear();
}

function startParticles() {
  const canvas = qs("#particles");
  const ctx = canvas.getContext("2d");
  let particles = [];
  let animationId;

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    createParticles();
  }

  function createParticles() {
    const count = Math.max(28, Math.floor(window.innerWidth / 45));
    particles = Array.from({ length: count }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 2.4 + 0.8,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      alpha: Math.random() * 0.5 + 0.15
    }));
  }

  function drawParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((p, index) => {
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

      ctx.beginPath();
      ctx.fillStyle = `rgba(144, 120, 255, ${p.alpha})`;
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();

      for (let j = index + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const dx = p.x - p2.x;
        const dy = p.y - p2.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 110) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(111, 166, 255, ${0.08 * (1 - distance / 110)})`;
          ctx.lineWidth = 1;
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.stroke();
        }
      }
    });

    animationId = requestAnimationFrame(drawParticles);
  }

  resizeCanvas();
  drawParticles();
  window.addEventListener("resize", resizeCanvas);
  window.addEventListener("beforeunload", () => cancelAnimationFrame(animationId));
}

function hidePreloader() {
  const preloader = qs("#preloader");
  window.addEventListener("load", () => {
    setTimeout(() => preloader.classList.add("hidden"), 900);
  });
}

function init() {
  renderAboutSummary();
  renderPersonalInfo();
  renderExperience();
  renderSkills();
  renderEducation();
  setupDynamicData();
  startTypewriter();
  setupNavigation();
  setupButtons();
  setupReveal();
  animateCounters();
  animateSkillBars();
  startParticles();
  hidePreloader();
}

init();
