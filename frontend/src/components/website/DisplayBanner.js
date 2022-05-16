import '../../styles/website/DisplayBanner.css'
import React, { useContext, useEffect, useState } from "react";
import * as BiIcons from "react-icons/bi";
import ListBannerChoice from '../banner/ListBannerChoice';
import { useHistory, useParams } from 'react-router-dom';
import BannerStatusService from '../../services/BannerStatusService'
import { CheckboxArrContext } from '../../context/CheckboxListContext';
import SectionService from '../../services/section/SectionService';

import { Link } from "react-router-dom";
import ListBannerHidden from '../banner/ListBannerHidden';
import { CheckboxContext } from '../../context/CheckboxContext';

function DisplayBanner(props) {

    const arrContext = useContext(CheckboxArrContext);
    const arrHiddenContext = useContext(CheckboxContext);
    let { id } = useParams();
    const [section, setSection] = useState([]);
    const [sectionInfo, setSectionInfo] = useState();
    const history = useHistory();
    const [randomChecked, setRandomChecked] = useState(true);
    const [percentageChecked, setpercentageChecked] = useState(false);
    const [random, setRandom] = useState();

    useEffect(() => {
        SectionService.getSectionById(id).then((response) => {
            setSectionInfo(response.data);
            setRandom(response.data.status);
            setRandomChecked(response.data.status ? 0 : 1);
            setpercentageChecked(response.data.status ? 1 : 0);
        })
    }, []);

    const createPage = {
        pathname: "/banner/create/" + id,
        section: section
    }

    const backToSections = () => {
        history.push('/websites/websiteId=' + id + '/sections')
    }

    const displayUtil = {
        random: randomChecked,
        percent: percentageChecked,
    }

    const handleOnChangeChoice = (e) => {
        const choice = e.target.value;
        if (choice === "Percentage") {
            setRandomChecked(false);
            setpercentageChecked(true);
        }
        else {
            setRandomChecked(true);
            setpercentageChecked(false);
        }
    }

    const handleAddBannerForDisplay = () => {

        if (timeDisplay <= 0) {
            alert("Thời gian hiển thị banner phải là một số dương");
            return;
        }


        // Dùng 2 lần for do: có 2 array - 1 cái chứa banner đã ẩn và 1 cái chứa banner đang được hiển thị
        let today = new Date();
        let bannerStatusArray = new Array();
        for (let i = 0; i < arrContext.bannerArr.length; i++) {
            let bannerStatusItem = {
                bannerID: arrContext.bannerArr[i].bannerID,
                code: arrContext.bannerArr[i].code,
                id: arrContext.bannerArr[i].id,
                imgUrl: arrContext.bannerArr[i].imgUrl,
                name: arrContext.bannerArr[i].name,
                sectionID: arrContext.bannerArr[i].sectionID,
                percentage: arrContext.bannerArr[i].percentage,
                timeDisplay: today,
                state: arrContext.bannerArr[i].state
            }
            bannerStatusArray.push(bannerStatusItem);
        }

        for (let i = 0; i < arrHiddenContext.hiddenArr.length; i++) {
            let bannerStatusItem = {
                bannerID: arrHiddenContext.hiddenArr[i].bannerID,
                code: arrHiddenContext.hiddenArr[i].code,
                id: arrHiddenContext.hiddenArr[i].id,
                imgUrl: arrHiddenContext.hiddenArr[i].imgUrl,
                name: arrHiddenContext.hiddenArr[i].name,
                sectionID: arrHiddenContext.hiddenArr[i].sectionID,
                percentage: arrHiddenContext.hiddenArr[i].percentage,
                timeDisplay: today,
                state: arrHiddenContext.hiddenArr[i].state
            }
            bannerStatusArray.push(bannerStatusItem);
        }

        BannerStatusService.updateBannerStatusList(bannerStatusArray);



            BannerStatusService.updateBannerStatusList(bannerStatusArray);
            
            const section = {
                id: sectionInfo.id,
                divId: sectionInfo.divId,
                webId: sectionInfo.webId,
                status: randomChecked ? 0 : 1
            }

            SectionService.updateSectionStatus(section);
            /// api luu random/percentage vao section list dua theo section id
        

    }

    return (
        <>
            <div className="display-banner-container mx-3">
                <div className='row header'>
                    <div className="col-10 header_left">
                        <p className="mt-4 text-left"> Admin <BiIcons.BiChevronRight size={20} /> Quản lý hiển thị banner trong khu vực <BiIcons.BiChevronRight size={20} /></p>
                    </div>
                    <div className="col-2 mt-3 header_right">
                        <button type="button" className="btn btn-block w-100" style={{ backgroundColor: "#0d6efd" }}><Link to={createPage} className="text-white" style={{ textDecoration: "none" }}>Thêm mới</Link></button>
                    </div>
                </div>
                <hr></hr>
                <div className="container">
                    <div className="main-content">
                        <div className="row">
                            <div className="col-sm-12">
                                <h1>Quản lý hiển thị banner</h1>
                            </div>
                            <div className=" mt-3 col-sm-12">
                                <form >
                                    <div className="mt-2 col-12 form-group">
                                        <div className="col-2">
                                            <label htmlFor="bannerID">Khu vực hiển thị</label>
                                        </div>
                                        <div className="col-8">
                                            <input className="form-control text-center"
                                                value={id} disabled
                                            />
                                        </div>
                                    </div>

                                    <div className='mt-3 col-12 form-group'>
                                        <div className='col-2'>
                                            <label htmlFor='bannerID'>Chế độ hiển thị</label>
                                        </div>
                                        <label className='col-12'>

                                            <select className='col-5' style={{ fontSize: "17px"}} onChange={(e) => handleOnChangeChoice(e)}>
                                                <option value="Random" selected={randomChecked ? true : false} >Ngẫu nhiên</option>
                                                <option value="Percentage" selected={percentageChecked ? true : false}>Tỉ trọng</option>

                                            </select>
                                        </label>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="mt-3 col-10" id="showListBannerChoice">
                            <ListBannerChoice id={id} displayUtil={displayUtil}></ListBannerChoice>
                        </div>
                        <div className="mt-3 col-10">
                            <h4>Banner đã ẩn</h4>
                            <ListBannerHidden id={id} displayUtil={displayUtil}></ListBannerHidden>
                        </div>
                        <div className="col-12">

                          <div className="button">
                          <button type="button" className="btn btn-outline-secondary mt-2 me-2" name="btncancel" onClick={() => backToSections()}>Hủy</button>
                          <button type="submit" className="btn btn-primary mt-2" name="btnsubmit" onClick={() => handleAddBannerForDisplay()} >Lưu thông tin</button>
                          </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default DisplayBanner;

