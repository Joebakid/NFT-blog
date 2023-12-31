const icon = document.getElementById('icon');
const nftImg = document.getElementById('img-nft-darkside');

// Check if the theme preference is stored in localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  document.body.classList.add(savedTheme);
  updateIcon(savedTheme);
} else {
  document.body.classList.add('light-theme'); // Default theme
}

icon.addEventListener('click', function () {
  document.body.classList.toggle('dark-theme');

  // Update the theme preference in localStorage
  const currentTheme = document.body.classList.contains('dark-theme')
    ? 'dark-theme'
    : 'light-theme';
  localStorage.setItem('theme', currentTheme);
  updateIcon(currentTheme);
});

function updateIcon(theme) {
  if (theme === 'dark-theme') {
    icon.src = 'dark theme icon/sun.png';
    icon.style.transform = 'rotate(180deg)';
  } else {
    icon.src = 'dark theme icon/moon.png';
    icon.style.transform = 'rotate(0deg)';
  }
}

const menu = document.querySelector('.hamburger');
const sidebarOpen = document.querySelector('.side-bar');
const menuChild = document.querySelectorAll('.linking-projec');

menu.addEventListener('click', function () {
  sidebarOpen.style.display = 'flex';
});

const sidebarClose = document.querySelector('.close');

sidebarClose.addEventListener('click', function () {
  sidebarOpen.style.display = 'none';
});

menuChild.forEach(function (item) {
  item.addEventListener('click', function () {
    sidebarOpen.style.display = 'none';
    sidebarOpen.style.transition = 'all 0.5s ease-out';
  });
});
