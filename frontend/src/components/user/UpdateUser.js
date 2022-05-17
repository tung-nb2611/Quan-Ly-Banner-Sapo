import React, { useState } from "react";
import '../../styles/banner/UpdateBanner.css';
import UserService from "../../services/UserService";
import * as BiIcons from "react-icons/bi";
import { useLocation, useHistory, Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function UpdateUser(props) {
    let data = {}
    const history = useHistory();
    const linkState = useLocation();
    console.log(linkState);
    if (typeof linkState.detailInfo !== 'undefined') {
        data = linkState.detailInfo;
       console.log(data);
    }
    const [userID, setUserID] = useState(data.id);
    const { register, getValues, handleSubmit, watch, formState: { errors } } = useForm({
        defaultValues: {        
            name: data.name,
            email: data.email,
            username: data.username,
            password: data.password,
            phone: data.phone,
        },
    });
    const onSubmit = data => {
        updateUser(data);
    };
    const handleCancel = () => {
        history.push('/user/manage');
    }
    const [checkUsernameExist, setCheckUsernameExist] = useState();

    let usernameIsAvai = () => {
        UserService.checkUsername(getValues("username")).then((response) => {
            setCheckUsernameExist(response.data);
        })
        if (checkUsernameExist == userID) return false
        if (checkUsernameExist == 0) return false
        return true
    }

    const [checkEmailExist, setCheckUEmailExist] = useState();

    let emailIsAvai = () => {
        UserService.checkEmail(getValues("email")).then((response) => {
            setCheckUEmailExist(response.data);
        })
        if (checkEmailExist == userID) return false
        if (checkEmailExist == 0) return false
        return true
    }
    const updateUser = (data) => {
        let userItem = {
            name: data.name,
            email: data.email,
            username: data.username,
            password: data.password,
            phone: data.phone,
        }
        UserService.updateUser(userItem, userID).then(res => {
            history.push('/user/manage');
        })
    }
    return (
        <div className="update-banner-container px-3">
            <div className="header-top">
                <p className="mt-4 text-left">
                    Admin 
                    <BiIcons.BiChevronRight size={18}/> 
                    <Link className="text-decoration-none" to="/user/manage"> Quản lý người dùng </Link>
                    <BiIcons.BiChevronRight size={18} /> Thêm người dùng
                </p>
            </div>
            <hr/>
            <div className="container">
                <div className="main-content">
                    <div className="pb-4 text-center">
                        <h2>Chỉnh sửa người dùng</h2>
                    </div>
                    <div className="row">
                        <div className="col-12 pb-5">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="mt-3 form-group">
                                    <label htmlFor="sectionID">Tên người dùng</label>
                                    <input className="form-control" type="text" id="name" name="name"
                                        placeholder="ex: Phung Cong Cuong."
                                        defaultValue={register.name}
                                        {...register("name", { required: true, minLength: 6, maxLength: 20 })}
                                    />
                                    {errors.name && errors.name.type === "required" && <span>Mục này còn trống</span>}
                                    {errors.name && errors.name.type === "minLength" && <span>Chiều dài tối thiểu là 6</span>}
                                    {errors.name && errors.name.type === "maxLength" && <span>Chiều dài tối đa là 20</span>}
                                </div>

                                <div className="mt-3 form-group">
                                    <label htmlFor="name">Email</label>
                                    <input className="form-control" type="email" id="email" name="email"
                                        placeholder="ex: sapo1@gmail.com"
                                        defaultValue={register.email}
                                        {...register("email", { required: true, maxLength: 50, validate: emailIsAvai, pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })}
                                    />
                                    {errors.email && errors.email.type === "required" && <span>Mục này còn trống</span>}
                                    {errors.email && errors.email.type === "maxLength" && <span>Chiều dài tối đa là 50</span>}
                                    {errors.email && errors.email.type === "pattern" && <span>Đây là email</span>}
                                    {errors.email && errors.email.type === "validate" && <span>Email đã tồn tại</span>}
                                </div>

                                <div className="mt-3 form-group">
                                    <label htmlFor="name">Phone</label>
                                    <input className="form-control" type="text" id="password" name="password"
                                        placeholder="ex: 0934.333.444"
                                        defaultValue={register.phone}
                                        {...register("phone", { required: true, minLength: 6, maxLength: 15 })}
                                    />
                                    {errors.phone && errors.phone.type === "required" && <span>Mục này còn trống</span>}
                                    {errors.phone && errors.phone.type === "minLength" && <span>Chiều dài tối thiểu là 6</span>}
                                    {errors.phone && errors.phone.type === "maxLength" && <span>Chiều dài tối đa là 15</span>}
                                </div>

                                <div className="mt-3 form-group">
                                    <label htmlFor="name">Username</label>
                                    <input className="form-control" type="text" id="username" name="username"
                                        placeholder="ex: sapo1"
                                        defaultValue={register.username}
                                        {...register("username", { required: true, minLength: 6, maxLength: 20, validate: usernameIsAvai })}
                                    />
                                    {errors.username && errors.username.type === "required" && <span>Mục này còn trống</span>}
                                    {errors.username && errors.username.type === "minLength" && <span>Chiều dài tối thiểu là 6</span>}
                                    {errors.username && errors.username.type === "maxLength" && <span>Chiều dài tối đa là 20</span>}
                                    {errors.username && errors.username.type === "validate" && <span>Username đã tồn tại</span>}
                                </div>
                                <button type="button" className="btn btn-outline-danger" name="btncancel" onClick={() => handleCancel()} >Hủy</button>
                                <button type="submit" className="btn btn-primary " name="btnsubmit" >Chỉnh sửa</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UpdateUser;