'use strict';

document.addEventListener('DOMContentLoaded', () => {

    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };

    const addForm = document.querySelector('form.add'),
         addInput = addForm.querySelector('.adding__input'),
         checkbox = addForm.querySelector('[type="checkbox"]');

    addForm.addEventListener('submit', (event) => {
        event.preventDefault();
        let newFilm = addInput.value;//присваиваем значение переменной
        const favorite = checkbox.checked;//получаем булиновое значение

     if (newFilm) {

        if(newFilm.length > 21) {
            newFilm = `${newFilm.substring(0,22)}...`;
        }

        if(favorite) {
            console.log("Добавляем любимый фильм");
        }

        movieDB.movies.push(newFilm);// добавляем новый элемент в массив
        sortArr(movieDB.movies);//сортируем данные
        
        createMovieList(movieDB.movies, movieList);
     }
      
     event.target.reset();
    });

const adv = document.querySelectorAll('.promo__adv img'),
        promo__genre = document.querySelector('.promo__genre'),
        promo__bg = document.querySelector('.promo__bg'),
        movieList = document.querySelector('.promo__interactive-list');

// function Expression - только тогда помещаем стрелочную функцию
//Task 1 Удалить все рекламные блоки со страницы (правая часть сайта)
    const deleteAdv = (arr) => {
            arr.forEach(item => {
                item.remove();
            });
        };

//
    const makeChanges = () => {
        promo__genre.textContent = 'драма';
//Task 3: Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img. Реализовать только при помощи JS
        promo__bg.style.background = "url('img/bg.jpg') center center/cover no-repeat";

    };

//Task 4: Список фильмов на странице сформировать на основании данных из этого JS файла. Отсортировать их по алфавиту 
   
    const sortArr = (arr) => {
        arr.sort();
    };

// создаем функцию с аргументами - чтобы код загружался в момент вызова функции
// аргументы будут создаваться
    function createMovieList(films, parent) {
        parent.innerHTML = "";//Заменить на пустую строку
        sortArr(films);//сортируем фильмы

        films.forEach((film, i) => {//+= Выводит несколько значений, просто = переписывало значение одной и той же строки
            parent.innerHTML += `
            <li class="promo__interactive-item">${i + 1}. ${film}
                <div class="delete"></div>
            </li>
            `;
        }); 

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);
                createMovieList(films, parent);

            });
        });

    }


    deleteAdv(adv);
    makeChanges();
createMovieList(movieDB.movies, movieList);



});