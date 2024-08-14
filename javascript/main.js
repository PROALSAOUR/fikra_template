var TrandingSlider = new Swiper('.tranding-slider', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2.5,
    },
    autoplay: {
      delay: 2000, // مدة التأخير بالميلي ثانية (2000 ميلي ثانية = 2 ثانية)
      disableOnInteraction: false, // استمرار التشغيل التلقائي حتى عند التفاعل مع السلايدر
    },
    speed: 1000,
    loopAdditionalSlides: 30, // لجعل الحركة أكثر سلاسة
    freeMode: true, // تفعيل الوضع الحر لضمان الحركة المستمرة

  });
var BrandingSlider = new Swiper('.branding-slider', {
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: 'auto',
    autoplay: {
      delay:0,
      disableOnInteraction: true, // استمرار التشغيل التلقائي حتى عند التفاعل مع السلايدر
    },
    speed: 10000,
    loopAdditionalSlides: 30, // لجعل الحركة أكثر سلاسة
    freeMode: true, // تفعيل الوضع الحر لضمان الحركة المستمرة
  });

  document.querySelector('.exit').addEventListener('click', function() {
    document.getElementById('side-menu').checked = false;
});

// انتظر حتى يتم تحميل الصفحة بالكامل
document.addEventListener('DOMContentLoaded', function() {
  const toggle = document.getElementById('them');
  const body = document.body;

  // تحقق من وجود الكلاس في localStorage واضف الكلاس إلى body إذا كان موجودًا
  if (localStorage.getItem('them') === 'light') {
      body.classList.add('light-them');
      toggle.checked = true;
  }

  // حدث عند تغيير حالة التشيك بوكس
  toggle.addEventListener('change', function() {
      if (toggle.checked) {
          body.classList.add('light-them');
          localStorage.setItem('them', 'light');
      } else {
          body.classList.remove('light-them');
          localStorage.removeItem('them');
      }
  });
});
