function change_css() {
    var menu = document.getElementsByClassName("menu");
    var temp = '90deg';
    var rot = menu[0].style.rotate;
    console.log(rot);
    var dropdown = document.getElementById('dropdown');

    if (rot == temp) {
        menu[0].style = 'rotate: 0';
        document.getElementById("menuImg").src = "images/menu.png";
        dropdown.style.animation = 'up 0.8s ease-out 1';

        dropdown.addEventListener("animationend", () => {
            dropdown.style["height"] = 0;
        }, { once: true });

    } else {
        menu[0].style = 'rotate: ' + temp;
        document.getElementById("menuImg").src = "images/cross.png";
        dropdown.style.animation = 'down 0.8s ease-in 1';

        dropdown.addEventListener("animationend", () => {
            dropdown.style["height"] = '800px';
        }, { once: true });
    }
}

/* ********************************Slider*********************************************** */

/* ********************Variables*************** */
var float = document.getElementById('floatingDot');
var pauseBtn = document.getElementsByClassName('pause');
var playBtn = document.getElementsByClassName('play');
var heroImg = document.getElementById('hero_img');
var heroH1 = document.getElementById('heroH1');
var heroP = document.getElementById('heroP');
var heroButton = document.getElementById('heroButton');
var heroContainer = document.getElementById('hero_container');
var heroContent = document.getElementsByClassName('hero_content');
const imgArr = ['hero_watch.jpg', 'hero_camera.jpg', 'hero_headphone.jpg'];
const transitionArr2to3 = ['0px 0px','1px -2px','2px -4px','3px -6px','4px -7px','5px -8px','6px -9px','7px -10px','8px -11px','9px -12px','10px -13px','11px -13px','12px -13px','13px -13px','14px -13px','15px -13px','16px -13px','17px -12px','18px -11px','19px -10px','20px -9px','21px -8px','22px -7px','23px -6px','24px -4px','25px -2px','26px 0px'];
const transitionArr3to2 = ['26px 0px','25px -2px','24px -4px','23px -6px','22px -7px','21px -8px','20px -9px','19px -10px','18px -11px','17px -12px','16px -13px','15px -13px','14px -13px','13px -13px','12px -13px','11px -13px','10px -13px','9px -12px','8px -11px','7px -10px','6px -9px','5px -8px','4px -7px','3px -6px','2px -4px','1px -2px','0px 0px']
const transitionArr1to2 = ['-26px 0px','-25px -2px','-24px -4px','-23px -6px','-22px -7px','-21px -8px','-20px -9px','-19px -10px','-18px -11px','-17px -12px','-16px -13px','-15px -13px','-14px -13px','-13px -13px','-12px -13px','-11px -13px','-10px -13px','-9px -12px','-8px -11px','-7px -10px','-6px -9px','-5px -8px','-4px -7px','-3px -6px','-2px -4px','-1px -2px','0px 0px']
const transitionArr2to1 = ['0px 0px','-1px -2px','-2px -4px','-3px -6px','-4px -7px','-5px -8px','-6px -9px','-7px -10px','-8px -11px','-9px -12px','-10px -13px','-11px -13px','-12px -13px','-13px -13px','-14px -13px','-15px -13px','-16px -13px','-17px -12px','-18px -11px','-19px -10px','-20px -9px','-21px -8px','-22px -7px','-23px -6px','-24px -4px','-25px -2px','-26px 0px']
const opacityArr = ['0','0.1','0.2','0.3','0.4','0.5','0.6','0.7','0.8','0.9','1'];
const opacityArrRev = ['1','0.9','0.8','0.7','0.6','0.5','0.4','0.3','0.2','0.1','0'];
const positionArr = ['0%','2%','4%','6%','8%','10%','12%','14%','16%','18%','20%','22%','24%','26%','28%','30%','32%','34%','36%','38%','40%','42%','44%','46%','48%','50%','52%','54%','55%','56%','58%','60%','62%','65%'];
var i = 0;
var pause = false;


if (window.innerWidth < 576) {
    heroImg.src = 'images/mobile/' + imgArr[0];
} else if (window.innerWidth < 960) {
    heroImg.src = 'images/tablet/' + imgArr[0];
} else if (window.innerWidth < 1440) {
    heroImg.src = 'images/small_desk/' + imgArr[0];
} else {
    heroImg.src = 'images/large_desk/' + imgArr[0];
}

