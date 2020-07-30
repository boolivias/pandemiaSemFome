window.onload = function () {
    var inputs = document.getElementsByClassName("form-control");
    for (const input of inputs) {
        input.addEventListener("focus", () => {
            input.parentElement.style.transform = 'scale(1.05)';
            var sibling = input.previousElementSibling;
            sibling.style.fontSize = '.7rem';
            sibling.style.color = 'var(--purple-primary)';
            sibling.style.top = '-9px';
            sibling.style.zIndex = '1';
        });
        input.addEventListener("blur", () => {
            input.parentElement.style.transform = 'scale(1)';
            if (!input.value) {
                var sibling = input.previousElementSibling;
                sibling.style.fontSize = '.8rem';
                sibling.style.color = 'black';
                sibling.style.top = '.5rem';
                sibling.style.zIndex = '0';
            }
        })
    }
}