
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
const API_key = "0e3f4c3098c7d2107ce581907ae44eb7";
function getAndSetData () {
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
            flag.style.visibility = 'hidden'
        } else {
          console.log(data)
        const temp = document.querySelector('.temp')
        const hum = document.querySelector('.hum')
        const wind = document.querySelector('.wind')
        temp.textContent = Math.round(data.main.temp)
        hum.textContent = data.main.humidity
        wind.textContent = data.wind.speed
        weatherSection.style.visibility = 'visible'
        input.value = ''
        flag.src = `https://countryflagsapi.com/png/${data.sys.country}`
        flag.style.visibility = 'visible'
        flag.style.display = 'inline'
        icon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`
        icon.style.visibility = 'visible'
        }
      })
}
function setDefaultInputSetting () {
input.style.borderColor = 'grey'
input.style.color = 'black'
input.style.borderWidth = '2px'
input.value = ''
}

const buttonSearch = document.querySelector('button')
const input = document.querySelector('input')
const weatherSection = document.querySelector('.weather')
const flag = document.querySelector('img')
const icon = document.querySelector('.icon')

function checkedInput () {
if(input.value !== '') {
  buttonSearch.disabled = false
} else buttonSearch.disabled = true
}

setInterval(checkedInput, 500)
document.addEventListener('keydown', (event)=> {
  console.log(event.code)
if( input.value !== '' &&  (event.code === "Enter" || event.code === 'NumpadEnter')) {
  getAndSetData()
}
});
buttonSearch.addEventListener('click', () => {getAndSetData()})
