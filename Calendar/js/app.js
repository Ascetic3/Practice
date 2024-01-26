// ====================

const monthsEn = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const monthsRu = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
let months = monthsEn
//const nowDate = new Date()
let dataCarrent = new Date()
let container = document.querySelector('.table-container');
let next = document.querySelector('.next');
let back = document.querySelector('.back');
let btnS = document.getElementById("btn-s")
let btnM = document.getElementById("btn-m")
let firstDay = 'm'
let weekE = ['Mn','Tu','Wd','Th','Fr','St','Su']
let weekR = ['Пн','Вт','Cp','Чт','Пт','C6','Bc']
let resetBtn = document.getElementById('reset')
let setBtn = document.getElementById('set')
let form = document.querySelector(".year-input");

function render(){
    container.innerHTML = "";
    createFullYearCalendar(dataCarrent.getFullYear())
    toStandart()
}

function toStandart(){
    for(let j = 0; j < 12; j++){
        let tabl = document.getElementById(`m${j}`);
        while(tabl.rows.length < 7){
            let newRow = tabl.insertRow();
            // let newCell = newRow.insertCell(0)
            // newCell.innerHTML = '0'
            for(let i = 0; i < 7; i++){
                let newCell = newRow.insertCell(i)
                newCell.innerHTML = "";
            }
        }
    }
}

function shiftArrayElements(arr){
    let copy = arr.slice();
    let lastElement = copy.pop(); 
    copy.unshift(lastElement);
    return copy;
}

function generateWeekTh(arr){
    let str = '<tr>';
    for (let x of arr){
        str += `<th>${x}</th>`
    }
    str += '</tr>';
    return str;
}


function createFullYearCalendar(year) {
    for (let i = 1; i < 13; i++){createCalendar('.table-container', year, i) }
}

function getDay(date) {
    let day = date.getDay();
    if (day == 0) day = 7;
    return day - 1;
}

function createCalendar(elem, year, month) {

    elem = document.querySelector(elem)

    captionYear = document.querySelector(".year")

    captionYear.innerHTML = year;

    let mon = month-1;
    let d = new Date(year, mon)
    

    let table = `
    <div class = 'table-wrapper'>
    <table id = 'm${mon}'>
    <caption>${months[mon]}</caption>`;

    table += generateWeekTh(firstDay === 'm'? weekE : shiftArrayElements(weekE)) +'<tr>';

    if (firstDay === 'm'){
        // Добавляем пустые ячейки, если первый день месяца не понедельник
        for(let i=0; i<getDay(d);i++) {
            table += '<td></td>';
        }
        // Добавляем все дни текущего месяца
        while(d.getMonth() == mon){
            table += '<td>' + d.getDate() + '</td>'
            if (getDay(d) % 7 == 6 ){
                table += '</tr><tr>'
            }
            d.setDate(d.getDate()+1)
        }
        // Добавляем пустые ячейки, если последний день месяца не воскресенье
        if(getDay(d) != 0){
            // table += '<tr>'
            for(let i=getDay(d); i<7;i++) {
                table += '<td></td>';
            }
            // table += '</tr>'
        }else{
            table = table.slice(0, -5);
        }
    }else {
        // Добавляем пустые ячейки, если первый день месяца не понедельник
        for(let i=0; i<d.getDay();i++) {
            table += '<td></td>';
        }
        // Добавляем все дни текущего месяца
        while(d.getMonth() == mon){
            table += '<td>' + d.getDate() + '</td>'
            if (d.getDay() == 6){
                table += '</tr><tr>'
            }
            d.setDate(d.getDate()+1)
        }
        // Добавляем пустые ячейки, если последний день месяца не воскресенье
        if(d.getDay(d) <= 6){
            for(let i=d.getDay(); i<7;i++) {
                table += '<td></td>';
            }
            // table += '</tr>'
        }else{
            table = table.slice(0, -5);
        }
    }

    table += '</tr></table></div>';

    elem.insertAdjacentHTML('beforeend', table);

}




next.onclick = () => { 
        dataCarrent.setFullYear(dataCarrent.getFullYear() + 1);
        render()
};


back.onclick = () => { 
        dataCarrent.setFullYear(dataCarrent.getFullYear() - 1);
        render()
};




btnM.onclick = () => {
    if (firstDay === 's'){firstDay = 'm';}
    render();
};

btnS.onclick = () => { 
    if (firstDay === 'm'){firstDay = 's';}
    render();
};


resetBtn.onclick = () => {
    dataCarrent = new Date()
    render();
};

setBtn.onclick = () => {
    if (form.value.length !== 0){
        dataCarrent = new Date(form.value)
        form.value = ''
        render();
    }
    // dataCarrent = 
    // render();
    //! неправильно реагирует на двузначные числа и однозначные
};




render()



