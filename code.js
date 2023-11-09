function main(){
    facebookButton()
    igButton()
    githubButton()

}

function bgAnimation(){

}

function facebookButton(){
    let button = document.getElementById("fbButton");
    button.addEventListener("click", () => {
        window.open("https://www.facebook.com/christianrhyss.jimenez123");
    });
}

function igButton(){
    let button = document.getElementById("igButton");
    button.addEventListener("click", () => {
        window.open("https://www.instagram.com/rjmn0208/");
    });
}

function githubButton(){
    let button = document.getElementById("githubButton");
    button.addEventListener("click", () => {
        window.open("https://github.com/rjmn02");
    });
}


main()