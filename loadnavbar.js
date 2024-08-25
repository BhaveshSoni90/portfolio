<script>
document.addEventListener('DOMContentLoaded', () => {
    fetch('navbar.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('navbar-placeholder').innerHTML = data;
        const menuToggle = document.querySelector('.menu-toggle');
        const menuIcons = menuToggle.querySelectorAll('.menu-icon');
        const navLinks = document.querySelector('.nav-links');

        let scrolled = false;
        let menuOpen = false;

        // Scroll effect
        const handleScroll = () => {
          scrolled = window.scrollY > 50;
          if (scrolled) {
            document.querySelector('.navbar').classList.add('scrolled');
          } else {
            document.querySelector('.navbar').classList.remove('scrolled');
          }
        };

        window.addEventListener('scroll', handleScroll);

        // Menu toggle
        menuToggle.addEventListener('click', () => {
          menuOpen = !menuOpen;
          navLinks.classList.toggle('active', menuOpen);
          menuIcons.forEach(icon => {
            icon.style.display = (menuOpen && icon.dataset.icon === 'times') || (!menuOpen && icon.dataset.icon === 'bars') ? 'inline' : 'none';
          });
        });

        // Close menu on link click
        navLinks.addEventListener('click', () => {
          menuOpen = false;
          navLinks.classList.remove('active');
          menuIcons.forEach(icon => {
            icon.style.display = icon.dataset.icon === 'bars' ? 'inline' : 'none';
          });
        });

        // Initial call to set navbar state
        handleScroll();
      });
  });
</script>