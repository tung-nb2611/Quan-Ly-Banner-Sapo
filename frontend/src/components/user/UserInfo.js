import "../../styles/banner/BannerInfo.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState } from "react";

const BASE_URL = "http://localhost:8080/api/users/";

const UserInfo = ({ userInfo, userList, setUserList }) => {


  const [detailInfo, setDetailInfo] = useState(userInfo);

  const updatePage = {
    pathname: "/banner1/update/" + userInfo.code,
    detailInfo: detailInfo
  }

  const deleteConfirmation = () => {
    const confirm = window.confirm("Do you want to remove this user?");
    if (confirm === true) {
      axios
        .delete(BASE_URL + userInfo.id)
        .then(() => console.log("Delete successful"));
      setUserList(userList.filter(info => info.id !== userInfo.id));
    }
  };

  const [show, setShow] = useState(true);

  const handleShowInfo = (userInfo) => {

    alert("thong tin:", userInfo.code)
  }


  const updateUer = () => {
    console.log("Update");
  };

  return (
    <div className="banner-info p-3">
      <div className="row align-middle">
        <div className="detail-info col-sm-12 order-sm-1 col-md-6 order-md-1 col-xl-3 order-xl-1">
          <label>NAME</label>
          <p>{userInfo.name}</p>
        </div>
        <div className="show col-sm-12 order-sm-2 col-md-12 order-md-3 col-xl-6 order-xl-2">
          
        </div>
        <div className="button-choice col-sm-12 order-sm-3 col-md-6 order-md-2 col-xl-3 order-xl-3">
          <button className="btn btn-secondary btn-block mt-3 w-100" onClick={(userInfo) => handleShowInfo(userInfo)}>Show</button>
          {/* <Link type="button" className="btn btn-secondary btn-block" to={bannerDetail}>Show</Link> */}
          <Link type="button" className="btn btn-outline-primary btn-block" to={updatePage}>Update</Link>
          <button type="button" className="btn btn-outline-danger btn-block w-100" onClick={deleteConfirmation}>Delete</button>
        </div>
      </div>
    </div >
  );
};

export default UserInfo;
