// One-page portfolio interactions: typing text, active nav state, and scroll reveal.
document.addEventListener('DOMContentLoaded', function () {
    var phrases = [
        'AI Engineer',
        'ML Developer',
        'Data Science Builder'
    ];
    var typingEl = document.getElementById('typing-role');
    var navLinks = Array.prototype.slice.call(document.querySelectorAll('.portfolio-nav-links a'));
    var sections = Array.prototype.slice.call(document.querySelectorAll('section[data-section]'));

    if (typingEl) {
        var phraseIndex = 0;
        var charIndex = 0;
        var deleting = false;

        var type = function () {
            var current = phrases[ phraseIndex ];
            var nextLength = deleting ? charIndex - 1 : charIndex + 1;
            charIndex = Math.max(0, Math.min(current.length, nextLength));
            typingEl.textContent = current.slice(0, charIndex);

            if (!deleting && charIndex === current.length) {
                deleting = true;
                window.setTimeout(type, 1200);
                return;
            }

            if (deleting && charIndex === 0) {
                deleting = false;
                phraseIndex = (phraseIndex + 1) % phrases.length;
            }

            window.setTimeout(type, deleting ? 48 : 85);
        };

        type();
    }

    var setActiveLink = function () {
        var activeId = '';

        sections.forEach(function (section) {
            var bounds = section.getBoundingClientRect();
            if (bounds.top <= 160 && bounds.bottom >= 180) {
                activeId = section.id;
            }
        });

        navLinks.forEach(function (link) {
            var target = link.getAttribute('href');
            if (target === '#' + activeId) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    };

    var fadeEls = document.querySelectorAll('.fade-in');
    if ('IntersectionObserver' in window) {
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 });

        fadeEls.forEach(function (el) {
            observer.observe(el);
        });
    } else {
        fadeEls.forEach(function (el) {
            el.classList.add('visible');
        });
    }

    setActiveLink();
    document.addEventListener('scroll', setActiveLink, { passive: true });
});
