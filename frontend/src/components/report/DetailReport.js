
import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

// import '../../styles/banner/UpdateBanner.css';
import * as BiIcons from "react-icons/bi";
import { useLocation, useParams } from "react-router-dom";
import ClickService from "../../services/clicks/ClickService";
import DetailClick from "./DetailClick";
import PaginateList from "../PaginateList";
import '../../styles/report/DetailReport.css';
import BannerService from "../../services/BannerService";


function DetailReport(props) {
    let { id } = useParams();
    // Vấn đề: Access link trực tiếp thì sẽ không có id
    // Lấy thông tin banner được chọn để cho vào state của component Update thông tin

    const history = useHistory();
    const linkState = useLocation();
    let data = {}
    let views = {}
    let clicks = {}

<<<<<<< HEAD

=======
>>>>>>> 21a008dd5fd8e5676ff0c00d6ace9145ee0bba21
    if (typeof linkState.detailInfo !== 'undefined') {
        data = linkState.detailInfo;
        views = linkState.views;
        clicks = linkState.clicks;
    }

    const [pageNumber, setPageNumber] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
<<<<<<< HEAD
    const [bannerCode] = useState(data.id);
=======
    const [bannerCode] = useState(data.code);
>>>>>>> 21a008dd5fd8e5676ff0c00d6ace9145ee0bba21
    const [name] = useState(data.name);
    const [imgUrl] = useState(data.imgUrl); // Dùng để show ảnh
    const [click] = useState(views.number);
    const [clickInfoList, setClickInfoList] = useState([]);

    useEffect(() => {
        BannerService.getBannerById(data.id).then((response) => {
            const info = response.data.content;

            console.log("click innfo", info)
            setClickInfoList(info);

        })
    }, []);

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

<<<<<<< HEAD
                                        value={views} disabled />
=======
                                        value={click} disabled />
>>>>>>> 21a008dd5fd8e5676ff0c00d6ace9145ee0bba21
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
                        </div>
                        <br />
                        <div className="">
                            <div className="">
                                <table className="table">
                                    <thead>

                                        <tr className="col-6 bg-info">
                                            <th className="col-1 text-center" >Thời gian Click</th>
                                            <th className="col-2 text-center"> Người thực hiện</th>
                                            <th className="col-2 text-center"> ID Trang Web Hiển Thị </th>




                                        </tr>
                                    </thead>
                                    <tbody className="col-6 ">
                                        {/* {
                                            clickInfoList.map((item) =>
                                                <DetailClick key={item.id} clickInfo={item} />
                                            )
                                        } */}
                                    </tbody>
                                </table>
                            </div>

                        </div>
                        <div className="col-sm-6 right">
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