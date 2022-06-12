const listItemsMonth = document.getElementById('month');
const listItemDays = document.getElementById('days');
const listItemYears = document.getElementById('years');
const dropdown = document.querySelectorAll('.dropdown');
const inputDays = document.querySelector('input');
const buttonDays = document.querySelector('.main-dropdown');
const buttons = document.querySelectorAll('.main-dropdown');
const hideInputs = document.querySelectorAll('.dropdown__input-hidden');
const warningBlock = document.querySelector('.main-warning');
const listUl = document.getElementsByClassName('dropdown__list');
const imgSing = document.getElementById('imgSing');
const boxSing = document.querySelector('.main-box-img');
const hideDiv = document.querySelector('.main-continue');
const imgText = document.querySelector('.main-img-text');
let day;
let month;
const listMonth = {
  January: 31,
  February: 28,
  March: 31,
  April: 30,
  May: 31,
  June: 30,
  July: 31,
  August: 31,
  September: 30,
  October: 31,
  November: 30,
  December: 31,
};
const rusNameMonth = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']

function addLiDays(i, muchDays) {
  i = i || 1;
  muchDays = muchDays || 31;
  for (; i <= muchDays; i++) {
    if (i < 10) {
      i = '0' + i;
    }
    let li = document.createElement('li');
    li.innerText = i;
    li.value = Number(i);
    li.classList.add('main-li-days')
    listItemDays.append(li);
  }
}

addLiDays();

function addLiMonth() {
  let extraDays = 0;
  let counter = 0;
  for (let month in listMonth) {
    let li = document.createElement('li');
    li.innerText = rusNameMonth[extraDays++];
    li.value = ++counter
    li.dataset.howManyDays = listMonth[month];
    listItemsMonth.append(li);
    if (extraDays === 12) {
      return true;
    }
  }
}

addLiMonth()

function changeListDays() {
  const monthListChildren = listItemsMonth.children;
  for (let item of monthListChildren) {
    let hideDiv = 0;
    let perceptibleBlocks;
    item.addEventListener('click', function() {
      let count = 0;
      if (this.dataset.howManyDays < listItemDays.children.length) {
        let extraDays = listItemDays.children.length - this.dataset.howManyDays;
        for (let i = listItemDays.children.length; extraDays > count; i--, count++) {
          listItemDays.children[i - 1].style.display = 'none';
        }
      }
      for (let blocks of listItemDays.children) {
        if (blocks.style.display === 'none') {
          hideDiv++;
        }
      }
      hideDiv !== 0 ? perceptibleBlocks = listItemDays.children.length - hideDiv : perceptibleBlocks = 0;
      if (this.dataset.howManyDays > perceptibleBlocks) {
        for (let i = listItemDays.children.length; i > perceptibleBlocks; perceptibleBlocks++) {
          listItemDays.children[perceptibleBlocks].style.display = 'block';
        }
        hideDiv = 0
      }
      if (this.dataset.howManyDays < inputDays.value) {
        buttonDays.innerText = this.dataset.howManyDays;
        inputDays.value = this.dataset.howManyDays;
      }
    });
  }
}

changeListDays()

function addMonthDataHowManyDays() {

}

function addLiYears() {
  for (let i = 1920; i <= 2022; i++) {
    let li = document.createElement('li');
    li.innerText = i;
    li.value = i;
    listItemYears.append(li)
  }
}

addLiYears();

function liElemAddClass() {
  const allLi = document.querySelectorAll('li');
  allLi.forEach(item => item.classList.add('dropdown__list-item'));
}

liElemAddClass();

dropdown.forEach(dropdownWrapper => {
  const dropdownButton = dropdownWrapper.querySelector('.main-dropdown');
  const dropdownList = dropdownWrapper.querySelector('.dropdown__list');
  const dropdownListItem = dropdownWrapper.querySelectorAll('.dropdown__list-item');
  const dropdownInput = dropdownWrapper.querySelector('.dropdown__input-hidden');
  const dropdownListUl = dropdownWrapper.querySelectorAll('.dropdown__list')

  dropdownButton.addEventListener('click', function() {
    dropdownList.classList.toggle('dropdown__list-visible');
  })

  dropdownListItem.forEach(function(lisItem) {
    lisItem.addEventListener('click', function(event) {
      dropdownButton.innerText = this.innerText;
      lisItem.parentNode.nextElementSibling.value = this.value;
      dropdownList.classList.remove('dropdown__list-visible');
    });
  })

  document.addEventListener('click', function(event) {
    if (event.target !== dropdownButton) {
      dropdownList.classList.remove('dropdown__list-visible');
    }
  })


});

