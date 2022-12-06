var pageTop = document.getElementById('pageTop');

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

var menu = document.getElementById('menu');

var close = document.getElementById('close');

var sideMenu = document.getElementById('sideMenu');

function showSearchBar() {
  sectionA.classList.add('msItems');
  sectionB.classList.add('msItems');
  hideSearchBtn.classList.remove('hide');
}

searchButton.addEventListener('click', showSearchBar);

function hideSearchBar() {
  sectionA.classList.remove('msItems');
  sectionB.classList.remove('msItems');
  hideSearchBtn.classList.add('hide');
}

cancelBtn.addEventListener('click', hideSearchBar);

function dropDown() {
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

msNav.addEventListener('click', dropDown);

function toggleMenu() {
  close.classList.remove('hide');
  sideMenu.classList.remove('hide');
  menu.classList.add('hide');
}

menu.addEventListener('click', toggleMenu);

function toggleClose() {
  close.classList.add('hide');
  sideMenu.classList.add('hide');
  menu.classList.remove('hide');
}

close.addEventListener('click', toggleClose);

pageTop.innerHTML = '<p>' + pageTop.classList[2] + '</p>';

function checkClass() {
  var classes = pageTop.classList;
  var i;
  for (i = 0; i < classes.length; i++) {
    var a = classes[i];
    if (a === 'two') {
      pageTop.innerHTML = 'Hello world!' + ' Esta variable es: ' + a;
    } else {
      pageTop.innerHTML = 'Hello developer!' + ' Esta variable es: ' + a;
    }
  }
}

checkClass();

var softwareContainer = document.getElementById('softwareContainer');

function menuDown() {
  var software = document.getElementById('software');
  var classes = software.classList;
  var i;
  for (i = 0; i < classes.length; i++) {
    var class_ = classes[i];
    if (class_ === 'hide') {
      software.classList.remove('hide');
    } else if (class_ !== 'hide') {
      software.classList.add('hide');
    }
  }
}

softwareContainer.addEventListener('click', menuDown);
