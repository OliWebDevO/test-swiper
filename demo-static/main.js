// eslint-disable-next-line
const swiper = new Swiper('.swiper', {
  // pass EffectSlicer module to modules
  modules: [EffectSlicer],
  // specify "slicer" effect
  effect: 'slicer',
  slicerEffect: {
    split: 5,
  },
  direction: 'vertical',
  speed: 600,
  grabCursor: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const swiper2 = new Swiper('.swiper2', {
  // pass EffectMaterial module to modules
  modules: [EffectMaterial],
  // specify "material" effect
  effect: 'material',
  // material effect parameters
  materialEffect: {
    slideSplitRatio: 0.65,
  },
  grabCursor: true,
  slidesPerView: 2,
  spaceBetween: 16,
  speed: 600,
});
const dropdown = document.querySelector('.dropdown')
const checkbox = document.querySelector('input')

dropdown.parentElement.addEventListener('click', (e) => {
  if (dropdown.contains(e.target)) return;
  dropdown.classList.toggle('visible')
})
dropdown.addEventListener('click', (e) => {
  const slidesPerView = parseInt(e.target.getAttribute('data-value'), 10);
  swiper2.params.slidesPerView = slidesPerView;
  swiper2.update();
  dropdown.classList.remove('visible')
  document.querySelector('.spv').textContent = slidesPerView
});

checkbox.addEventListener('change', (e) => {
  const centeredSlides = e.target.checked;
  swiper2.params.centeredSlides = centeredSlides;
  swiper2.update();
});