let display = document.getElementById("display");
let buttons = Array.from(document.getElementsByClassName("button"));


buttons.map((button) => {
    button.addEventListener("click", (e) => {
        switch (e.target.innerText) {
            case "AC":
                display.innerText = "";
                break;
            case "=":
                try {
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = "ERORR";
                }
                break;
            case "C":
                if (display.innerText) {
                    display.innerText = display.innerText.slice(0, -1);
                }
                else {
                    console.log("data is broken");
                }
                break;
            default:
                display.innerText += e.target.innerText;
        }
    });
});