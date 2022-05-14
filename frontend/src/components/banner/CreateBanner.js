import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import '../../styles/banner/CreateBanner.css';
import BannerService from "../../services/BannerService";
import * as BiIcons from "react-icons/bi";
import { ref, uploadBytes, getDownloadURL, listAll, list } from "firebase/storage";
import { storage } from "../../common/Firebase";
import { v4 } from "uuid";
import { useHistory, useParams } from "react-router-dom";


function CreateBanner(props) {
    let { id } = useParams();
    const history = useHistory();
    const [imageUpload, setImageUpload] = useState(null);
    const [bannerID, setBannerID] = useState('');
    const [name, setName] = useState('');
    const [imgPreview, setImgPreview] = useState('');
    const [urlLink, setUrlLink] = useState('');

    const getImage = (e) => {
        if (e.target.files[0]) {
            setImgPreview(URL.createObjectURL(e.target.files[0]));  //đặt bản xem trước 
        } else console.log("file not found");
        setImageUpload(e.target.files[0]);
    }

    const handleChangeValidateBannerID = (e) => {
        setBannerID(e.target.value)
        if (!(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(e.target.value))) {
            document.getElementById("bannerID").style.display = "none";
        }
        else {
            document.getElementById("bannerID").style.display = "block";
            document.getElementById("bannerID").innerText = "Banner id không được chứa các kí tự đặc biệt";
        }

    }
    const handleChangeValidateName = (e) => {
        setName(e.target.value)
        if (!(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(e.target.value))) {
            document.getElementById("name").style.display = "none";
        }
        else {
            document.getElementById("name").style.display = "block";
            document.getElementById("name").innerText = "Tên banner không được chứa các kí tự đặc biệt";
        }

    }

    const handClickReturn = () => {
        history.push('/banner/manage');
    }

    const validateBeforeAdd = (e) => {
        if (bannerID.length === 0 || name.length === 0 || urlLink.length === 0 || imgPreview === 0) {
            if (bannerID.length === 0) {
                document.getElementById("bannerID").style.display = "block";
                document.getElementById("bannerID").innerText = "Banner id không được để trống";
            }
            else {
                document.getElementById("bannerID").style.display = "none";
            }

            if (name.length === 0) {
                document.getElementById("name").style.display = "block";
                document.getElementById("name").innerText = "Tên banner không được để trống";
            }
            else {
                document.getElementById("name").style.display = "none";
            }
            if (urlLink.length === 0) {
                document.getElementById("url").style.display = "block";
                document.getElementById("url").innerText = "Liên kết không được để trống";
            }
            else {
                document.getElementById("url").style.display = "none";
            }

            if (imgPreview.length === 0) {
                document.getElementById("image").style.display = "block";
                document.getElementById("image").innerText = "Tên banner không được để trống";
            }
            else {
                document.getElementById("image").style.display = "none";
            }
        }
        else {
            saveBanner(e);
        }

    }

    const saveBanner = (e) => {
        e.preventDefault();
        const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
        uploadBytes(imageRef, imageUpload).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
                let currentDay = new Date();
                let userAdd = "Luong Van Minh";
                let bannerItem = {
                    sectionID: id,
                    code: bannerID,
                    name: name,
                    imgUrl: url,
                    userAdd: userAdd,
                    createAt: currentDay,
                    url: urlLink
                }
                console.log('banner => ', bannerItem);
                BannerService.createBanner(bannerItem).then(res => {
                    history.push('/banner/manage');
                })
            });
        });

    }

    return (
        <div className="create-banner-container px-3" >
            <div className="header-top">
                <p className="mt-3 text-left">
                    {props.showAdminBoard ? (<span>Admin</span>) : (<span>User</span>)}
                    <BiIcons.BiChevronRight size={18} />
                    <Link className="text-decoration-none" to="/banner/manage"> Quản lý banner </Link>
                    <BiIcons.BiChevronRight size={18} />Thêm banner
                </p>
            </div>
            <hr />
            <div className="container">
                <div className="main-content">
                    <div className="pb-4 text-center">
                        <h2>Thêm Mới Banner</h2>
                    </div>
                    <div className="row">
                        <div className="col-md-12 col-lg-6 pb-5">
                            <form className="form">
                                <div className="form-group">
                                    <label htmlFor="bannerID">Mã khu vực</label>
                                    <input className="form-control"
                                        value={id || ''} disabled
                                    />

                                </div>
                                <div className="mt-3 form-group">
                                    <label htmlFor="bannerID">Mã banner</label>
                                    <input className="form-control" type="text" name="bannerID"
                                        placeholder="ex: B10"
                                        value={bannerID} onChange={(e) => { handleChangeValidateBannerID(e) }}
                                    />
                                    <p style={{ color: "red" }} id="bannerID" ></p>
                                </div>
                                <div className="mt-3 form-group">
                                    <label htmlFor="name">Tên banner</label>
                                    <input className="form-control" type="text"
                                        placeholder="Ví dụ: Cá tháng tư"
                                        value={name} onChange={(e) => handleChangeValidateName(e)}
                                    />
                                    <p style={{ color: "red" }} id="name" ></p>

                                </div>
                                <div className="mt-3 form-group">
                                    <label htmlFor="name">Nhập liên kết</label>
                                    <input className="form-control" type="text"
                                        placeholder="Liên kết url"
                                        value={urlLink} onChange={(e) => setUrlLink(e.target.value)}
                                    />
                                    <p style={{ color: "red" }} id="url"></p>
                                </div>
                                <div className="mt-3 form-group">
                                    <label id="upload-label" htmlFor="upload">Chọn Hình Ảnh</label>
                                    <div className="custom-file">
                                        <input id="upload"
                                            type="file"
                                            className="form-control border-0"
                                            accept=".png,.gif,.jpg,.jpeg"
                                            onChange={getImage}
                                        />
                                    </div>
                                    <p style={{ color: "red" }} id="image"></p>
                                </div>
                            </form>
                        </div>

                        <div className="col-md-12 col-lg-6">
                            <div>
                                <h3 className="text-center">Ảnh minh họa</h3>
                            </div>
                            <div id="imgFrame">
                                <img className="img-rounded img-thumbnail" src={imgPreview} alt="" />
                            </div>
                            <div className="button">
                                <button type="button" className="btn btn-outline-secondary" name="btncancel" onClick={() => handClickReturn()}>Hủy</button>
                                <button type="submit" className="btn btn-primary" name="btnsubmit" onClick={(e) => validateBeforeAdd(e)}>Thêm banner</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >

    );

}

export default CreateBanner;
