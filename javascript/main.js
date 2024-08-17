document.addEventListener('DOMContentLoaded', function() {
  const toggle = document.getElementById('them');
  const body = document.body;
  const sideMenu = document.querySelector('.mega-menu');
  const sideMenuCheckbox = document.getElementById('side-menu');

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
      localStorage.removeItem('them'); // تأكد من حذف المفتاح الصحيح
    }
  });
  // إغلاق القائمة الجانبية عند النقر على زر الإغلاق
  document.querySelector('.exit').addEventListener('click', function() {
    sideMenuCheckbox.checked = false;
    body.classList.remove('no-scroll'); // إزالة منع التمرير
  });

  // إغلاق القائمة الجانبية عند النقر على أي مكان خارجها
  document.addEventListener('click', function(event) {
    if (!sideMenu.contains(event.target) && !document.querySelector('.menu').contains(event.target) && !event.target.matches('#side-menu')) {
      sideMenuCheckbox.checked = false;
      body.classList.remove('no-scroll'); // إزالة منع التمرير
    }
  });

  // تفعيل خاصية التمرير عند فتح القائمة الجانبية
  sideMenuCheckbox.addEventListener('change', function() {
    if (sideMenuCheckbox.checked) {
      body.classList.add('no-scroll'); // منع التمرير
    } else {
      body.classList.remove('no-scroll'); // إزالة منع التمرير
    }
  });

  // إعداد سلايدر الترويج
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

  // إعداد سلايدر العلامات التجارية
  var BrandingSlider = new Swiper('.branding-slider', {
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: 'auto',
    autoplay: {
      delay: 0,
      disableOnInteraction: true, // استمرار التشغيل التلقائي حتى عند التفاعل مع السلايدر
    },
    speed: 10000,
    loopAdditionalSlides: 30, // لجعل الحركة أكثر سلاسة
    freeMode: true, // تفعيل الوضع الحر لضمان الحركة المستمرة
  });

  // إعداد سلايدر المنتجات
  var ProductSlider = new Swiper('.products-slider', {
    grabCursor: true,
    slidesPerView: 'auto',
    loopAdditionalSlides: 30, // لجعل الحركة أكثر سلاسة
  });

  // التعامل مع قائمة الفلاتر
  const filterToggle = document.querySelector('.filter-toggle');
  const filterOptions = document.querySelector('.filter-options');
  const closeFilter = document.querySelector('.close-filter');
  const filterTabs = document.querySelectorAll('.filter-tab');
  const filterContent = document.querySelector('.filter-content');

  // إظهار قائمة الفلترة عند الضغط على الأيقونة
  filterToggle.addEventListener('click', function () {
    filterOptions.style.display = 'block';
  });

  // إخفاء قائمة الفلترة عند النقر على زر الإغلاق
  closeFilter.addEventListener('click', function () {
    filterOptions.style.display = 'none';
  });

  // إغلاق قائمة الفلاتر عند النقر خارج القائمة
  document.addEventListener('click', function (event) {
    if (!filterOptions.contains(event.target) && !filterToggle.contains(event.target)) {
      filterOptions.style.display = 'none';
    }
  });

  // التبديل بين الفلاتر عند النقر على أزرار الخيارات
  filterTabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      const targetId = tab.dataset.target;
      const existingFilter = document.getElementById(`active-${targetId}`);

      // إذا كان الفلتر موجودًا بالفعل
      if (existingFilter) {
        // إزالة الفلتر من المحتوى
        existingFilter.remove();
        // إزالة اللون المختار من الزر
        tab.classList.remove('selected');
      } else {
        // إضافة فلتر جديد
        const newFilterGroup = document.createElement('div');
        newFilterGroup.classList.add('filter-group', 'active');
        newFilterGroup.id = `active-${targetId}`;

        const originalFilterGroup = document.getElementById(targetId);
        newFilterGroup.innerHTML = originalFilterGroup.innerHTML;

        filterContent.appendChild(newFilterGroup);
        // إضافة اللون المختار إلى الزر
        tab.classList.add('selected');
      }
    });
  });

  // إزالة فلتر عند النقر على نفسه
  filterContent.addEventListener('click', function (event) {
    const filterGroup = event.target.closest('.filter-group');
    if (filterGroup) {
      filterGroup.remove();
      const filterTab = Array.from(filterTabs).find(tab => tab.dataset.target === filterGroup.id.replace('active-', ''));
      if (filterTab) {
        filterTab.classList.remove('selected');
      }
    }
  });
});
