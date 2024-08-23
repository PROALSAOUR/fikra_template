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
// الكود الخاص بتواصل معنا 
document.addEventListener('DOMContentLoaded', function () {
  const contactUsLinks = document.querySelectorAll('.contact-us');

  contactUsLinks.forEach(function (link) {
      link.addEventListener('click', function (e) {
          e.preventDefault(); // منع الانتقال الافتراضي للرابط
          const phoneNumber = '0926295838';
          const whatsappUrl = `https://wa.me/${phoneNumber}`;
          window.location.href = whatsappUrl; // توجيه المستخدم إلى رابط واتساب
      });
  });
});

// ==========================================================================
// الكود الخاص بإظهار صفحة حذف الحساب 
document.addEventListener('DOMContentLoaded', function () {
  const deleteMenu = document.querySelector('.delete-account');
  const deleteLink = document.querySelector('.show-delete-menu');
  const backButton = document.querySelector('.delete-account .back');
  const outButton = document.querySelector('.delete-account .delete');

  function showDeleteMenu() {
      deleteMenu.style.display = 'block'; // يعرض العنصر
      setTimeout(() => {
          deleteMenu.style.visibility = 'visible'; // يجعل العنصر مرئيًا
          deleteMenu.style.opacity = '1'; // يضبط الشفافية لتظهر بشكل كامل
          deleteMenu.style.transform = 'translate(-50%, -50%) scale(1)'; // يضبط الحجم ليصل للحجم الطبيعي
      }, 10); // التأخير لتطبيق التحول بشكل صحيح
  }

  function hideDeleteMenu() {
      deleteMenu.style.opacity = '0'; // يضبط الشفافية لتختفي
      deleteMenu.style.transform = 'translate(-50%, -50%) scale(0.5)'; // يصغر الحجم مرة أخرى
      setTimeout(() => {
          deleteMenu.style.visibility = 'hidden'; // يخفي العنصر
          deleteMenu.style.display = 'none'; // يزيل العنصر من التدفق الطبيعي للصفحة
      }, 300); // يجب أن يتطابق مع مدة الـ transition في CSS
  }

    deleteLink.addEventListener('click', function (e) {
      e.preventDefault();
      if (deleteMenu.style.visibility === 'hidden' || deleteMenu.style.visibility === '') {
          showDeleteMenu();
      }
  });

  backButton.addEventListener('click', hideDeleteMenu);
  outButton.addEventListener('click', hideDeleteMenu);

  document.addEventListener('click', function (e) {
      if (deleteMenu.style.visibility === 'visible' && !deleteMenu.contains(e.target) && !deleteLink.contains(e.target)) {
        hideDeleteMenu();
      }
  });
});
// ===================================================================================================
// الكود الخاص بإظهار صفحة  إلغاء الطلب 
document.addEventListener('DOMContentLoaded', function () {
  const CancelMenu = document.querySelector('.canciling-order');
  const CancelLink = document.querySelector('.in-way .cancel .cancel-me');
  const backButton = document.querySelector('.canciling-order .back');
  const CancelButton = document.querySelector('.canciling-order .cancel-order');

  function showCancelMenu() {
      CancelMenu.style.display = 'block'; // يعرض العنصر
      setTimeout(() => {
          CancelMenu.style.visibility = 'visible'; // يجعل العنصر مرئيًا
          CancelMenu.style.opacity = '1'; // يضبط الشفافية لتظهر بشكل كامل
          CancelMenu.style.transform = 'translate(-50%, -50%) scale(1)'; // يضبط الحجم ليصل للحجم الطبيعي
      }, 10); // التأخير لتطبيق التحول بشكل صحيح
  }

  function hideCancilMenu() {
      CancelMenu.style.opacity = '0'; // يضبط الشفافية لتختفي
      CancelMenu.style.transform = 'translate(-50%, -50%) scale(0.5)'; // يصغر الحجم مرة أخرى
      setTimeout(() => {
          CancelMenu.style.visibility = 'hidden'; // يخفي العنصر
          CancelMenu.style.display = 'none'; // يزيل العنصر من التدفق الطبيعي للصفحة
      }, 300); // يجب أن يتطابق مع مدة الـ transition في CSS
  }

    CancelLink.addEventListener('click', function (e) {
      e.preventDefault();
      if (CancelMenu.style.visibility === 'hidden' || CancelMenu.style.visibility === '') {
        showCancelMenu();
      }
  });

  backButton.addEventListener('click', hideCancilMenu);
  CancelButton.addEventListener('click', hideCancilMenu);

  document.addEventListener('click', function (e) {
      if (CancelMenu.style.visibility === 'visible' && !CancelMenu.contains(e.target) && !CancelLink.contains(e.target)) {
        hideCancilMenu();
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
// الكود الخاص بصفحة التحقق من رقم الهاتف
document.addEventListener('DOMContentLoaded', function () {
  const verifMenu = document.querySelector('.verif-code');
  const verifLinks = document.querySelectorAll('.verif-link');
  const verifButtons = document.querySelectorAll('.verif-code .try-code');

  function showVerifMenu() {
      verifMenu.style.display = 'block';
      setTimeout(() => {
          verifMenu.style.visibility = 'visible';
          verifMenu.style.opacity = '1';
          verifMenu.style.transform = 'translate(-50%, -50%) scale(1)';
      }, 10);
  }

  function hideVerifMenu() {
      verifMenu.style.opacity = '0';
      verifMenu.style.transform = 'translate(-50%, -50%) scale(0.5)';
      setTimeout(() => {
          verifMenu.style.visibility = 'hidden';
          verifMenu.style.display = 'none';
      }, 300);
  }

  verifLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      if (verifMenu.style.visibility === 'hidden' || verifMenu.style.visibility === '') {
          showVerifMenu();
      }
    });
  });

  verifButtons.forEach(button => {
    button.addEventListener('click', hideVerifMenu);
  });

  document.addEventListener('click', function (e) {
      if (verifMenu.style.visibility === 'visible' && !verifMenu.contains(e.target) && !Array.from(verifLinks).some(link => link.contains(e.target))) {
          hideVerifMenu();
      }
  });
});

// ===================================================================================================
// كود صفحة الاسئلة الشائعة
function toggleContent(element) {
  const content = element.nextElementSibling;
  const icon = element.querySelector('i');

  if (content.style.display === "block") {
      content.style.display = "none";
      icon.classList.remove('fa-chevron-up');
      icon.classList.add('fa-chevron-down');
  } else {
      content.style.display = "block";
      icon.classList.remove('fa-chevron-down');
      icon.classList.add('fa-chevron-up');
  }
}

// ===================================================================================================
// الكود الخاص بعرض النافذة الخاصة  بتحميل التطبيق
document.addEventListener('DOMContentLoaded', function () {
    const downloadMenu = document.querySelector('.download-fikra-page');
    const downloadLink = document.querySelector('.download-fikra-link');

    function showDownloadMenu() {
      downloadMenu.style.display = 'block'; // عرض القائمة
      setTimeout(() => {
          downloadMenu.style.visibility = 'visible';
          downloadMenu.style.opacity = '1';
          downloadMenu.style.transform = 'translate(-50%, -40%) scale(1)';
      }, 10);
    }
    // عرض القائمة عند النقر على رابط "رمز المشاركة"
    function hideDownloadMenu() {
      downloadMenu.style.opacity = '0';
      downloadMenu.style.transform = 'translate(-50%, -40%) scale(0.5)';
      setTimeout(() => {
          downloadMenu.style.visibility = 'hidden';
          downloadMenu.style.display = 'none';
      }, 300);
    }

    // إخفاء القائمة عند النقر على أي مكان خارجها
    document.addEventListener('click', function (e) {
      if (downloadMenu.style.visibility === 'visible' && !downloadMenu.contains(e.target) && !downloadLink.contains(e.target)) {
          hideDownloadMenu();
      }
    });

    if (downloadLink) { // تحقق من وجود العنصر
      downloadLink.addEventListener('click', function (e) {
          e.preventDefault();
          if (downloadMenu.style.visibility === 'hidden' || downloadMenu.style.visibility === '') {
              showDownloadMenu();
          }
      });
  }
});
// ===================================================================================================
// الكود الخاص بعرض النافذة الخاصة  إضافة الى السلة 
document.addEventListener('DOMContentLoaded', function () {
  const Menu = document.querySelector('.add-cart-pop-page');
  const Link = document.querySelector('.add-cart-pop-link');

  let hideTimeout; // متغير لتخزين مؤقت الإخفاء

  function showMenu() {
      Menu.style.display = 'block'; // عرض القائمة
      setTimeout(() => {
          Menu.style.visibility = 'visible';
          Menu.style.opacity = '1';
          Menu.style.transform = 'translate(-50%, -40%) scale(1)';
      }, 10);

      // إعداد مؤقت للإخفاء بعد 5 ثوانٍ من ظهور القائمة
      clearTimeout(hideTimeout);
      hideTimeout = setTimeout(hideMenu, 3000);
  }

  function hideMenu() {
      Menu.style.opacity = '0';
      Menu.style.transform = 'translate(-50%, -40%) scale(0.5)';
      setTimeout(() => {
          Menu.style.visibility = 'hidden';
          Menu.style.display = 'none';
      }, 300);
  }

  // إخفاء القائمة عند النقر على أي مكان خارجها
  document.addEventListener('click', function (e) {
      if (Menu.style.visibility === 'visible' && !Menu.contains(e.target) && !Link.contains(e.target)) {
          hideMenu();
      }
  });

  if (Link) { // تحقق من وجود العنصر
      Link.addEventListener('click', function (e) {
          e.preventDefault();
          if (Menu.style.visibility === 'hidden' || Menu.style.visibility === '') {
              showMenu();
          }
      });
  }
});
// ===================================================================================================
// الكود الخاص بعرض النافذة الخاصة  اتمام عملية الطلب بنجاح  
document.addEventListener('DOMContentLoaded', function () {
  const Menu = document.querySelector('.ordered-done-pop-page');
  const Link = document.querySelector('.ordered-done-link');

  let hideTimeout; // متغير لتخزين مؤقت الإخفاء

  function showMenu() {
      Menu.style.display = 'block'; // عرض القائمة
      setTimeout(() => {
          Menu.style.visibility = 'visible';
          Menu.style.opacity = '1';
          Menu.style.transform = 'translate(-50%, -40%) scale(1)';
      }, 10);

      // إعداد مؤقت للإخفاء بعد 5 ثوانٍ من ظهور القائمة
      clearTimeout(hideTimeout);
      hideTimeout = setTimeout(hideMenu, 3000);
  }

  function hideMenu() {
      Menu.style.opacity = '0';
      Menu.style.transform = 'translate(-50%, -40%) scale(0.5)';
      setTimeout(() => {
          Menu.style.visibility = 'hidden';
          Menu.style.display = 'none';
      }, 300);
  }

  // إخفاء القائمة عند النقر على أي مكان خارجها
  document.addEventListener('click', function (e) {
      if (Menu.style.visibility === 'visible' && !Menu.contains(e.target) && !Link.contains(e.target)) {
          hideMenu();
      }
  });

  if (Link) { // تحقق من وجود العنصر
      Link.addEventListener('click', function (e) {
          e.preventDefault();
          if (Menu.style.visibility === 'hidden' || Menu.style.visibility === '') {
              showMenu();
          }
      });
  }
});

// =========================================================================================================
//  انشاء تأثير قلب البطاقة لصفحة تسجيل الدخول 
document.addEventListener('DOMContentLoaded', function() {
  const flipButtons = document.querySelectorAll('.flip');
  const signCard = document.querySelector('.sign-card');

  flipButtons.forEach(button => {
      button.addEventListener('click', function() {
          signCard.classList.toggle('rotate');
      });
  });
});

// ========================================================================================================= 
// تفعيل Swiper.js للسلايدر الرئيسي
const mainSwiper = new Swiper('.main-slider', {
  loop: true, // يجعل السلايدر دائريًا
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
    delay: 5000, // تبديل الصورة تلقائيًا كل 30 ثانية
    disableOnInteraction: false,
  },
});
// تفعيل Swiper.js للصور الثانوية
const thumbnailSwiper = new Swiper('.thumbnail-slider', {
  slidesPerView: 4, // عدد الصور الظاهرة في العرض الواحد
  spaceBetween: 10, // المسافة بين الصور
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  loop: false,
});

