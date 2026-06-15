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
  // 3. Render Links
  // ============================================
  function renderLinks() {
    const container = document.getElementById('linksGroups');
    if (!container) return;

    container.innerHTML = LINKS_DATA.map(group => `
      <div class="link-group animate-on-scroll">
        <p class="link-group__label">${group.category}</p>
        <div class="link-group__card stagger-children">
          ${group.items.map(item => {
            if (item.isAction) {
              return `
                <a href="javascript:void(0)" class="link-item animate-on-scroll" data-action="${item.action}">
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
  // 4. Bing Wallpaper (Optimized)
  // ============================================
  const BING_API = 'https://cn.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=zh-CN';
  const CORS_PROXIES = [
    url => `https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`,
    url => `https://corsproxy.io/?${encodeURIComponent(url)}`,
  ];

  // Use Bing's UHD endpoint for higher resolution, with a smaller fallback
  function buildImageUrl(bingUrl) {
    // Bing returns URLs like /th?id=OHR.xxx_1920x1080.jpg
    // We can try the UHD version first
    return `https://cn.bing.com${bingUrl}`;
  }

  async function fetchJSON(url) {
    const res = await fetch(url, { signal: AbortSignal.timeout(5000) });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return res.json();
  }

  async function fetchBingWallpaper() {
    // Strategy: try all sources in parallel, use the first successful one
    const attempts = [
      // Direct fetch
      fetchJSON(BING_API).then(data => {
        if (data?.images?.[0]) {
          return {
            url: buildImageUrl(data.images[0].url),
            copyright: data.images[0].copyright || '',
          };
        }
        throw new Error('No image data');
      }),
      // Proxy 1
      fetchJSON(CORS_PROXIES[0](BING_API)).then(data => {
        if (data?.images?.[0]) {
          return {
            url: buildImageUrl(data.images[0].url),
            copyright: data.images[0].copyright || '',
          };
        }
        throw new Error('No image data');
      }),
      // Proxy 2
      fetchJSON(CORS_PROXIES[1](BING_API)).then(data => {
        if (data?.images?.[0]) {
          return {
            url: buildImageUrl(data.images[0].url),
            copyright: data.images[0].copyright || '',
          };
        }
        throw new Error('No image data');
      }),
    ];

    // Race: first success wins
    try {
      return await Promise.any(attempts);
    } catch (e) {
      // All failed — fallback gradient stays
      return null;
    }
  }

  function applyWallpaper(wallpaper) {
    if (!wallpaper) return;

    const heroBg = document.querySelector('.hero__bg');
    if (!heroBg) return;

    // Preload with smaller hint, then set full
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
    img.onerror = () => {
      // Keep gradient fallback
    };
    img.src = wallpaper.url;
  }

  // ============================================
  // 5. Contact Modal
  // ============================================
  const AUTH_CODE = '1311';
  let isPhoneVerified = false;

  function openContactModal() {
    const modal = document.getElementById('contactModal');
    if (!modal) return;

    modal.setAttribute('aria-hidden', 'false');

    // Reset to wechat tab
    switchTab('wechat');

    // Open with animation
    requestAnimationFrame(() => {
      modal.classList.add('is-open');
    });

    // Prevent body scroll
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

    // If switching to phone tab and not verified, focus the input
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
    requestAnimationFrame(() => {
      lightbox.classList.add('is-open');
    });
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

    // Close button
    const closeBtn = document.getElementById('modalClose');
    if (closeBtn) {
      closeBtn.addEventListener('click', closeContactModal);
    }

    // Click overlay to close
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeContactModal();
      }
    });

    // Escape key to close
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        if (document.getElementById('qrLightbox')?.classList.contains('is-open')) {
          closeQRLightbox();
        } else if (modal.classList.contains('is-open')) {
          closeContactModal();
        }
      }
    });

    // Tab switching
    const tabs = document.getElementById('modalTabs');
    if (tabs) {
      tabs.addEventListener('click', (e) => {
        const tab = e.target.closest('.modal-tab');
        if (tab) {
          switchTab(tab.getAttribute('data-tab'));
        }
      });
    }

    // Phone auth submit button
    const phoneSubmitBtn = document.getElementById('phoneAuthSubmit');
    if (phoneSubmitBtn) {
      phoneSubmitBtn.addEventListener('click', submitPhoneAuthCode);
    }

    // Phone auth Enter key
    const phoneAuthInput = document.getElementById('phoneAuthInput');
    if (phoneAuthInput) {
      phoneAuthInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          submitPhoneAuthCode();
        }
      });
    }

    // QR zoom button
    const qrZoomBtn = document.getElementById('qrZoomBtn');
    if (qrZoomBtn) {
      qrZoomBtn.addEventListener('click', openQRLightbox);
    }

    // QR lightbox close
    const qrLightboxClose = document.getElementById('qrLightboxClose');
    if (qrLightboxClose) {
      qrLightboxClose.addEventListener('click', closeQRLightbox);
    }

    // QR lightbox click overlay to close
    const qrLightbox = document.getElementById('qrLightbox');
    if (qrLightbox) {
      qrLightbox.addEventListener('click', (e) => {
        if (e.target === qrLightbox) {
          closeQRLightbox();
        }
      });
    }
  }

  // ============================================
  // 6. Scroll Animations (IntersectionObserver)
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
  // 7. Hero Load Animation
  // ============================================
  function initHeroAnimation() {
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
  // 8. Cursor Glow Effect (Desktop only)
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
  // 9. Theme Toggle
  // ============================================
  function initTheme() {
    const toggle = document.getElementById('themeToggle');
    if (!toggle) return;

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

      toggle.classList.remove('is-rotating');
      void toggle.offsetWidth;
      toggle.classList.add('is-rotating');

      setTimeout(() => toggle.classList.remove('is-rotating'), 500);
    });

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
      if (!localStorage.getItem('theme')) {
        document.documentElement.removeAttribute('data-theme');
      }
    });
  }

  // ============================================
  // 10. Initialize
  // ============================================
  function init() {
    renderLinks();
    initHeroAnimation();
    initScrollAnimations();
    initCursorGlow();
    initTheme();
    initContactModal();

    // Fetch Bing wallpaper — all 3 sources race in parallel for speed
    fetchBingWallpaper().then(applyWallpaper).catch(() => {});
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
