import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import '../../styles/banner/UpdateBanner.css';
import User from "../../services/UserService";
import * as BiIcons from "react-icons/bi";
import { useLocation } from "react-router-dom";


function UserDetail(props) {
    console.log(props)
    // Vấn đề: Access link trực tiếp thì sẽ không có id
    // Lấy thông tin banner được chọn để cho vào state của component Update thông tin
    const history = useHistory();
    const linkState = useLocation();
    let data = {}

    if (typeof linkState.detailInfo !== 'undefined') {

        data = linkState.detailInfo;
        console.log(data);
    }

    const [name, setName] = useState(data.username);
    const [email, setEmail] = useState(data.email);
    const [phone, setPhone] = useState(data.phone);
    const [role, setRole] = useState(data.roles);
    const [username, setUsername] = useState(data.username);


    return (
        <div className="update-banner-container px-3">
            <div className="header-top">
                <p className="pt-3 text-left">
                    {props.showAdminBoard ? (<span>Admin</span>) : (<span>User</span>)}
                    <BiIcons.BiChevronRight size={18} />
                    <Link className="text-decoration-none" to="/user/manage">Quản lý người dùng</Link>
                    <BiIcons.BiChevronRight size={18} />Thông tin người dùng
                </p>
            </div>
            <hr />
            <div className="container">
                <div className="main-content">
                    <div className="pb-4 text-center">
                        <h2>Thông tin người dùng</h2>
                    </div>
                    <form method="post" encType="multipart/form-data">
                        <div className="form-group">
                            <label htmlFor="bannerID">Tên người dùng</label>
                            <input className="form-control" type="text"
                                placeholder="ex: 123..."
                                value={name}
                                disabled
                            />
                        </div>
                        <div className="mt-3 form-group">
                            <label htmlFor="name">Số điện thoại người dùng</label>
                            <input className="form-control"
                                type="text"
                                placeholder="ex: quảng cáo cá tháng tư"
                                value={phone}
                                disabled
                            />
                        </div>
                        <div className="mt-3 form-group">
                            <label htmlFor="sectionID">Email người dùng</label>
                            <input className="form-control"
                                type="text"
                                value={email}
                                disabled
                            />
                        </div>
                        <div className="mt-3 form-group">
                            <label htmlFor="sectionID">Role</label>
                            <input className="form-control"
                                type="text"
                                value={role[0].name}
                                disabled
                            />
                        </div>
                        <div className="mt-3 form-group">
                            <label htmlFor="sectionID">Username</label>
                            <input className="form-control"
                                type="text"
                                value={username}
                                disabled
                            />
                        </div>
                    </form>
                    <div className="button d-flex justify-content-end mt-3">
                        <button type="button" className="btn btn-secondary btn-block w-25" name="btncancel" onClick={() => history.push("/user/manage")}>Quay lại</button>
                    </div>
                </div>
            </div>
        </div>
    );


}



export default UserDetail;