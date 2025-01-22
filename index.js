const btnEl = document.getElementById("btn");
const bdayEl = document.getElementById("birthday");
const resultEl = document.getElementById("result");


function calculateAge() {
    const birthdayValue = bdayEl.value;
    if (birthdayValue === "") {
        alert("Please enter your birthday");
    }
    let age = getAge(birthdayValue);
    if(age < 0){
        alert("Birth date cannot be in the future!")
    }else{
    resultEl.innerText = `You are ${age} ${(age > 1 || age == 0) ? "years" : "year"} old`
    }
}

function getAge(birthdayValue) {
    const currentDate = new Date();
    const birthdayDate = new Date(birthdayValue)
    let age = currentDate.getFullYear() - birthdayDate.getFullYear();
    const month = currentDate.getMonth () - birthdayDate.getMonth()
    if (month < 0 ||
        (month === 0 && currentDate.getDate() < birthdayDate.getDate())) {
        age--;
    }
    return age;
}

btnEl.addEventListener("click", calculateAge);