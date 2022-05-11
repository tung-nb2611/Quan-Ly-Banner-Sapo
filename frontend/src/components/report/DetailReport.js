import React, { useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import '../../styles/banner/UpdateBanner.css';
import BannerService from "../../services/BannerService";
import * as BiIcons from "react-icons/bi";
import { useLocation } from "react-router-dom";



function DetailReport(props) {
    let { id } = useParams();
    // Vấn đề: Access link trực tiếp thì sẽ không có id
    // Lấy thông tin banner được chọn để cho vào state của component Update thông tin
    const history = useHistory();
    const linkState = useLocation();
    let data = {}
    let views = {}
    let clicks = {}

    if (typeof linkState.detailInfo !== 'undefined') {

        data = linkState.detailInfo;
        views = linkState.views;
        clicks = linkState.clicks

        console.log(data);
    }
    //

    const [bannerCode, setBannerCode] = useState(data.code);
    // const [sectionID, setSectionID] = useState(data.sectionID);
    const [name, setName] = useState(data.name);
    const [imgUrl, setImgUrl] = useState(data.imgUrl); // Dùng để show ảnh
    const [imgName, setImgName] = useState(data.imgUrl);
    const [createAt, setCreateAt] = useState(data.createAt);
    const [urlLink, setUrlLink] = useState(data.url)
    const [click, setClick] = useState(views.number)

    return (

        <div className="update-banner-container mx-3">
            <div className="header-top">
                <p className="mt-3 text-left">
                    {props.showAdminBoard ? (<span>Admin</span>) : (<span>User</span>)}
                    <BiIcons.BiChevronRight size={18} />
                    <Link className="text-decoration-none" to="/report">Report</Link>
                    <BiIcons.BiChevronRight size={18} />Thông tin báo cáo chi tiết banner</p>
            </div>
            <hr />
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
                                    <input className="form-control" type="text"
                                        placeholder="ex: 123..."
                                        value={bannerCode}
                                        disabled />
                                </div>
                                {/* 
                                <div className="mt-2 form-group">
                                    <label htmlFor="sectionID">Mã khu vực</label>
                                    <input className="form-control" type="text" id="sectionID" name="sectionID"
                                        placeholder="ex: 123..."
                                        value={sectionID} />
                                </div> */}

                                <div className="mt-2 form-group">
                                    <label htmlFor="name">Tên banner</label>
                                    <input className="form-control" type="text"
                                        placeholder="ex: quảng cáo cá tháng tư"
                                        value={name}
                                        disabled />
                                </div>
                                <div className="mt-2 form-group">
                                    <label htmlFor="sectionID">Lượt Views </label>
                                    <input className="form-control" type="text"

                                        value={click} disabled />
                                </div>
                                <div className="mt-2 form-group">
                                    <label htmlFor="lienket">Lượt clicks </label>
                                    <input className="form-control" type="text"

                                        value={clicks} disabled />
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
                                <button type="button" className="btn btn-cancel" name="btncancel" onClick={() => history.push("/report")}>Quay lại</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    );


}



export default DetailReport;