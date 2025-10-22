/**
 * TRACKME PERSONAL - Main JavaScript
 * Sandikodev's Productivity Tracker
 */

document.addEventListener('DOMContentLoaded', () => {
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Fade in animations for cards
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Observe all cards
  document.querySelectorAll('.card, .timeline-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });

  // Wisenesday badge (only show on Wednesday)
  const today = new Date().getDay();
  if (today === 3) { // Wednesday
    const badge = document.createElement('div');
    badge.className = 'wisenesday-badge';
    badge.innerHTML = '🌟 Happy Wisenesday!';
    document.body.appendChild(badge);
    
    console.log('🌟 Happy Wisenesday! Time to evaluate and grow! 🌟');
  }

  // Current week number
  const getWeekNumber = (date) => {
    const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
    const pastDaysOfYear = (date - firstDayOfYear) / 86400000;
    return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
  };

  const currentWeek = getWeekNumber(new Date());
  document.querySelectorAll('.current-week').forEach(el => {
    el.textContent = currentWeek;
  });

  // Update "time ago" displays
  const timeAgo = (date) => {
    const now = new Date();
    const past = new Date(date);
    const diff = Math.floor((now - past) / 1000); // seconds

    if (diff < 60) return `${diff}s ago`;
    if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
    if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
    if (diff < 2592000) return `${Math.floor(diff / 86400)}d ago`;
    return past.toLocaleDateString();
  };

  document.querySelectorAll('[data-time]').forEach(el => {
    const timestamp = el.getAttribute('data-time');
    el.textContent = timeAgo(timestamp);
  });

  // Console message
  console.log('%c🎯 TrackMe Personal', 'font-size: 24px; font-weight: bold; color: #fbbf24;');
  console.log('%cSandikodev', 'font-size: 16px; color: #6366f1;');
  console.log('%cWisenesday™ Practitioner', 'font-size: 14px; color: #94a3b8;');
  console.log('');
  console.log('💡 Tip: Press Ctrl+Shift+I to explore the code!');
});

/**
 * Helper function to load markdown files
 * This will be used by individual pages to fetch and render markdown content
 */
window.TrackMe = {
  async loadMarkdown(path) {
    try {
      const response = await fetch(path);
      if (!response.ok) throw new Error('File not found');
      return await response.text();
    } catch (error) {
      console.error('Error loading markdown:', error);
      return null;
    }
  },

  parseMarkdown(markdown) {
    // Simple markdown parser (can be replaced with marked.js later)
    return markdown
      .replace(/^### (.*$)/gim, '<h3>$1</h3>')
      .replace(/^## (.*$)/gim, '<h2>$1</h2>')
      .replace(/^# (.*$)/gim, '<h1>$1</h1>')
      .replace(/\*\*(.*)\*\*/gim, '<strong>$1</strong>')
      .replace(/\*(.*)\*/gim, '<em>$1</em>')
      .replace(/\n/gim, '<br>');
  }
};

