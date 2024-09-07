// Открытие и закрытие главного меню
document.querySelector('.BurgerMenuButton').addEventListener("click", function() {
  document.querySelector('.menuList').classList.toggle("open");
});

// Переход в подменю "women"
document.querySelector(".women").addEventListener("click", function() {
  const targetDiv = document.querySelector(".openMenu");
  const menu2 = document.querySelector('.openMenu2');
  targetDiv.style.left = "-100vw";
  menu2.style.left = "0";
});

// Возврат из подменю "women"
document.querySelector(".womenBack").addEventListener("click", function() {
  const targetDiv = document.querySelector(".openMenu");
  const menu2 = document.querySelector('.openMenu2');
  targetDiv.style.left = "0";
  menu2.style.left = "100vw";
});

// Управление высотой подменю
const menuItems = document.querySelectorAll('.tt, .tt2, .tt3, .tt4, .tt5, .tt6');

menuItems.forEach((item) => {
  item.addEventListener('click', function() {
    const currentHeight = this.style.height === '320px' ? '60px' : '320px';
    this.style.height = currentHeight;
  });
});

// Поворот иконки на "discover" при клике
const image = document.getElementById('image');
let flipped = false;
document.querySelector('.tt').addEventListener('click', function() {
  flipped = !flipped;
  image.style.transform = flipped ? 'rotateZ(180deg)' : 'rotateZ(0deg)';
});
// Функция для перехода к подменю
function openSubmenu(mainMenuClass, subMenuClass) {
  const mainMenu = document.querySelector(mainMenuClass);
  const subMenu = document.querySelector(subMenuClass);
  mainMenu.style.left = "-100vw";
  subMenu.style.left = "0";
}

// Переход в подменю "women"
document.querySelector("#womenButton").addEventListener("click", function() {
  openSubmenu(".openMenu", ".openMenu2");
});

// Переход в подменю "men" (создайте аналогичное подменю для men)
document.querySelector("#menButton").addEventListener("click", function() {
  openSubmenu(".openMenu", ".openMenuMen"); // Добавьте класс для подменю men
});

// Переход в подменю "gifts" (создайте аналогичное подменю для gifts)
document.querySelector("#giftsButton").addEventListener("click", function() {
  openSubmenu(".openMenu", ".openMenuGifts"); // Добавьте класс для подменю gifts
});

// Переход в подменю "explore" (создайте аналогичное подменю для explore)
document.querySelector("#exploreButton").addEventListener("click", function() {
  openSubmenu(".openMenu", ".openMenuExplore"); // Добавьте класс для подменю explore
});
// Возврат из подменю "men"
document.querySelector(".menBack").addEventListener("click", function() {
  const mainMenu = document.querySelector(".openMenu");
  const subMenu = document.querySelector('.openMenuMen');
  mainMenu.style.left = "0";
  subMenu.style.left = "100vw";
});
document.querySelector(".giftsBack").addEventListener("click", function() {
  const mainMenu = document.querySelector(".openMenu");
  const subMenu = document.querySelector('.openMenuGifts');
  mainMenu.style.left = "0";
  subMenu.style.left = "100vw";
});
document.querySelector(".exploreBack").addEventListener("click", function() {
  const mainMenu = document.querySelector(".openMenu");
  const subMenu = document.querySelector('.openMenuExplore');
  mainMenu.style.left = "0";
  subMenu.style.left = "100vw";
});