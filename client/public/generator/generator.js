const upperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const lowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const symbols = ["#", "$", "%", "&", "@", "?"];

const upperCaseObject = {
  array: upperCase,
  checkBox: false,
};

const lowerCaseObject = {
  array: lowerCase,
  checkBox: false,
};

const numbersObject = {
  array: numbers,
  checkBox: false,
};

const symbolsObject = {
  array: symbols,
  checkBox: false,
};

console.log(document.querySelector("#copy-button"));
console.log("abcd");
document.querySelector("#copy-button").addEventListener("click", function () {
  let textarea = document.querySelector("#gen-password");
  textarea.select();
  navigator.clipboard.writeText(textarea.value);
});

for (let i = 0; i < document.querySelectorAll(".checkbox").length; i++) {
  const checkbox = document.querySelectorAll(".checkbox")[i];
  checkbox.addEventListener("click", function (event) {
    handleCheckBoxClick(event.target);
  });
}

function handleCheckBoxClick(checkbox) {
  if (checkbox.name === "check-uppercase")
    upperCaseObject.checkBox = checkbox.checked;
  else if (checkbox.name === "check-lowercase")
    lowerCaseObject.checkBox = checkbox.checked;
  else if (checkbox.name === "check-numbers")
    numbersObject.checkBox = checkbox.checked;
  else if (checkbox.name === "check-symbols")
    symbolsObject.checkBox = checkbox.checked;

  console.log(allArray);
}

const allArray = [
  upperCaseObject,
  lowerCaseObject,
  numbersObject,
  symbolsObject,
];

console.log(allArray);

function getRandom(arrayLength) {
  const rand = Math.floor(Math.random() * arrayLength);
  return rand;
}

// function doAlert(checkBox){
// alert("hii")
// }

document
  .querySelector(".generate-button")
  .addEventListener("click", function () {
    let Password = "";
    const passwordLength = document.querySelector("#password-length").value;
    for (let i = 0; i < passwordLength; i++) {
      const filteredArray = allArray.filter((array) => {
        return !array.checkBox;
      });

      const randomArray =
        filteredArray[Math.floor(Math.random() * filteredArray.length)].array;
      randomIndex = getRandom(randomArray.length);
      Password = Password + randomArray[randomIndex];
    }

    document.querySelector(".generated-password").innerHTML = Password;
  });
