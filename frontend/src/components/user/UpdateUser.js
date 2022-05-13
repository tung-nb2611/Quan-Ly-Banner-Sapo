import React, { useState } from "react";
import '../../styles/banner/UpdateBanner.css';
import UserService from "../../services/UserService";
import * as BiIcons from "react-icons/bi";
import { useLocation } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";

function UpdateUser(props) {
    let data = {}
    const linkState = useLocation();
    console.log(linkState);
    if (typeof linkState.detailInfo !== 'undefined') {
        data = linkState.detailInfo;
        console.log(data);
    }
    const [userID, setUserID] = useState(data.id);
    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        defaultValues: {        
            name: data.name,
            email: data.email,
            username: data.username,
            password: data.password,
            phone: data.phone,
        },
    });
    console.log(register.name);
    const onSubmit = data => {
        updateUser(data);
    };
    const handleCancel = () => {
        props.history.push('/banner1/manage');
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
                            <form onSubmit={handleSubmit(onSubmit)}>

                                <div className="mt-2 form-group">
                                    <label htmlFor="sectionID">Tên người dùng</label>
                                    <input className="form-control" type="text" id="name" name="name"
                                        placeholder="ex: Phung Cong Cuong."
                                        defaultValue={register.name}
                                        {...register("name", { required: true, minLength: 6, maxLength: 20 })}
                                    />
                                    {errors.name && errors.name.type === "required" && <span>This is required</span>}
                                    {errors.name && errors.name.type === "minLength" && <span>Min length is 6</span>}
                                    {errors.name && errors.name.type === "maxLength" && <span>Max length is 20</span>}
                                </div>

                                <div className="mt-2 form-group">
                                    <label htmlFor="name">Email</label>
                                    <input className="form-control" type="email" id="email" name="email"
                                        placeholder="ex: sapo1@gmail.com"
                                        defaultValue={register.email}
                                        {...register("email", { required: true, maxLength: 50, pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })}
                                    />
                                    {errors.email && errors.email.type === "required" && <span>This is required</span>}
                                    {errors.email && errors.email.type === "maxLength" && <span>Max length is 50</span>}
                                    {errors.email && errors.email.type === "pattern" && <span>This is an email</span>}
                                </div>

                                <div className="mt-2 form-group">
                                    <label htmlFor="name">Phone</label>
                                    <input className="form-control" type="text" id="password" name="password"
                                        placeholder="ex: 0934.333.444"
                                        defaultValue={register.phone}
                                        {...register("phone", { required: true, minLength: 6, maxLength: 15 })}
                                    />
                                    {errors.phone && errors.phone.type === "required" && <span>This is required</span>}
                                    {errors.phone && errors.phone.type === "minLength" && <span>Min length is 6</span>}
                                    {errors.phone && errors.phone.type === "maxLength" && <span>Max length is 15</span>}
                                </div>

                                <div className="mt-2 form-group">
                                    <label htmlFor="name">Username</label>
                                    <input className="form-control" type="text" id="username" name="username"
                                        placeholder="ex: sapo1"
                                        defaultValue={register.username}
                                        {...register("username", { required: true, minLength: 6, maxLength: 20})}
                                    />
                                    {errors.username && errors.username.type === "required" && <span>This is required</span>}
                                    {errors.username && errors.username.type === "minLength" && <span>Min length is 6</span>}
                                    {errors.username && errors.username.type === "maxLength" && <span>Max length is 20</span>}
                                </div>
                                <button type="button" className="btn btn-cancel" name="btncancel" onClick={() => handleCancel()} >Hủy</button>
                                <button type="submit" className="btn btn-add " name="btnsubmit" >Thêm người dùng</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}



export default UpdateUser;