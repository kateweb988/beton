window.addEventListener("DOMContentLoaded", function () {
  var form = document.querySelector('.formWithValidation')
  var validateBtn = form.querySelector('.validateBtn')
  var from = form.querySelector('.from')
  var password = form.querySelector('.password')
  var passwordConfirmation = form.querySelector('.passwordConfirmation')
  var where = form.querySelector('.where')
  var message = form.querySelector('.message')
  var fields = form.querySelectorAll('.field')

  var generateError = function (text) {
    var error = document.createElement('div')
    error.className = 'error'
    error.style.color = 'red'
    error.innerHTML = text
    return error
  }

  var removeValidation = function () {
    var errors = form.querySelectorAll('.error')

    for (var i = 0; i < errors.length; i++) {
      errors[i].remove()
    }
  }

  var checkFieldsPresence = function () {
    for (var i = 0; i < fields.length; i++) {
      if (!fields[i].value) {
        console.log('field is blank', fields[i])
        var error = generateError('Это обязательное поле')
        form[i].parentElement.insertBefore(error, fields[i])
      }
    }
  }

  var checkPasswordMatch = function () {
    if (password.value !== passwordConfirmation.value) {
      console.log('not equals')
      var error = generateError('Password doesnt match')
      password.parentElement.insertBefore(error, password)
    }
  }

  form.addEventListener('submit', function (event) {
    event.preventDefault()

    removeValidation()

    checkFieldsPresence()

    checkPasswordMatch()
  })
})
window.addEventListener("DOMContentLoaded", function () {
  var form = document.querySelector('.formWithValidation2')
  var validateBtn = form.querySelector('.validateBtn2')
  var from = form.querySelector('.from')
  var password = form.querySelector('.password')
  var passwordConfirmation = form.querySelector('.passwordConfirmation')
  var where = form.querySelector('.where')
  var message = form.querySelector('.message')
  var fields = form.querySelectorAll('.field')

  var generateError = function (text) {
    var error = document.createElement('div')
    error.className = 'error'
    error.style.color = 'red'
    error.innerHTML = text
    return error
  }

  var removeValidation = function () {
    var errors = form.querySelectorAll('.error')

    for (var i = 0; i < errors.length; i++) {
      errors[i].remove()
    }
  }

  var checkFieldsPresence = function () {
    for (var i = 0; i < fields.length; i++) {
      if (!fields[i].value) {
        console.log('field is blank', fields[i])
        var error = generateError('Это обязательное поле')
        form[i].parentElement.insertBefore(error, fields[i])
      }
    }
  }

  var checkPasswordMatch = function () {
    if (password.value !== passwordConfirmation.value) {
      console.log('not equals')
      var error = generateError('Password doesnt match')
      password.parentElement.insertBefore(error, password)
    }
  }

  form.addEventListener('submit', function (event) {
    event.preventDefault()

    removeValidation()

    checkFieldsPresence()

    checkPasswordMatch()
  })
})
window.addEventListener("DOMContentLoaded", function () {
  ymaps.ready(init);

  function init() {
    var myMap = new ymaps.Map("map", {
      // Центр карты, указываем коордианты
      center: [51.604463, 39.251976],
      // Масштаб, тут все просто
      zoom: 14,
      // Отключаем все элементы управления
      controls: []
    });

    var myGeoObjects = [];

    // Наша метка, указываем коордианты
    myGeoObjects = new ymaps.Placemark([51.604463, 39.251976], {
      balloonContentBody: 'BETON',
    }, {
      iconLayout: 'default#image',
      // Путь до нашей картинки
      iconImageHref: 'img/map.svg',
      // Размер по ширине и высоте
      iconImageSize: [50, 70],
      // Смещение левого верхнего угла иконки относительно
      // её «ножки» (точки привязки).
      iconImageOffset: [-35, -35]
    });

    var clusterer = new ymaps.Clusterer({
      clusterDisableClickZoom: false,
      clusterOpenBalloonOnClick: false,
    });

    clusterer.add(myGeoObjects);
    myMap.geoObjects.add(clusterer);
    // Отлючаем возможность изменения масштаба
    myMap.behaviors.disable('scrollZoom');

  }
})

