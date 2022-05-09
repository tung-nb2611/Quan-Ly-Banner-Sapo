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

    const handClickReturn = () => {
        history.push('/banner/manage');
    }
    const saveBanner = (e) => {
        e.preventDefault();
        if (imageUpload == null) {
            return;
        }
        else {
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

    }


    return (

        <div className="create-banner-container mx-3" >
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
                    <div className="row">
                        <div className="col-sm-12 pb-4">
                            <h2>Thêm Mới Banner</h2>
                        </div>
                        <div className="col-sm-6 left">
                            <form>
                                <div className="mt-3 form-group">
                                    <label htmlFor="bannerID">Mã khu vực</label>
                                    <input className="form-control"
                                        value={id || ''} disabled
                                    />
                                </div>
                                <div className="mt-3 form-group">
                                    <label htmlFor="bannerID">Mã banner</label>
                                    <input className="form-control" id="bannerID" type="text" name="bannerID"
                                        placeholder="ex: B10"
                                        value={bannerID} onChange={(e) => setBannerID(e.target.value)}
                                    />
                                </div>
                                <div className="mt-3 form-group">
                                    <label htmlFor="name">Tên banner</label>
                                    <input className="form-control" type="text"
                                        placeholder="Ví dụ: Cá tháng tư"
                                        value={name} onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                                <div className="mt-3 form-group">
                                    <label htmlFor="name">Nhập liên kết</label>
                                    <input className="form-control" type="text"
                                        placeholder="Liên kết url"
                                        value={urlLink} onChange={(e) => setUrlLink(e.target.value)}
                                    />
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
                                </div>
                            </form>
                        </div>

                        <div className="col-sm-6 right">
                            <div className="col-sm-12">
                                <h3 className="text-center">Ảnh minh họa</h3>
                            </div>
                            <div className="col-sm-12" id="imgFrame">

                                <img className="img-rounded img-thumbnail" src={imgPreview} />
                            </div>
                            <div className="button">
                                <button type="button" className="btn btn-cancel" name="btncancel" onClick={() => handClickReturn()} >Hủy</button>
                                <button type="submit" className="btn btn-add " name="btnsubmit" onClick={(e) => saveBanner(e)}>Thêm banner</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >

    );

}

export default CreateBanner;
