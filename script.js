
const body=document.body, themeBtn=document.getElementById("theme");
try{if(localStorage.getItem("theme")==="dark"){body.classList.add("dark");themeBtn.textContent="☀️";}}catch(e){}
themeBtn.addEventListener("click",()=>{
  body.classList.toggle("dark");
  const d=body.classList.contains("dark");
  themeBtn.textContent=d?"☀️":"🌙";
  try{localStorage.setItem("theme",d?"dark":"light");}catch(e){}
});
document.getElementById("burger").addEventListener("click",()=>document.getElementById("nav").classList.toggle("open"));
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("show");io.unobserve(e.target);}}),{threshold:.1});
document.querySelectorAll(".reveal").forEach(el=>io.observe(el));
const form=document.getElementById("form");
if(form){
  form.addEventListener("submit",e=>{
    e.preventDefault();
    const n=form.querySelector("#name"),m=form.querySelector("#email"),t=form.querySelector("#msg");
    const set=(el,msg)=>{el.parentElement.querySelector("small").textContent=msg;return !msg;};
    const a=set(n,n.value.trim().length<2?"Аты-жөніңізді енгізіңіз":"");
    const b=set(m,/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(m.value)?"":"Дұрыс e-mail енгізіңіз");
    const c=set(t,t.value.trim().length<10?"Кемінде 10 таңба жазыңыз":"");
    const ok=document.getElementById("ok");
    if(a&&b&&c){ok.textContent="Рахмет! Хабарлама сәтті тексерілді (демо форма, серверге жіберілмейді).";form.reset();}
    else ok.textContent="";
  });
}
