import "../../styles/banner/BannerInfo.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState } from "react";

const BASE_URL = "http://localhost:8080/api/users/";

const UserInfo = ({ userInfo, userList, setUserList }) => {
  const [detailInfo, setDetailInfo] = useState(userInfo);

  const updatePage = {
    pathname: "/user/update/" + userInfo.id,
    detailInfo: detailInfo
  };

  const userDetail = {
    pathname: "/user/detail/" + userInfo.id,
    detailInfo: detailInfo
  };

  const deleteConfirmation = () => {
    const confirm = window.confirm("Do you want to remove this user?");
    if (confirm === true) {
      axios
        .delete(BASE_URL + userInfo.id)
        .then(() => console.log("Delete successful"));
      setUserList(userList.filter(info => info.id !== userInfo.id));
    }
  };

  return (
    <div className="banner-info p-3">
      <div className="row">
        <div className="detail-info col-sm-12 col-xl-7">
          <label>Name</label>
          <p>{userInfo.username}</p>
        </div>
        <div className="button-choice col-sm-12 col-xl-5">
          <Link className="btn btn-primary btn-block" to={userDetail}>Hiện thông tin chi tiết</Link>
          <Link className="btn btn-outline-secondary btn-block" to={updatePage}>Cập nhật </Link>
          <button type="button" className="btn btn-outline-danger w-100" onClick={deleteConfirmation}>Xóa</button>
        </div>
      </div >
    </div>
  );
};

export default UserInfo;
