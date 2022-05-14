import '../../styles/section/DisplayBanner.css'
import React, { useContext, useState } from "react";
import * as BiIcons from "react-icons/bi";
import ListBannerChoice from '../banner/ListBannerChoice';
import { useHistory, useParams } from 'react-router-dom';
import BannerStatusService from '../../services/BannerStatusService'
import { CheckboxArrContext } from '../../context/CheckboxListContext';

import { Link } from "react-router-dom";
import ListBannerHidden from '../banner/ListBannerHidden';
import { CheckboxContext } from '../../context/CheckboxContext';

function DisplayBanner(props) {

    const arrContext = useContext(CheckboxArrContext);
    const arrHiddenContext = useContext(CheckboxContext);
    let { id } = useParams();
    const [randomChecked, setRandomChecked] = useState(true);
    const [percentageChecked, setpercentageChecked] = useState(false);
    const [timeDisplay, setTimeDisplay] = useState(0);
    const [section, setSection] = useState([]);

    const createPage = {
        pathname: "/banner/create/" + id,
        section: section
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
    const handleAddBanerForDisplay = () => {
        if (timeDisplay <= 0) {
            alert("Thời gian hiển thị banner phải là một số dương");
            return;
        }
        
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
                                    <div className='mt-3 col-12 form-group'>
                                        <div className='col-2'>
                                            <label htmlFor='bannerID'>Chế độ hiển thị</label>
                                        </div>
                                        <label className='col-12'>
                                            <select className='col-5' style={{ fontSize: "17px"}} onChange={(e) => handleOnChangeChoice(e)}>
                                                <option value="Random">Ngẫu nhiên</option>
                                                <option value="Percentage">Tỉ trọng</option>
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

// import '../../styles/section/DisplayBanner.css'
// import React, { useContext, useState } from "react";
// import * as BiIcons from "react-icons/bi";
// import ListBannerChoice from '../banner/ListBannerChoice';
// import { useHistory, useParams } from 'react-router-dom';
// import BannerStatusService from '../../services/BannerStatusService'
// import { CheckboxArrContext } from '../../context/CheckboxListContext';

// import { Link } from "react-router-dom";

// const BASE_URL = "http://localhost:8080/api/banners/page/";
// function DisplayBanner(props) {
//   const arrContext = useContext(CheckboxArrContext);
//   let { id } = useParams();
//   const [randomChecked, setRandomChecked] = useState(true);
//   const [percentageChecked, setpercentageChecked] = useState(false);
//   const [timeDisplay, setTimeDisplay] = useState(0);
//   const [section, setSection] = useState([]);
//   const [dataImg, setDataImg] = useState([]);
//   const history = useHistory();

//   const createPage = {
//     pathname: "/banner/create/" + id,
//     section: section
//   }
// 	const backToSection = {
//     pathname: "/website" + id,
//   }

//   const handleOnChangeChoice = (e) => {
//     const choice = e.target.value;
//     if (choice === "Percentage") {
//       setRandomChecked(false);
//       setpercentageChecked(true);
//       document.getElementById("showListBannerChoice").style.opacity = 1;
//     }
//     else {
//       setRandomChecked(true);
//       setpercentageChecked(false)
//       document.getElementById("showListBannerChoice").style.opacity = 0.6;
//     }
//   }
//   const handleAddBannerForDisplay = () => {
//     if (timeDisplay <= 0) {
//       alert("Thời gian hiển thị banner phải là một số dương");
//       return;
//     }
//     if (randomChecked === true) {
//       let today = new Date();
//       let bannerStatusItem = {
//         sectionID: id,
//         timeDisplay: today
//       }
//       BannerStatusService.updateBannerStatusViaRandom(bannerStatusItem);

//     };
//     if (percentageChecked === true) {
//       let today = new Date();
//       let bannerStatusArray = new Array();
//       for (let i = 0; i < arrContext.countArr.length; i++) {
//         let bannerStatusItem = {
//           bannerID: arrContext.countArr[i].id,
//           sectionID: id,
//           percentage: arrContext.countArr[i].rate,
//           timeDisplay: today
//         }
//         bannerStatusArray.push(bannerStatusItem);
//       }
//       BannerStatusService.updateBannerStatusViaPercentage(bannerStatusArray);
//     }
//   }

//   return (
//     <div className="display-banner-container px-3">
//       <div className='header mt-3 d-flex justify-content-between'>
//         <p className="text-left pt-2 mb-0"> Admin 
//           <BiIcons.BiChevronRight size={18} /> Quản lý hiển thị banner trong khu vực 
//           {/* <BiIcons.BiChevronRight size={18} /> Quản lý hiển thị banner */}
//         </p>
//         <Link to={createPage} className="btn btn-primary btn-block px-5">Thêm mới</Link>
//       </div>
//       <hr/>
//       <div className="container">
//         <div className="main-content">
//           <div className="pb-4 text-center">
//             <h2>Quản lý hiển thị banner</h2>
//           </div>
//           <div className="row">
//             <div className="col-sm-12 d-inline-flex">
//               <form >
//                   <div className="mt-2 col-12 form-group">
//                       <div className="col-2">
//                           <label htmlFor="bannerID">Khu vực hiển thị</label>
//                       </div>
//                       <div className="col-8">
//                           <input className="form-control text-center"
//                               value={id} disabled
//                           />
//                       </div>
//                   </div>
//                   <div className="mt-3 col-12 form-group">
//                       <div className="col-2">
//                           <label htmlFor="bannerID">Thời gian hiển thị (ngày)</label>
//                       </div>
//                       <div className="col-8">
//                           <input className="form-control text-center" id="bannerID" type="number"
//                               value={timeDisplay} onChange={(e) => setTimeDisplay(e.target.value)}
//                           />
//                       </div>
//                   </div>
//                   <div className='mt-3 col-12 form-group'>
//                       <div className='col-2'>
//                           <label htmlFor='bannerID'>Chế độ hiển thị</label>
//                       </div>
//                       <label className='col-12'>
//                           <select className='col-5' style={{ fontSize: "17px"}} onChange={(e) => handleOnChangeChoice(e)}>
//                               <option value="Random">Ngẫu nhiên</option>
//                               <option value="Percentage">Tỉ trọng</option>
//                           </select>
//                       </label>
//                   </div>
            
//                   {/* <div className="mt-3 col-12 form-group">
//                       <div className="col-2">
//                           <label htmlFor="bannerID">Hiển thị ngẫu nhiên</label>
//                       </div>
//                       <label className="col-1">
//                           <input type="checkbox" checked={randomChecked} style={{ transform: "scale(1.5)", marginLeft: "5px" }}
//                               onChange={(e) => handleOnChangeChoice(e)}
//                           />
//                           <span className="checkmark"></span>
//                       </label>
//                   </div>
//                   <div className="mt-3 col-12 form-group">
//                       <div className="col-2">
//                           <label htmlFor="bannerID">Hiển thị theo tỉ trọng</label>
//                       </div>
//                       <label className="col-1">
//                           <input type="checkbox" style={{ transform: "scale(1.5)", marginLeft: "5px" }}
//                               checked={percentageChecked} onChange={(e) => handleOnChangeChoice(e)} />
//                           <span className="checkmark"></span>
//                       </label>
//                   </div>  */}
//               </form>
//             </div>
//           </div>
//           <div className="mt-3 col-10" id="showListBannerChoice">
//             <ListBannerChoice id={id} ></ListBannerChoice>
//           </div>
//           <div className="col-12">
//             <div className="button">
//               <button type="button" className="btn btn-cancel" name="btncancel" >Hủy</button>
//               <button type="submit" className="btn btn-add " name="btnsubmit" onClick={() => handleAddBannerForDisplay()} >Thêm banner</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// export default DisplayBanner;