var check = document.getElementsByClassName("fa-check");
var thumbDowns = document.getElementsByClassName("fa-thumbs-down");
var trash = document.getElementsByClassName("fa-trash");

Array.from(check).forEach(function(element,index) {
  element.addEventListener('click', function(){
    const song = this.parentNode.parentNode.childNodes[3].innerText
    console.log()

    fetch('addSong', {
      method: 'put',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
         "song":song,
         "true":true

      })
    })
    .then(response => {
      if (response.ok) return response.json()
    })
    .then(data => {
      console.log(data)
      window.location.reload(true)
    })
  });
});


Array.from(trash).forEach(function(element) {
  element.addEventListener('click', function(){
    const artist = this.parentNode.parentNode.childNodes[1].innerText
    console.log(artist)
    fetch('deleteSong', {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'artist':artist
      })
    }).then(function (response) {
      window.location.reload(true)
    })
  });
});

