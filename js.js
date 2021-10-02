var nodeHtml = {
    one :document.getElementById("one"),
    two :document.getElementById("two"),
    three :document.getElementById("three"),
    four :document.getElementById("four"),
    five :document.getElementById("five"),
    six :document.getElementById("six"),
    seven :document.getElementById("seven"),
    eight :document.getElementById("eight"),
    nine :document.getElementById("nine"),
    selectBox :document.getElementsByClassName("duz__row__item")
}



function calcFuncs(){
    var oneValue = nodeHtml.one.value;
    var twoValue = nodeHtml.two.value;
    var threeValue = nodeHtml.three.value;
    var fourValue = nodeHtml.four.value;
    var fiveValue = nodeHtml.five.value;
    var sixValue = nodeHtml.six.value;
    var sevenValue = nodeHtml.seven.value;
    var eightValue = nodeHtml.eight.value;
    var nineValue = nodeHtml.nine.value;

    if ((oneValue == twoValue) && (oneValue == threeValue)) {
          return console.log("a success")
    }
    if ((fourValue == fiveValue) && (fourValue == sixValue)) {
        return  console.log(" b success")
    }
    if ((sevenValue == eightValue) && (sevenValue == nineValue)) {
        return console.log("c success")
    }



    if ((oneValue == fourValue) && (oneValue == sevenValue)) {
        return  console.log("d success")
    }
    if ((twoValue == fiveValue) && (twoValue == eightValue)) {
        return  console.log("e success")
    }
    if ((threeValue == sixValue) && (threeValue == nineValue)) {
        return  console.log("f success")
    }


    if ((oneValue == fiveValue) && (oneValue == nineValue)) {
        return console.log("g success")
    }
    if ((threeValue == fiveValue) && (threeValue == sevenValue)) {
        return console.log("h success")
    }

}

function init(){
    setEvents()
}

function setEvents(){
    var selectors = nodeHtml.selectBox;

    for( var i=1; i<=selectors.length; i++ ){
       selectors[i-1].addEventListener("change", calcFuncs)
    }
}


init()