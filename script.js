let fromUnit = document.getElementById("fromUnit");
let toUnit = document.getElementById("toUnit");
let unitList1 = document.getElementById("unitList1");
let unitList2 = document.getElementById("unitList2");
let unitList1Children = unitList1.querySelectorAll(":scope > div");
let unitList2Children = unitList2.querySelectorAll(":scope > div");
let nameTemp1 = document.getElementById("nameTemp1");
let nameTemp2 = document.getElementById("nameTemp2");
let inputNum = document.getElementById("inputNum");
let convertBtn = document.getElementById("convert");
let result = document.getElementById("result");

fromUnit.addEventListener("click", () => {
  unitList1.classList.toggle("hidden");
});

toUnit.addEventListener("click", () => {
  unitList2.classList.toggle("hidden");
});

unitList1Children.forEach((child) => {
  child.addEventListener("click", () => {
    nameTemp1.innerHTML = child.innerHTML;
    unitList1.classList.toggle("hidden");
    removeDisable();
  });
});

inputNum.addEventListener("input", () => {
  removeDisable();
});

unitList2Children.forEach((child) => {
  child.addEventListener("click", () => {
    nameTemp2.innerHTML = child.innerHTML;
    unitList2.classList.toggle("hidden");
    removeDisable();
  });
});

convertBtn.addEventListener("click", convertTemp);

/* functions */

function removeDisable() {
  let inputValue = inputNum.value.trim();
  let isValidNum = !isNaN(Number(inputValue)) && inputValue !== "";

  if (nameTemp1.innerHTML === nameTemp2.innerHTML) {
    convertBtn.classList.add("disabled");
    convertBtn.disabled = true;
    return;
  }

  if (
    nameTemp1.innerHTML !== "From Unit" &&
    nameTemp2.innerHTML !== "To Unit" &&
    isValidNum
  ) {
    console.log("works?");
    convertBtn.classList.remove("disabled");
    convertBtn.disabled = false;
  } else {
    console.log("works?");
    convertBtn.classList.add("disabled");
    convertBtn.disabled = true;
  }
}

function convertTemp() {
  function celsiusToFahrenheit(celsius) {
    return Number(celsius) * 1.8 + 32;
  }

  function celsiusToKelvin(celsius) {
    return Number(celsius) + 273.15;
  }

  function fahrenheitToCelsius(fahrenheit) {
    return ((Number(fahrenheit) - 32) * 5) / 9;
  }

  function fahrenheitToKelvin(fahrenheit) {
    return ((Number(fahrenheit) - 32) * 5) / 9 + 273.15;
  }

  function kelvinToCelsius(kelvin) {
    return Number(kelvin) - 273.15;
  }

  function kelvinToFahrenheit(kelvin) {
    return (Number(kelvin) - 273.15) * 1.8 + 32;
  }

  if (
    nameTemp1.innerHTML === "Celsius" &&
    nameTemp2.innerHTML === "Fahrenheit"
  ) {
    result.innerHTML = `${inputNum.value} ${
      nameTemp1.innerHTML
    } is ${celsiusToFahrenheit(inputNum.value).toFixed(2)} ${
      nameTemp2.innerHTML
    }`;
    return;
  }

  if (nameTemp1.innerHTML === "Celsius" && nameTemp2.innerHTML === "Kelvin") {
    result.innerHTML = `${inputNum.value} ${
      nameTemp1.innerHTML
    } is ${celsiusToKelvin(inputNum.value).toFixed(2)} ${nameTemp2.innerHTML}`;
    return;
  }

  if (
    nameTemp1.innerHTML === "Fahrenheit" &&
    nameTemp2.innerHTML === "Celsius"
  ) {
    result.innerHTML = `${inputNum.value} ${
      nameTemp1.innerHTML
    } is ${fahrenheitToCelsius(inputNum.value).toFixed(2)} ${
      nameTemp2.innerHTML
    }`;
    return;
  }

  if (
    nameTemp1.innerHTML === "Fahrenheit" &&
    nameTemp2.innerHTML === "Kelvin"
  ) {
    result.innerHTML = `${inputNum.value} ${
      nameTemp1.innerHTML
    } is ${fahrenheitToKelvin(inputNum.value).toFixed(2)} ${
      nameTemp2.innerHTML
    }`;
    return;
  }

  if (nameTemp1.innerHTML === "Kelvin" && nameTemp2.innerHTML === "Celsius") {
    result.innerHTML = `${inputNum.value} ${
      nameTemp1.innerHTML
    } is ${kelvinToCelsius(inputNum.value).toFixed(2)} ${nameTemp2.innerHTML}`;
    return;
  }

  if (
    nameTemp1.innerHTML === "Kelvin" &&
    nameTemp2.innerHTML === "Fahrenheit"
  ) {
    result.innerHTML = `${inputNum.value} ${
      nameTemp1.innerHTML
    } is ${kelvinToFahrenheit(inputNum.value).toFixed(2)} ${
      nameTemp2.innerHTML
    }`;
    return;
  }
}