document.addEventListener("DOMContentLoaded", () => {
  class ItcTabs {
    constructor(target, config) {
      const defaultConfig = {};
      this._config = Object.assign(defaultConfig, config);
      this._elTabs = typeof target === 'string' ? document.querySelector(target) : target;
      this._elButtons = this._elTabs.querySelectorAll('.tabs__btn');
      this._elPanes = this._elTabs.querySelectorAll('.tabs__pane');
      this._eventShow = new Event('tab.itc.change');
      this._init();
      this._events();
    }
    _init() {
      this._elTabs.setAttribute('role', 'tablist');
      this._elButtons.forEach((el, index) => {
        el.dataset.index = index;
        el.setAttribute('role', 'tab');
        this._elPanes[index].setAttribute('role', 'tabpanel');
      });
    }
    show(elLinkTarget) {
      const elPaneTarget = this._elPanes[elLinkTarget.dataset.index];
      const elLinkActive = this._elTabs.querySelector('.tabs__btn_active');
      const elPaneShow = this._elTabs.querySelector('.tabs__pane_show');
      if (elLinkTarget === elLinkActive) {
        return;
      }
      elLinkActive ? elLinkActive.classList.remove('tabs__btn_active') : null;
      elPaneShow ? elPaneShow.classList.remove('tabs__pane_show') : null;
      elLinkTarget.classList.add('tabs__btn_active');
      elPaneTarget.classList.add('tabs__pane_show');
      this._elTabs.dispatchEvent(this._eventShow);
      elLinkTarget.focus();
    }
    showByIndex(index) {
      const elLinkTarget = this._elButtons[index];
      elLinkTarget ? this.show(elLinkTarget) : null;
    };
    _events() {
      this._elTabs.addEventListener('click', (e) => {
        const target = e.target.closest('.tabs__btn');
        if (target) {
          e.preventDefault();
          this.show(target);
        }
      });
    }
  }

  // инициализация .tabs как табов
  new ItcTabs('.tabs');
});
window.addEventListener("DOMContentLoaded", function () {
  [].forEach.call(document.querySelectorAll('.tel'), function (input) {
    var keyCode;
    function mask(event) {
      event.keyCode && (keyCode = event.keyCode);
      var pos = this.selectionStart;
      if (pos < 3) event.preventDefault();
      var matrix = "+7 (___) ___ ____",
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = this.value.replace(/\D/g, ""),
        new_value = matrix.replace(/[_\d]/g, function (a) {
          return i < val.length ? val.charAt(i++) || def.charAt(i) : a
        });
      i = new_value.indexOf("_");
      if (i != -1) {
        i < 5 && (i = 3);
        new_value = new_value.slice(0, i)
      }
      var reg = matrix.substr(0, this.value.length).replace(/_+/g,
        function (a) {
          return "\\d{1," + a.length + "}"
        }).replace(/[+()]/g, "\\$&");
      reg = new RegExp("^" + reg + "$");
      if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
      if (event.type == "blur" && this.value.length < 5) this.value = ""
    }

    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);
    input.addEventListener("keydown", mask, false)

  });
});

document.addEventListener("DOMContentLoaded", function () {
  var lazyloadImages = document.querySelectorAll("img.lazy");
  var lazyloadThrottleTimeout;
  function lazyload() {
    if (lazyloadThrottleTimeout) {
      clearTimeout(lazyloadThrottleTimeout);
    }
    lazyloadThrottleTimeout = setTimeout(function () {
      var scrollTop = window.pageYOffset;
      lazyloadImages.forEach(function (img) {
        if (img.offsetTop < (window.innerHeight + scrollTop)) {
          img.src = img.dataset.src;
          img.classList.remove('lazy');
        }
      });
      if (lazyloadImages.length == 0) {
        document.removeEventListener("scroll", lazyload);
        window.removeEventListener("resize", lazyload);
        window.removeEventListener("orientationChange", lazyload);
      }
    }, 20);
  }
  document.addEventListener("scroll", lazyload);
  window.addEventListener("resize", lazyload);
  window.addEventListener("orientationChange", lazyload);
});

