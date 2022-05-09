import '../../styles/section/DisplayBanner.css'
import React, { useContext, useState } from "react";
import * as BiIcons from "react-icons/bi";
import ListBannerChoice from '../banner/ListBannerChoice';
import { useHistory, useParams } from 'react-router-dom';
import BannerStatusService from '../../services/BannerStatusService'
import { CheckboxArrContext } from '../../context/CheckboxListContext';

import { Link } from "react-router-dom";

const BASE_URL = "http://localhost:8080/api/banners/page/";
function DisplayBanner(props) {

    const arrContext = useContext(CheckboxArrContext);
    let { id } = useParams();
    const [randomChecked, setRandomChecked] = useState(true);
    const [percentageChecked, setpercentageChecked] = useState(false);
    const [timeDisplay, setTimeDisplay] = useState(0);
    const [section, setSection] = useState([]);
    const [dataImg, setDataImg] = useState([]);
    const history = useHistory();

    const createPage = {
        pathname: "/banner/create/" + id,
        section: section
    }

    const handleOnChangeChoice = (e) => {
        if (randomChecked === true) {
            setRandomChecked(false);
            setpercentageChecked(true);
            document.getElementById("showListBannerChoice").style.opacity = 1;
        }
        else {
            setRandomChecked(true);
            setpercentageChecked(false)
            document.getElementById("showListBannerChoice").style.opacity = 0.6;

        }
    }
    const handleAddBanerForDisplay = () => {
        if (timeDisplay <= 0) {
            alert("Thời gian hiển thị banner phải là một số dương");
            return;
        }
        if (randomChecked === true) {

            let today = new Date();

            let bannerStatusItem = {
                sectionID: id,
                timeDisplay: today,
            }
            BannerStatusService.updateBannerStatusViaRandom(bannerStatusItem);

        };
        if (percentageChecked === true) {
            let today = new Date();
            let bannerStatusArray = new Array();
            for (let i = 0; i < arrContext.countArr.length; i++) {
                let bannerStatusItem = {
                    bannerID: arrContext.countArr[i].id,
                    sectionID: id,
                    percentage: arrContext.countArr[i].rate,
                    timeDisplay: today,
                }
                bannerStatusArray.push(bannerStatusItem);
            }

            BannerStatusService.updateBannerStatusViaPercentage(bannerStatusArray);
        }
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
                                    <div className="mt-3 col-12 form-group">
                                        <div className="col-2">
                                            <label htmlFor="bannerID">Thời gian hiển thị (ngày)</label>
                                        </div>
                                        <div className="col-8">
                                            <input className="form-control text-center" id="bannerID" type="number"
                                                value={timeDisplay} onChange={(e) => setTimeDisplay(e.target.value)}
                                            />
                                        </div>
                                    </div>

                                    <div className="mt-3 col-12 form-group">
                                        <div className="col-2">
                                            <label htmlFor="bannerID">Hiển thị ngẫu nhiên</label>
                                        </div>
                                        <label className="col-1">
                                            <input type="checkbox" checked={randomChecked} style={{ transform: "scale(1.5)", marginLeft: "5px" }}
                                                onChange={(e) => handleOnChangeChoice(e)}
                                            />
                                            <span className="checkmark"></span>
                                        </label>
                                    </div>
                                    <div className="mt-3 col-12 form-group">
                                        <div className="col-2">
                                            <label htmlFor="bannerID">Hiển thị theo tỉ trọng</label>
                                        </div>
                                        <label className="col-1">
                                            <input type="checkbox" style={{ transform: "scale(1.5)", marginLeft: "5px" }}
                                                checked={percentageChecked} onChange={(e) => handleOnChangeChoice(e)} />
                                            <span className="checkmark"></span>
                                        </label>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="mt-3 col-10" id="showListBannerChoice">
                            <ListBannerChoice id={id} ></ListBannerChoice>
                        </div>
                        <div className="col-12">
                            <div className="button">
                                <button type="button" className="btn btn-cancel" name="btncancel" >Hủy</button>
                                <button type="submit" className="btn btn-add " name="btnsubmit" onClick={() => handleAddBanerForDisplay()} >Thêm banner</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default DisplayBanner;