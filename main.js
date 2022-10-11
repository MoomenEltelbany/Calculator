let display = document.querySelector(".display");

let allBtns = document.querySelectorAll("button");

const allBtnsArray = Array.from(allBtns);

allBtnsArray.forEach((ele) => {
    ele.addEventListener("click", (e) => {
        try {
            if (e.target.innerText === "AC") {
                display.innerText = "";
            } else if (e.target.innerText === "DEL") {
                display.innerText = display.innerText.slice(0, -1);
            } else if (e.target.innerText === "=") {
                display.innerText = eval(display.innerText);
            } else {
                display.innerText += e.target.innerText;
            }
        } catch {
            (error) => {
                console.log(error);
            };
        }
    });
});

let changeBtn = document.querySelector(".change");
let controller = document.querySelector(".controller");

changeBtn.onclick = () => {
    controller.classList.toggle("dark");
};
