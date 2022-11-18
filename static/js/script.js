var searchButton = document.getElementById('searchBtn');

var sectionA = document.getElementById('navSectionA');

var sectionB = document.getElementById('navSectionB');

var hideSearchBtn = document.getElementById('hideSearchBtn');

var logo = document.getElementById('logo');

var cancelBtn = document.getElementById('cancelBtn');

var myDropdown = document.getElementById('myDropdown');

var msNav = document.getElementById('msNav');

var carretUp = document.getElementById('carretUp');

var carretDown = document.getElementById('carretDown');

var dropdown = getElementById('dropdown');

function showSearchBar() {
  sectionA.classList.add('msItems');
  sectionB.classList.add('msItems');
  hideSearchBtn.classList.remove('hide');
}

function hideSearchBar() {
  sectionA.classList.remove('msItems');
  sectionB.classList.remove('msItems');
  hideSearchBtn.classList.add('hide');
}

searchButton.addEventListener('click', showSearchBar);

cancelBtn.addEventListener('click', hideSearchBar);

function toggleHideNShow() {
  if (myDropdown.style.display === 'none') {
    myDropdown.style.display = 'block';
    carretDown.style.display = 'none';
    carretUp.style.display = 'block';
  } else {
    myDropdown.style.display = 'none';
    carretDown.style.display = 'block';
    carretUp.style.display = 'none';
  }
}

function btnBorder() {
  dropdown.classList('btnBorder');
}

msNav.addEventListener('click', toggleHideNShow);
