import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../../styles/banner/CreateBanner.css';
// import BannerService from "../../services/SectionService";
import * as BiIcons from "react-icons/bi";
// import { ref, uploadBytes, getDownloadURL, listAll, list } from "firebase/storage";
// import { storage } from "../../common/Firebase";
// import { v4 } from "uuid";
import { useHistory } from "react-router-dom";
import WebsiteService from "../../services/website/WebsiteService";


function CreateWebsite(props) {
    const history = useHistory();
    const [websiteName, setWebsiteName] = useState('');
    const [code, setCode] = useState('');
    const [urlLink, setUrlLink] = useState('');

    // const getImage = (e) => {
    //     if (e.target.files[0]) {
    //         setImgPreview(URL.createObjectURL(e.target.files[0]));  //đặt bản xem trước 
    //     } else console.log("file not found");
    //     setImageUpload(e.target.files[0]);
    // }

    const handClickReturn = () => {
        history.push('/website');
    }
    const saveSection = (e) => {
        e.preventDefault();
        let userAdd = "trong";
        let websiteItem = {
            name: websiteName,
            url: urlLink ,
            userAdd: userAdd,
            code: code,
        }
        console.log('section => ', websiteItem);
        WebsiteService.createWebsite(websiteItem)
    }


    return (

        <div className="create-banner-container mx-3" >
            <div className="header-top">
                <p className="mt-3 text-left">
                    {props.showAdminBoard ? (<span>Admin</span>) : (<span>User</span>)}
                    <BiIcons.BiChevronRight size={18} />
                    <Link className="text-decoration-none" to="/website"> Quản lý khu vực </Link>
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
                                {/* <div className="mt-3 form-group">
                                    <label htmlFor="bannerID">Mã khu vực</label>
                                    <input className="form-control"
                                        value={id || ''} disabled
                                    />
                                </div> */}
                                <div className="mt-3 form-group">
                                    <label htmlFor="websiteName">Tên website</label>
                                    <input className="form-control" id="websiteName" type="text" name="websiteName"
                                        placeholder="ex: SapoCore"
                                        value={websiteName} onChange={(e) => setWebsiteName(e.target.value)}
                                    />
                                </div>
                                <div className="mt-3 form-group">
                                    <label htmlFor="code">Mã Website</label>
                                    <input className="form-control" type="text"
                                        placeholder="Ví dụ: Core1"
                                        value={code} onChange={(e) => setCode(e.target.value)}
                                    />
                                </div>
                                <div className="mt-3 form-group">
                                    <label htmlFor="url">Nhập liên kết</label>
                                    <input className="form-control" type="text"
                                        placeholder="Liên kết url"
                                        value={urlLink} onChange={(e) => setUrlLink(e.target.value)}
                                    />
                                </div>
                                {/* <div className="mt-3 form-group">
                                    <label id="upload-label" htmlFor="upload">Chọn Hình Ảnh</label>
                                    <div className="custom-file">
                                        <input id="upload"
                                            type="file"
                                            className="form-control border-0"
                                            accept=".png,.gif,.jpg,.jpeg"
                                            onChange={getImage}
                                        />
                                    </div>
                                </div> */}
                            </form>
                        </div>

                        <div className="col-sm-6 right">
                            {/* <div className="col-sm-12">
                                <h3 className="text-center">Ảnh minh họa</h3>
                            </div> */}
                            {/* <div className="col-sm-12" id="imgFrame">

                                <img className="img-rounded img-thumbnail" src={imgPreview} />
                            </div> */}
                            <div className="button">
                                <button type="button" className="btn btn-cancel" name="btncancel" onClick={() => handClickReturn()} >Hủy</button>
                                <button type="submit" className="btn btn-add " name="btnsubmit" onClick={(e) => saveSection(e)}>Thêm website</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >

    );

}
export default CreateWebsite;
