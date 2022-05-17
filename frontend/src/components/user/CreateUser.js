import React, { useRef, useState, useEffect } from "react";
import '../../styles/user/CreateUser.css';
import UserService from "../../services/UserService";
import * as BiIcons from "react-icons/bi";
import validator from 'validator'
import { Controller, useForm } from "react-hook-form";
import { useHistory, Link } from 'react-router-dom';

function CreateUser(props) {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        saveUser(data);
    };
    const history = useHistory();
    const handleCancel = () => {
        history.push('/user/manage');
    }
    const saveUser = (data) => {
        let userItem = {
            name: data.name,
            email: data.email,
            username: data.username,
            password: data.password,
            phone: data.phone,
            role: [data.role],
        }
        console.log(data)
        UserService.createUser(userItem).then(res => {
            history.push('/user/manage');
        })
    }

    UserService.checkUsername("cuongpc0128").then((response) => {
        const checkID = response.data;
        console.log(checkID === 0);

    })
    let usernameIsAvai = (username) => {
        if (!username) {
            return false;
        }
        UserService.checkUsername(username).then((response) => {
            const checkID = response.data;
            console.log(checkID);
            return checkID !== 0;
        })
    }

    return (
        <div className="create-banner-container px-3" >
            <div className="header-top">
                <p className="mt-4 text-left"> Admin 
                    <BiIcons.BiChevronRight size={18} /> 
                    <Link className="text-decoration-none" to="/user/manage"> Quản lý người dùng </Link>
                    <BiIcons.BiChevronRight size={18} /> Thêm người dùng
                </p>
            </div>
            <hr/>
            <div className="container">
                <div className="main-content">
                    <div className="pb-4 text-center">
                        <h2>Thêm mới người dùng</h2>
                    </div>
                    <form className="form" onSubmit={handleSubmit(onSubmit)}>
                        <div className="row">
                            <div className="col-md-12 col-lg-6 pb-5">
                                <div className="form-group">
                                    <label htmlFor="name">Tên người dùng</label>
                                    <input
                                        className="form-control" type="text" id="name" name="name"
                                        placeholder="ex: Phung Cong Cuong"
                                        {...register("name", { required: true, minLength: 6, maxLength: 20 })}
                                    />
                                    {errors.name && errors.name.type === "required" && <span>This is required</span>}
                                    {errors.name && errors.name.type === "minLength" && <span>Min length is 6</span>}
                                    {errors.name && errors.name.type === "maxLength" && <span>Max length is 20</span>}
                                </div>
                                <div className="mt-3 form-group">
                                    <label htmlFor="password">Email</label>
                                    <input className="form-control" id="email" type="text" name="email"
                                        placeholder="ex: sapo123@gmail.com"
                                
                                        {...register("email", { required: true, maxLength: 50, pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })}
                                    />
                                    {errors.email && errors.email.type === "required" && <span>This is required</span>}
                                    {errors.email && errors.email.type === "maxLength" && <span>Max length is 50</span>}
                                    {errors.email && errors.email.type === "pattern" && <span>This is an email</span>}
                                </div>
                                <div className="mt-3 form-group">
                                    <label htmlFor="password">Password</label>
                                    <input 
                                        className="form-control" id="password" type="password" name="password"
                                        {...register("password", { required: true, minLength: 6, maxLength: 50 })}
                                    />
                                    {errors.username && errors.username.type === "required" && <span>This is required</span>}
                                    {errors.username && errors.username.type === "minLength" && <span>Min length is 6</span>}
                                    {errors.username && errors.username.type === "maxLength" && <span>Max length is 50</span>}
                                </div>
                            </div>

                            <div className="col-md-12 col-lg-6">
                                <div className="form-group">
                                    <label htmlFor="password">Phone</label>
                                    <input className="form-control" id="phone" type="text" name="phone"
                                        placeholder="ex: 0934.567.890"
                                        {...register("phone", { required: true, minLength: 6, maxLength: 15 })}
                                    />
                                    {errors.phone && errors.phone.type === "required" && <span>This is required</span>}
                                    {errors.phone && errors.phone.type === "minLength" && <span>Min length is 6</span>}
                                    {errors.phone && errors.phone.type === "maxLength" && <span>Max length is 15</span>}
                                </div>
                                <div className="mt-3 form-group">
                                    <label htmlFor="username">Username</label>
                                    <input className="form-control" id="username" type="text" name="username"
                                        placeholder="ex: sapo123"
                                        {...register("username", { required: true, minLength: 6, maxLength: 20, validate: usernameIsAvai })}
                                    />
                                    {errors.username && errors.username.type === "required" && <span>This is required</span>}
                                    {errors.username && errors.username.type === "minLength" && <span>Min length is 6</span>}
                                    {errors.username && errors.username.type === "maxLength" && <span>Max length is 20</span>}
                                    {/* {errors.username.type === "validate" && <span>CUONGPC0128</span>} */}
                                </div>
                                <div className="mt-3 form-group chossing-role d-flex flex-column">
                                    <label htmlFor="username">Role</label>
                                    <select {...register("role")} className="w-25">
                                        <option className="option" value="user">User</option>
                                        <option className="option" value="admin">Admin</option>
                                    </select>
                                </div>
                                <div className="button">
                                    <button type="button" className="btn btn-outline-secondary btn-user" name="btncancel" onClick={() => handleCancel()}>Hủy</button>
                                    <button type="submit" className="btn btn-primary btn-user" name="btnsubmit">Thêm người dùng</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div >
        </div >

    );

}

export default CreateUser;
