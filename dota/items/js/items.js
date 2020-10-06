let allButton = document.getElementById('show-all');
let dButton = document.getElementsByClassName('det-button');
let det = document.getElementsByClassName('item-detail');

let show = 0; 

for (let i = 0; i < dButton.length; i++) {
    let big = dButton[i].parentNode.parentNode.getElementsByClassName('item-detail')[0];
    dButton[i].addEventListener('click', function() {
        if (big.style.display==='block') {
            big.style.display = 'none';
            dButton[i].innerHTML = 'Show';
        }
        else {
            big.style.display = 'block';
            dButton[i].innerHTML = 'Hide';
        }
    });
}

allButton.addEventListener('click', function() {
    if (show===0) {
        allButton.innerHTML = 'Hide all items';
        for (let i = 0; i < det.length; i++)
            det[i].style.display = 'block';

        for (let i = 0; i < dButton.length; i++) {
            dButton[i].innerHTML = 'Hide';
        }

        show = 1;
    }
    else {
        allButton.innerHTML = 'Show all items';
        for (let i = 0; i < det.length; i++)
            det[i].style.display = 'none';

        for (let i = 0; i < dButton.length; i++) {
            dButton[i].innerHTML = 'Show';
        }

        show = 0;
    }
});
