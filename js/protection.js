function detectInspectConsole() {
    // Listen for right-click event
    window.addEventListener('contextmenu', function (event) {
        // Check if the inspect console is open
        if (typeof event.target === 'undefined' || event.target.nodeName !== 'HTML') {
            // Redirect to the specified link
            window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
        }
    });

    // Listen for keyboard shortcut event
    window.addEventListener('keydown', function (event) {
        // Check if the inspect console shortcut is used
        if ((event.ctrlKey || event.metaKey) && (event.key === 'Shift' || event.keyCode === 73)) {
            // Redirect to the specified link
            window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
        }
    });
}

// Call the detectInspectConsole function
detectInspectConsole();

const Sentry = require('@sentry/node');

Sentry.init({ dsn: 'your-dsn-here' });

// Capture an error
try {
    throw new Error('Something went wrong');
} catch (error) {
    Sentry.captureException(error);
}


$.ajax({
    url: 'https://jsonplaceholder.typicode.com/posts',
    success: function (data) {
        console.log(data);
    }
});

var numbers = [2, 1, 3];
console.log(_.sortBy(numbers));

axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(function (response) {
        console.log(response.data);
    })
    .catch(function (error) {
        console.log(error);
    });

document.addEventListener("DOMContentLoaded", function () {
    const lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));
    if ("IntersectionObserver" in window) {
        let lazyImageObserver = new IntersectionObserver(function (entries, observer) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    let lazyImage = entry.target;
                    lazyImage.src = lazyImage.dataset.src;
                    lazyImage.classList.remove("lazy");
                    lazyImageObserver.unobserve(lazyImage);
                }
            });
        });
        lazyImages.forEach(function (lazyImage) {
            lazyImageObserver.observe(lazyImage);
        });
    }
});


if (top != self) {
    top.location = self.location;
}

document.cookie = 'session_id=abc123; HttpOnly; SameSite=strict';

const sanitizedInput = DOMPurify.sanitize(userInput);

res.setHeader('Access-Control-Allow-Origin', 'https://formspree.io/f/mpzeqkqb');
res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');

res.setHeader('Content-Security-Policy', "default-src 'self'; img-src 'self' https://formspree.io/f/mpzeqkqb");

document.referrerPolicy = 'no-referrer';

res.setHeader('X-Content-Type-Options', 'nosniff');

res.setHeader('X-XSS-Protection', '1; mode=block');

res.setHeader('Content-Encoding', 'gzip');

res.setHeader('X-Frame-Options', 'DENY');

res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload');

res.setHeader('X-DNS-Prefetch-Control', 'off');

res.setHeader('X-Permitted-Cross-Domain-Policies', 'none');

res.setHeader('Expect-CT', 'enforce, max-age=86400');

res.setHeader('Feature-Policy', "geolocation 'none'; camera 'none'; microphone 'none'");

res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');

res.setHeader('Cross-Origin-Opener-Policy', 'same-origin');

res.setHeader('Cross-Origin-Embedder-Policy', 'require-corp');


if (top !== self) {
    top.location = self.location;
}