function showWarning(event) {
  if (event.target.classList.contains('main-dropdown')) return;
  if (event.target.tagName === 'LI') return;
  let filledInputs = 0;
  let isFirsCheck = true;
  for (let inp of hideInputs) {
    if (inp.value > 0) {
      isFirsCheck = false;
      filledInputs++;
    }
  }
  if (filledInputs < 3) {
    for (let input of hideInputs) {
      if (input.value === '0') {
        warningBlock.style.display = 'block';
      }
    }
  }
}
document.body.addEventListener('click', showWarning);

function getSing(day, month) {
  switch (month) {
    case 1:
      if (day <= 19) {
        imgSing.src = '../img/10_Capricorn.png';
        imgText.innerText = 'Козерог';
      } else {
        imgSing.src = '../img/11_Aquarius.png';
        imgText.innerText = 'Водолей';
      }
      break;
    case 2:
      if (day <= 18) {
        imgSing.src = '../img/11_Aquarius.png';
        imgText.innerText = 'Водолей';
      } else {
        imgSing.src = '../img/12_Pisces.png';
        imgText.innerText = 'Рыбы';
      }
      break;
    case 3:
      if (day <= 20) {
        imgSing.src = '../img/12_Pisces.png';
        imgText.innerText = 'Рыбы';
      } else {
        imgSing.src = '../img/1_aries.png';
        imgText.innerText = 'Овен';
      }
      break;
    case 4:
      if (day <= 19) {
        imgSing.src = '../img/1_aries.png';
        imgText.innerText = 'Овен';
      } else {
        imgSing.src = '../img/2_Taurus.png';
        imgText.innerText = 'Телец';
      }
      break;
    case 5:
      if (day <= 20) {
        imgSing.src = '../img/2_Taurus.png';
        imgText.innerText = 'Телец';
      } else {
        imgSing.src = '../img/3_Gemini.png';
        imgText.innerText = 'Близнецы';
      }
      break;
    case 6:
      if (day <= 21) {
        imgSing.src = '../img/3_Gemini.png';
        imgText.innerText = 'Близнецы';
      } else {
        imgSing.src = '../img/Cancer_Rak.png';
        imgText.innerText = 'Рак';
      }
      break;
    case 7:
      if (day <= 22) {
        imgSing.src = '../img/Cancer_Rak.png';
        imgText.innerText = 'Рак';
      } else {
        imgSing.src = '../img/5_Leo.png';
        imgText.innerText = 'Лев';
      }
      break;
    case 8:
      if (day <= 22) {
        imgSing.src = '../img/5_Leo.png';
        imgText.innerText = 'Лев';
      } else {
        imgSing.src = '../img/6_Virgo.png';
        imgText.innerText = 'Дева';
      }
      break;
    case 9:
      if (day <= 22) {
        imgSing.src = '../img/6_Virgo.png';
        imgText.innerText = 'Дева';
      } else {
        imgSing.src = '../img/c851fafab3d58dc2ca88e02a9817774c.png';
        imgText.innerText = 'Весы';
      }
      break;
    case 10:
      if (day <= 22) {
        imgSing.src = '../img/c851fafab3d58dc2ca88e02a9817774c.png';
        imgText.innerText = 'Весы';
      } else {
        imgSing.src = '../img/8_Scorpio.png';
        imgText.innerText = 'Скорпион';
      }
      break;
    case 11:
      if (day <= 22) {
        imgSing.src = '../img/8_Scorpio.png';
        imgText.innerText = 'Скорпион';
      } else {
        imgSing.src = '../img/9_Sagittarius.png';
        imgText.innerText = 'Стрелец';
      }
      break;
    case 12:
      if (day <= 21) {
        imgSing.src = '../img/9_Sagittarius.png';
        imgText.innerText = 'Стрелец';
      } else {
        imgSing.src = '../img/10_Capricorn.png';
        imgText.innerText = 'Козерог';
      }
      break;
  }
}

function activeButtons() {
  for (let button of buttons) {
    button.style = `
  font-weight: 700;
  color: #315DFA;
`
  }
}


for (let ul of listUl) {
  ul.addEventListener('click', function(event) {
    let filledInputs = 0;
    for (let input of hideInputs) {
      if (input.value > 0) {
        filledInputs++;
      }
    }
    if (buttons.length === filledInputs) {
      warningBlock.style.display = 'none';
      day = +hideInputs[0].value;
      month = +hideInputs[1].value;
      getSing(day, month);
      boxSing.style.display = 'block';
      hideDiv.style.display = 'block';
      activeButtons()
    }
  })
}
