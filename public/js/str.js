const
str = `Your Input 

${c = '"' + prompt("Tell A Gist About Tech?") + '"'}

${pr = 'Is Been Processed'}`;

function ann(i){
    b = document.getElementById('span');
    sp = document.createElement('span');
    sp.setAttribute('id', 'sp' + i);
    sp.innerText = str[i];
    b.appendChild(sp);
    if(i < str.length - 1){
        setTimeout(() => {ann(i+=1)}, 70);
    }else{
        setTimeout( () => {
        st(0);
        }, 1000);
    }
}

function st(i){
    document.getElementById('sp' + i).style.fontSize = '0';
    document.getElementById('sp' + i).style.textShadow = '0 0 7px cyan';
    if(i < str.length - 1){
        setTimeout(() => {st(++i)}, 70);
        // setTimeout(() => {
            na(document.getElementById('sp' + i), i);
        // }, 100);
        }else{
            // na(0);
            col(str.indexOf(c), c.length);
        }
}
let ex = 0
function na(ct, i){
        return setTimeout(() => {
            if (i >= str.indexOf(pr)){
                pr = 'Is Now Processed';
                ct.innerText = pr[ex++];
            }
            ct.style.fontSize = '1.3em';
			ct.innerText =  ct.innerText.toUpperCase();
            
            if ((i >= str.indexOf(c)) /* && i <c.length - 1 */){
                ct.style.fontWeight = "bold";
                }
            
        }, 700);
    // if(i < str.length - 1){
    //     setTimeout(() => {na(i+=1)}, 70);
    //     } 
}

function col(i, l){
    // let i=str.indexOf(c);
    
    s = document.getElementById('sp' + i);
    if (i <= (l + str.indexOf(c))){
        s.style.color = "red";
        s.style.textShadow = "0 0 7px gray";
        if (s.innerText !== "\u0020"){
            // s.style.borderBottom= '2px solid darkred';
        }
    }
    // s.style.fontFamily = "cooper black";
    if(i < str.length - 2){
        setTimeout(() => {
            col(i+=1, l);
        }, 30)
    }
}



let color = (i) => {
	sp = document.querySelectorAll('span')
    if (i < sp.length){
    sp[i].style.color = 'white';
	sp[i].style.borderBottom= 'initial';
	setTimeout(() => {color(i+=1)}, 30);
	
	}
}

let cap = (i) => {
	sp = document.querySelectorAll('span')
	if (i < sp.length){
    sp[i].innerText = sp[i].innerText.toLowerCase()
	setTimeout(() => {cap(i+=1)}, 30);
	}
}