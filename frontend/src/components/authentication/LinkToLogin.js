import React from "react";
import { Link } from "react-router-dom";
import './Login.css'

const LinkToLogin = () => {
  return (
    <div className="wrap d-flex justify-content-center pt-5">
      <div className="login mt-5">
        <div className="p-5 d-flex flex-column">
          <div className="d-flex justify-content-center">
            <img
              src={require('../Logo.png')}
              alt="Sapo"
              className="profile-img-card w-100 mb-3"
            />
          </div>
          <h1>Trang quản lý banner</h1>
          <h5>Đăng nhập vào tài khoản của bạn</h5>
          <Link className="btn btn-block btn-primary linktologin" to='/login'>Go to login</Link>
        </div>
      </div>
    </div>
  );
}
// }
export default LinkToLogin;