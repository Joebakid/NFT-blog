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

// Get all the `<a>` tags on the page.
const aTags = document.querySelectorAll('a');

// Loop through all the `<a>` tags and add the `target="_blank"` attribute to them, except for the ones with the class name of `nav-inner-link`.
for (const aTag of aTags) {
  if (!aTag.classList.contains('nav-inner-link')) {
    aTag.setAttribute('target', '_blank');
  }
}
