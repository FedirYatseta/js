const resultBlock = document.querySelector('#result')
const clickMeButton = document.querySelector('#get-img')
const pageNumberEl = document.querySelector('#page-number')
const countImg = document.querySelector('#count-img')
const getTasksButton = document.querySelector('#get-task')

//element for update title
const putTasksButton = document.querySelector('#put-task')
const putNumberEl = document.querySelector('#page-number-task')

//element for del data
const delTasksButton = document.querySelector('#del-task')

const findIdEl = document.querySelector('.task-result')
//create element
const createTitleButton = document.querySelector('#create-task')
const findTitleEl = document.querySelector('#page-title-task')

createTitleButton.addEventListener("click", () => {
    const promise = createTask(findTitleEl.value);
    promise.then(onTaskCreate);
});

getTasksButton.addEventListener("click", () => {
    const promise = getTask();
    promise.then(onTaskReceived);
});

findIdEl.addEventListener('click', function (e) {
    // Вешаем обработчик клика на UL, не LI
    var id = e.target.id;
    console.log(id); // Получили ID, т.к. в e.target содержится элемент по которому кликнули
    document.querySelector('#page-number-task').value = id; // For example
});

putTasksButton.addEventListener('click', () => {
    const promise = updateTask();
    promise.then(onTaskUpdate);
})

delTasksButton.addEventListener("click", () => {
    const promise = deleteTask(putNumberEl.value);
    promise.then();
});

////////////////////////////////////////////////////////////////////
function onTaskCreate(e) {
    var title = e.target;
    // Получили ID, т.к. в e.target содержится элемент по которому кликнули
    document.querySelector('#page-title-task').value = title;
}


function onDataReceived(data) {
    data.forEach(el => {
        const img = document.createElement('img')
        img.src = el.thumbnail;
        document.querySelector('#result').appendChild(img)
    }
    );
}

function onTaskReceived(tasks) {
    tasks.forEach(el => {
        const li = document.createElement('li');
        li.innerHTML = el.title;
        li.id = el.id;
        document.querySelector('.task-result').appendChild(li)
    }
    );
}

function onTaskUpdate(tasks) {
    tasks.forEach(el => {
        const li = document.createElement('li');
        li.innerHTML = el.title;
        document.querySelector('#task-result').appendChild(li)
    }
    );
}





clickMeButton.addEventListener("click", () => {
    const promise = getImages(pageNumberEl.value, countImg.value);
    promise.then(onDataReceived);
});


/*



var slider1 = new Slider();
var slider2 = new Slider();

slider1.start('slider1test');
slider2.start('slider2test');



var buttonPlus = document.getElementById('buttonPlus');
var buttonMinus = document.getElementById('buttonMinus');
var buttonMultiply = document.getElementById('buttonMultiply');
var buttonDev = document.getElementById('buttonDev');


//find elements
var showPrefBtn = document.getElementById('show-prev');
var showNextBtn = document.getElementById('show-next');
var imgSlider = document.getElementById('slide-img');

//create image array
var imgUrl = [ ];

imgUrl.push('https://www.goodcarbadcar.net/wp-content/uploads/2019/07/2019-audi-r8-onlocation.jpg');
imgUrl.push('https://www.goodcarbadcar.net/wp-content/uploads/2019/07/Canada-%E2%80%93-Sports-Car-Sales-Figures.png');
imgUrl.push('https://s1.cdn.autoevolution.com/images/news/who-d-make-a-better-sports-car-jeep-or-range-rover-143115-7.jpg');
imgUrl.push('https://i.pinimg.com/originals/4b/b2/85/4bb2852cb354b0ad89dfa1a97ef2f6fa.jpg');

var currentImageIndex=0;

var operationButton = document.getElementsByClassName('operation-button');
//var operationButton = [buttonPlus, buttonMinus, buttonMultiply, buttonDev]
function getNumber(operationCode) {
    var input1 = document.getElementById('number1');
    var input2 = document.getElementById('number2');
    var number1 = input1.value;
    var number2 = input2.value;
    if (operationCode === '+') {
        console.log('onButtonPlusClick')
        var result = +number1 + +number2;
    }
    else if (operationCode === '-') {
        console.log('onButtonMinusClick')
        var result = +number1 - +number2;
    }
    else if (operationCode === '*') {
        console.log('onButtonMultiply')
        var result = +number1 * +number2;
    }
    else if (operationCode === '/') {
        console.log('onButtonDevClick')
        var result = +number1 / +number2;
    }

    window.alert(result);
    return result;
}

function onOperationButtonClick(eventObject) {

    var clickedElement = eventObject.currentTarget;
    var operation = clickedElement.innerHTML;
    getNumber(operation);
}



for (var i = 0; i < operationButton.length; i++) {

    var button = operationButton[i]
    button.addEventListener('click', onOperationButtonClick);
}

//subscribe
showPrefBtn.addEventListener('click',onShowPrevBtnClick);
showNextBtn.addEventListener('click',onShowNextBtnClick);

showPrefBtn.disabled = true;
imgSlider.src=imgUrl[currentImageIndex];
function onShowPrevBtnClick(e){
    console.log('prev clicked')
    currentImageIndex--
    imgSlider.src=imgUrl[currentImageIndex];
    showNextBtn.disabled = false;
    if(currentImageIndex === 0){
        showPrefBtn.disabled = true;
    }
}

function onShowNextBtnClick(e){
    console.log('next clicked')
    currentImageIndex++
    imgSlider.src=imgUrl[currentImageIndex];
    showPrefBtn.disabled = false;
    if(currentImageIndex===(imgUrl.length-1)){
        showNextBtn.disabled = true;
    }

}

/*
var lastNameId = 'last-name'
var firstNameId = 'name'
var addressNameId = 'address'
var citiesId = 'cities'
var hobbiesId = 'hobbies'
var avatarId = 'avatar-container'
var avaId = 'avatar'
var buttonId = 'button';


function getEl(id){
    var el = document.getElementById(id);
    return el;
}

var firstNameEl = getEl(firstNameId)
var lastNameEl = getEl(lastNameId)
var addressNameEl = getEl(addressNameId)
var citiesEl = getEl(citiesId)
var hobbiesEl = getEl(hobbiesId)
var avatarEl = getEl(avatarId)
var avaEl = getEl(avaId)
var butEl = getEl(buttonId)

window.alert(lastNameEl.value);
window.alert(firstNameEl.value);
window.alert(addressNameEl.value);
window.alert(citiesEl.value)
window.alert(hobbiesEl.innerHTML)
window.alert(avatarEl.innerHTML)
window.alert(avaEl.alt)

function addErrorClass(elementId){
    var element = document.getElementById(elementId);
    element.className = 'error-input';
}

function addErrorClassToAllInput(){
debugger;
    addErrorClass('name')
    addErrorClass('last-name')
    addErrorClass('address')
}

var sendButton = document.getElementById('send-button')
sendButton.addEventListener('click', addErrorClassToAllInput )

function  alertValue(elementParameter){
    console.log(elementParameter.value)
    console.log(elementParameter.className)
}

firstNameEl.value = 'sasha';
alertValue(firstNameEl);
lastNameEl.value = 'lastName_text'
alertValue(lastNameEl);

//window.setTimeout()
//lastNameEl.className = 'last-name-input';
//alertValue(lastNameEl);
/*let age = prompt('Сколько тебе лет?', 100);

alert(`Тебе ${age} лет!`); // Тебе 100 лет!
let work = prompt('Де ти працюєш?')

alert( ` Я працюю в ${work}`)*/