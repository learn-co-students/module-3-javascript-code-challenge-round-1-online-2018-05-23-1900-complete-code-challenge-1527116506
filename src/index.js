document.addEventListener('DOMContentLoaded', function() {
  const imageId = 13 //Enter your assigned imageId here
  const imageURL = `https://randopic.herokuapp.com/images/${imageId}`
  const likeURL = `https://randopic.herokuapp.com/likes/`
  const commentsURL = `https://randopic.herokuapp.com/comments/`

})

function getImage() {
  const req = new XMLHttpRequest()
  req.addEventListener("load", showImage);
  req.open("GET", 'https://randopic.herokuapp.com/images/13')
  req.send()
}

function showImage(event, data) {
  var response = JSON.parse(this.responseText)
  console.log(response)
  const content = $('.div_imagetranscrits').html('<img src="data:image/png;base64,' + response.url + '" />');
  document.getElementById("image").src = content
}
