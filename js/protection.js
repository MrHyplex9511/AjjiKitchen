        // Import the 'fetch' module if you are using Node.js
// const fetch = require('node-fetch');

// Function to sanitize input and check for SQL injection
function sanitizeInput(input) {
    // Remove SQL injection patterns
    const sanitizedInput = input.replace(/['";]/g, '');
  
    // Check if the input was sanitized (SQL injection removed)
    if (sanitizedInput !== input) {
      // Send a POST request to Formspree
      const url = 'https://formspree.io/f/mpzeqkqb';
      const data = { message: 'SQL INJECTION DETECTED' };
  
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then(response => {
          if (response.ok) {
            console.log('SQL injection notification sent successfully.');
          } else {
            console.log('Failed to send SQL injection notification.');
          }
        })
        .catch(error => {
          console.error('Error sending SQL injection notification:', error);
        });
    }
  
    return sanitizedInput;
  }
  
  // Example usage:
  const userInput = "SELECT * FROM users; --";
  const sanitizedUserInput = sanitizeInput(userInput);
  console.log('Sanitized input:', sanitizedUserInput);
  
        
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