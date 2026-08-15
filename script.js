const menu=document.querySelector('.menu-btn');const nav=document.querySelector('.nav');menu.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
document.getElementById('aspirationForm').addEventListener('submit',function(e){e.preventDefault();const name=document.getElementById('name').value.trim();document.getElementById('formStatus').textContent=`Terima kasih, ${name}! Aspirasi kamu sudah dicatat (demo).`;this.reset();});
