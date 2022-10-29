
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
function setDefaultInputSetting () {
input.style.borderColor = 'grey'
input.style.color = 'black'
input.style.borderWidth = '2px'
input.value = ''
}

const buttonSearch = document.querySelector('button')
const input = document.querySelector('input')
const resultContainer = document.querySelector('.weather')

function checkedInput () {
if(input.value !== '') {
  buttonSearch.disabled = false
} else buttonSearch.disabled = true
}

setInterval(checkedInput, 500)

buttonSearch.addEventListener('click', () => {
const API_key = "0e3f4c3098c7d2107ce581907ae44eb7";
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
            setTimeout(setDefaultInputSetting, 2000)
            resultContainer.style.display = 'none'
        } else {
        console.log(data);
        const temp = document.querySelector('.temp')
        const hum = document.querySelector('.hum')
        const wind = document.querySelector('.wind')
        temp.textContent = Math.round(data.main.temp)
        hum.textContent = data.main.humidity
        wind.textContent = data.wind.speed
        // const containerText = document.querySelector('.weather_text_container')
        // const temp = document.createElement('span')
        // temp.textContent = `Темпрература: ${Math.round(data.main.temp)} градусів`
        // const hum = document.createElement('span')
        // hum.textContent = `Вологість: ${data.main.humidity} %`
        // const wind = document.createElement('span')
        // wind.textContent = `Швидкість вітру: ${data.wind.speed} м/с`
        // const maxTemp = document.createElement('span')
        // wind.textContent = `Максимальна температура: ${data.main.temp_max} градусів`
        // containerText.appendChild(temp)
        // containerText.appendChild(hum)
        // containerText.appendChild(wind)
        // containerText.appendChild(maxTemp)

        const container = document.querySelector('.weather').style.display = 'flex'
        input.value = ''
        }
      })
})
