
// 5)отримання данних з серверу


 // синхронний код 
// const a = 5
// const b = 10 
// let c = a + b
// console.log(c) // ми гарантовано ЗАВЖДИ отримуємо в консоль результат 15 

 // асинхронний код (отримка данних з серверу)

// fetch('https://jsonplaceholder.typicode.com/users') // функція отримання данних з серверу
//   .then(response => response.json()) // ця функція спрацьовує лише після того як данні отримані
//   .then(data => {
//     const text = document.createElement('div')
//     text.textContent = data[0].website
//     document.body.appendChild(text)
//   })


const buttonSearch = document.querySelector('button')
buttonSearch.addEventListener('click', () => {
const API_key = "0e3f4c3098c7d2107ce581907ae44eb7";
const input = document.querySelector('input')
const city_name = input.value;
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${API_key}&units=metric`;
 fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (data.cod !== 200) {
            input.style.borderColor = 'red'
            input.style.color = 'red'
            input.style.borderWidth = '4px'
            input.value = data.message
        } else {
        console.log(data);
        }
      })
})