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
function _displayItems(data) {
    const tBody = document.getElementById('img');
    tBody.appendChild(a);
    a.appendChild(img);
    if (data.url != null) {
        a.href = data.url;
    }
    else {
        a.href = "https://www.youtube.com/watch?v=bYAGcLnVNRI"
    }
    img.src = data.imgUrl;

    // dang loi lay 2 lan
    img.onclick = _countClickBanner(data);

}

// id là id của thẻ a chứa ảnh banner đó, data là biến chứa thông tin về banner
function _countClickBanner(data) {
    let item = {
        code: 1,
        // sectionID: 1,
        bannerID: data.id,
        userClick: "Luong Van Minh",
        timeClick: new Date()
    }
    fetch(urlPost, {
        method: "POST", //  GET, POST, PUT, DELETE, etc.
        headers: {
            "Content-Type": "application/json" // for a string body, depends on body
        },
        body: JSON.stringify(
            {
                code: 1,
                bannerID: data.id,
                userClick: "Luong Van Minh",
                timeClick: new Date()
            })
    });
}