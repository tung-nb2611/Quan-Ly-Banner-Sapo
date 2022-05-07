const uri = 'http://localhost:8080/api/banner-status/random/';

function getImg(sectionID) {
    fetch(uri + sectionID)
        .then(response => response.json())
        .then(data => _displayItems(data))
        // .then(data => console.log("data: " + data.imgUrl))
        .catch(error => console.error('Unable to get items.', error));

}
var img = new Image();
var a = document.createElement('a');
function _displayItems(data) {
    const tBody = document.getElementById('img');
    tBody.appendChild(a);
    a.appendChild(img);
    a.href = "https://www.google.com.vn/?hl=vi";
    img.src = data.imgUrl;

}