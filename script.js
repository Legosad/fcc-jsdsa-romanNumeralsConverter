const number = document.querySelector("#number")
const convertBtn = document.querySelector("#convert-btn")
const output = document.querySelector("#output")

const sym = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]
const val = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]

convertBtn.addEventListener("click", () => {
    let num = parseInt(number.value);
    if (!num) {
        output.innerText = "Please enter a valid number";
        output.classList.remove("hidden")
        return
    }
    if (num < 0) {
        output.innerText = "Please enter a number greater than or equal to 1"
        output.classList.remove("hidden")
        return
    }
    if (num >= 4000) {
        output.innerText = "Please enter a number less than or equal to 3999";
        output.classList.remove("hidden")
        return
    }
    const result = convertToRoman(num);
    output.innerText = result;
    output.classList.remove("hidden")
})

const convertToRoman = (num) => {
    let roman = '';
    let i = 0;
    while (num > 0) {
        let div = Math.floor(num / val[i]);
        num -= div * val[i];
        roman += sym[i].repeat(div);
        i++;
    }
    return roman
}