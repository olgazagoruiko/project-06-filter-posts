// (І спосіб) Додаємо на вибрану кнопку( по кліку) активний клас, і значення дата атрибуту виводимо в консоль
// const tagsContainer = document.querySelector('.js-tags');
// let selectedTag = null;

// tagsContainer.addEventListener('click', onTagsContainerClick);

// function onTagsContainerClick(event) {
//   console.log(event.target);

//   if (event.target.nodeName !== 'BUTTON') {
//     return;
//   }
//   const currentActiveBtn = document.querySelector('.tags-btn-active');
//   if (currentActiveBtn) {
//     currentActiveBtn.classList.remove('tags-btn-active');
//   }
//   const nextActiveBtn = event.target;
//   nextActiveBtn.classList.add('tags-btn-active');
//   selectedTag = nextActiveBtn.dataset.value;
//   console.log(selectedTag);
// }
// ІІ спосіб

const tagsContainer = document.querySelector('.js-tags');
// const selectedTags = [];
const selectedTags = new Set();
tagsContainer.addEventListener('click', onTagsContainerClick);

function onTagsContainerClick(event) {
  console.log(event.target);

  if (event.target.nodeName !== 'BUTTON') {
    return;
  }

  const btn = event.target;
  const tag = btn.dataset.value;
  const isActive = btn.classList.contains('tags-btn-active');
  if (isActive) {
    selectedTags.delete(tag);
  } else {
    selectedTags.add(tag);
  }
    
  // btn.classList.contains('tags-btn-active');
  
  btn.classList.toggle('tags-btn-active');
  // selectedTags.push(nextActiveBtn.dataset.value);
  // console.log(selectedTags);
  // const selectedTagsSet = new Set(selectedTags);
  // console.log(selectedTagsSet);
  // console.log(typeof(selectedTagsSet));
  
  console.log(selectedTags);

}