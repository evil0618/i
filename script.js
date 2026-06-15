/* ============================================
   evil0618 — Personal Homepage Script v4
   ============================================ */

(function () {
  'use strict';

  // ============================================
  // 1. SVG Icons Map
  // ============================================
  const ICONS = {
    github: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>',
    pen: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>',
    cloud: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>',
    lock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>',
    wechat: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178A1.17 1.17 0 0 1 4.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178 1.17 1.17 0 0 1-1.162-1.178c0-.651.52-1.18 1.162-1.18zm5.34 2.867c-1.797-.052-3.746.512-5.28 1.786-1.72 1.428-2.687 3.72-1.78 6.22.942 2.453 3.666 4.229 6.884 4.229.826 0 1.622-.12 2.361-.336a.722.722 0 0 1 .598.082l1.584.926a.272.272 0 0 0 .14.047c.134 0 .24-.111.24-.247 0-.06-.023-.12-.038-.177l-.327-1.233a.582.582 0 0 1-.023-.156.49.49 0 0 1 .201-.398C23.024 18.48 24 16.82 24 14.98c0-3.21-2.931-5.837-7.062-6.122zM14.5 13.71c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.97-.982zm4.844 0c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.97-.982z"/></svg>',
    search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>',
    play: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>',
    message: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>',
    book: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>',
    arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>',
  };

  // ============================================
  // 2. Links Data
  // ============================================
  const LINKS_DATA = [
    {
      category: '网盘',
      items: [
        { name: '我的网盘', url: 'https://pan.huang1111.cn', icon: 'cloud', desc: '文件与资源', isAction: false },
      ]
    },
    {
      category: '创造',
      items: [
        { name: 'GitHub', url: 'https://github.com/evil0618', icon: 'github', desc: '代码与项目', isAction: false },
        { name: 'Blog', url: 'https://evil0618.blog.example.com', icon: 'pen', desc: '文字与思考', isAction: false },
      ]
    },
    {
      category: '联系',
      items: [
        { name: '微信 / 联系方式', url: '#contact', icon: 'wechat', desc: '扫码或拨号', isAction: true, action: 'openContact' },
      ]
    },
    {
      category: '导航',
      items: [
        { name: 'Bing', url: 'https://cn.bing.com', icon: 'search', desc: '搜索引擎' },
        { name: '哔哩哔哩', url: 'https://bilibili.com', icon: 'play', desc: '视频平台' },
        { name: '知乎', url: 'https://zhihu.com', icon: 'message', desc: '问答社区' },
      ]
    }
  ];

  // ============================================
  // 3. Loading Screen
  // ============================================
  function initLoader() {
    const loader = document.getElementById('loader');
    if (!loader) return;

    const hide = () => {
      loader.classList.add('is-hidden');
      setTimeout(() => loader.remove(), 600);
    };

    // Hide after assets are ready or max 2s
    const timer = setTimeout(hide, 2000);

    window.addEventListener('load', () => {
      clearTimeout(timer);
      setTimeout(hide, 400);
    }, { once: true });
  }

  // ============================================
  // 4. Typing Animation
  // ============================================
  function initTypingAnimation() {
    const el = document.getElementById('heroTagline');
    if (!el) return;

    const text = 'Hello, World';
    let i = 0;
    el.textContent = '';

    function type() {
      if (i < text.length) {
        el.textContent += text.charAt(i);
        i++;
        setTimeout(type, 80 + Math.random() * 60);
      } else {
        el.classList.add('is-typed');
      }
    }

    // Start after hero load animation begins
    setTimeout(type, 600);
  }

  // ============================================
  // 5. Particle Background
  // ============================================
  function initParticles() {
    const container = document.getElementById('heroParticles');
    if (!container) return;

    const count = window.innerWidth < 640 ? 20 : 40;
    for (let i = 0; i < count; i++) {
      const dot = document.createElement('span');
      dot.className = 'particle';
      dot.style.left = Math.random() * 100 + '%';
      dot.style.top = Math.random() * 100 + '%';
      dot.style.animationDelay = Math.random() * 6 + 's';
      dot.style.animationDuration = (4 + Math.random() * 6) + 's';
      const size = 1 + Math.random() * 2;
      dot.style.width = size + 'px';
      dot.style.height = size + 'px';
      dot.style.opacity = 0.15 + Math.random() * 0.35;
      container.appendChild(dot);
    }
  }

  // ============================================
  // 6. Render Links
  // ============================================
  function renderLinks() {
    const container = document.getElementById('linksGroups');
    if (!container) return;

    container.innerHTML = LINKS_DATA.map(group => `
      <div class="link-group animate-on-scroll">
        <p class="link-group__label">${group.category}</p>
        <div class="link-group__card stagger-children">
          <div class="glass-shimmer" aria-hidden="true"></div>
          ${group.items.map(item => {
            if (item.isAction) {
              return `
                <a href="javascript:void(0)" class="link-item animate-on-scroll" data-action="${item.action}">
                  <span class="link-item__glow-line" aria-hidden="true"></span>
                  <span class="link-item__icon">${ICONS[item.icon] || ''}</span>
                  <span class="link-item__text">
                    <span class="link-item__name">${item.name}</span>
                    <span class="link-item__desc">${item.desc}</span>
                  </span>
                  <span class="link-item__arrow">${ICONS.arrow}</span>
                </a>
              `;
            }
            return `
              <a href="${item.url}" target="_blank" rel="noopener noreferrer" class="link-item animate-on-scroll">
                <span class="link-item__glow-line" aria-hidden="true"></span>
                <span class="link-item__icon">${ICONS[item.icon] || ''}</span>
                <span class="link-item__text">
                  <span class="link-item__name">${item.name}</span>
                  <span class="link-item__desc">${item.desc}</span>
                </span>
                <span class="link-item__arrow">${ICONS.arrow}</span>
              </a>
            `;
          }).join('')}
        </div>
      </div>
    `).join('');

    // Bind action links
    container.querySelectorAll('[data-action]').forEach(el => {
      el.addEventListener('click', (e) => {
        e.preventDefault();
        const action = el.getAttribute('data-action');
        if (action === 'openContact') {
          openContactModal();
        }
      });
    });
  }

  // ============================================
  // 7. Bing Wallpaper (Optimized)
  // ============================================
  const BING_API = 'https://cn.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=zh-CN';
  const CORS_PROXIES = [
    url => `https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`,
    url => `https://corsproxy.io/?${encodeURIComponent(url)}`,
  ];

  function buildImageUrl(bingUrl) {
    return `https://cn.bing.com${bingUrl}`;
  }

  async function fetchJSON(url) {
    const res = await fetch(url, { signal: AbortSignal.timeout(5000) });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return res.json();
  }

  async function fetchBingWallpaper() {
    const attempts = [
      fetchJSON(BING_API).then(data => {
        if (data?.images?.[0]) {
          return { url: buildImageUrl(data.images[0].url), copyright: data.images[0].copyright || '' };
        }
        throw new Error('No image data');
      }),
      fetchJSON(CORS_PROXIES[0](BING_API)).then(data => {
        if (data?.images?.[0]) {
          return { url: buildImageUrl(data.images[0].url), copyright: data.images[0].copyright || '' };
        }
        throw new Error('No image data');
      }),
      fetchJSON(CORS_PROXIES[1](BING_API)).then(data => {
        if (data?.images?.[0]) {
          return { url: buildImageUrl(data.images[0].url), copyright: data.images[0].copyright || '' };
        }
        throw new Error('No image data');
      }),
    ];

    try {
      return await Promise.any(attempts);
    } catch (e) {
      return null;
    }
  }

  function applyWallpaper(wallpaper) {
    if (!wallpaper) return;

    const heroBg = document.querySelector('.hero__bg');
    if (!heroBg) return;

    const img = new Image();
    img.onload = () => {
      heroBg.style.backgroundImage = `url(${wallpaper.url})`;
      heroBg.classList.add('is-loaded');
      document.body.style.backgroundImage = `url(${wallpaper.url})`;

      const infoEl = document.getElementById('wallpaperInfo');
      if (infoEl && wallpaper.copyright) {
        infoEl.textContent = wallpaper.copyright;
        infoEl.title = wallpaper.copyright;
      }
    };
    img.src = wallpaper.url;
  }

  // ============================================
  // 8. Contact Modal
  // ============================================
  const AUTH_CODE = '1311';
  let isPhoneVerified = false;

  function openContactModal() {
    const modal = document.getElementById('contactModal');
    if (!modal) return;

    modal.setAttribute('aria-hidden', 'false');
    switchTab('wechat');

    requestAnimationFrame(() => {
      modal.classList.add('is-open');
    });

    document.body.style.overflow = 'hidden';
  }

  function closeContactModal() {
    const modal = document.getElementById('contactModal');
    if (!modal) return;

    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  function switchTab(tabName) {
    const tabs = document.querySelectorAll('.modal-tab');
    const contents = document.querySelectorAll('.modal-tab-content');

    tabs.forEach(tab => {
      tab.classList.toggle('is-active', tab.getAttribute('data-tab') === tabName);
    });

    contents.forEach(content => {
      content.classList.toggle('is-active', content.id === (tabName === 'wechat' ? 'tabWechat' : 'tabPhone'));
    });

    // Update tab indicator
    if (tabName === 'phone' && !isPhoneVerified) {
      setTimeout(() => {
        const input = document.getElementById('phoneAuthInput');
        if (input) input.focus();
      }, 300);
    }
  }

  function submitPhoneAuthCode() {
    const input = document.getElementById('phoneAuthInput');
    const error = document.getElementById('phoneAuthError');
    const card = document.querySelector('.modal-card');
    if (!input || !error || !card) return;

    const code = input.value.trim();
    if (code === AUTH_CODE) {
      isPhoneVerified = true;
      const auth = document.getElementById('phoneAuth');
      const content = document.getElementById('phoneContent');

      auth.classList.add('is-exiting');

      setTimeout(() => {
        auth.style.display = 'none';
        auth.classList.remove('is-exiting');
        content.style.display = 'block';
        content.classList.remove('is-entering');
        void content.offsetWidth;
        content.classList.add('is-entering');
      }, 300);
    } else {
      error.textContent = '授权码错误，请重试';
      card.classList.remove('is-shaking');
      void card.offsetWidth;
      card.classList.add('is-shaking');
      setTimeout(() => card.classList.remove('is-shaking'), 500);
      setTimeout(() => {
        input.value = '';
        input.focus();
      }, 500);
    }
  }

  function openQRLightbox() {
    const lightbox = document.getElementById('qrLightbox');
    if (!lightbox) return;
    lightbox.setAttribute('aria-hidden', 'false');
    requestAnimationFrame(() => lightbox.classList.add('is-open'));
  }

  function closeQRLightbox() {
    const lightbox = document.getElementById('qrLightbox');
    if (!lightbox) return;
    lightbox.classList.remove('is-open');
    lightbox.setAttribute('aria-hidden', 'true');
  }

  function initContactModal() {
    const modal = document.getElementById('contactModal');
    if (!modal) return;

    document.getElementById('modalClose')?.addEventListener('click', closeContactModal);

    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeContactModal();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        if (document.getElementById('qrLightbox')?.classList.contains('is-open')) {
          closeQRLightbox();
        } else if (modal.classList.contains('is-open')) {
          closeContactModal();
        } else if (document.getElementById('searchOverlay')?.classList.contains('is-open')) {
          closeSearch();
        }
      }
    });

    document.getElementById('modalTabs')?.addEventListener('click', (e) => {
      const tab = e.target.closest('.modal-tab');
      if (tab) switchTab(tab.getAttribute('data-tab'));
    });

    document.getElementById('phoneAuthSubmit')?.addEventListener('click', submitPhoneAuthCode);

    document.getElementById('phoneAuthInput')?.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') submitPhoneAuthCode();
    });

    document.getElementById('qrZoomBtn')?.addEventListener('click', openQRLightbox);
    document.getElementById('qrLightboxClose')?.addEventListener('click', closeQRLightbox);

    const qrLightbox = document.getElementById('qrLightbox');
    if (qrLightbox) {
      qrLightbox.addEventListener('click', (e) => {
        if (e.target === qrLightbox) closeQRLightbox();
      });
    }
  }

  // ============================================
  // 9. Search
  // ============================================
  function openSearch() {
    const overlay = document.getElementById('searchOverlay');
    if (!overlay) return;

    overlay.setAttribute('aria-hidden', 'false');
    requestAnimationFrame(() => overlay.classList.add('is-open'));

    setTimeout(() => {
      document.getElementById('searchInput')?.focus();
    }, 200);
  }

  function closeSearch() {
    const overlay = document.getElementById('searchOverlay');
    if (!overlay) return;

    overlay.classList.remove('is-open');
    overlay.setAttribute('aria-hidden', 'true');

    const input = document.getElementById('searchInput');
    if (input) input.value = '';
    document.getElementById('searchResults').innerHTML = '';
    document.getElementById('searchEmpty').style.display = 'none';
  }

  function performSearch(query) {
    const results = document.getElementById('searchResults');
    const empty = document.getElementById('searchEmpty');
    if (!results || !empty) return;

    if (!query.trim()) {
      results.innerHTML = '';
      empty.style.display = 'none';
      return;
    }

    const q = query.toLowerCase();
    const matches = [];

    LINKS_DATA.forEach(group => {
      group.items.forEach(item => {
        if (
          item.name.toLowerCase().includes(q) ||
          item.desc.toLowerCase().includes(q) ||
          group.category.toLowerCase().includes(q)
        ) {
          matches.push({ ...item, category: group.category });
        }
      });
    });

    if (matches.length === 0) {
      results.innerHTML = '';
      empty.style.display = 'block';
      return;
    }

    empty.style.display = 'none';
    results.innerHTML = matches.map(item => {
      if (item.isAction) {
        return `
          <a href="javascript:void(0)" class="search-result" data-action="${item.action}">
            <span class="search-result__icon">${ICONS[item.icon] || ''}</span>
            <span class="search-result__text">
              <span class="search-result__name">${item.name}</span>
              <span class="search-result__desc">${item.category} · ${item.desc}</span>
            </span>
          </a>
        `;
      }
      return `
        <a href="${item.url}" target="_blank" rel="noopener noreferrer" class="search-result">
          <span class="search-result__icon">${ICONS[item.icon] || ''}</span>
          <span class="search-result__text">
            <span class="search-result__name">${item.name}</span>
            <span class="search-result__desc">${item.category} · ${item.desc}</span>
          </span>
        </a>
      `;
    }).join('');

    // Bind action results
    results.querySelectorAll('[data-action]').forEach(el => {
      el.addEventListener('click', (e) => {
        e.preventDefault();
        closeSearch();
        if (el.getAttribute('data-action') === 'openContact') {
          openContactModal();
        }
      });
    });
  }

  function initSearch() {
    const overlay = document.getElementById('searchOverlay');
    if (!overlay) return;

    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeSearch();
    });

    document.getElementById('searchInput')?.addEventListener('input', (e) => {
      performSearch(e.target.value);
    });

    document.getElementById('navSearchBtn')?.addEventListener('click', openSearch);

    // Ctrl/Cmd + K shortcut
    document.addEventListener('keydown', (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        const overlay = document.getElementById('searchOverlay');
        if (overlay?.classList.contains('is-open')) {
          closeSearch();
        } else {
          openSearch();
        }
      }
    });
  }

  // ============================================
  // 10. Floating Nav
  // ============================================
  function initFloatingNav() {
    const nav = document.getElementById('floatNav');
    if (!nav) return;

    let lastScroll = 0;

    function onScroll() {
      const y = window.scrollY;
      const threshold = window.innerHeight * 0.5;

      if (y > threshold) {
        nav.classList.add('is-visible');
      } else {
        nav.classList.remove('is-visible');
      }

      lastScroll = y;
    }

    window.addEventListener('scroll', onScroll, { passive: true });

    // Theme toggle in nav
    document.getElementById('navThemeBtn')?.addEventListener('click', toggleTheme);
  }

  // ============================================
  // 11. Back to Top
  // ============================================
  function initBackToTop() {
    const btn = document.getElementById('backToTop');
    if (!btn) return;

    window.addEventListener('scroll', () => {
      if (window.scrollY > window.innerHeight) {
        btn.classList.add('is-visible');
      } else {
        btn.classList.remove('is-visible');
      }
    }, { passive: true });

    btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ============================================
  // 12. Scroll Animations
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
  // 13. Hero Load Animation
  // ============================================
  function initHeroAnimation() {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const hero = document.querySelector('.hero');
        if (hero) hero.classList.add('is-loaded');
      });
    });
  }

  // ============================================
  // 14. Cursor Glow Effect
  // ============================================
  function initCursorGlow() {
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
  // 15. Theme Toggle
  // ============================================
  function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme');
    const isDark = current === 'dark' ||
      (!current && window.matchMedia('(prefers-color-scheme: dark)').matches);

    const next = isDark ? 'light' : 'dark';

    // Add transition class for smooth switch
    document.documentElement.classList.add('theme-transitioning');
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);

    setTimeout(() => {
      document.documentElement.classList.remove('theme-transitioning');
    }, 500);

    // Animate both toggle buttons
    document.querySelectorAll('.footer__theme-toggle, .float-nav__btn').forEach(btn => {
      btn.classList.remove('is-rotating');
      void btn.offsetWidth;
      btn.classList.add('is-rotating');
      setTimeout(() => btn.classList.remove('is-rotating'), 500);
    });
  }

  function initTheme() {
    const saved = localStorage.getItem('theme');
    if (saved) {
      document.documentElement.setAttribute('data-theme', saved);
    }

    document.getElementById('themeToggle')?.addEventListener('click', toggleTheme);

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
      if (!localStorage.getItem('theme')) {
        document.documentElement.removeAttribute('data-theme');
      }
    });
  }

  // ============================================
  // 16. Ripple Effect
  // ============================================
  function initRipple() {
    document.addEventListener('click', (e) => {
      const target = e.target.closest('.link-item, .modal-tab, .modal-phone-auth__btn, .modal-qr__zoom, .back-to-top, .float-nav__btn');
      if (!target) return;

      const rect = target.getBoundingClientRect();
      const ripple = document.createElement('span');
      ripple.className = 'ripple';
      const size = Math.max(rect.width, rect.height) * 2;
      ripple.style.width = ripple.style.height = size + 'px';
      ripple.style.left = (e.clientX - rect.left - size / 2) + 'px';
      ripple.style.top = (e.clientY - rect.top - size / 2) + 'px';
      target.appendChild(ripple);
      setTimeout(() => ripple.remove(), 600);
    });
  }

  // ============================================
  // 17. Service Worker
  // ============================================
  function initServiceWorker() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('sw.js').catch(() => {});
    }
  }

  // ============================================
  // 18. 3D Tilt Card Effect
  // ============================================
  function init3DTilt() {
    if (window.matchMedia('(hover: none) and (pointer: coarse)').matches) return;

    document.addEventListener('mousemove', (e) => {
      const cards = document.querySelectorAll('.link-group__card');
      cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const isInside = e.clientX >= rect.left && e.clientX <= rect.right &&
                         e.clientY >= rect.top && e.clientY <= rect.bottom;
        if (isInside) {
          const x = (e.clientX - rect.left) / rect.width;
          const y = (e.clientY - rect.top) / rect.height;
          const tiltX = (y - 0.5) * -6;
          const tiltY = (x - 0.5) * 6;
          card.style.transform = `perspective(800px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
          card.classList.add('is-tilting');
        } else {
          card.style.transform = '';
          card.classList.remove('is-tilting');
        }
      });
    });
  }

  // ============================================
  // 19. Magnetic Button Effect
  // ============================================
  function initMagneticButtons() {
    if (window.matchMedia('(hover: none) and (pointer: coarse)').matches) return;

    const targets = document.querySelectorAll('.float-nav__btn, .back-to-top, .footer__theme-toggle');
    targets.forEach(el => el.classList.add('magnetic-target'));

    document.addEventListener('mousemove', (e) => {
      targets.forEach(el => {
        const rect = el.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = e.clientX - cx;
        const dy = e.clientY - cy;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const maxDist = 80;

        if (dist < maxDist) {
          const strength = (1 - dist / maxDist) * 8;
          el.style.transform = `translate(${dx / maxDist * strength}px, ${dy / maxDist * strength}px)`;
        } else {
          el.style.transform = '';
        }
      });
    });
  }

  // ============================================
  // 20. Scroll Progress Bar
  // ============================================
  function initScrollProgress() {
    const bar = document.getElementById('scrollProgress');
    if (!bar) return;

    window.addEventListener('scroll', () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      bar.style.width = progress + '%';
    }, { passive: true });
  }

  // ============================================
  // 21. Modal Card Spotlight
  // ============================================
  function initModalSpotlight() {
    if (window.matchMedia('(hover: none) and (pointer: coarse)').matches) return;

    const card = document.querySelector('.modal-card');
    const spotlight = document.getElementById('modalSpotlight');
    if (!card || !spotlight) return;

    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      spotlight.style.left = (e.clientX - rect.left) + 'px';
      spotlight.style.top = (e.clientY - rect.top) + 'px';
    });
  }

  // ============================================
  // 22. Nav Brand Scroll Glow
  // ============================================
  function initNavBrandGlow() {
    const brand = document.querySelector('.float-nav__brand');
    if (!brand) return;

    window.addEventListener('scroll', () => {
      if (window.scrollY > window.innerHeight * 0.3) {
        brand.classList.add('is-scrolled');
      } else {
        brand.classList.remove('is-scrolled');
      }
    }, { passive: true });
  }

  // ============================================
  // 24. Enhanced Particle System with Canvas
  // ============================================
  function initParticleCanvas() {
    const container = document.getElementById('heroParticles');
    if (!container) return;

    const canvas = document.createElement('canvas');
    canvas.className = 'particle-canvas';
    container.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    let width, height;
    const particles = [];
    const count = window.innerWidth < 640 ? 30 : 50;
    const maxDist = 120;

    function resize() {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    }

    resize();
    window.addEventListener('resize', resize, { passive: true });

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: 1 + Math.random() * 1.5,
        opacity: 0.15 + Math.random() * 0.35,
      });
    }

    function draw() {
      ctx.clearRect(0, 0, width, height);

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * 0.12;
            ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw particles
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity})`;
        ctx.fill();
      });

      requestAnimationFrame(draw);
    }

    // Respect reduced motion
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      draw();
    }
  }

  // ============================================
  // 25. Initialize
  // ============================================
  function init() {
    initLoader();
    initTypingAnimation();
    initParticleCanvas();
    renderLinks();
    initHeroAnimation();
    initScrollAnimations();
    initCursorGlow();
    initTheme();
    initContactModal();
    initSearch();
    initFloatingNav();
    initBackToTop();
    initRipple();
    initServiceWorker();
    init3DTilt();
    initMagneticButtons();
    initScrollProgress();
    initModalSpotlight();
    initNavBrandGlow();

    fetchBingWallpaper().then(applyWallpaper).catch(() => {});
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
