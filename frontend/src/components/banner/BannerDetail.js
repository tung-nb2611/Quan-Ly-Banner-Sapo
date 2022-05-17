import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import '../../styles/banner/UpdateBanner.css';
import BannerService from "../../services/BannerService";
import * as BiIcons from "react-icons/bi";
import { useLocation } from "react-router-dom";
import Zoom from 'react-img-zoom';
import { Modal } from '../../components/Modal';

function BannerDetail(props) {

    // Vấn đề: Access link trực tiếp thì sẽ không có id
    // Lấy thông tin banner được chọn để cho vào state của component Update thông tin
    const history = useHistory();
    const linkState = useLocation();
    let data = {}

    if (typeof linkState.detailInfo !== 'undefined') {

        data = linkState.detailInfo;
        console.log(data);
    }
    //

    const [bannerCode, setBannerCode] = useState(data.code);
    // const [sectionID, setSectionID] = useState(data.sectionID);
    const [name, setName] = useState(data.name);
    const [imgUrl, setImgUrl] = useState(data.imgUrl); // Dùng để show ảnh
    // const [imgName, setImgName] = useState(data.imgUrl);
    const [createAt, setCreateAt] = useState(data.createAt);
    const [urlLink, setUrlLink] = useState(data.url)


    const [showModal, setShowModal] = useState(false);
    const openModal = () => {
      setShowModal(prev => !prev);
    };

    return (
        <div className="update-banner-container px-3">
            <div className="header-top">
                <p className="pt-3 text-left">
                    {props.showAdminBoard ? (<span>Admin</span>) : (<span>User</span>)}
                    <BiIcons.BiChevronRight size={18} />
                    <Link className="text-decoration-none" to="/banner/manage">Quản lý banner</Link>
                    <BiIcons.BiChevronRight size={18} />Thông tin banner
                </p>
            </div>
            <hr />
            <div className="container">
                <div className="main-content">
                    <div className="pb-4 text-center">
                        <h2>Thông tin banner</h2>
                    </div>
                    <div className="row">
                        <div className="col-md-12 col-lg-6 pb-5">
                            <form method="post" encType="multipart/form-data">
                                <div className="form-group">
                                    <label htmlFor="bannerID">Mã banner</label>
                                    <input className="form-control" type="text"
                                        placeholder="ex: 123..."
                                        value={bannerCode}
                                        disabled 
                                    />
                                </div>
                                {/* 
                                <div className="mt-3 form-group">
                                    <label htmlFor="sectionID">Mã khu vực</label>
                                    <input className="form-control" type="text" id="sectionID" name="sectionID"
                                        placeholder="ex: 123..."
                                        value={sectionID} 
                                    />
                                </div> */}

                                <div className="mt-3 form-group">
                                    <label htmlFor="name">Tên banner</label>
                                    <input className="form-control" 
                                        type="text"
                                        placeholder="ex: quảng cáo cá tháng tư"
                                        value={name}
                                        disabled 
                                    />
                                </div>
                                <div className="mt-3 form-group">
                                    <label htmlFor="sectionID">Ngày tạo </label>
                                    <input className="form-control" 
                                        type="text"
                                        value={createAt} disabled 
                                    />
                                </div>
                                <div className="mt-3 form-group">
                                    <label htmlFor="lienket">Liên kết </label>
                                    <input className="form-control" 
                                        type="text"
                                        value={urlLink} disabled 
                                    />
                                </div>
                            </form>
                        </div>
                        <div className="col-md-12 col-lg-6">
                            <div>
                                <h3 className="text-center">Hình ảnh Banner</h3>
                            </div>
                            <div id="imgFrame">
                                <img className="img-rounded" alt="ảnh banner" src={imgUrl} />
                                {/* <Zoom
                                    img={imgUrl}
                                    zoomScale={2}
                                    width={400}
                                    height={300}
                                /> */}
                            </div>
                            <div className="button">
                                {/* <button type="button" className="btn btn-primary" onClick={openModal} imgUrl={imgUrl}>Xem banner</button> */}
                                <button type="button" className="btn btn-secondary" name="btncancel" onClick={() => history.push("/banner/manage")}>Quay lại</button>
                            </div>
                        </div>
                    </div>
                </div>
                <Modal showModal={showModal} setShowModal={setShowModal} />
            </div>
        </div>
    );


}



export default BannerDetail;