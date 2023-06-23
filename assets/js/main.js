let emYears = document.getElementById('years')
let emMonths = document.getElementById('months')
let emDay = document.getElementById('days')

let inputYear = document.getElementById('year')
let inputMonth = document.getElementById('month')
let inputDay = document.getElementById('day')

function getAmountOfLeapYears(year) {
	const date = new Date()
	let sum = 0
	for (let i = year; i < date.getFullYear(); i++) {
		if (year % 4 == 0 && year % 100 != 0 && year % 400 == 0) sum++
	}
	return sum
}

function getAge(birthDay) {
	const date = new Date()
	let birthDate = new Date(birthDay)
	
	let tempYear,
		tempMonth,
		tempDay,
		temp

	let amountOfLeapYears = getAmountOfLeapYears(year)

	let diff = date.getTime() - birthDate.getTime()
	temp = Math.trunc(diff / (1000 * 3600 * 24)) + amountOfLeapYears

	tempYear = temp
	
	/*
	tempDay = (temp % 365) % 7
	tempMonth = Math.trunc(temp / 30.436806)
	tempYear = Math.trunc(temp / 365)
	
	/* END -------------------- */
	
	emYears.textContent = tempYear
	emMonths.textContent = tempMonth
	emDay.textContent = tempDay
}

function average(arr) {
	let sum = 0
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i]
	}
	return sum / arr.length
}

function getDayOfMonth(monthNum) {
	// if april, june, september or november return 30
	if (monthNum == 4 || 
		monthNum == 6 ||
		monthNum == 9 ||
		monthNum == 11) return 30
	// if february return 28
	else if (monthNum == 2) return 28
	// else return 30
	return 30
}

let day,
	month,
	year

document.addEventListener('keypress', (e) => {
	if (e.code == "Enter") {
		day = inputDay.value
		month = inputMonth.value
		year = inputYear.value
		emDay.textContent = getAge(month + "/" + day + "/" + year)
	}
})
