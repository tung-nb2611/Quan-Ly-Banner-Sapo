import React, { useRef, useState } from "react";
import '../../styles/user/CreateUser.css';
import UserService from "../../services/UserService";
import * as BiIcons from "react-icons/bi";
import validator from 'validator'

function CreateUser(props) {
    // THÊM:
    // - USER ADD,
    // - ROLE NEW USER.     
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState([]);
    const [formErorrs, setFormErrors] = useState({});

    const [checked, setChecked] = useState(2);

    const allRoles = [{
        id: 1,
        name: "Admin"
    },
    {
        id: 2,
        name: "User"
    }]



    const handleCancel = () => {
        props.history.push('/banner1/manage');
    }


    const inputEl = (null);

    const saveUser = (e) => {
        e.preventDefault();

        let userItem = {
            name: name,
            email: email,
            username: username,
            password: password,
            phone: phone,
            role: (checked == 1) ? ["admin"] : ["user"],
        }
        // setFormErrors(validate(userItem));

        if (Object.keys(formErorrs).length === 0) {
            console.log("cuong");
            UserService.createUser(userItem).then(res => {
                props.history.push('/banner1/manage');
            })
        }

    }

    const validate = (values) => {
        const errors = {};
        const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        // Name
        if (!values.name) {
            errors.name = "Name is required!";
        } else if (String(values.name).length > 50) {
            errors.name = "Name must less than 50 characters!";
        }

        // Email
        if (!values.email) {
            errors.email = "Email is required!";
        } else if (!String(email).toLowerCase().match(regex)) {
            errors.email = "This is not a valid email fomat!";
        } else if (String(values.email).length > 50) {
            errors.email = "Email must less than 50 characters!";
        }

        // Username
        if (!values.username) {
            errors.username = "Username is required!";
        } else if (String(values.username).length > 20) {
            errors.username = "Username must less than 20 characters!";
        }
        // else {
        //     UserService.checkUsername(values.username).then((response) => {
        //         const checkID = response.data;
        //         if (checkID != 0) {
        //             errors.username = "Error: Username is already taken!";
        //             console.log(checkID != 0);
        //         }
        //     })  
        // }

        // Password
        if (!values.password) {
            errors.password = "Password is required!";
        } else if ((String(values.password).length > 120) || ((String(values.password).length < 5))) {
            errors.password = "Password must less than 120 characters!";
        }
        // Phone
        if (!values.phone) {
            errors.phone = "Phone is required!";
        } else if (!validator.isMobilePhone(values.phone)) {
            errors.phone = "This is not a valid phone number!";
        }
        return errors;
    }





    const handleComeBack = () => {
        props.history.push('/user/manage');
    }

    return (

        <div className="create-banner-container" >
            <div className="top bg-success text-white">Admin</div>
            <div className="container">

                <div className="header-top">
                    <p className="mt-4 text-left"> Admin <BiIcons.BiChevronRight size={20} /> Quản lý người dùng <BiIcons.BiChevronRight size={20} /> Thêm người dùng</p>
                </div>
                <hr></hr>
                <div className="main-content">
                    <div className="row">
                        <div className="col-sm-12">
                            <h1>Thêm mới người dùng</h1>
                        </div>

                        <form >
                            <div className="col-sm-6 left">
                                <div className="mt-3 form-group">
                                    <label htmlFor="name">Tên người dùng</label>
                                    <input className="form-control" type="text" id="name" name="name"
                                        placeholder="ex: Phung Cong Cuong"
                                        value={name} onChange={(e) => setName(e.target.value)}
                                    />
                                    <p>{formErorrs.name}</p>
                                </div>

                                <div className="mt-2 form-group">
                                    <label htmlFor="password">Email</label>
                                    <input className="form-control" id="email" type="text" name="email"
                                        placeholder="ex: sapo123@gmail.com"
                                        value={email} onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <p>{formErorrs.email}</p>
                                </div>
                            </div>
                            <div className="col-sm-6 right">
                                <div className="mt-2 form-group">
                                    <label htmlFor="password">Phone</label>
                                    <input className="form-control" id="phone" type="text" name="phone"
                                        placeholder="ex: 0934.567.890"
                                        value={phone} onChange={(e) => {
                                            setPhone(e.target.value)

                                        }}
                                    />
                                    <p>{formErorrs.phone}</p>

                                </div>


                                <div className="mt-2 form-group">
                                    <label htmlFor="username">Username</label>
                                    <input className="form-control" id="username" type="text" name="username"
                                        placeholder="ex: sapo123"
                                        value={username} onChange={(e) => setUsername(e.target.value)}
                                    />
                                    <p>{formErorrs.username}</p>
                                </div>

                                <div className="mt-2 form-group">
                                    <label htmlFor="password">Password</label>
                                    <input className="form-control" id="password" type="password" name="password"
                                        value={password} onChange={(e) => setPassword(e.target.value)}
                                    />
                                    <p>{formErorrs.password}</p>
                                </div>



                                <div className="chossing-role">
                                    {allRoles.map(chossingRole => (
                                        <div key={role.id}>
                                            <input
                                                type="radio"
                                                checked={checked === chossingRole.id}
                                                onChange={() => {
                                                    setChecked(chossingRole.id)
                                                }}
                                            />
                                            {chossingRole.name}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </form>

                        <div className="col-sm-6 right">

                            <div className="button">
                                <button type="button" className="btn btn-cancel" name="btncancel" onClick={() => handleCancel()} >Hủy</button>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    );

}

export default CreateUser;
