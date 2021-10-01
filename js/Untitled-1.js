/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};
//Task 1 Удалить все рекламные блоки со страницы (правая часть сайта)
const adv = document.querySelectorAll('.promo__adv img');
adv.forEach(item => {
    item.remove();
});

//Task 2
const promo__genre = document.querySelector('.promo__genre');
promo__genre.textContent = 'драма';

//Task 3: Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img. Реализовать только при помощи JS
const promo__bg = document.querySelector('.promo__bg');
promo__bg.style.background = "url('img/bg.jpg') center center/cover no-repeat";

//Task 4: Список фильмов на странице сформировать на основании данных из этого JS файла. Отсортировать их по алфавиту 
const movieList = document.querySelector('.promo__interactive-list');
movieList.innerHTML = "";//Заменить на пустую строку
movieDB.movies.sort();//Сортировка данных в базе данных

movieDB.movies.forEach((film, i) => {//+= Выводит несколько значений, просто = переписывало значение одной и той же строки
    movieList.innerHTML += `
    <li class="promo__interactive-item">${i + 1}. ${film}
        <div class="delete"></div>
    </li>
    `;
});

const inputForm = document.querySelector('.adding__input'),
      inputBtn = document.querySelector('button');

const inputSubmit = (e) => {
    e.preventDefault();
    e = inputForm.value;//присваиваем переменной значение инпута
    // console.log(e);// выводим значение в консоль
    movieDB.movies += e;
    movieList.innerHTML += `
        <li class="promo__interactive-item"> ${e}
            <div class="delete"></div>
        </li>
        `;
    console.log(movieDB);
    return;
}

inputBtn.addEventListener('click', inputSubmit);// запускаем по клику на кнопку
