import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as BiIcons from "react-icons/bi";
import { useHistory } from "react-router-dom";
import WebsiteService from "../../services/website/WebsiteService";
import "../../styles/website/CreateWebsite.css";

function CreateWebsite(props) {
    const history = useHistory();
    const [websiteName, setWebsiteName] = useState('');
    const [code, setCode] = useState('');
    const [urlLink, setUrlLink] = useState('');



    const handClickReturn = () => {
        history.push('/websites/manage');
    }
    const saveSection = (e) => {
        e.preventDefault();

        let user = JSON.parse(window.localStorage.getItem("user"));
        let websiteItem = {
            name: websiteName,
            url: urlLink,
            userAdd: user.username,
            code: code,
        }
        console.log('section => ', websiteItem);
        WebsiteService.createWebsite(websiteItem).then(
            history.push('/websites/manage')
        )
    }

    const handleChangeValidateWebsiteName = (e) => {
        setWebsiteName(e.target.value)
        if (!(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(e.target.value))) {
            document.getElementById("websiteName").style.display = "none";
        }
        else {
            document.getElementById("websiteName").style.display = "block";
            document.getElementById("websiteName").style.color = "red";
            document.getElementById("websiteName").innerText = "Tên website không được chứa các kí tự đặc biệt";
        }
    }

    const validateBeforeAdd = (e) => {
        if (websiteName.length === 0 || code.length === 0 || urlLink.length === 0) {
            if (websiteName.length === 0) {
                document.getElementById("websiteName").style.display = "block";
                document.getElementById("websiteName").style.color = "red";
                document.getElementById("websiteName").innerText = "Tên website không được để trống";
            }
            else {
                document.getElementById("websiteName").style.display = "none";
            }

            if (code.length === 0) {
                document.getElementById("websiteId").style.display = "block";
                document.getElementById("websiteId").style.color = "red";
                document.getElementById("websiteId").innerText = "Mã website không được để trống";
            }
            else {
                document.getElementById("websiteId").style.display = "none";
            }
            if (urlLink.length === 0) {
                document.getElementById("url").style.display = "block";
                document.getElementById("url").style.color = "red";
                document.getElementById("url").innerText = "Liên kết website không được để trống";
            }
            else {
                document.getElementById("url").style.display = "none";
            }
        }
        else {
            saveSection(e);
        }

    }


    return (

        <div className="create-website-container mx-3" >
            <div className="header-top">
                <p className="mt-3 text-left">
                    {props.showAdminBoard ? (<span>Admin</span>) : (<span>User</span>)}
                    <BiIcons.BiChevronRight size={18} />
                    <Link className="text-decoration-none" to="/websites/manage"> Quản lý khu vực </Link>
                    <BiIcons.BiChevronRight size={18} />Thêm khu vực
                </p>
            </div>
            <hr />
            <div className="container">
                <div className="main-content">
                    <div className="row">
                        <div className="col-sm-12 pb-4">
                            <h2>Thêm Mới Website</h2>
                        </div>
                        <div className="col-sm-6 left">
                            <form>
                                <div className="mt-3 form-group">
                                    <label htmlFor="websiteName">Tên website</label>
                                    <input className="form-control" type="text"
                                        placeholder="Ví dụ: SapoCore"
                                        value={websiteName} onChange={(e) => handleChangeValidateWebsiteName(e)}
                                    />
                                    <p id="websiteName"></p>
                                </div>
                                <div className="mt-3 form-group">
                                    <label htmlFor="code">Mã Website</label>
                                    <input className="form-control" type="text"
                                        placeholder="Ví dụ: Core1"
                                        value={code} onChange={(e) => setCode(e.target.value)}
                                    />
                                    <p id="websiteId"></p>
                                </div>
                                <div className="mt-3 form-group">
                                    <label htmlFor="url">Nhập liên kết</label>
                                    <input className="form-control" type="text"
                                        placeholder="Liên kết url"
                                        value={urlLink} onChange={(e) => setUrlLink(e.target.value)}
                                    />
                                    <p id="url"></p>
                                </div>

                            </form>
                        </div>

                        <div className="col-sm-6 right">

                            <div className="button">
                                <button type="button" className="btn btn-cancel" name="btncancel" onClick={() => handClickReturn()} >Hủy</button>
                                <button type="submit" className="btn btn-add " name="btnsubmit" onClick={(e) => validateBeforeAdd(e)}>Thêm website</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >

    );

}
export default CreateWebsite;
