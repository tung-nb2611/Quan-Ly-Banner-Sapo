import '../../styles/website/DisplayBanner.css'
import React, { useContext, useEffect, useState } from "react";
import * as BiIcons from "react-icons/bi";
import ListBannerChoice from '../banner/ListBannerChoice';

import { useHistory, useParams, useLocation } from 'react-router-dom';

import BannerStatusService from '../../services/BannerStatusService'
import { CheckboxArrContext } from '../../context/CheckboxListContext';
import SectionService from '../../services/section/SectionService';

import { Link } from "react-router-dom";
import ListBannerHidden from '../banner/ListBannerHidden';
import { CheckboxContext } from '../../context/CheckboxContext';

function DisplayBanner(props) {

    const webId = useLocation();
    const arrContext = useContext(CheckboxArrContext);
    const arrHiddenContext = useContext(CheckboxContext);
    let { id } = useParams();
    const [section, setSection] = useState([]);
    const [sectionInfo, setSectionInfo] = useState();
    const history = useHistory();
    const [randomChecked, setRandomChecked] = useState(true);
    const [percentageChecked, setpercentageChecked] = useState(false);
    const [random, setRandom] = useState();
    const [websiteId, setWebsiteId] = useState(webId.state.webId);

    console.log(websiteId);

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
        section: section,
        websiteId: websiteId
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

        // if (timeDisplay <= 0) {
        //     alert("Th???i gian hi???n th??? banner ph???i l?? m???t s??? d????ng");
        //     return;
        // }


        // D??ng 2 l???n for do: c?? 2 array - 1 c??i ch???a banner ???? ???n v?? 1 c??i ch???a banner ??ang ???????c hi???n th???
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
        <div className="display-banner-container px-3">
            {/* <div className='row header'>
                <div className="col-10 header_left">
                    <p className="mt-4 text-left"> Admin <BiIcons.BiChevronRight size={20} /> Qu???n l?? hi???n th??? banner trong khu v???c <BiIcons.BiChevronRight size={20} /></p>
                </div>
                <div className="col-2 mt-3 header_right">
                    <button type="button" className="btn btn-block w-100" style={{ backgroundColor: "#0d6efd" }}><Link to={createPage} className="text-white" style={{ textDecoration: "none" }}>Th??m m???i</Link></button>
                </div>
            </div> */}
            <div className="header-top d-flex justify-content-between mt-3">
                <p className="mt-2 mb-0 text-left">
                    {props.showAdminBoard ? (<span>Admin</span>) : (<span>Admin</span>)}
                    <BiIcons.BiChevronRight size={18} /> Qu???n l?? hi???n th??? banner trong khu v???c
                    {/* <Link className="text-decoration-none" to="/websites/manage">  </Link> */}
                </p>
                <Link className="btn btn-primary adder" to={createPage}>
                    Th??m m???i khu v???c
                </Link>
            </div>
            <hr />
            <div className="container">
                <div className="main-content">
                    <div className="pb-4 text-center">
                        <h2>Qu???n l?? hi???n th??? banner</h2>
                    </div>
                    <form className="form row">
                        <div className="form-group col-sm-12 col-lg-6 mb-2">
                            <div className="col-5">
                                <label htmlFor="bannerID">Khu v???c hi???n th???</label>
                            </div>
                            <div className="col-7">
                                <input className="form-control text-center"
                                    value={id} disabled
                                />
                            </div>
                        </div>
                        <div className='form-group col-sm-12 col-lg-6 mb-2'>
                            <div className='col-5'>
                                <label htmlFor='bannerID'>Ch??? ????? hi???n th???</label>
                            </div>
                            <label className='col-7'>
                                <select className='col-5 p-2 w-100' style={{ fontSize: "17px" }} onChange={(e) => handleOnChangeChoice(e)}>
                                    <option value="Random" selected={randomChecked ? true : false} >Ng???u nhi??n</option>
                                    <option value="Percentage" selected={percentageChecked ? true : false}>T??? tr???ng</option>
                                </select>
                            </label>
                        </div>
                    </form>
                    <div id="showListBannerChoice">
                        <ListBannerChoice id={id} displayUtil={displayUtil}></ListBannerChoice>
                    </div>
                    <div>
                        <h4>Banner ???? ???n</h4>
                        <ListBannerHidden id={id} displayUtil={displayUtil}></ListBannerHidden>
                    </div>
                    <div className="button">
                        <button type="button" className="btn btn-outline-secondary mt-2 me-2" name="btncancel" onClick={() => backToSections()}>H???y</button>
                        <button type="submit" className="btn btn-primary mt-2" name="btnsubmit" onClick={() => handleAddBannerForDisplay()} >L??u th??ng tin</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default DisplayBanner;

