import React, { useState } from "react";
import '../../styles/banner/UpdateBanner.css';
import BannerService from "../../services/BannerService";
import * as BiIcons from "react-icons/bi";
import { useLocation, useHistory, Link } from "react-router-dom";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../../common/Firebase";
import { v4 } from "uuid";

function UpdateBanner(props) {

    // Vấn đề: Access link trực tiếp thì sẽ không có id
    // Lấy thông tin banner được chọn để cho vào state của component Update thông tin
    let data = {}
    const linkState = useLocation();
    const history = useHistory();
    console.log(linkState);
    if (typeof linkState.detailInfo !== 'undefined') {
        data = linkState.detailInfo;
    }
    const [imageUpload, setImageUpload] = useState();
    const [bannerID, setBannerID] = useState(data.id);
    const [bannerCode, setBannerCode] = useState(data.code);
    const [name, setName] = useState(data.name);
    const [imgUrl, setImgUrl] = useState(data.imgUrl);
    const [urlLink, setUrlLink] = useState(data.url)




    const getImage = (e) => {
        if (e.target.files[0]) {
            setImgUrl(URL.createObjectURL(e.target.files[0])); // đặt bản xem trước 
        } else {
            console.log("file not found");
        }
        setImageUpload(e.target.files[0]);

    }
    const saveBanner = (e) => {
        e.preventDefault();
        if (imageUpload != null) {
            const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
            uploadBytes(imageRef, imageUpload).then((snapshot) => {
                getDownloadURL(snapshot.ref).then((url) => {
                    setImgUrl(url);
                    let currentDay = new Date();
                    let userFix = "Luong Van Minh";
                    let bannerItem = {
                        id: bannerID,
                        code: bannerCode,
                        name: name,
                        imgUrl: url,
                        userFix: userFix,
                        modifiedAt: currentDay,
                        url: urlLink
                    }
                    console.log('banner => ', bannerItem);
                    BannerService.updateBanner(bannerItem, bannerID).then(res => {
                        history.push('/banner/manage');
                    })
                });
            });
        }
        else {
            let currentDay = new Date();
            let userFix = "Luong Van Minh";
            let bannerItem = {
                id: bannerID,
                code: bannerCode,
                name: name,
                userFix: userFix,
                modifiedAt: currentDay,
                url: urlLink
            }
            console.log('banner => ', bannerItem);
            BannerService.updateBanner(bannerItem, bannerID).then(res => {
                history.push('/banner/manage');
            })
        }

    }

    return (
        <div className="update-banner-container mx-3" >
            <div className="header-top">
                <p className="mt-3 text-left">
                    {props.showAdminBoard ? (<span>Admin</span>) : (<span>User</span>)}
                    <BiIcons.BiChevronRight size={18} />
                    <Link className="text-decoration-none" to="/banner/manage">Quản lý banner</Link>
                    <BiIcons.BiChevronRight size={18} />Thêm banner</p>
            </div>
            <hr />
            <div className="container">
                <div className="main-content">
                    <div className="row">
                        <div className="col-sm-12 pb-4">
                            <h2>Chỉnh sửa banner</h2>
                        </div>
                        <div className="col-sm-6 left mt-2">
                            <form method="post" encType="multipart/form-data">
                                <div className="mt-1 form-group">
                                    <label htmlFor="bannerID">Mã banner</label>
                                    <input className="form-control" id="bannerID" type="text"
                                        placeholder="ex: 123..."
                                        value={bannerCode} onChange={(e) => setBannerCode(e.target.value)}
                                    />
                                </div>
                                <div className="mt-2 form-group">
                                    <label htmlFor="name">Tên banner</label>
                                    <input className="form-control" type="text"
                                        placeholder="ex: quảng cáo cá tháng tư"
                                        value={name} onChange={(e) => setName(e.target.value)} />
                                </div>
                                <div className="mt-2 form-group">
                                    <label htmlFor="name">Liên kết</label>
                                    <input className="form-control" type="text" placeholder=" Nhập liên kết url"
                                        value={urlLink || ''} onChange={(e) => setUrlLink(e.target.value)} />
                                </div>
                                <div className="mt-2 form-group">
                                    <label id="upload-label" htmlFor="upload">Chọn Hình Ảnh</label>

                                    <div className="custom-file">
                                        <input id="upload" type="file" className="form-control border-0" accept=".png,.gif,.jpg,.jpeg"
                                            onChange={getImage} />
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="col-sm-6 right">
                            <div className="col-sm-12">
                                <h3 className="text-center">Ảnh minh họa</h3>
                            </div>
                            <div className="col-sm-12" id="imgFrame">
                                <img className="img-rounded" src={imgUrl} />
                            </div>
                            <div className="button">
                                <button type="button" className="btn btn-cancel" name="btncancel">Hủy</button>
                                <button type="submit" className="btn btn-add" name="btnsubmit" onClick={(e) => saveBanner(e)}>Chỉnh sửa</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );


}



export default UpdateBanner;