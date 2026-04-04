function toggleMenu(){
    document.getElementById('mobileMenu').classList.toggle('open');
  }
  function openModal(type){
    document.getElementById(type==='ss'?'modalSS':'modalPP').classList.add('open');
    document.body.style.overflow='hidden';
  }
  function closeModal(e, id){
    if(e.target.classList.contains('modal-overlay')){
      document.getElementById(id).classList.remove('open');
      document.body.style.overflow='';
    }
  }
  document.querySelectorAll('.modal-close').forEach(btn=>{
    btn.addEventListener('click',()=>{ document.body.style.overflow=''; });
  });

  // Intersection Observer for fade-up
  const observer = new IntersectionObserver(entries=>{
    entries.forEach(e=>{ if(e.isIntersecting) e.target.classList.add('visible'); });
  }, {threshold:0.12});
  document.querySelectorAll('.fade-up').forEach(el=>observer.observe(el));