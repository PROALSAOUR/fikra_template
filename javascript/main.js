// الكود الخاص بإظهار صفحة تسجيل الخروج 
document.addEventListener('DOMContentLoaded', function () {
  const signOutMenu = document.querySelector('.sign-out');
  const logoutLink = document.querySelector('.account-menu .fa-arrow-right-from-bracket').closest('a');
  const backButton = document.querySelector('.sign-out .back');
  const outButton = document.querySelector('.sign-out .out');

  function showSignOutMenu() {
      signOutMenu.style.display = 'block'; // يعرض العنصر
      setTimeout(() => {
          signOutMenu.style.visibility = 'visible'; // يجعل العنصر مرئيًا
          signOutMenu.style.opacity = '1'; // يضبط الشفافية لتظهر بشكل كامل
          signOutMenu.style.transform = 'translate(-50%, -50%) scale(1)'; // يضبط الحجم ليصل للحجم الطبيعي
      }, 10); // التأخير لتطبيق التحول بشكل صحيح
  }

  function hideSignOutMenu() {
      signOutMenu.style.opacity = '0'; // يضبط الشفافية لتختفي
      signOutMenu.style.transform = 'translate(-50%, -50%) scale(0.5)'; // يصغر الحجم مرة أخرى
      setTimeout(() => {
          signOutMenu.style.visibility = 'hidden'; // يخفي العنصر
          signOutMenu.style.display = 'none'; // يزيل العنصر من التدفق الطبيعي للصفحة
      }, 300); // يجب أن يتطابق مع مدة الـ transition في CSS
  }

  logoutLink.addEventListener('click', function (e) {
      e.preventDefault();
      if (signOutMenu.style.visibility === 'hidden' || signOutMenu.style.visibility === '') {
          showSignOutMenu();
      }
  });

  backButton.addEventListener('click', hideSignOutMenu);
  outButton.addEventListener('click', hideSignOutMenu);

  document.addEventListener('click', function (e) {
      if (signOutMenu.style.visibility === 'visible' && !signOutMenu.contains(e.target) && !logoutLink.contains(e.target)) {
          hideSignOutMenu();
      }
  });
});
// ===================================================================================================
// الكود الخاص بعرض النافذة الخاصة بمشاركة كود الدعوة
document.addEventListener('DOMContentLoaded', function () {
    const shareCodeMenu = document.querySelector('.share-code');
    const shareCodeLink = document.querySelector('.share-code-link');
    const copyIcon = document.querySelector('.share-code code i');
    const shareCodeText = document.querySelector('.share-code code');

    function showShareCodeMenu() {
      shareCodeMenu.style.display = 'block'; // عرض القائمة
      setTimeout(() => {
          shareCodeMenu.style.visibility = 'visible';
          shareCodeMenu.style.opacity = '1';
          shareCodeMenu.style.transform = 'translate(-50%, -40%) scale(1)';
      }, 10);
    }
    // عرض القائمة عند النقر على رابط "رمز المشاركة"
    function hideShareCodeMenu() {
      shareCodeMenu.style.opacity = '0';
      shareCodeMenu.style.transform = 'translate(-50%, -40%) scale(0.5)';
      setTimeout(() => {
          shareCodeMenu.style.visibility = 'hidden';
          shareCodeMenu.style.display = 'none';
      }, 300);
    }

    // إخفاء القائمة عند النقر على أي مكان خارجها
    document.addEventListener('click', function (e) {
      if (shareCodeMenu.style.visibility === 'visible' && !shareCodeMenu.contains(e.target) && !shareCodeLink.contains(e.target)) {
          hideShareCodeMenu();
      }
    });


    if (shareCodeLink) { // تحقق من وجود العنصر
      shareCodeLink.addEventListener('click', function (e) {
          e.preventDefault();
          if (shareCodeMenu.style.visibility === 'hidden' || shareCodeMenu.style.visibility === '') {
              showShareCodeMenu();
          }
      });
  }




    // نسخ محتوى الكود عند النقر على أيقونة النسخ
    if (copyIcon) { // تحقق من وجود العنصر
        copyIcon.addEventListener('click', function () {
            const range = document.createRange();
            range.selectNode(shareCodeText);
            window.getSelection().removeAllRanges(); // إلغاء تحديد النصوص الحالية
            window.getSelection().addRange(range);
            document.execCommand('copy');
            window.getSelection().removeAllRanges(); // إلغاء التحديد بعد النسخ
            alert('تم نسخ الكود بنجاح!');
        });
    }
});

// ========================================================================================================= 
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

// تحديد التشيك بوكس والفاتورة
const showCheckbox = document.querySelector('#show');
const receipt = document.querySelector('.receipt');
const confirmButton = document.querySelector('.confirm');

// وظيفة لتحديث حالة الفاتورة بناءً على عرض الشاشة
function updateReceiptVisibility() {
    if (window.innerWidth <= 793) {
        // استعادة حالة التشيك بوكس من localStorage عند تحميل الصفحة
        if (localStorage.getItem('showCheckboxState') === 'checked') {
            showCheckbox.checked = true;
            receipt.style.display = 'block';
        } else {
            showCheckbox.checked = false;
            receipt.style.display = 'none';
        }

        // إضافة حدث تغيير لحالة التشيك بوكس
        showCheckbox.addEventListener('change', function() {
            if (this.checked) {
                receipt.style.display = 'block';
                localStorage.setItem('showCheckboxState', 'checked');
            } else {
                receipt.style.display = 'none';
                localStorage.setItem('showCheckboxState', 'unchecked');
            }
        });

        // إضافة حدث للنقر على أي مكان خارج الفاتورة
        document.addEventListener('click', function(event) {
            if (!receipt.contains(event.target) && event.target !== showCheckbox) {
                showCheckbox.checked = false;
                receipt.style.display = 'none';
                localStorage.setItem('showCheckboxState', 'unchecked');
            }
        });

        // إضافة حدث للنقر على زر يحتوي على الكلاس confirm
        confirmButton.addEventListener('click', function() {
            showCheckbox.checked = false;
            receipt.style.display = 'none';
            localStorage.setItem('showCheckboxState', 'unchecked');
        });
    } else {
        // إذا كانت الشاشة أكبر من 793px، اجعل الفاتورة تظهر دائمًا
        receipt.style.display = 'block';
        localStorage.removeItem('showCheckboxState');  // إزالة حالة التشيك بوكس من localStorage
    }
}

// استدعاء الوظيفة عند تحميل الصفحة
updateReceiptVisibility();

// استدعاء الوظيفة عند تغيير حجم الشاشة
window.addEventListener('resize', updateReceiptVisibility);

