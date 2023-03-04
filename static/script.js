


// script(type = 'text/javascript').
window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 180 || document.documentElement.scrollTop > 180) {
        document.getElementById("navbar").style.background = "rgb(248, 217, 217)";
        document.getElementById("btn").style.opacity = "1";
    }
    else {
        document.getElementById("navbar").style.background = "none";
        document.getElementById("btn").style.opacity = "1";
    }
}

function UpScroll() {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
}


function about() {
    document.querySelector('#about').scrollIntoView({
        behavior: 'smooth'
    });
}
function service() {
    document.querySelector('#service').scrollIntoView({
        behavior: 'smooth'
    });
}
function Class() {
    document.querySelector('#Class').scrollIntoView({
        behavior: 'smooth'
    });
}




