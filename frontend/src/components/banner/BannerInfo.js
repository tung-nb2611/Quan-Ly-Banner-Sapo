import "../../styles/banner/BannerInfo.css";
import { Row, Col, Image } from "react-bootstrap";
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

    <div className="banner-info m-3 p-3 pe-4">
      <Row>
        <Col lg={12} xl={3} className="detail-info">
          <label>NAME</label>
          <p>{bannerInfo.name}</p>
        </Col>
        <Col lg={12} xl={6} className="image-container d-flex justify-content-center">
          <Image src={bannerInfo.imgUrl}/>
        </Col>
        <Col lg={12} xl={3} className="button-choice d-flex flex-column mt-auto p-3">
          <Link type="button" className="btn btn-secondary btn-block w-100 mb-2" to={bannerDetail}>Show</Link>
          <Link type="button" className="btn btn-primary btn-block mb-2" to={updatePage}>Update</Link>
          <button type="button" className="btn btn-danger btn-block w-100" onClick={deleteConfirmation}>Delete</button>
        </Col>
      </Row>
    </div >

  );
};

export default BannerInfo;
