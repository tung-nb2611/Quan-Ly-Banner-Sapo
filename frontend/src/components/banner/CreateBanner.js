import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/banner/CreateBanner.css";
import BannerService from "../../services/BannerService";
import SectorService from "../../services/sector/SectorService";
import * as BiIcons from "react-icons/bi";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../../common/Firebase";
import { v4 } from "uuid";
import { useHistory, useParams, useLocation } from "react-router-dom";
import SectionService from "../../services/section/SectionService";
import WebsiteService from "../../services/website/WebsiteService";

function CreateBanner(props) {
  let { id } = useParams();
  // id đâng
  const passedInfo = useLocation();
  const websiteId = passedInfo.websiteId;
  console.log(id);
  const history = useHistory();
  const [imageUpload, setImageUpload] = useState(null);
  const [bannerID, setBannerID] = useState("");
  const [name, setName] = useState("");
  const [imgPreview, setImgPreview] = useState("");
  const [urlLink, setUrlLink] = useState("");
  const [sectionId, setSectionId] = useState(id);
  const [websiteID, setWebsiteID] = useState(websiteId);
  const [sectionList, setSectionList] = useState([]);
  const [sectorList, setSectorList] = useState([]);
  const [sectorChoice, setSectorChoice] = useState("");

  let user = JSON.parse(window.localStorage.getItem("user"));

  useEffect(() => {
    if (user.roles[0] === "ROLE_USER") {
      WebsiteService.getWebsiteByUserAdd(user.username).then((response) => {
        const info = response.data;
        setSectionList(info);
      });
    } else {
      SectionService.getAllSections().then((response) => {
        setSectionList(response.data);
      });
    }
  }, []);

  useEffect(() => {
    if (typeof sectionId !== "undefined" && sectionId !== "") {
      SectorService.getSectorBySectionId(websiteID).then((response) => {
        setSectorList(response.data);
      });
    } else {
      console.log("nothing");
    }
  }, [websiteID]);

  const getImage = (e) => {
    if (e.target.files[0]) {
      setImgPreview(URL.createObjectURL(e.target.files[0])); //đặt bản xem trước
    } else console.log("file not found");
    setImageUpload(e.target.files[0]);
  };

  const handClickReturn = () => {
    history.push("/banner/manage");
  };

  const saveBanner = (e) => {
    e.preventDefault();
    if (imageUpload == null) {
      console.log("No Image");
      return;
    } else {
      console.log("Start");
      const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
      uploadBytes(imageRef, imageUpload).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
          let currentDay = new Date();
          let userAdd = "Luong Van Minh";
          let bannerItem = {
            sectionID: sectionId,
            code: bannerID,
            name: name,
            imgUrl: url,
            userAdd: userAdd,
            createAt: currentDay,
            url: urlLink,
          };
          console.log("banner => ", bannerItem);
          BannerService.createBanner(bannerItem).then((res) => {
            history.push("/banner/manage");
          });
        });
      });
      console.log("Finish ?");
    }
  };

  return (
    <div className="create-banner-container px-3">
      <div className="header-top">
        <p className="mt-3 text-left">
          {props.showAdminBoard ? <span>Admin</span> : <span>User</span>}
          <BiIcons.BiChevronRight size={18} />
          <Link className="text-decoration-none" to="/banner/manage">
            {" "}
            Quản lý banner{" "}
          </Link>
          <BiIcons.BiChevronRight size={18} />
          Thêm banner
        </p>
      </div>
      <hr />
      <div className="container">
        <div className="main-content">
          <div className="pb-4 text-center">
            <h2>Thêm Mới Banner</h2>
          </div>
          <div className="row">
            <div className="col-md-12 col-lg-6 pb-5">
              <form className="form">
                <div className="form-group">
                  <label className="col-3" htmlFor="sectionId">
                    Tên trang web
                  </label>
                  <select
                    className="col-9"
                    style={{ fontSize: "17px" }}
                    onChange={(e) => {
                      setWebsiteID(e.target.value);
                    }}
                  >
                    <option hidden></option>
                    {sectionList.map((section) => (
                      <option
                        value={section.id}
                        selected={section.id == websiteId ? true : false}
                      >
                        {section.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="mt-3 form-group">
                  <label className="col-3" htmlFor="sector">
                    Sector List
                  </label>
                  <select
                    className="col-9"
                    style={{ fontSize: "17px" }}
                    onChange={(e) => setSectorChoice(e.target.value)}
                  >
                    {sectorList.map((item) => (
                      <option
                        value={item.id}
                        selected={item.id == id ? true : false}
                      >
                        {item.divId}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="mt-3 form-group">
                  <label htmlFor="bannerID">Mã banner</label>
                  <input
                    className="form-control"
                    id="bannerID"
                    type="text"
                    name="bannerID"
                    placeholder="ex: B10"
                    value={bannerID}
                    onChange={(e) => setBannerID(e.target.value)}
                  />
                </div>
                <div className="mt-3 form-group">
                  <label htmlFor="name">Tên banner</label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Ví dụ: Cá tháng tư"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="mt-3 form-group">
                  <label htmlFor="name">Nhập liên kết</label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Liên kết url"
                    value={urlLink}
                    onChange={(e) => setUrlLink(e.target.value)}
                  />
                </div>
                <div className="mt-3 form-group">
                  <label id="upload-label" htmlFor="upload">
                    Chọn Hình Ảnh
                  </label>
                  <div className="custom-file">
                    <input
                      id="upload"
                      type="file"
                      className="form-control border-0"
                      accept=".png,.gif,.jpg,.jpeg"
                      onChange={getImage}
                    />
                  </div>
                </div>
              </form>
            </div>

            <div className="col-md-12 col-lg-6">
              <div>
                <h3 className="text-center">Ảnh minh họa</h3>
              </div>
              <div id="imgFrame">
                <img
                  className="img-rounded img-thumbnail"
                  src={imgPreview}
                  alt=""
                />
              </div>
              <div className="button">
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  name="btncancel"
                  onClick={() => handClickReturn()}
                >
                  Hủy
                </button>
                <button
                  type="submit"
                  className="btn btn-primary"
                  name="btnsubmit"
                  onClick={(e) => saveBanner(e)}
                >
                  Thêm banner
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateBanner;
