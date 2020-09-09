document.addEventListener("DOMContentLoaded", function(event) { 
    document.addEventListener("keydown", ({keyCode}) => {
        if(keyCode === 65) {
            let item = document.getElementsByClassName("drumkit-button")[0]
            item.classList.add("yellow-border")
        }
    })

    document.addEventListener("keyup", () => {
        let items = document.getElementsByClassName("drumkit-button");
        for(let i = 0; i < items.length; i++) {
            items[i].classList.remove("yellow-border");
        }
    })
  });