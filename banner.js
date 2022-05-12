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
                        }))
            });
        })
}




// areaID la khi vu do nguoi dung nhap vao
function _displayItems(img1, areaID) {
    var img = new Image();
    var a = document.createElement('a');
    // console.log(area);  
    const tBody = document.getElementById(areaID);
    tBody.appendChild(a);
    a.appendChild(img);

    if (img.url != null) {
        a.href = img1.url;
    }
    else {
        a.href = "https://www.youtube.com/watch?v=bYAGcLnVNRI"
    }

    img.src = img1.imgUrl;
    var bannerID = img1.id;

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
                sectionID: 1,
            })
    });
}