/* ********************Animations*************** */
function imgOutAnimation() {
    for (var a = 0; a <= opacityArrRev.length - 1; a++) {
        imgOut(a);
    }
}
function imgOut(a) {
    setTimeout(() => {
        heroImg.style.opacity = opacityArrRev[a];
    }, a * 50);
}

function imgInAnimation() {
    for (var a = 0; a <= opacityArr.length - 1; a++) {
        imgIn(a);
    }
}
function imgIn(a) {
    setTimeout(() => {
        heroImg.style.opacity = opacityArr[a];
    }, a * 50);
}

function dot1Animation() {
    document.getElementById('dot1').style.translate = '0px 3px';
    setTimeout(() => { document.getElementById('dot1').style.translate = '0 0';}, 100);
}

function dot2Animation() {
    document.getElementById('dot2').style.translate = '0px 3px';
    setTimeout(() => { document.getElementById('dot2').style.translate = '0 0';}, 100);
}

function dot3Animation() {
    document.getElementById('dot3').style.translate = '0px 3px';
    setTimeout(() => { document.getElementById('dot3').style.translate = '0 0';}, 100);
}

function dot1to2Animation() {
    dot1Animation();
    for (var a = 0; a <= transitionArr1to2.length - 1; a++) {
        dot1to2(a);
    }
    setTimeout(() => { dot2Animation();}, 945);
}
function dot1to2(a) {
    setTimeout(() => {
        float.style.translate = transitionArr1to2[a];
    }, a * 35);
}

function dot2to1Animation() {
    dot2Animation();
    for (var a = 0; a <= transitionArr2to1.length - 1; a++) {
        dot2to1(a);
    }
    setTimeout(() => { dot1Animation();}, 945);
}
function dot2to1(a) {
    setTimeout(() => {
        float.style.translate = transitionArr2to1[a];
    }, a * 35);
}

function dot2to3Animation() {
    dot2Animation();
    for (var a = 0; a <= transitionArr2to3.length - 1; a++) {
        dot2to3(a);
    }
    setTimeout(() => { dot3Animation();}, 945);
}
function dot2to3(a) {
    setTimeout(() => {
        float.style.translate = transitionArr2to3[a];
    }, a * 35);
}

function dot3to2Animation() {
    dot3Animation();
    for (var a = 0; a <= transitionArr3to2.length - 1; a++) {
        dot3to2(a);
    }
    setTimeout(() => { dot2Animation();}, 945);
}
function dot3to2(a) {
    setTimeout(() => {
        float.style.translate = transitionArr3to2[a];
    }, a * 35);
}

function textOutAnimation() {
    for (var a = 0; a <= opacityArrRev.length - 1; a++) {
        textOut(a);
    }
}
function textOut(a) {
    setTimeout(() => {
        heroH1.style.opacity = opacityArrRev[a];
        heroButton.style.opacity = opacityArrRev[a];
    }, a * 25);
}

function textInAnimation() {
    for (var a = 0; a <= opacityArr.length - 1; a++) {
        textIn(a);
    }
}
function textIn(a) {
    setTimeout(() => {
        heroH1.style.opacity = opacityArr[a];
        heroButton.style.opacity = opacityArr[a];
    }, a * 25);
}

function pauseAnimation() {
    for (var a = 0; a <= opacityArrRev.length - 1; a++) {
        pauseOut(a);
    }
}
function pauseOut(a) {
    setTimeout(() => {
        pauseBtn[0].style.opacity = opacityArrRev[a];
    }, a * 25);
}

function playAnimation() {
    for (var a = 0; a <= opacityArrRev.length - 1; a++) {
        playOut(a);
    }
}
function playOut(a) {
    setTimeout(() => {
        playBtn[0].style.opacity = opacityArrRev[a];
    }, a * 25);
}

