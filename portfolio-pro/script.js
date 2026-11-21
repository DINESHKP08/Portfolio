// Highlight the sidebar link for the section currently in view
const links=[...document.querySelectorAll('#nav a')];
const io=new IntersectionObserver(es=>es.forEach(e=>{
  if(e.isIntersecting)links.forEach(a=>a.classList.toggle('on',a.getAttribute('href')==='#'+e.target.id));
}),{rootMargin:'-35% 0px -55% 0px'});
document.querySelectorAll('main section').forEach(s=>io.observe(s));

// Flip experience cards; the hidden face is made inert so keyboard focus stays on what you can see
document.querySelectorAll('.flip').forEach(card=>{
  const front=card.querySelector('.front'),back=card.querySelector('.back');
  card.querySelectorAll('.turn').forEach(btn=>btn.addEventListener('click',()=>{
    const on=card.classList.toggle('flipped');
    front.inert=on;back.inert=!on;
    (on?back:front).querySelector('.turn').focus({preventScroll:true});
  }));
});
