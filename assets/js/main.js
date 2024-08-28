function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }

  // Ensure that the submenu opens on toggle
// document.querySelectorAll('.dropdown-submenu > a').forEach(function (element) {
//     element.addEventListener('click', function (e) {
//         var nextEl = this.nextElementSibling;
//         if (nextEl && nextEl.classList.contains('dropdown-menu')) {
//             e.preventDefault();
//             nextEl.classList.toggle('show');
//         }
//     });
// });
