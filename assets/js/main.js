// input user's values
let inputD = document.getElementById('day')
let inputM = document.getElementById('month')
let inputY = document.getElementById('year')

// em result of user's values
let emD = document.getElementById('days')
let emM = document.getElementById('months')
let emY = document.getElementById('years')

/**
 * 
 * @param {string} birthDay
 */
function getAge(bday, bmonth, byear) {
   const date = new Date(),
   day = date.getDate(),
   month = date.getMonth() + 1,
   year = date.getFullYear()

   if (day < bday) {
    emD.textContent = (day - bday + 30)
    month--
   } else {
    emD.textContent = (day - bday)
   }

   if (month < bmonth) {
    emM.textContent = (month - bmonth + 12)
    year--
   } else {
    emM.textContent = (month - bmonth)
   }

   emY.textContent = year - byear
}

if (window.innerWidth >= 1440) {
   emD.textContent = "--"
   emM.textContent = "--"
   emY.textContent = "--"
}

/**
 * event listener on key press check if key is {Enter}
 */
document.addEventListener('keypress', (event) => {
    if (event.code == "Enter") {
        getAge(inputD.value, inputM.value, inputY.value)
    }
})