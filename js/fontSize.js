function increaseFontSize(){
    heading = document.getElementById("reg-form");

    style = window.getComputedStyle(heading, null).getPropertyValue('font-size');

    setSize = parseFloat(style);

    heading.style.fontSize = (setSize + 3) + 'px'; //increases the current font size of the page by 3px 

}

//decreases font size of the page
function decreaseFontSize(){
    heading = document.getElementById("reg-form");

    style = window.getComputedStyle(heading, null).getPropertyValue('font-size');

    setSize = parseFloat(style);

    heading.style.fontSize = (setSize - 3) + 'px'; //increases the current font size of the page by 3px 

}