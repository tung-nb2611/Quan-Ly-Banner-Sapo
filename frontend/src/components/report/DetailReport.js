
import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
// import '../../styles/banner/UpdateBanner.css';
import * as BiIcons from "react-icons/bi";
import { useLocation, useParams } from "react-router-dom";
import DetailClick from "./DetailClick";
import '../../styles/report/DetailReport.css';
import ViewService from "../../services/views/ViewService";
import ClickService from "../../services/clicks/ClickService";
import DetailView from "./DetailView";


function DetailReport(props) {
    let { id } = useParams();
    // Vấn đề: Access link trực tiếp thì sẽ không có id
    // Lấy thông tin banner được chọn để cho vào state của component Update thông tin

    const history = useHistory();
    const linkState = useLocation();
    let data = {}
    let views = {}
    let clicks = {}


    if (typeof linkState.detailInfo !== 'undefined') {
        data = linkState.detailInfo;
        views = linkState.views;
        clicks = linkState.clicks;
    }

    const [pageNumber, setPageNumber] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    const [bannerCode] = useState(data.id);
    const [name] = useState(data.name);
    const [imgUrl] = useState(data.imgUrl); // Dùng để show ảnh
    const [click] = useState(views.number);
    const [clickInfoList, setClickInfoList] = useState([]);
    const [viewInfoList, setViewInfoList] = useState([]);
    const [showInfo, setShowInfo] = useState([])
    console.log('123:', data.id);

    useEffect(() => {
        ViewService.getListView(data.id).then((response) => {
            const info = response.data;

            console.log("views innfo", info)
            setViewInfoList(info);

        })
    }, []);
    useEffect(() => {
        ClickService.getClickInfoByBannerId(data.id).then((response) => {
            const info = response.data;

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

                                        value={views} disabled />
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
                        <div>
                            <button onClick={() => setShowInfo(false)}>
                                Views
                            </button>
                            <button onClick={() => setShowInfo(true)}>
                                Clicks
                            </button>
                        </div>
                        <div className="">
                            <div className="info">
                                {showInfo === false ? (
                                    <div>
                                        <table className="table">
                                            <thead>
                                                <tr className="col-6">
                                                    <th className="col-2 text-center"> ID khu vực  Hiển Thị </th>
                                                    <th className="col-2 text-center"> browerName</th>
                                                    <th className="col-1 text-center" >Thời gian Click</th>
                                                    <th className="col-2 text-center"> Người thực hiện</th>
                                                </tr>
                                            </thead>
                                            <tbody className="col-6">
                                                {
                                                    viewInfoList.map((item) =>
                                                        <DetailView key={item.id} viewInfoList={item} />
                                                    )
                                                }
                                            </tbody>
                                        </table>;
                                    </div>
                                ) : (
                                    <div>
                                        <table className="table">
                                            <thead>
                                                <tr className="col-6">
                                                    <th className="col-2 text-center"> ID khu vực  Hiển Thị </th>
                                                    <th className="col-2 text-center"> browerName</th>
                                                    <th className="col-1 text-center" >Thời gian Click</th>
                                                    <th className="col-2 text-center"> Người thực hiện</th>
                                                </tr>
                                            </thead>

                                            <tbody className="col-6 ">
                                                {
                                                    clickInfoList.map((item) =>
                                                        <DetailClick key={item.id} clickInfoList={item} />
                                                    )
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                )
                                }
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