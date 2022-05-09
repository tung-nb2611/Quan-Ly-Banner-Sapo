import React, { useState } from "react";
import '../../styles/banner/UpdateBanner.css';
import UserService from "../../services/UserService";
import * as BiIcons from "react-icons/bi";
import { useLocation } from "react-router-dom";


function UpdateUser(props) {

    // Vấn đề: Access link trực tiếp thì sẽ không có id
    // Lấy thông tin banner được chọn để cho vào state của component Update thông tin
    let data = {}
    const linkState = useLocation();
    console.log(linkState);
    if (typeof linkState.detailInfo !== 'undefined') {

        data = linkState.detailInfo;
        console.log(data);
    }


    const [userID, setUserID] = useState(data.id);
    const [name, setName] = useState(data.name);
    const [email, setEmail] = useState(data.email);
    const [userName, setUserName] = useState(data.username);
    const [password, setPassword] = useState(data.password);
    const [phone, setPhone] = useState(data.phone);
    const [roles, setRole] = useState(data.roles);
    console.log(data)

    const handleCancel = () => {
        props.history.push('/banner1/manage');



    }
    const updateUser = (e) => {
        e.preventDefault();

        let userItem = {
            name: name,
            email: email,
            username: userName,
            password: password,
            phone: phone,
        }
        console.log('user => ', userItem);

        UserService.updateUser(userItem, userID).then(res => {
            props.history.push('/banner1/manage');
        })
    }

    return (

        <div className="update-banner-container" >
            <div className="top bg-success text-white">Admin</div>
            <div className="container">
                <div className="header-top">
                    <p className="mt-4 text-left"> Admin <BiIcons.BiChevronRight size={20} /> Quản lý người dùng <BiIcons.BiChevronRight size={20} /> Thêm người dùng</p>
                </div>
                <hr></hr>
                <div className="main-content">
                    <div className="row">
                        <div className="col-sm-12">
                            <h1>Chỉnh sửa người dùng</h1>
                        </div>
                        <div className="col-sm-6 left">
                            <form method="post" encType="multipart/form-data">

                                <div className="mt-2 form-group">
                                    <label htmlFor="sectionID">Tên người dùng</label>
                                    <input className="form-control" type="text" id="name" name="name"
                                        placeholder="ex: Phung Cong Cuong."
                                        value={name} onChange={(e) => setName(e.target.value)}
                                    />
                                </div>

                                <div className="mt-2 form-group">
                                    <label htmlFor="name">Email</label>
                                    <input className="form-control" type="email" id="email" name="email"
                                        placeholder="ex: sapo1@gmail.com"
                                        value={email} onChange={(e) => setEmail(e.target.value)} />
                                </div>

                                <div className="mt-2 form-group">
                                    <label htmlFor="name">Phone</label>
                                    <input className="form-control" type="text" id="password" name="password"
                                        placeholder="ex: 0934.333.444"
                                        value={phone} onChange={(e) => setPhone(e.target.value)} />
                                </div>

                                <div className="mt-2 form-group">
                                    <label htmlFor="name">Username</label>
                                    <input className="form-control" type="text" id="username" name="username"
                                        placeholder="ex: sapo1"
                                        value={userName} onChange={(e) => setUserName(e.target.value)} />
                                </div>









                                <div className="mt-2 form-group">
                                    {/* <label id="upload-label" htmlFor="upload">Chọn Hình Ảnh</label> */}

                                    {/* <div className="custom-file">
                                        <input id="upload" type="file" className="form-control border-0" accept=".png,.gif,.jpg,.jpeg"
                                            onChange={getImage} />
                                    </div> */}
                                </div>

                            </form>
                        </div>
                        <div className="col-sm-6 right">

                            <div className="button">

                                <button type="button" className="btn btn-cancel" name="btncancel" onClick={() => handleCancel()}>Hủy</button>
                                <button type="submit" className="btn btn-add " name="btnsubmit" onClick={(e) => updateUser(e)}>Chỉnh sửa</button>

                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>

    );


    const handleComeBack = () => {
        props.history.push('/banner/manage');
    }
    const handleLogout = () => {
        props.history.push('/home')
    }

}



export default UpdateUser;