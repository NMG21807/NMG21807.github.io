/* icon de menu*/ 
let menuIcon = document.querySelector('#menu-i');
let navb = document.querySelector('.navb');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navb.classList.toggle('active');
}

let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('head navb a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top <offset + height) {
      navlinks.forEach(link => {
        link.classList.remove('active');
        document.querySelector('head nav a[href*='+id+'}]').classList.add('active');
      });
    };
  });

  let head = document.querySelector('head');

  head.classList.toggle('sticky', window.scrollY > 100);

  /* mouvement d'icone de nav bar */
  menuIcon.classList.remove('bx-x');
  navb.classList.remove('active');
};
var scrollToTopBtn = document.querySelector(".scroll-to-top");

window.addEventListener("scroll", function() {
  var y = window.scrollY;
  if (y > 20) {
    scrollToTopBtn.classList.add("show");
  } else {
    scrollToTopBtn.classList.remove("show");
  }
});
document.addEventListener('scroll', function() {
  if (document.documentElement.scrollTop > 20) {
    document.querySelector('.scroll-to-top').style.display = "block";
  } else {
    document.querySelector('.scroll-to-top').style.display = "none";
  }
});




  