<<<<<<< HEAD
const urlGetRandomBanner = 'http://localhost:8080/api/banner-mapping/percentage/';
const urlPostClick = "http://localhost:8080/api/clicks-banner"
const urlSector = "http://localhost:8080/api/websiteID="
const urlPostView = "http://localhost:8080/api/banners/views";

function showImage(webID) {
    fetch(urlSector + webID + "/sections")
        .then(response => response.json())
        .then(data => {
            data.forEach((item) => {
                fetch(urlGetRandomBanner + webID)
                    .then(response => response.json()
                        .then(banner => {
                            _displayItems(banner, item.divId, item.id)
=======
const urlGetRandomBanner = 'http://localhost:8080/api/banner-mapping/random/';
const urlPost = "http://localhost:8080/api/clicks-banner"
const urlSector = "http://localhost:8080/api/web_id="


function getAreaID(WebID) {

    fetch(urlSector + WebID + "/sections")
        .then(response => response.json())
        .then(data => {

            data.forEach((item) => {
                fetch(urlGetRandomBanner + WebID)
                    .then(response => response.json()
                        .then(img1 => {

                            _displayItems(img1, item.div_id)
>>>>>>> main
                        }))
            });
        })
}



<<<<<<< HEAD
// divId la khi vuc do nguoi dung nhap vao
function _displayItems(banner, divId, sectionID) {
    let img = new Image();
    let a = document.createElement('a');
=======

// areaID la khi vu do nguoi dung nhap vao
function _displayItems(img1, areaID) {
    var img = new Image();
    var a = document.createElement('a');
>>>>>>> main
    // console.log(area);  
    const tBody = document.getElementById(divId);

    a.href = banner.url;

    let bannerID = banner.id;

    let browserName = navigator.appVersion;

    img.src = banner.imgUrl;

    if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
        _viewBanner(bannerID, sectionID, browserName);
    }
    img.onclick = function () {
        _countClickBanner(bannerID, sectionID, browserName);
    }

    tBody.appendChild(a);
    a.appendChild(img);
}

// id là id của thẻ a chứa ảnh banner đó, data là biến chứa thông tin về banner
function _countClickBanner(bannerID, divId) {
    fetch(urlPostClick, {
        method: "POST", //  GET, POST, PUT, DELETE, etc.
        headers: {
            "Content-Type": "application/json" // for a string body, depends on body
        },
        body: JSON.stringify(
            {
                bannerID: bannerID,
                userClick: "Luong Van Minh",
                timeClick: new Date(),
<<<<<<< HEAD
                sectionID: divId,
                browserName: browserName
            })
    });
}

// hàm này để lấy thông tin views của banner
function _viewBanner(bannerID, sectionId, browserName) {
    fetch(urlPostView, {
        method: "POST", //  GET, POST, PUT, DELETE, etc.
        headers: {
            "Content-Type": "application/json" // for a string body, depends on body
        },
        body: JSON.stringify(
            {
                sectionID: sectionId,
                bannerID: bannerID,
                userView: "Luong Van Minh",
                timeView: new Date(),
                browserName: browserName
=======
                sectionID: 1,
>>>>>>> main
            })
    });
}