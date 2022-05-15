import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../../styles/banner/CreateBanner.css';
import BannerService from "../../services/BannerService";
import SectorService from "../../services/sector/SectorService";
import * as BiIcons from "react-icons/bi";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../../common/Firebase";
import { v4 } from "uuid";
import { useHistory, useParams } from "react-router-dom";
import SectionService from "../../services/section/SectionService"

function CreateBanner(props) {
  let { id } = useParams();

  const history = useHistory();
  const [imageUpload, setImageUpload] = useState(null);
  const [bannerID, setBannerID] = useState('');
  const [name, setName] = useState('');
  const [imgPreview, setImgPreview] = useState('');
  const [urlLink, setUrlLink] = useState('');
  const [sectionId, setSectionId] = useState(id);
  const [sectionList, setSectionList] = useState([]);
  const [sectorList, setSectorList] = useState([]);
  const [sectorChoice, setSectorChoice] = useState('');

  useEffect(() => {
    SectionService.getAllSections().then((response) => {
      setSectionList(response.data);
    })
  }, []);

  useEffect(() => {
    if (typeof sectionId !== 'undefined' && sectionId !== '') {
      SectorService.getSectorBySectionId(sectionId).then((response) => {
        setSectorList(response.data);
      })
    } else {
      console.log("nothing");
    }
  }, [sectionId])


  const getImage = (e) => {
    if (e.target.files[0]) {
      setImgPreview(URL.createObjectURL(e.target.files[0]));  //đặt bản xem trước 
    } else console.log("file not found");
    setImageUpload(e.target.files[0]);
  }
  const handleChangeValidateBannerID = (e) => {

    if (!(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(e.target.value))) {
      document.getElementById("bannerID").style.display = "none";
      setBannerID(e.target.value)
    }
    else {
      document.getElementById("bannerID").style.display = "block";
      document.getElementById("bannerID").style.color = "red";
      document.getElementById("bannerID").innerText = "Banner id không được chứa các kí tự đặc biệt";
    }

  }
  const handleChangeValidateName = (e) => {

    if (!(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(e.target.value))) {
      document.getElementById("name").style.display = "none";
      setName(e.target.value)
    }
    else {
      document.getElementById("name").style.display = "block";
      document.getElementById("name").style.color = "red";
      document.getElementById("name").innerText = "Tên banner không được chứa các kí tự đặc biệt";
    }
  }
  const validateBeforeAdd = (e) => {
    if (bannerID.length === 0 || name.length === 0 || urlLink.length === 0 || imgPreview === 0) {
      if (bannerID.length === 0) {
        document.getElementById("bannerID").style.display = "block";
        document.getElementById("bannerID").style.color = "red";
        document.getElementById("bannerID").innerText = "Banner id không được để trống hoặc đang chứa kí tự không hợp lê";
      }
      else {
        document.getElementById("bannerID").style.display = "none";
      }

      if (name.length === 0) {
        document.getElementById("name").style.display = "block";
        document.getElementById("name").style.color = "red";
        document.getElementById("name").innerText = "Tên banner không được để trống";
      }
      else {
        document.getElementById("name").style.display = "none";
      }
      if (urlLink.length === 0) {
        document.getElementById("url").style.display = "block";
        document.getElementById("url").style.color = "red";
        document.getElementById("url").innerText = "Liên kết không được để trống";
      }
      else {
        document.getElementById("url").style.display = "none";
      }

      if (imgPreview.length === 0) {
        document.getElementById("image").style.display = "block";
        document.getElementById("image").style.color = "red";
        document.getElementById("image").innerText = "Tên banner không được để trống";
      }
      else {
        document.getElementById("image").style.display = "none";
      }
      return;
    }
    else {
      console.log("co chay vao day");
      saveBanner(e);
    }

  }
  const handClickReturn = () => {
    history.push('/banner/manage');
  }

  const saveBanner = (e) => {
    e.preventDefault();
    if (imageUpload == null) {
      console.log("No Image");
      return;
    }
    else {
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
            url: urlLink
          }
          console.log('banner => ', bannerItem);
          BannerService.createBanner(bannerItem).then(res => {
            history.push('/banner/manage');
          })
        });
      });
      console.log("Finish ?");
    }

  }
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
                  <label className="col-3" htmlFor="sectionId">Tên trang web</label>
                  <select className="col-9" style={{ fontSize: "17px" }} defaultValue={'DEFAULT'}
                    onChange={(e) => { setSectionId(e.target.value); }}>
                    <option value="DEFAULT" disabled>Choose a website ...</option>
                    <option hidden></option>
                    {sectionList.map((section) => (
                      <option
                        value={section.id}
                        selected={section.id == id ? true : false}
                      >
                        {section.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="mt-3 form-group">
                  <label className="col-3" htmlFor="sector">Sector List</label>
                  <select className="col-9" style={{ fontSize: "17px" }}
                    onChange={(e) => setSectorChoice(e.target.value)}
                  >
                    {sectorList.map((item) => (
                      <option value={item.id}>{item.divId}</option>
                    ))}
                  </select>
                </div>

                <div className="mt-3 form-group d-flex">
                  <label className="col-3" htmlFor="bannerID">Mã banner</label>
                  <div className="col-9">
                    <input className="form-control" type="text" placeholder="ex: B10"
                      value={bannerID} onChange={(e) => handleChangeValidateBannerID(e)} />
                    <p id="bannerID" className="mt-3" ></p>
                  </div>
                </div>
                <div className="mt-3 form-group d-flex">
                  <label className="col-3" htmlFor="name">Tên banner</label>
                  <div className="col-9">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Ví dụ: Cá tháng tư"
                      value={name}
                      onChange={(e) => handleChangeValidateName(e)} />
                    <p id="name" className="mt-3"></p>
                  </div>
                </div>
                <div className="mt-3 form-group d-flex">
                  <label className="col-3" htmlFor="name">Nhập liên kết</label>
                  <div className="col-9">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Liên kết url"
                      value={urlLink}
                      onChange={(e) => setUrlLink(e.target.value)}
                    />
                    <p id="url" className="mt-3"></p>
                  </div>
                </div>
                <div className="mt-3 form-group d-flex">
                  <label id="upload-label" className="col-3" htmlFor="upload"> Chọn Hình Ảnh </label>
                  <div className="col-9">
                    <div className="custom-file">
                      <input
                        type="file"
                        className="form-control border-0"
                        accept=".png,.gif,.jpg,.jpeg"
                        onChange={getImage}
                      />
                      <p id="image" className="mt-3"></p>
                    </div>
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
                  onClick={(e) => validateBeforeAdd(e)}
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
