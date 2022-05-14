import React, { useState } from "react";
import { Link } from "react-router-dom";
<<<<<<< HEAD
import '../../styles/banner/CreateBanner.css';
// import BannerService from "../../services/SectionService";
import * as BiIcons from "react-icons/bi";
// import { ref, uploadBytes, getDownloadURL, listAll, list } from "firebase/storage";
// import { storage } from "../../common/Firebase";
// import { v4 } from "uuid";
=======
import '../../styles/website/CreateWebsite.css';
import * as BiIcons from "react-icons/bi";

>>>>>>> 21a008dd5fd8e5676ff0c00d6ace9145ee0bba21
import { useHistory } from "react-router-dom";
import SectionService from "../../services/section/SectionService";
import { useParams } from "react-router-dom";


<<<<<<< HEAD

function CreateSection(props) {
    let {webId} = useParams();
    const history = useHistory();
    const [divId, setDivId] = useState('');

    // const getImage = (e) => {
    //     if (e.target.files[0]) {
    //         setImgPreview(URL.createObjectURL(e.target.files[0]));  //đặt bản xem trước 
    //     } else console.log("file not found");
    //     setImageUpload(e.target.files[0]);
    // }

    const handClickReturn = () => {
        history.push('/websites/websiteId=' + webId + '/sections');
    }
    const saveSection = (e) => {
        e.preventDefault();
        let sectionItem = {
            divId: divId ,
            webId: webId,
        }
        console.log('section => ', sectionItem);
        SectionService.createSection(sectionItem)
    }


    return (

        <div className="create-banner-container mx-3" >
=======
function CreateSection(props) {
    let { webId } = useParams();
    const history = useHistory();
    const [divId, setDivId] = useState('');

    const handClickReturn = () => {
        history.push('/websites/websiteId=' + webId + '/sections');
    }

    const saveSection = (e) => {
        e.preventDefault();
        let sectionItem = {
            divId: divId,
            webId: webId,
        }
        console.log('section => ', sectionItem);
        SectionService.createSection(sectionItem).then(
            history.push('/websites/websiteId=' + webId + '/sections')
        )
    }

    const handleChangeValidateDivId = (e) => {
        setDivId(e.target.value)
        if (!(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(e.target.value))) {
            document.getElementById("divId").style.display = "none";
        }
        else {
            document.getElementById("divId").style.display = "block";
            document.getElementById("divId").style.color = "red";
            document.getElementById("divId").innerText = "Tên thẻ div không được chứa các kí tự đặc biệt";
        }
    }

    return (
        <div className="create-website-container px-3" >
>>>>>>> 21a008dd5fd8e5676ff0c00d6ace9145ee0bba21
            <div className="header-top">
                <p className="mt-3 text-left">
                    {props.showAdminBoard ? (<span>Admin</span>) : (<span>User</span>)}
                    <BiIcons.BiChevronRight size={18} />
                    <Link className="text-decoration-none" to={"/websites/websiteId=" + webId + "/sections"}> Danh sách khu vực </Link>
                    <BiIcons.BiChevronRight size={18} />Thêm khu vực
                </p>
            </div>
            <hr />
            <div className="container">
                <div className="main-content">
<<<<<<< HEAD
                    <div className="row">
                        <div className="col-sm-12 pb-4">
                            <h2>Thêm Mới Khu vực Banner</h2>
                        </div>
                        <div className="col-sm-6 left">
                            <form>
                                <div className="mt-3 form-group">
                                    <label htmlFor="webId">Id website</label>
                                    <input className="form-control" id="webId" type="text" name="webId"
                                        value={webId}
                                    />
                                </div>
                                <div className="mt-3 form-group">
                                    <label htmlFor="code">Mã Website</label>
                                    <input className="form-control" type="text"
                                        placeholder="Ví dụ: img"
                                        value={divId} onChange={(e) => setDivId(e.target.value)}
                                    />
                                </div>
                            </form>
                        </div>

                        <div className="col-sm-6 right">
                            <div className="button">
                                <button type="button" className="btn btn-cancel" name="btncancel" onClick={() => handClickReturn()} >Hủy</button>
                                <button type="submit" className="btn btn-add " name="btnsubmit" onClick={(e) => saveSection(e)}>Thêm section</button>
                            </div>
=======
                    <div className="pb-4 text-center">
                        <h2>Thêm Mới Khu vực Banner</h2>
                    </div>
                    <div className="website-form">
                        <form>
                            <div className="mt-3 form-group">
                                <label htmlFor="webId">Id website</label>
                                <input className="form-control" type="text"
                                    value={webId} disabled
                                />
                            </div>
                            <div className="mt-3 form-group">
                                <label htmlFor="code">ID thẻ div</label>
                                <input className="form-control" type="text"
                                    placeholder="Ví dụ: img"
                                    value={divId || ''} onChange={(e) => handleChangeValidateDivId(e)}
                                />
                                <p id="divId"></p>
                            </div>
                        </form>
                        <div className="button">
                            <button type="button" className="btn btn-outline-secondary mt-2 me-2" name="btncancel" onClick={() => handClickReturn()} >Hủy</button>
                            <button type="submit" className="btn btn-primary mt-2" name="btnsubmit" onClick={(e) => saveSection(e)}>Thêm section</button>
>>>>>>> 21a008dd5fd8e5676ff0c00d6ace9145ee0bba21
                        </div>
                    </div>
                </div>
            </div>
        </div >

    );

}
export default CreateSection;
