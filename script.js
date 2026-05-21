(function () {
  const data = window.ParaBondhuConfig || {};
  const config = data.siteConfig || {};
  const issueCategories = data.issueCategories || [];
  const processSteps = data.processSteps || [];

  const icons = {
    pin: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 21s7-5.4 7-12a7 7 0 1 0-14 0c0 6.6 7 12 7 12Z" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="9" r="2.2" stroke="currentColor" stroke-width="2"/></svg>',
    shield: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 3 19 6v5c0 4.4-2.8 8.2-7 10-4.2-1.8-7-5.6-7-10V6l7-3Z" stroke="currentColor" stroke-width="2"/><path d="m9 12 2 2 4-5" stroke="currentColor" stroke-width="2"/></svg>',
    hands: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M7 12h4l2 2 4-4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="m3 13 4 4 4-4M21 11l-4-4-4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    road: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M8 3 4 21M16 3l4 18M12 5v3M12 12v3M12 19v2" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
    light: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M9 18h6M10 22h4M8 10a4 4 0 1 1 8 0c0 2-1.2 3-2 4H10c-.8-1-2-2-2-4Z" stroke="currentColor" stroke-width="2"/><path d="M12 2v2M4 10H2M22 10h-2M18.5 3.5 17 5M5.5 3.5 7 5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
    building: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 21V7l8-4 8 4v14M9 21v-5h6v5M8 9h.01M12 9h.01M16 9h.01M8 13h.01M16 13h.01" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
    book: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21.5v-16Z" stroke="currentColor" stroke-width="2"/><path d="M4 6v15M8 7h8" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
    family: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M9 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM17 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM3 21a6 6 0 0 1 12 0M14 21a4 4 0 0 1 7 0" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
    medical: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 21s-8-4.8-8-11a5 5 0 0 1 8-4 5 5 0 0 1 8 4c0 6.2-8 11-8 11Z" stroke="currentColor" stroke-width="2"/><path d="M12 8v6M9 11h6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
    paw: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 14c3 0 5 2 5 4.2 0 1.5-1.2 2.8-2.8 2.8-.9 0-1.5-.4-2.2-.4s-1.3.4-2.2.4A2.8 2.8 0 0 1 7 18.2C7 16 9 14 12 14Z" stroke="currentColor" stroke-width="2"/><circle cx="6" cy="10" r="2" stroke="currentColor" stroke-width="2"/><circle cx="10" cy="6" r="2" stroke="currentColor" stroke-width="2"/><circle cx="14" cy="6" r="2" stroke="currentColor" stroke-width="2"/><circle cx="18" cy="10" r="2" stroke="currentColor" stroke-width="2"/></svg>',
    report: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M7 3h10l3 3v15H4V3h3Z" stroke="currentColor" stroke-width="2"/><path d="M8 10h8M8 14h8M8 18h5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
    verify: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="11" cy="11" r="7" stroke="currentColor" stroke-width="2"/><path d="m16 16 5 5M8 11l2 2 4-5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    connect: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="6" cy="12" r="3" stroke="currentColor" stroke-width="2"/><circle cx="18" cy="6" r="3" stroke="currentColor" stroke-width="2"/><circle cx="18" cy="18" r="3" stroke="currentColor" stroke-width="2"/><path d="m8.5 10.7 7-3.4M8.5 13.3l7 3.4" stroke="currentColor" stroke-width="2"/></svg>',
    act: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 2v5M12 17v5M4.9 4.9l3.5 3.5M15.6 15.6l3.5 3.5M2 12h5M17 12h5M4.9 19.1l3.5-3.5M15.6 8.4l3.5-3.5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
    community: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M8 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM16 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM2 21a6 6 0 0 1 12 0M13 21a4 4 0 0 1 8 0" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
    warning: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 3 22 21H2L12 3Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M12 9v5M12 17h.01" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>'
  };

  function setIcon(element, key) {
    if (!element || !icons[key]) return;
    element.insertAdjacentHTML("afterbegin", icons[key]);
  }

  function applyIcons() {
    document.querySelectorAll("[data-icon]").forEach((element) => {
      const key = element.getAttribute("data-icon");
      setIcon(element, key);
    });
  }

  function setupLinks() {
    const linkMap = {
      googleForm: config.googleFormUrl,
      whatsapp: config.whatsappCommunityUrl,
      instagram: config.instagramUrl,
      email: config.contactEmail ? `mailto:${config.contactEmail}` : "#"
    };

    document.querySelectorAll("[data-config-link]").forEach((link) => {
      const key = link.getAttribute("data-config-link");
      const value = linkMap[key] || "#";
      link.setAttribute("href", value);

      if (key === "email") {
        link.textContent = config.contactEmail || "Contact email coming soon";
        return;
      }

      if (value !== "#" && !value.startsWith("mailto:") && !value.startsWith("#")) {
        link.setAttribute("target", "_blank");
        link.setAttribute("rel", "noreferrer");
      }
    });
  }

  function setupImages() {
    document.querySelectorAll("[data-config-image='logo']").forEach((image) => {
      image.src = config.logoPath || "";
      image.addEventListener("error", () => {
        const holder = image.closest(".brand-mark");
        if (holder) holder.classList.add("image-missing");
      });
    });

    const heroImage = document.querySelector("[data-config-image='hero']");
    const heroPlaceholder = document.querySelector("[data-hero-placeholder]");
    if (heroImage) {
      heroImage.src = config.heroImagePath || "";
      heroImage.addEventListener("error", () => {
        heroImage.hidden = true;
        if (heroPlaceholder) heroPlaceholder.hidden = false;
      });
    }
  }

  function renderIssues() {
    const grid = document.querySelector("[data-issue-grid]");
    if (!grid) return;

    grid.innerHTML = issueCategories
      .map(
        (item) => `
          <article class="issue-card">
            <span class="mini-icon" data-dynamic-icon="${item.icon}"></span>
            <h3>${item.title}</h3>
            <p>${item.description}</p>
          </article>
        `
      )
      .join("");

    grid.querySelectorAll("[data-dynamic-icon]").forEach((element) => {
      setIcon(element, element.getAttribute("data-dynamic-icon"));
    });
  }

  function renderSteps() {
    const steps = document.querySelector("[data-steps]");
    if (!steps) return;

    steps.innerHTML = processSteps
      .map(
        (item) => `
          <article class="step-card">
            <span class="mini-icon" data-dynamic-icon="${item.icon}"></span>
            <small>${item.step}</small>
            <h3>${item.title}</h3>
            <p>${item.description}</p>
          </article>
        `
      )
      .join("");

    steps.querySelectorAll("[data-dynamic-icon]").forEach((element) => {
      setIcon(element, element.getAttribute("data-dynamic-icon"));
    });
  }

  function setupMenu() {
    const toggle = document.querySelector(".menu-toggle");
    const panel = document.querySelector(".nav-panel");
    if (!toggle || !panel) return;

    function closeMenu() {
      panel.classList.remove("is-open");
      document.body.classList.remove("menu-open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Open menu");
    }

    toggle.addEventListener("click", () => {
      const isOpen = panel.classList.toggle("is-open");
      document.body.classList.toggle("menu-open", isOpen);
      toggle.setAttribute("aria-expanded", String(isOpen));
      toggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
    });

    panel.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeMenu);
    });

    window.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closeMenu();
    });
  }

  function setupYear() {
    document.querySelectorAll("[data-year]").forEach((element) => {
      element.textContent = new Date().getFullYear();
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    applyIcons();
    setupLinks();
    setupImages();
    renderIssues();
    renderSteps();
    setupMenu();
    setupYear();
  });
})();
