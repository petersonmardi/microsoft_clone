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

var softwareContainer = document.getElementById('softwareContainer');

function dropDownSoftware() {
  var software = document.getElementById('software');
  var caretUp = document.getElementById('caretUp');
  var caretDown = document.getElementById('caretDown');
  var classes = software.classList;
  if (software.style.display === 'none') {
    caretUp.classList.remove('hide');
    caretDown.classList.add('hide');
    software.style.display = 'block';
    softwareContainer.style.border = '1px dashed #333';
  } else {
    caretUp.classList.add('hide');
    caretDown.classList.remove('hide');
    software.style.display = 'none';
    softwareContainer.style.border = 'initial';
  }
}

softwareContainer.addEventListener('click', dropDownSoftware);

var deviceContainer = document.getElementById('deviceContainer');

function dropDownDevice() {
  var device = document.getElementById('device');
  var deviceArrowUp = document.getElementById('deviceArrowUp');
  var deviceArrowDown = document.getElementById('deviceArrowDown');
  var classes = device.classList;
  if (device.style.display === 'none') {
    deviceArrowUp.classList.remove('hide');
    deviceArrowDown.classList.add('hide');
    device.style.display = 'block';
    deviceContainer.style.border = '1px dashed #333';
  } else {
    deviceArrowUp.classList.add('hide');
    deviceArrowDown.classList.remove('hide');
    device.style.display = 'none';
    deviceContainer.style.border = 'initial';
  }
}

deviceContainer.addEventListener('click', dropDownDevice);

var entertainmentContainer = document.getElementById('entertainmentContainer');

function dropDownEntertainment() {
  var entertainment = document.getElementById('entertainment');
  var entertainmetArrowUp = document.getElementById('entertainmetArrowUp');
  var entertainmetArrowDown = document.getElementById('entertainmetArrowDown');
  var classes = entertainment.classList;
  if (entertainment.style.display === 'none') {
    entertainmetArrowUp.classList.remove('hide');
    entertainmetArrowDown.classList.add('hide');
    entertainment.style.display = 'block';
    entertainmentContainer.style.border = '1px dashed #333';
  } else {
    entertainmetArrowUp.classList.add('hide');
    entertainmetArrowDown.classList.remove('hide');
    entertainment.style.display = 'none';
    entertainmentContainer.style.border = 'initial';
  }
}

entertainmentContainer.addEventListener('click', dropDownEntertainment);

var businessContainer = document.getElementById('businessContainer');

function dropDownBusiness() {
  var business = document.getElementById('business');
  var businessArrowUp = document.getElementById('businessArrowUp');
  var businessArrowDown = document.getElementById('businessArrowDown');
  var classes = business.classList;
  if (business.style.display === 'none') {
    businessArrowUp.classList.remove('hide');
    businessArrowDown.classList.add('hide');
    business.style.display = 'block';
    businessContainer.style.border = '1px dashed #333';
  } else {
    businessArrowUp.classList.add('hide');
    businessArrowDown.classList.remove('hide');
    business.style.display = 'none';
    businessContainer.style.border = 'initial';
  }
}

businessContainer.addEventListener('click', dropDownBusiness);

var developerContainer = document.getElementById('developerContainer');

function dropDownDeveloper() {
  var developer = document.getElementById('developer');
  var developerArrowUp = document.getElementById('developerArrowUp');
  var developerArrowDown = document.getElementById('developerArrowDown');
  var classes = developer.classList;
  if (developer.style.display === 'none') {
    developerArrowUp.classList.remove('hide');
    developerArrowDown.classList.add('hide');
    developer.style.display = 'block';
    developerContainer.style.border = '1px dashed #333';
  } else {
    developerArrowUp.classList.add('hide');
    developerArrowDown.classList.remove('hide');
    developer.style.display = 'none';
    developerContainer.style.border = 'initial';
  }
}

developerContainer.addEventListener('click', dropDownDeveloper);

var otherContainer = document.getElementById('otherContainer');

function dropDownOther() {
  var other = document.getElementById('other');
  var otherArrowUp = document.getElementById('otherArrowUp');
  var otherArrowDown = document.getElementById('otherArrowDown');
  var classes = other.classList;
  if (other.style.display === 'none') {
    otherArrowUp.classList.remove('hide');
    otherArrowDown.classList.add('hide');
    other.style.display = 'block';
    otherContainer.style.border = '1px dashed #333';
  } else {
    otherArrowUp.classList.add('hide');
    otherArrowDown.classList.remove('hide');
    other.style.display = 'none';
    otherContainer.style.border = 'initial';
  }
}

otherContainer.addEventListener('click', dropDownOther);

var desktop = document.getElementById('msDesktop');
var deskImage = document.getElementById('desktopImage');
var m = './static/img/w11_1083x600.png';
var c = './static/img/Windows11_1920x600.jpeg';

function mql(x) {
  if (x.matches) {
    desktopImage.setAttribute('src', m);
  } else {
    document.body.style.backgroundColor = 'inherit';
    desktopImage.setAttribute('src', c);
  }
}

var changeSize = matchMedia('(max-width: 1083px)');
changeSize.addListener(mql);
mql(changeSize);

// const mql = (a) => {
//   const change = a;

//   if (change.x.matches) {
//     change.element.setAttribute('src', change.lastSource);
//   } else {
//     change.element.setAttribute('src', change.firstSource);
//   }
// };


// myEl = { x: changeSize, element: deskImage, lastSource: m, firstSource: c };
// mql(myEl);

// console.log(changeSize);
// console.log(mql);
// console.log(myEl);

// function mql(x) {
//   if (x.matches) {
//     document.body.style.backgroundColor = 'red';
//   } else {
//     document.body.style.backgroundColor = 'yellow';
//   }
// };
//
// var mediumBp = matchMedia('(max-width: 560px)');
// mediumBp.addListener(mql);
// mql(mediumBp);
