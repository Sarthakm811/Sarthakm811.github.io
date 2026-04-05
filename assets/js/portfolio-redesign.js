// One-page portfolio interactions: typing text, active nav state, and scroll reveal.
document.addEventListener('DOMContentLoaded', function () {
    var phrases = [
        'ML Systems',
        'Computer Vision',
        'Applied AI Products'
    ];
    var typingEl = document.getElementById('typing-role');
    var navLinks = Array.prototype.slice.call(document.querySelectorAll('.portfolio-nav-links a'));
    var sections = Array.prototype.slice.call(document.querySelectorAll('section[data-section]'));
    var loader = document.querySelector('.portfolio-loader');
    var hero = document.querySelector('.hero');
    var navHeight = 96;

    // Smooth anchor scrolling with sticky-nav offset.
    navLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            var targetId = link.getAttribute('href');
            if (!targetId || targetId.charAt(0) !== '#') {
                return;
            }
            var section = document.querySelector(targetId);
            if (!section) {
                return;
            }
            event.preventDefault();
            var y = section.getBoundingClientRect().top + window.pageYOffset - navHeight;
            window.scrollTo({ top: y, behavior: 'smooth' });
        });
    });

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

    if (hero) {
        var spotlight = hero.querySelector('.hero__spotlight');
        var updateSpotlight = function (clientX, clientY) {
            if (!spotlight) {
                return;
            }
            var rect = hero.getBoundingClientRect();
            var x = ((clientX - rect.left) / rect.width) * 100;
            var y = ((clientY - rect.top) / rect.height) * 100;
            hero.style.setProperty('--spot-x', x.toFixed(2) + '%');
            hero.style.setProperty('--spot-y', y.toFixed(2) + '%');
        };

        hero.addEventListener('mousemove', function (event) {
            updateSpotlight(event.clientX, event.clientY);
        });

        hero.addEventListener('mouseleave', function () {
            hero.style.setProperty('--spot-x', '50%');
            hero.style.setProperty('--spot-y', '25%');
        });

        hero.addEventListener('touchmove', function (event) {
            if (!event.touches || !event.touches.length) {
                return;
            }
            updateSpotlight(event.touches[ 0 ].clientX, event.touches[ 0 ].clientY);
        }, { passive: true });
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
                    entry.target.style.transitionDelay = (entry.target.dataset.delay || '0ms');
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 });

        fadeEls.forEach(function (el, index) {
            el.dataset.delay = (index % 4) * 80 + 'ms';
            observer.observe(el);
        });
    } else {
        fadeEls.forEach(function (el) {
            el.classList.add('visible');
        });
    }

    setActiveLink();
    document.addEventListener('scroll', setActiveLink, { passive: true });

    window.setTimeout(function () {
        if (loader) {
            loader.classList.add('is-hidden');
            window.setTimeout(function () {
                if (loader.parentNode) {
                    loader.parentNode.removeChild(loader);
                }
            }, 500);
        }
    }, 180);
});
