const urlGetRandomBanner = 'http://localhost:8080/api/banner-status/random/';
const urlPost = "http://localhost:8080/api/clicks-banner"
function getImg(sectionID) {
    fetch(urlGetRandomBanner + sectionID)
        .then(response => response.json())
        .then(data => {
            _displayItems(data);

        })
        .catch(error => console.error('Unable to get banner data.', error));

}

var img = new Image();
var a = document.createElement('a');
// areaID la khi vu do nguoi dung nhap vao
var areaID = "img";
function _displayItems(data, areaID) {
    const tBody = document.getElementById(areaID);
    tBody.appendChild(a);
    a.appendChild(img);

    if (data.url != null) {
        a.href = data.url;
    }
    else {
        a.href = "https://www.youtube.com/watch?v=bYAGcLnVNRI"
    }

    img.src = data.imgUrl;
    var bannerID = data.id;

    img.onclick = function () {
        _countClickBanner(bannerID);
    }
}

// id là id của thẻ a chứa ảnh banner đó, data là biến chứa thông tin về banner
function _countClickBanner(bannerID) {
    fetch(urlPost, {
        method: "POST", //  GET, POST, PUT, DELETE, etc.
        headers: {
            "Content-Type": "application/json" // for a string body, depends on body
        },
        body: JSON.stringify(
            {
                code: 1,
                bannerID: bannerID,
                userClick: "Luong Van Minh",
                timeClick: new Date(),
                sectionID: sectionID
            })
    });
}