function positionAnimationRight() {

    if (window.innerWidth < 960) {
        for (var a = 0; a <= 28; a++) {
            positionRight(a);
        }
        setTimeout(function() { heroContent[0].style['right'] = '0%';}, 840);
        setTimeout(function() { heroH1.style['translate'] = '0 -1000%';}, 860);
        setTimeout(function() { heroH1.innerHTML = 'Explore our new Cameras series';}, 1040);
        setTimeout(function() { heroH1.style['translate'] = '0 0';}, 1040);
        setTimeout(function() { heroButton.style['translate'] = '1000% 0';}, 860);
        setTimeout(function() { heroButton.innerHTML = 'See All Cameras';}, 1040);
        setTimeout(function() { heroButton.style['translate'] = '0 0';}, 1040);

    } else if (window.innerWidth < 1440) {
        for (var a = 0; a <= 26; a++) {
            positionRight(a);
        }
        setTimeout(function() { heroContent[0].style['right'] = '0%';}, 750);
        setTimeout(function() { heroH1.style['translate'] = '0 -1000%';}, 770);
        setTimeout(function() { heroH1.innerHTML = 'Explore our new Cameras series';}, 950);
        setTimeout(function() { heroH1.style['translate'] = '0 0';}, 950);
        setTimeout(function() { heroButton.style['translate'] = '1000% 0';}, 770);
        setTimeout(function() { heroButton.innerHTML = 'See All Cameras';}, 950);
        setTimeout(function() { heroButton.style['translate'] = '0 0';}, 950);

    } else {
        for (var a = 0; a <= positionArr.length - 1; a++) {
            positionRight(a);
        }
        setTimeout(function() { heroContent[0].style['right'] = '0%';}, 1080);
        setTimeout(function() { heroH1.style['translate'] = '0 -1000%';}, 1100);
        setTimeout(function() { heroH1.innerHTML = 'Explore our new Cameras series';}, 1300);
        setTimeout(function() { heroH1.style['translate'] = '0 0';}, 1300);
        setTimeout(function() { heroButton.style['translate'] = '1000% 0';}, 1100);
        setTimeout(function() { heroButton.innerHTML = 'See All Cameras';}, 1300);
        setTimeout(function() { heroButton.style['translate'] = '0 0';}, 1300);
    }
}
function positionRight(a) {
    setTimeout(() => {
        heroContent[0].style['right'] = "";
        heroContent[0].style['left'] = positionArr[a];
    }, a * 30);
}

function positionAnimationLeft() {
    
    if (window.innerWidth < 960) {
        for (var a = 0; a <= 28; a++) {
            positionLeft(a);
        }
        setTimeout(function() { heroContent[0].style['left'] = '0%';}, 840);
        setTimeout(function() { heroH1.style['translate'] = '0 -1000%';}, 860);
        setTimeout(function() { heroH1.innerHTML = 'Explore our new Headphones series';}, 1040);
        setTimeout(function() { heroH1.style['translate'] = '0 0';}, 1040);
        setTimeout(function() { heroButton.style['translate'] = '-1000% 0';}, 860);
        setTimeout(function() { heroButton.innerHTML = 'See All Headphones';}, 1040);
        setTimeout(function() { heroButton.style['translate'] = '0 0';}, 1040);

    } else if (window.innerWidth < 1440) {
        for (var a = 0; a <= 25; a++) {
            positionLeft(a);
        }
        setTimeout(function() { heroContent[0].style['left'] = '0%';}, 750);
        setTimeout(function() { heroH1.style['translate'] = '0 -1000%';}, 770);
        setTimeout(function() { heroH1.innerHTML = 'Explore our new Headphones series';}, 950);
        setTimeout(function() { heroH1.style['translate'] = '0 0';}, 950);
        setTimeout(function() { heroButton.style['translate'] = '-1000% 0';}, 770);
        setTimeout(function() { heroButton.innerHTML = 'See All Headphones';}, 950);
        setTimeout(function() { heroButton.style['translate'] = '0 0';}, 950);

    } else {
        for (var a = 0; a <= positionArr.length - 1; a++) {
            positionLeft(a);
        }
        setTimeout(function() { heroContent[0].style['left'] = '0%';}, 1080);
        setTimeout(function() { heroH1.style['translate'] = '0 -1000%';}, 1100);
        setTimeout(function() { heroH1.innerHTML = 'Explore our new Headphones series';}, 1300);
        setTimeout(function() { heroH1.style['translate'] = '0 0';}, 1300);
        setTimeout(function() { heroButton.style['translate'] = '-1000% 0';}, 1100);
        setTimeout(function() { heroButton.innerHTML = 'See All Headphones';}, 1300);
        setTimeout(function() { heroButton.style['translate'] = '0 0';}, 1300);
    }
}
function positionLeft(a) {
    setTimeout(() => {
        heroContent[0].style['left'] = "";
        heroContent[0].style['right'] = positionArr[a];
    }, a * 30);
}

