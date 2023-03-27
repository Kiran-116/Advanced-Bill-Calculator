// Accessing Inputs
const billInput = document.getElementById('billTotalInput')
const tipInput = document.getElementById('tipInput')
const numberOfPeopleDiv = document.getElementById('numberOfPeople')
const perPersonTotalDiv = document.getElementById('perPersonTotal')

// Get number of People from number of People Div
let numberOfPeople = Number(numberOfPeopleDiv.innerText)

// Calculate the total bill per Person
const calculateBill = () => {    
    // get bill from user input & convert it into a number
    const bill = Number(billInput.value)
    
    // get the tip from user & convert it into a percentage(Divide by 100)
    const tipPercentage = Number(tipInput.value) / 100

    // get the total tip amount
    const tipAmount = bill * tipPercentage
    
    // calculate the total (tip amount + bill)
    const total = bill + tipAmount

    // calculate the per person total (total divided by number of people)
    const perPersonTotal = total / numberOfPeople 
    
    // update the perPersonTotal on DOM & show it to user
    perPersonTotalDiv.innerText = `$ ${perPersonTotal.toFixed(2)}`      // upto 2 decimal places
    // perPersonTotalDiv.innerText = `$ ${perPersonTotal.toLocaleString('en-US')}`      // upto 2 decimal places

}

// Splits the bill between more people
const increasePeople = () => {
    // increment the amount of people
    numberOfPeople++

    // update the DOM with the new number of people
    numberOfPeopleDiv.innerText = numberOfPeople

    // calculate the bill based on the new number of people
    calculateBill()

}

// Splits the bill between fewer people
const decreasePeople = () => {
    // guard clause
    // if amount is 1 or less simply return
    // (a.k.a you can't decrease the no. of people to 0 or negative)
    if (numberOfPeople === 1) {
        // alert('Hey, you cannot have less than 1 person!')
        throw 'Hey, you cannot have less than 1 person!'
        return;
    }

    // decreament the amount of People
    numberOfPeople--

    // update the DOM with the new number of people
    numberOfPeopleDiv.innerText = numberOfPeople

    // calculate the bill based on the new number of people
    calculateBill()

}