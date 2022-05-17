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
    const confirm = window.confirm("Bạn có muốn xóa người dùng này?");
    if (confirm === true) {
      axios
        .delete(BASE_URL + userInfo.id)
        .then(() => console.log("Delete successful"));
      setUserList(userList.filter(info => info.id !== userInfo.id));
    }
  };

  const handleShowInfo = (userInfo) => {
    alert("thong tin:c", userInfo.id)
  };

  return (
    <div className="banner-info p-3">
      <div className="row align-middle">
        <div className="detail-info col-sm-12 order-sm-6 col-xl-8">
          <label>Name</label>
          <p>{userInfo.name}</p>
        </div>
        <div className="button-choice col-sm-12 order-sm-6 col-xl-4">
          <Link type="button" className="btn btn-secondary btn-block" to={userDetail}>Hiện thông tin chi tiết</Link>
          <button type="button" className="btn btn-secondary"><Link to={updatePage}>Chỉnh sửa</Link></button>
          <button type="button" className="btn btn-danger" onClick={deleteConfirmation}>Xóa</button>
        </div>
      </div >
    </div>
  );
};

export default UserInfo;
