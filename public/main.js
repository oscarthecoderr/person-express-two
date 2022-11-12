var download = document.getElementsByClassName("fa-download");
var thumbDowns = document.getElementsByClassName("fa-thumbs-down");
var trash = document.getElementsByClassName("fa-trash");

Array.from(download).forEach(function(element,index) {
  element.addEventListener('click', function(){
    const _id = this.parentNode.parentNode.getAttribute('id').trim()
    console.log(_id)
    fetch('download', {
      method: 'put',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
          _id

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

