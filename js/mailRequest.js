
document.getElementById('feedback-block-submit').onclick = (e) => {
    e.preventDefault();
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://spoconnection-rating-server.herokuapp.com/email?email=' +
    document.getElementById('feedback-block-input').value);

    // xhr.setRequestHeader('access-control-allow-origin', '*');

    xhr.send();

    xhr.onload = function() {
    if (xhr.status != 200) {
      document.getElementById('mailFailMessageBlock').style.display='flex';
      setTimeout(() => {
        document.getElementById('mailFailMessageBlock').style.display='none';
      }, 5000);
    } else {
        document.getElementById('mailCorrectMessageBlock').style.display='flex';
        setTimeout(() => {
          document.getElementById('mailCorrectMessageBlock').style.display='none';
        }, 5000);
    }
    };
}