(()=>{var l=()=>{document.querySelectorAll('a[href^="#"]:not(a[href="#"])').forEach(t=>{t.addEventListener("click",o=>{o.preventDefault();let e=t.getAttribute("href");e=e.substring(1),document.getElementById(e).scrollIntoView({behavior:"smooth"})})})};l();})();