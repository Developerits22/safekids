class ModalTrigger{constructor(){setTimeout(()=>{this.btnClose=document.querySelector("[close-trigger-body]"),this.btnOpen=document.querySelector("[open-trigger-body]"),this.trigger=document.getElementById("trigger-body"),this.isOpen=!0,this.modal=new ModalCTA,this.handleVisibility(),this.handleTrigger(),this.handleOpenModal()},500)}handleVisibility(){const e=()=>{document.getElementById("whats-cta").classList.add("show"),document.getElementById("cta-trigger").classList.add("show")};window.pageYOffset>300&&e(),window.addEventListener("scroll",()=>window.pageYOffset>300&&e())}handleTrigger(){this.btnClose.addEventListener("click",()=>{this.trigger.style.opacity=0,this.isOpen=!this.isOpen}),this.btnOpen.addEventListener("click",()=>{this.isOpen||(this.trigger.style.opacity=1,this.isOpen=!this.isOpen)})}handleOpenModal(){const e=document.querySelectorAll("[open-modal-cta]");e&&e.forEach(e=>{e.addEventListener("click",()=>{this.modal.open()})})}}class ModalCTA{constructor(){this.self=document.getElementById("modal-cta"),this.closeTriggers=document.querySelectorAll("[modal-close]"),this.handleClose(),this.handleTabs()}open(){this.self.classList.add("open")}handleClose(){this.closeTriggers.forEach(e=>{e.addEventListener("click",e=>{console.log(e.target),"modal-overlay"==e.target.getAttribute("id")&&this.self.classList.remove("open")})}),document.onkeydown=(e=>{this.self.classList.contains("open")&&"Escape"===e.key&&this.self.classList.remove("open")})}handleTabs(){const e=document.querySelectorAll("[modal-tab]"),t=document.querySelectorAll(".modal-content-btns");e[0].classList.add("active"),t[0].classList.add("active"),e.forEach(s=>{s.addEventListener("click",()=>{const i=document.getElementById(s.getAttribute("data-open"));e.forEach(e=>{e.classList.contains("active")&&e.classList.remove("active")}),t.forEach(e=>{e.classList.contains("active")&&e.classList.remove("active")}),s.classList.add("active"),i.classList.add("active")})})}}window.addEventListener("DOMContentLoaded",new ModalTrigger);
new ModalTrigger();


// ativar tracking whatsapp
window.onload = function(){
    const btns = document.querySelectorAll('.whats-tracking')
    btns ? (
      btns.forEach(btn => {
        btn.addEventListener('click', () => {
          ga('gtm2.send', 'event', 'WhatsApp', 'Click', 'WhatsApp');
 
        })
      })
    ) : false   
    
   
  
  }