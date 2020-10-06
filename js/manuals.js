let manCont = document.getElementById('content');
let buttonS = document.getElementById('show');
let inp = document.getElementById('command');

inp.addEventListener('keyup', function(event) {
    if (event.keyCode === 13) {
        buttonS.click();
    }
});

// create html: groff ls.txt -Thtml > ls.html

buttonS.addEventListener('click', function() {
    let request = new XMLHttpRequest();
    request.open('GET', 'manpages/' + inp.value + '.html', true);

    request.onload = function() {
      if (this.status >= 200 && this.status < 400) {
        // Success!
        manCont.innerHTML = this.response;
      } else {
        // We reached our target server, but it returned an error
        manCont.innerHTML = 'Not Found!';
      }
    };

    request.onerror = function() {
        manCont.innerHTML = 'Cannot connect!';
      // There was a connection error of some sort
    };

    request.send();   
});
