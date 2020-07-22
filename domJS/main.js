//console.log(45);
//alert("santo");



// getElementById
var first = document.getElementById('first');
first.style.color = 'red';
first.style.backgroundColor = '#fff';
first.style.fontSize = '30px';

// getElementsByClassName
var authors = document.getElementsByClassName('author');
//console.log(authors);
for (var i = 0; i < authors.length; i++) {
    var element = authors[i];
    console.log(element);
    console.log(element.innerHTML);
    element.style.color = 'tomato';
    element.style.backgroundColor = 'lightblue';
    //element.innerHTML = 'change' + i;
    //element.innerHTML = 'change' + (i + 1);
    console.log(element.innerHTML);
}



//  querySelectorAll     querySelector
var authors = document.querySelectorAll('.special h3');
//console.log(authors);
for (var i = 0; i < authors.length; i++) {
    var element = authors[i];
    console.log(element);
    console.log(element.innerHTML);
    element.style.color = 'tomato';
    element.style.backgroundColor = 'lightblue';
    //element.innerHTML = 'change' + i;
    element.innerHTML = 'change' + (i + 1);
    console.log(element.innerHTML);
}


// tagName
var tagName = document.getElementsByTagName('article');
tagName[0].style.fontSize = '20px';

//=========attribute set
var attr = document.querySelector('h3');
attr.setAttribute('title', 'This is a title tag'); 