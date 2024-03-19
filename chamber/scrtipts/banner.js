const banner = document.getElementById('banner');
    const closeBanner = document.querySelector('.close-banner');

    function isBannerDay() {
      const today = new Date();
      const dayOfWeek = today.getDay(); 
      return dayOfWeek >= 1 && dayOfWeek <= 3; 
    }

    if (isBannerDay()) {
      banner.style.display = 'block';
    }

    closeBanner.addEventListener('click', () => {
      banner.style.display = 'none';
    });