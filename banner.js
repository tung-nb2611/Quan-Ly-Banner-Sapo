const urlGetRandomBanner = 'http://localhost:8080/api/banner-mapping/percentage/';
const urlPostClick = "http://localhost:8080/api/banners/clicks"
const urlSector = "http://localhost:8080/api/websiteID="
const urlPostView = "http://localhost:8080/api/banners/views";

function showImage(webID) {
    fetch(urlSector + webID + "/sections")
        .then(response => response.json())
        .then(data => {
            // data dang la cac khu vuc cua trang web
            data.forEach((item) => {
                fetch(urlGetRandomBanner + item.id).then(response => response.json())
                    .then(data => {
                        console.log("item cos div id : " + item.id)
                        console.log("section cua banner : " + data.sectionID)
                        if (item.id === data.sectionID) {
                            _displayItems(data, item.divId, item.id)
                        }
                    })
            });
        })
}



// divId la khi vuc do nguoi dung nhap vao
function _displayItems(banner, divId, sectionID) {
    let img = new Image();
    let a = document.createElement('a');
    const tBody = document.getElementById(divId);
    // let bannerID = banner.id;
    let urlWeb = banner.url;
    img.src = banner.imgUrl;

    if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
        _viewBanner(banner.id, sectionID, navigator.appVersion);
    }

    a.onclick = function (bannerID,) {
        _clickBanner(banner.id, sectionID, navigator.appVersion);
        window.open(urlWeb, '_blank');
    }

    tBody.appendChild(a);
    a.appendChild(img);
}

// id là id của thẻ a chứa ảnh banner đó, data là biến chứa thông tin về banner
function _clickBanner(bannerID, divId, browserName) {

    fetch(urlPostClick, {
        method: "POST", //  GET, POST, PUT, DELETE, etc.
        headers: {
            "Content-Type": "application/json" // for a string body, depends on body
        },
        body: JSON.stringify(
            {
                bannerId: bannerID,
                userClick: "Luong Van Minh",
                timeClick: new Date(),
                sectionId: divId,
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
            })
    });
}