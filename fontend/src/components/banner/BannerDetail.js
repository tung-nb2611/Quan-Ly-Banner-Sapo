import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../../styles/banner/UpdateBanner.css';
import BannerService from "../../services/BannerService";
import * as BiIcons from "react-icons/bi";
import { useLocation } from "react-router-dom";


function BannerDetail(props) {

    // Vấn đề: Access link trực tiếp thì sẽ không có id
    // Lấy thông tin banner được chọn để cho vào state của component Update thông tin
    let data = {}
    const linkState = useLocation();
    console.log(linkState);
    if (typeof linkState.detailInfo !== 'undefined') {

        data = linkState.detailInfo;
        console.log(data);
    }
    //

    const [bannerID, setBannerID] = useState(data.id);
    const [bannerCode, setBannerCode] = useState(data.code);
    const [sectionID, setSectionID] = useState(data.sectionID);
    const [name, setName] = useState(data.name);
    const [imgUrl, setImgUrl] = useState(data.imgUrl); // Dùng để show ảnh
    const [imgName, setImgName] = useState(data.imgUrl);
    const [state, setState] = useState(data.state);
    const [expired, setExpired] = useState(data.expired);
    const [userAdd, setUserAdd] = useState(data.userAdd);
    const [userFix, setUserFix] = useState(data.userFix);
    const [createAt, setCreateAt] = useState(data.createAt);
    const [modifiedAt, setModifiedAt] = useState(data.modifiedAt);


    const getImage = (e) => {

        if (e.target.files[0]) {

            setImgUrl(URL.createObjectURL(e.target.files[0])); // đặt bản xem trước 
        } else console.log("file not found");
        // setFile(e.target.files[0]);
        console.log(e.target.files[0].name);
        setImgName(e.target.files[0].name);

    }


    return (

        <div className="update-banner-container mx-3">
            <div className="header-top">
                <p className="mt-3 text-left">
                    {props.showAdminBoard ? (<span>Admin</span>) : (<span>User</span>)}
                    <BiIcons.BiChevronRight size={18}/>
                    <Link className="text-decoration-none" to="/banner/manage">Quản lý banner</Link>
                    <BiIcons.BiChevronRight size={18}/>Thông tin banner</p>
            </div>
            <hr/>
            <div className="container">
                <div className="main-content">
                    <div className="row">
                        <div className="col-sm-12 pb-4">
                            <h2>Thông tin banner</h2>
                        </div>
                        <div className="col-sm-6 left mt-2">
                            <form method="post" encType="multipart/form-data">
                                <div className="mt-1 form-group">
                                    <label htmlFor="bannerID">Mã banner</label>
                                    <input className="form-control" id="bannerID" type="text" name="bannerID"
                                        placeholder="ex: 123..."
                                        value={bannerCode}
                                        disabled />
                                </div>

                                <div className="mt-2 form-group">
                                    <label htmlFor="sectionID">Mã khu vực</label>
                                    <input className="form-control" type="text" id="sectionID" name="sectionID"
                                        placeholder="ex: 123..."
                                        value={sectionID} />
                                </div>

                                <div className="mt-2 form-group">
                                    <label htmlFor="name">Tên banner</label>
                                    <input className="form-control" type="text" id="name" name="name"
                                        placeholder="ex: quảng cáo cá tháng tư"
                                        value={name} 
                                        disabled/>
                                </div>

                                <div className="mt-2 form-group">
                                    <label htmlFor="expired">Ngày hết hạn banner</label>
                                    <input className="form-control" type="date"
                                        value={expired || ''} />
                                </div>
                                <div className="mt-2 form-group">
                                    <label htmlFor="sectionID">Ngày chỉnh sửa </label>
                                    <input className="form-control" type="text" id="sectionID" name="sectionID"

                                        value={setCreateAt} />
                                </div>
                                <div className="mt-2 form-group">
                                    <label id="upload-label" htmlFor="upload">Chọn Hình Ảnh</label>

                                    <div className="custom-file">
                                        <input id="upload" type="file" className="form-control border-0" accept=".png,.gif,.jpg,.jpeg"
                                            onChange={getImage} 
                                            disabled/>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="col-sm-6 right">
                            <div className="col-sm-12">
                                <h3 className="text-center">Hình ảnh Banner</h3>
                            </div>
                            <div className="col-sm-12" id="imgFrame">
                                <img className="img-rounded" alt="ảnh banner" src={imgUrl} />
                            </div>
                            <div className="button">
                                <button type="button" className="btn btn-cancel" name="btncancel">Hủy</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );


}



export default BannerDetail;