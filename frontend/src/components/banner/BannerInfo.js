import "../../styles/banner/BannerInfo.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState } from "react";

const BASE_URL = "http://localhost:8080/api/banners/";

const BannerInfo = ({ bannerInfo, bannerList, setBannerList }) => {

  const [detailInfo, setDetailInfo] = useState(bannerInfo);

  const updatePage = {
    pathname: "/banner/update/" + bannerInfo.code,
    detailInfo: detailInfo
  }
  const bannerDetail = {
    pathname: "/banner/detail/" + bannerInfo.code,
    detailInfo: detailInfo
  }

  const deleteConfirmation = () => {
    const confirm = window.confirm("Do you want to remove this banner?");
    if (confirm === true) {
      axios
        .delete(BASE_URL + bannerInfo.id)
        .then(() => console.log("Delete successful"));
      setBannerList(bannerList.filter(info => info.id !== bannerInfo.id));
    }
  };

  return (
    <div className="banner-info p-3">
      <div className="row align-middle">
        <div className="detail-info col-sm-12 order-sm-1 col-md-6 order-md-1 col-xl-3 order-xl-1">
          <label>NAME</label>
          <p>{bannerInfo.name}</p>
        </div>
        <div className="image-container col-sm-12 order-sm-2 col-md-12 order-md-3 col-xl-6 order-xl-2">
          <img className="rounded mx-auto d-block pt-2" src={bannerInfo.imgUrl} alt={bannerInfo.code}/>
        </div>
        <div className="button-choice col-sm-12 order-sm-3 col-md-6 order-md-2 col-xl-3 order-xl-3">
          <Link type="button" className="btn btn-secondary btn-block" to={bannerDetail}>Show</Link>
          <Link type="button" className="btn btn-outline-primary btn-block" to={updatePage}>Update</Link>
          <button type="button" className="btn btn-outline-danger btn-block w-100" onClick={deleteConfirmation}>Delete</button>
        </div>
      </div>
    </div >
  );
};

export default BannerInfo;
