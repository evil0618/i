/* ============================================
   evil0618 — Personal Homepage Script
   ============================================ */

(function () {
  'use strict';

  // ============================================
  // 1. SVG Icons Map
  // ============================================
  const ICONS = {
    github: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>',
    pen: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="22,4 12,13 2,4"/></svg>',
    at: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><line x1="22" y1="4" x2="22" y2="4.01"/><path d="M20 12a8 8 0 1 0-3.5 6.62"/><path d="M16 8h.01"/></svg>',
    search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>',
    play: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>',
    bookmark: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>',
    book: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>',
    arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>',
  };

  // ============================================
  // 2. Links Data
  // ============================================
  const LINKS_DATA = [
    {
      category: '创造',
      items: [
        { name: 'GitHub', url: 'https://github.com/evil0618', icon: 'github', desc: '代码与项目' },
        { name: 'Blog', url: 'https://evil0618.blog.example.com', icon: 'pen', desc: '文字与思考' },
      ]
    },
    {
      category: '联系',
      items: [
        { name: 'Email', url: 'mailto:evil0618@example.com', icon: 'mail', desc: 'evil0618@example.com' },
        { name: 'Twitter / X', url: 'https://x.com/evil0618', icon: 'at', desc: '@evil0618' },
      ]
    },
    {
      category: '导航',
      items: [
        { name: 'Google', url: 'https://google.com', icon: 'search', desc: '搜索引擎' },
        { name: 'YouTube', url: 'https://youtube.com', icon: 'play', desc: '视频平台' },
        { name: 'Reddit', url: 'https://reddit.com', icon: 'bookmark', desc: '社区论坛' },
        { name: 'Wikipedia', url: 'https://wikipedia.org', icon: 'book', desc: '知识百科' },
      ]
    }
  ];

  // ============================================
  // 3. Render Links
  // ============================================
  function renderLinks() {
    const container = document.getElementById('linksGroups');
    if (!container) return;

    container.innerHTML = LINKS_DATA.map(group => `
      <div class="link-group animate-on-scroll">
        <p class="link-group__label">${group.category}</p>
        <div class="link-group__card stagger-children">
          ${group.items.map(item => `
            <a href="${item.url}" target="_blank" rel="noopener noreferrer" class="link-item animate-on-scroll">
              <span class="link-item__icon">${ICONS[item.icon] || ''}</span>
              <span class="link-item__text">
                <span class="link-item__name">${item.name}</span>
                <span class="link-item__desc">${item.desc}</span>
              </span>
              <span class="link-item__arrow">${ICONS.arrow}</span>
            </a>
          `).join('')}
        </div>
      </div>
    `).join('');
  }

  // ============================================
  // 4. Bing Wallpaper
  // ============================================
  const BING_API = 'https://cn.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=zh-CN';
  const CORS_PROXIES = [
    url => `https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`,
    url => `https://corsproxy.io/?${encodeURIComponent(url)}`,
  ];

  async function fetchJSON(url) {
    const res = await fetch(url, { signal: AbortSignal.timeout(8000) });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return res.json();
  }

  async function fetchBingWallpaper() {
    // Priority 1: Direct fetch
    try {
      const data = await fetchJSON(BING_API);
      if (data && data.images && data.images[0]) {
        return {
          url: `https://cn.bing.com${data.images[0].url}`,
          copyright: data.images[0].copyright || '',
          title: data.images[0].title || '',
        };
      }
    } catch (e) {
      // Direct fetch failed, try proxies
    }

    // Priority 2: CORS proxies
    for (const proxyFn of CORS_PROXIES) {
      try {
        const proxyUrl = proxyFn(BING_API);
        const data = await fetchJSON(proxyUrl);
        if (data && data.images && data.images[0]) {
          return {
            url: `https://cn.bing.com${data.images[0].url}`,
            copyright: data.images[0].copyright || '',
            title: data.images[0].title || '',
          };
        }
      } catch (e) {
        continue;
      }
    }

    // Priority 3: Fallback — return null (gradient background stays)
    return null;
  }

  function applyWallpaper(wallpaper) {
    if (!wallpaper) return;

    const heroBg = document.querySelector('.hero__bg');
    if (!heroBg) return;

    // Preload image, then fade in
    const img = new Image();
    img.onload = () => {
      heroBg.style.backgroundImage = `url(${wallpaper.url})`;
      heroBg.classList.add('is-loaded');

      // Update body background too
      document.body.style.backgroundImage = `url(${wallpaper.url})`;

      // Update copyright info in footer
      const infoEl = document.getElementById('wallpaperInfo');
      if (infoEl && wallpaper.copyright) {
        infoEl.textContent = wallpaper.copyright;
        infoEl.title = wallpaper.copyright;
      }
    };
    img.onerror = () => {
      // Keep gradient fallback
    };
    img.src = wallpaper.url;
  }

  // ============================================
  // 5. Scroll Animations (IntersectionObserver)
  // ============================================
  function initScrollAnimations() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      observer.observe(el);
    });
  }

  // ============================================
  // 6. Hero Load Animation
  // ============================================
  function initHeroAnimation() {
    // Trigger hero content animation after a brief delay
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const hero = document.querySelector('.hero');
        if (hero) {
          hero.classList.add('is-loaded');
        }
      });
    });
  }

  // ============================================
  // 7. Cursor Glow Effect (Desktop only)
  // ============================================
  function initCursorGlow() {
    // Only on devices with fine pointer (mouse)
    if (window.matchMedia('(hover: none) and (pointer: coarse)').matches) return;

    const glow = document.querySelector('.links__glow');
    const linksSection = document.querySelector('.links');
    if (!glow || !linksSection) return;

    let isActive = false;

    linksSection.addEventListener('mouseenter', () => {
      isActive = true;
      glow.classList.add('is-active');
    });

    linksSection.addEventListener('mouseleave', () => {
      isActive = false;
      glow.classList.remove('is-active');
    });

    linksSection.addEventListener('mousemove', (e) => {
      if (!isActive) return;
      glow.style.left = e.clientX + 'px';
      glow.style.top = e.clientY + 'px';
    });
  }

  // ============================================
  // 8. Theme Toggle
  // ============================================
  function initTheme() {
    const toggle = document.getElementById('themeToggle');
    if (!toggle) return;

    // Restore saved preference
    const saved = localStorage.getItem('theme');
    if (saved) {
      document.documentElement.setAttribute('data-theme', saved);
    }

    toggle.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme');
      const isDark = current === 'dark' ||
        (!current && window.matchMedia('(prefers-color-scheme: dark)').matches);

      const next = isDark ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);

      // Spin animation
      toggle.classList.remove('is-rotating');
      // Force reflow to restart animation
      void toggle.offsetWidth;
      toggle.classList.add('is-rotating');

      setTimeout(() => toggle.classList.remove('is-rotating'), 500);
    });

    // Listen for system theme changes (only if no manual override)
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (!localStorage.getItem('theme')) {
        // No manual override, let system control — remove data-theme
        document.documentElement.removeAttribute('data-theme');
      }
    });
  }

  // ============================================
  // 9. Initialize
  // ============================================
  function init() {
    // Render links first (so DOM is ready for animations)
    renderLinks();

    // Start hero animation
    initHeroAnimation();

    // Init scroll animations
    initScrollAnimations();

    // Init cursor glow
    initCursorGlow();

    // Init theme toggle
    initTheme();

    // Fetch Bing wallpaper (async, non-blocking)
    fetchBingWallpaper().then(applyWallpaper).catch(() => {
      // Silently fail — gradient background remains
    });
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