/* ********************Code*************** */
function slider() {
    if (!pause) {
        if (i < 2) {
            i++
        } else {
            i = 0;
        }
        
        imgOutAnimation();
        setTimeout(() =>{imgInAnimation();}, 510);

        if (window.innerWidth <= 576) {

            if (i == 0) {
                textOutAnimation()
                setTimeout(function() { heroH1.innerHTML = 'Explore our new Smart Watches series';}, 490);
                setTimeout(function() { heroButton.innerHTML = 'See All Watches';}, 490);
                setTimeout(function() { textInAnimation();}, 500);

                if (float.style.translate == '-26px') {
                    dot1to2Animation();
                } else {
                    dot3to2Animation();
                }
            
            } else if (i == 1) {
                dot2to3Animation();
                textOutAnimation()
                setTimeout(function() { heroH1.innerHTML = 'Explore our new Cameras series';}, 490);
                setTimeout(function() { heroButton.innerHTML = 'See All Cameras';}, 490);
                setTimeout(function() { textInAnimation();}, 500);

                if (float.style.translate == '0px' || float.style.translate == 0) {
                    dot2to3Animation();
                } else  {
                    dot1to2Animation();
                    setTimeout(function() { dot2to3Animation();}, 945);
                }
            
            } else {
                textOutAnimation()
                setTimeout(function() { heroH1.innerHTML = 'Explore our new Headphones series';}, 490);
                setTimeout(function() { heroButton.innerHTML = 'See All Headphones';}, 490);
                setTimeout(function() { textInAnimation();}, 500);

                if (float.style.translate == '0px' || float.style.translate == 0) {
                    dot2to1Animation();
                } else  {
                    dot3to2Animation();
                    setTimeout(function() { dot2to1Animation();}, 945);
                }
            }
            
            setTimeout(function() {heroImg.src = 'images/mobile/' + imgArr[i];}, 510);
            
        } else if (window.innerWidth <= 960) {

            if (i == 0) {
                heroContainer.style['color'] = "#ffffff";
                heroContent[0].style['left'] = '0%';
                heroContent[0].style['right'] = "";
                heroButton.style.color = "#ffffff";
                setTimeout(function() { heroH1.style['translate'] = '0 -1000%';}, 1100);
                setTimeout(function() { heroH1.innerHTML = 'Explore our new Smart Watches series';}, 1300);
                setTimeout(function() { heroH1.style['translate'] = '0 0';}, 1300);
                setTimeout(function() { heroButton.style['translate'] = '-1000% 0';}, 1100);
                setTimeout(function() { heroButton.innerHTML = 'See All Watches';}, 1300);
                setTimeout(function() { heroButton.style['translate'] = '0 0';}, 1300);

                if (float.style.translate == '-26px') {
                    dot1to2Animation();
                } else {
                    dot3to2Animation();
                }
            
            } else if (i == 1) {
                heroContainer.style['color'] = "#000000";
                heroButton.style.color = "#000000";
                positionAnimationRight();

                if (float.style.translate == '0px' || float.style.translate == 0) {
                    dot2to3Animation();
                } else  {
                    dot1to2Animation();
                    setTimeout(function() { dot2to3Animation();}, 945);
                }
            
            } else {
                heroContainer.style['color'] = "#000000";
                heroButton.style.color = "#000000";
                positionAnimationLeft();

                if (float.style.translate == '0px' || float.style.translate == 0) {
                    dot2to1Animation();
                } else  {
                    dot3to2Animation();
                    setTimeout(function() { dot2to1Animation();}, 945);
                }
            }
            
            setTimeout(function() {heroImg.src = 'images/tablet/' + imgArr[i];}, 510);
            

        } else if(window.innerWidth <= 1440) {
            
            if (i == 0) {
                dot1to2Animation();
                heroContainer.style['color'] = "#ffffff";
                heroContent[0].style['left'] = '0%';
                heroContent[0].style['right'] = "";
                heroButton.style.color = "#ffffff";
                setTimeout(function() { heroH1.style['translate'] = '0 -1000%';}, 1100);
                setTimeout(function() { heroH1.innerHTML = 'Explore our new Smart Watches series';}, 1300);
                setTimeout(function() { heroH1.style['translate'] = '0 0';}, 1300);
                setTimeout(function() { heroButton.style['translate'] = '-1000% 0';}, 1100);
                setTimeout(function() { heroButton.innerHTML = 'See All Watches';}, 1300);
                setTimeout(function() { heroButton.style['translate'] = '0 0';}, 1300);

                if (float.style.translate == '-26px') {
                    dot1to2Animation();
                } else {
                    dot3to2Animation();
                }
            
            } else if (i == 1) {
                heroContainer.style['color'] = "#000000";
                heroButton.style.color = "#000000";
                positionAnimationRight();

                if (float.style.translate == '0px' || float.style.translate == 0) {
                    dot2to3Animation();
                } else  {
                    dot1to2Animation();
                    setTimeout(function() { dot2to3Animation();}, 945);
                }
            
            } else {
                heroContainer.style['color'] = "#000000";
                heroButton.style.color = "#000000";
                positionAnimationLeft();

                if (float.style.translate == '0px' || float.style.translate == 0) {
                    dot2to1Animation();
                } else  {
                    dot3to2Animation();
                    setTimeout(function() { dot2to1Animation();}, 945);
                }
            }
            
            setTimeout(function() {heroImg.src = 'images/small_desk/' + imgArr[i];}, 510);
        
        } else {
            
            if (i == 0) {
                dot1to2Animation();
                heroContainer.style['color'] = "#ffffff";
                heroContent[0].style['left'] = '0%';
                heroContent[0].style['right'] = "";
                heroButton.style.color = "#ffffff";
                setTimeout(function() { heroH1.style['translate'] = '0 -1000%';}, 920);
                setTimeout(function() { heroH1.innerHTML = 'Explore our new Smart Watches series';}, 1120);
                setTimeout(function() { heroH1.style['translate'] = '0 0';}, 1120);
                setTimeout(function() { heroButton.style['translate'] = '-1000% 0';}, 920);
                setTimeout(function() { heroButton.innerHTML = 'See All Watches';}, 1120);
                setTimeout(function() { heroButton.style['translate'] = '0 0';}, 1120);

                if (float.style.translate == '-26px') {
                    dot1to2Animation();
                } else {
                    dot3to2Animation();
                }
            
            } else if (i == 1) {
                heroContainer.style['color'] = "#000000";
                heroButton.style.color = "#000000";
                positionAnimationRight();

                if (float.style.translate == '0px' || float.style.translate == 0) {
                    dot2to3Animation();
                } else  {
                    dot1to2Animation();
                    setTimeout(function() { dot2to3Animation();}, 945);
                }
            
            } else {
                heroContainer.style['color'] = "#000000";
                heroButton.style.color = "#000000";
                positionAnimationLeft();

                if (float.style.translate == '0px' || float.style.translate == 0) {
                    dot2to1Animation();
                } else  {
                    dot3to2Animation();
                    setTimeout(function() { dot2to1Animation();}, 945);
                }
            }
            
            setTimeout(function() {heroImg.src = 'images/large_desk/' + imgArr[i];}, 510);
        }
    }
}

setInterval(slider, 5000);

document.getElementById('dot2').onclick = function () {
    i = 2;
    pause = false;
    slider();
    pause = true;
    pauseAnimation();
};

document.getElementById('dot3').onclick = function () {
    i = 0;
    pause = false;
    slider();
    pause = true;
    pauseAnimation();
};

document.getElementById('dot1').onclick = function () {
    i = 1;
    pause = false;
    slider();
    pause = true;
    pauseAnimation();
};

function mouseover() {
    if (!pause) {
        pauseBtn[0].style.opacity = 0.2;
        playBtn[0].style.opacity = 0;
    } else {
        playBtn[0].style.opacity = 0.2;
        pauseBtn[0].style.opacity = 0;
    }
}

function mouseout() {
    pauseBtn[0].style.opacity = 0;
    playBtn[0].style.opacity = 0;
}

function clik() {
    if (!pause) {
        pauseAnimation();
        pause = true;
    } else {
        playAnimation();
        pause = false;
    }
}
