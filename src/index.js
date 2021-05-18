import css from "./css/styles.css";
import photo from "./db/photo.js";
// console.log(photo);
import template from "./template/item.hbs";
// console.log(template);
const result = template(photo);
// console.log(result);
const photoList = document.getElementById("photoList");
// photoList.insertAdjacentHTML("afterbegin", result);

// console.log(request);

// создать инпут в который пользователь будет вводить значение для поиска
// получить доступ к этому инпуту
// получить значение из инпута которое мы должны отправить в запрос
// сделать запрос, получить результат в виде массива объектов
// сделать шаблон разметкии раструсить в шаблон каждый объект
// полученные шаблоны отрисовать в браузере

const input = document.getElementById("kiril");
console.log(input);
// input.addEventListener("input", (event) => {
//   // смотрим объект события
//   console.log(event);
//   // достанем из объекта событий целевой элемент
//   console.log(event.target);
//   // получим из целевого элемента введённое значение
//   console.log(event.target.value);
// });

const resultList = document.querySelector(".results");
console.log(resultList);

input.addEventListener("change", (event) => {
  console.log(event);
  console.log(event.target);
  console.log(event.target.value);
  const request = fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${event.target.value}`,
  );
  request
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((data) => {
      console.log(data);
      return data.drinks;
    })
    .then((drinks) => {
      console.log(drinks);
      const items = drinks.map((element) => {
        console.log(element);
        console.log(element.strDrinkThumb);
        const item = document.createElement("li");
        console.log(item);
        const img = document.createElement("img");
        img.src = element.strDrinkThumb;
        img.alt = "img";
        item.append(img);
        return item;
      });
      resultList.append(...items);
    });
});