document.addEventListener("DOMContentLoaded", () => {
  let menuBtn = document.querySelector('.menu-btn');
  let menu = document.querySelector('.menu');
  menuBtn.addEventListener('click', function () {
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
  });
});
document.addEventListener("DOMContentLoaded", () => {
  var selectBtn = document.getElementsByClassName('dropdown'),
    dropdownMenu = document.getElementsByClassName('dropdownMenu');

  for (i = 0; i < selectBtn.length; i++) {
    selectBtn[i].onclick = function () {
      if (this.className.indexOf('active') > -1) {
        for (j = 0; j < selectBtn.length; j++) {
          removeClass(selectBtn[j], 'active')
        }
      } else {
        addClass(this, 'active');
      }
    };
  }
  for (i = 0; i < dropdownMenu.length; i++) {
    var child = dropdownMenu[i].children;
    for (j = 0; j < child.length; j++) {
      child[j].onclick = function () {
        var text = this.innerHTML;
        this.parentNode.previousElementSibling.children[0].innerHTML = text;
        toggleClass(this.parentNode, 'showMenu');
      };
    }
  }

  window.addEventListener('click', function (event) {
    for (i = 0; i < selectBtn.length; i++) {
      if (event.target != selectBtn[i].children[0]) {
        removeClass(selectBtn[i], 'active');
      }
    }
  });




  function toggleClass(el, classToToggle) {
    var classN = el.className;
    if (classN.indexOf(classToToggle) > -1) {
      el.className = classN.replace(" " + classToToggle, '');
    } else {
      el.className = classN + " " + classToToggle;
    }
  }
  function addClass(el, classToToggle) {
    var classN = el.className
    if (classN.indexOf(classToToggle) < 1) {
      el.className = classN + " " + classToToggle;
    }
  }
  function removeClass(el, classToToggle) {
    var classN = el.className;
    if (classN.indexOf(classToToggle) > -1) {
      el.className = classN.replace(" " + classToToggle, '');
    }
  }
});
document.addEventListener('DOMContentLoaded', function () {
  const swiper1 = new Swiper('.swiper1', {
    slidesPerView: 2,
    spaceBetween: 20,
    navigation: {
      prevEl: '.swiper-button-prev1',
      nextEl: '.swiper-button-next1',
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        spaceBetween: 0,
        slidesPerView: 1
      },
      576: {
        spaceBetween: 10,
        slidesPerView: 1
      },
      767: {
        spaceBetween: 20,
        slidesPerView: 1
      },
      992: {
        spaceBetween: 20,
        slidesPerView: 2
      },
      1200: {
        slidesPerView: 2,
        spaceBetween: 20
      }
    }
  });
});
document.addEventListener('DOMContentLoaded', function () {
  const swiper2 = new Swiper('.swiper2', {
    slidesPerView: 3,
    spaceBetween: 34,
    navigation: {
      prevEl: '.swiper-button-prev2',
      nextEl: '.swiper-button-next2',
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        spaceBetween: 0,
        slidesPerView: 1
      },
      576: {
        spaceBetween: 20,
        slidesPerView: 2
      },
      767: {
        spaceBetween: 20,
        slidesPerView: 2
      },
      992: {
        spaceBetween: 20,
        slidesPerView: 2
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 34
      }
    }
  });
});
document.addEventListener("DOMContentLoaded", () => {
  //popup1
  let popupBg = document.querySelector('.popup__bg');
  let popup = document.querySelector('.popup');
  let openPopupButtons = document.querySelectorAll('.a1');
  let closePopupButton = document.querySelector('.close-popup');

  openPopupButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      popupBg.classList.add('active');
      popup.classList.add('active');
    })
  });

  closePopupButton.addEventListener('click', () => {
    popupBg.classList.remove('active');
    popup.classList.remove('active');
  });

  document.addEventListener('click', (e) => {
    if (e.target === popupBg) {
      popupBg.classList.remove('active');
      popup.classList.remove('active');
    }
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      //ваша функция закрытия окна
      popupBg.classList.remove('active');
      popup.classList.remove('active');
    }
  });
});
document.addEventListener("DOMContentLoaded", () => {
  //popup2
  let popupBg2 = document.querySelector('.popup__bg2');
  let popup2 = document.querySelector('.popup2');
  let openPopupButtons2 = document.querySelectorAll('.a2');
  let closePopupButton2 = document.querySelector('.close-popup2');

  openPopupButtons2.forEach((button) => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      popupBg2.classList.add('active');
      popup2.classList.add('active');
    })
  });

  closePopupButton2.addEventListener('click', () => {
    popupBg2.classList.remove('active');
    popup2.classList.remove('active');
  });

  document.addEventListener('click', (e) => {
    if (e.target === popupBg2) {
      popupBg2.classList.remove('active');
      popup2.classList.remove('active');
    }
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      //ваша функция закрытия окна
      popupBg2.classList.remove('active');
      popup2.classList.remove('active');
    }
  });
});
document.addEventListener("DOMContentLoaded", () => {
  //popup3
  let popupBg3 = document.querySelector('.popup__bg3');
  let popup3 = document.querySelector('.popup3');
  let openPopupButtons3 = document.querySelectorAll('.a3');
  let closePopupButton3 = document.querySelector('.close-popup3');
  let close = document.querySelector('.pop__btn_1');

  openPopupButtons3.forEach((button) => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      popupBg3.classList.add('active');
      popup3.classList.add('active');
    })
  });

  closePopupButton3.addEventListener('click', () => {
    popupBg3.classList.remove('active');
    popup3.classList.remove('active');
  });
  close.addEventListener('click', () => {
    popupBg3.classList.remove('active');
    popup3.classList.remove('active');
  });

  document.addEventListener('click', (e) => {
    if (e.target === popupBg3) {
      popupBg3.classList.remove('active');
      popup3.classList.remove('active');
    }
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      //ваша функция закрытия окна
      popupBg3.classList.remove('active');
      popup3.classList.remove('active');
    }
  });
});
document.addEventListener("DOMContentLoaded", () => {
  //popup4
  let popupBg4 = document.querySelector('.popup__bg4');
  let popup4 = document.querySelector('.popup4');
  let openPopupButtons4 = document.querySelectorAll('.a4');
  let closePopupButton4 = document.querySelector('.close-popup4');
  let close = document.querySelector('.pop__btn_2');

  openPopupButtons4.forEach((button) => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      popupBg4.classList.add('active');
      popup4.classList.add('active');
    })
  });

  closePopupButton4.addEventListener('click', () => {
    popupBg4.classList.remove('active');
    popup4.classList.remove('active');
  });
  close.addEventListener('click', () => {
    popupBg4.classList.remove('active');
    popup4.classList.remove('active');
  });
  document.addEventListener('click', (e) => {
    if (e.target === popupBg4) {
      popupBg4.classList.remove('active');
      popup4.classList.remove('active');
    }
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      //ваша функция закрытия окна
      popupBg4.classList.remove('active');
      popup4.classList.remove('active');
    }
  });
});