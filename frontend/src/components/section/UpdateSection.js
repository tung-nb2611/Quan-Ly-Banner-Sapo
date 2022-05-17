import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import '../../styles/website/CreateWebsite.css';
import * as BiIcons from "react-icons/bi";

import { useHistory } from "react-router-dom";
import SectionService from "../../services/section/SectionService";
import { useParams } from "react-router-dom";


function UpdateSection(props) {
    let { webId, sectionId } = useParams();
    const history = useHistory();
    const [divId, setDivId] = useState('');
    useEffect(() => {
        SectionService.getDivId(sectionId).then(
            (response) => {
                setDivId(response.data);
            }
        )

    }, [sectionId])

    const handClickReturn = () => {
        history.push('/websites/websiteId=' + webId + '/sections');
    }

    const handleValidateBeforeAdd = (e) => {
        if (divId.length === 0) {
            document.getElementById("divId").style.display = "block";
            document.getElementById("divId").style.color = "red";
            document.getElementById("divId").innerText = "Tên thẻ div không được để trống";
            return;
        }
        else {
            document.getElementById("divId").style.display = "none";
            saveSection(e);
        }
    }
    const saveSection = (e) => {
        e.preventDefault();
        let id = sectionId;
        let sectionItem = {
            divId: divId,
            webId: webId,
        }
        console.log('section => ', sectionItem);
        SectionService.updateSection(sectionItem, id).then(
            history.push('/websites/websiteId=' + webId + '/sections')
        )
    }

    const handleChangeValidateDivId = (e) => {

        if (!(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(e.target.value))) {
            document.getElementById("divId").style.display = "none";
            setDivId(e.target.value)
        }
        else {
            document.getElementById("divId").style.display = "block";
            document.getElementById("divId").style.color = "red";
            document.getElementById("divId").innerText = "Tên thẻ div không được chứa các kí tự đặc biệt";
        }
    }

    return (
        <div className="create-website-container px-3" >
            <div className="header-top">
                <p className="mt-3 text-left">
                    {props.showAdminBoard ? (<span>Admin</span>) : (<span>User</span>)}
                    <BiIcons.BiChevronRight size={18} />
                    <Link className="text-decoration-none" to={"/websites/websiteId=" + webId + "/sections"}> Danh sách khu vực </Link>
                    <BiIcons.BiChevronRight size={18} />Sửa khu vực
                </p>
            </div>
            <hr />
            <div className="container">
                <div className="main-content">
                    <div className="pb-4 text-center">
                        <h2>Sửa Khu vực Banner</h2>
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
                                <p id="divId" className="mt-3"></p>
                            </div>
                        </form>
                        <div className="button">
                            <button type="button" className="btn btn-outline-secondary mt-2 me-2" name="btncancel" onClick={() => handClickReturn()} >Hủy</button>
                            <button type="submit" className="btn btn-primary mt-2" name="btnsubmit" onClick={(e) => handleValidateBeforeAdd(e)}>Sửa khu vực</button>
                        </div>
                    </div>
                </div>
            </div>
        </div >

    );

}
export default UpdateSection;