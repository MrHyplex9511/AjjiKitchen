(()=>{'use strict';const e=document.querySelectorAll('.needs-validation');Array.from(e).forEach(e=>{e.addEventListener('submit',n=>{e.checkValidity()||(n.preventDefault(),n.stopPropagation()),e.classList.add('was-validated')},!1)})})();
const e=require('@sentry/node');e.init({dsn:'your-dsn-here'});try{throw new Error('Something went wrong')}catch(e){e.captureException(e)}
$.ajax({url:'https://jsonplaceholder.typicode.com/posts',success:function(e){console.log(e)}});var e=[2,1,3];console.log(_.sortBy(e));
axios.get('https://jsonplaceholder.typicode.com/posts').then(function(e){console.log(e.data)}).catch(function(e){console.log(e)});
document.addEventListener('DOMContentLoaded',function(){const e=[].slice.call(document.querySelectorAll('img.lazy'));'IntersectionObserver' in window&&
(function(){let n=new IntersectionObserver((n,t)=>{n.forEach(n=>{n.isIntersecting&&(n.target.src=n.target.dataset.src,n.target.classList.remove('lazy'),n.unobserve(n.target))})});
e.forEach(e=>{n.observe(e)})})()});top!=self&&(top.location=self.location);
document.cookie='session_id=abc123; HttpOnly; SameSite=strict';const e=DOMPurify.sanitize(userInput);res.setHeader('Access-Control-Allow-Origin',
'https://formspree.io/f/mpzeqkqb');res.setHeader('Access-Control-Allow-Methods','GET, POST, PUT, DELETE, PATCH, OPTIONS');
res.setHeader('Content-Security-Policy',"default-src 'self'; img-src 'self' https://formspree.io/f/mpzeqkqb");
document.referrerPolicy='no-referrer';res.setHeader('X-Content-Type-Options','nosniff');res.setHeader('X-XSS-Protection','1; mode=block');
res.setHeader('Content-Encoding','gzip');res.setHeader('X-Frame-Options','DENY');res.setHeader('Strict-Transport-Security',
'max-age=31536000; includeSubDomains; preload');res.setHeader('X-DNS-Prefetch-Control','off');
res.setHeader('X-Permitted-Cross-Domain-Policies','none');res.setHeader('Expect-CT','enforce, max-age=86400');
res.setHeader('Feature-Policy',"geolocation 'none'; camera 'none'; microphone 'none'");res.setHeader('Referrer-Policy','strict-origin-when-cross-origin');
res.setHeader('Cross-Origin-Opener-Policy','same-origin');res.setHeader('Cross-Origin-Embedder-Policy','require-corp');
top!==self&&(top.location=self.location);
