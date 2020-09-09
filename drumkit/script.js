document.addEventListener("DOMContentLoaded", function(event) { 
    document.addEventListener("keydown", ({keyCode}) => {
            let item = document.getElementsByClassName("drumkit-button")[keyCodeEnum[keyCode]]
            item.classList.add("yellow-border")
    })

    document.addEventListener("keyup", () => {
        let items = document.getElementsByClassName("drumkit-button");
        for(let i = 0; i < items.length; i++) {
            items[i].classList.remove("yellow-border");
        }
    })
  });

const keyCodeEnum = {
    65: 0,
    83: 1,
    68: 2,
    70: 3,
    71: 4,
    72: 5,
    74: 6,
    75: 7,
    76: 8,
}