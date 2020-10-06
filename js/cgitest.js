let showDiv = document.getElementById('show');
let niceButton = document.getElementById('nice');
let sthInput = document.getElementById('sth');

niceButton.addEventListener('click', function() {
    let request = new XMLHttpRequest();
    request.open('POST', '/cgi-bin/cginame');

    request.onload = function() {
      if (this.status >= 200 && this.status < 400) {
        // Success!
        showDiv.innerHTML = this.response;
      } else {
        // We reached our target server, but it returned an error
        showDiv.innerHTML = 'Not Found!';
      }
    };

    request.onerror = function() {
        manCont.innerHTML = 'Cannot connect!';
      // There was a connection error of some sort
    };

    request.send(sthInput.value);
});
