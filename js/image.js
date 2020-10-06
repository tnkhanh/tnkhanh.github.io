let image = document.getElementById('image');
let buttonS = document.getElementById('show');
let inp = document.getElementById('image-url');

inp.addEventListener('keyup', function(event) {
    if (event.keyCode === 13) {
        buttonS.click();
    }
});

// create html: groff ls.txt -Thtml > ls.html

buttonS.addEventListener('click', function() {
    image.src = inp.value;
});
