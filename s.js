//ex 1
let name = prompt("Введите ваш возраст", "") 
const age = 20; 

if (age >= 18) {
    alert("Вы совершеннолетний");
} else {
    alert("Вы несовершеннолетний");
}
//2
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

let j = 10;
while (j >= 1) {
    console.log(j);
    j--;
}

//3
const lectures = ['Адаптивная верстка', 'Bootstrap', 'Typescript', 'Объекты JS'];
const practices = ['Веб-куки', 'React', 'Виртуальный DOM'];

lectures.push('JS'); 
practices.unshift('Практика 0'); 

lectures.forEach(lecture => console.log(lecture));
practices.forEach(practice => console.log(practice));

function arrayToString(array) {
    console.log(array.join(', '));
}

arrayToString(lectures);
arrayToString(practices);

function filterLecturesStartingWithO(lectures) {
    return lectures.filter(lecture => lecture.startsWith('О'));
}

const filteredLectures = filterLecturesStartingWithO(lectures);
console.log(filteredLectures);