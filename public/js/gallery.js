const out =300;
/* document.querySelector("input").setAttribute("onclick", "cl()");

function cl() {
    document.querySelector("iframe").contentDocument.body.querySelector("img").src = "";
} */

function cl() {
     document.querySelector("div").querySelector("img").style.left = "30vw";
     document.querySelector("div").querySelector("img").style.height = "calc(2vw + 3em)";

     document.querySelector("div").style.height = "4em";
     document.querySelector("div").style.padding = "1em";
     
     document.querySelector("iframe").style.width = 0;
setTimeout(() => {
    document.querySelector("div").querySelector("img").style.position = "initial";

    document.querySelector("div").style.height = "initial";
    
    document.querySelector("iframe").contentDocument.body.querySelector("img").src = "";
}, 400)
    
}

function ch(){
        document.querySelector("div").style.height = "0";
        document.querySelector("div").style.padding = "0";
           document.querySelector("div").querySelector("img").style.position = "fixed";
           document.querySelector("div").querySelector("img").style.height = "1em";
    document.querySelector("div").querySelector("img").style.left = "10px"

        let c = document.querySelector("iframe");
        c.style.width = '90vw';
}