// جافا سكريبت لتبديل الصور عند النقر على الصور الثانوية
document.querySelectorAll('.thumbnail').forEach((thumbnail, index) => {
  thumbnail.addEventListener('click', () => {
    mainSwiper.slideToLoop(index, 500, false); // التبديل إلى الصورة المحددة
  });
});

// تحديث الصورة الرئيسية عند التمرير في السلايدر الرئيسي
mainSwiper.on('slideChange', () => {
  const activeIndex = mainSwiper.realIndex;
  thumbnailSwiper.slideTo(activeIndex, 500);
  document.querySelectorAll('.thumbnail').forEach((thumb, index) => {
    thumb.parentElement.classList.toggle('swiper-slide-active', index === activeIndex);
  });
});

// ========================================================================================================= 
document.addEventListener('DOMContentLoaded', function() {
  const toggle = document.getElementById('them');
  const body = document.body;
  const sideMenu = document.querySelector('.mega-menu');
  const sideMenuCheckbox = document.getElementById('side-menu');

  // إعداد سلايدر المنتجات
  var ProductSlider = new Swiper('.products-slider', {
    grabCursor: true,
    slidesPerView: 'auto',
    loopAdditionalSlides: 30, // لجعل الحركة أكثر سلاسة
  });
    
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
// =============================================================================================
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

// =============================================================================================
