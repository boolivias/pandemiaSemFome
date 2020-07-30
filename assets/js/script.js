window.onload = function () {
    //Navbar Animation
    document.addEventListener("scroll", () => {
        //Change type navbar
        const nav = document.querySelector(".navbar");
        if (window.scrollY) {
            nav.classList.add("navbar-shrink");
        }
        else {
            nav.classList.remove("navbar-shrink");
        }

        //Change item-active
        const sections = document.getElementsByTagName("section");
        for (const section of sections) {
            var top = section.offsetTop;
            var bottom = top + section.offsetHeight;
            if (window.scrollY + (window.innerHeight / 4) >= top &&
                window.scrollY + window.innerHeight <= bottom) {
                document.getElementsByClassName("item-active")[0].classList.remove("item-active");
                document.querySelector('[href="#' + section.id + '"]').classList.add("item-active");
            }
        }
    })

    // Open/close side menu in device mobile
    document.querySelector(".open-menu").addEventListener("click", () => {
        document.querySelector(".navbar").setAttribute("data-mobile-sideMenu", "show");

    });
    document.querySelector(".close-menu").addEventListener("click", () => {
        document.querySelector(".navbar").setAttribute("data-mobile-sideMenu", "hidden");

    });

    //Form input animation
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