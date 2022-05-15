import "../../styles/banner/BannerInfo.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GrView } from "@react-icons/all-files/gr/GrView";
import { HiOutlineCursorClick } from "@react-icons/all-files/hi/HiOutlineCursorClick"
import ReportService from "../../services/ReportService";

// import BannerStatusService from "../../services/ReportService";
const BASE_URL = "http://localhost:8080/api/banners/";


const ReportBannerInfor = ({ bannerInfo, bannerList, setBannerList }) => {
    // 'delete' has to remove the item from bannerList too so that
    // the web will change immediately without having to reload the page
    // as {bannerList} contains the list of banner the 'BannerList' component has

    const [detailInfo, setDetailInfo] = useState(bannerInfo);
    const [views, setViews] = useState([]);
    const [clicks, setClicks] = useState([]);
    let { id } = useParams();
    const reportDetail = {
        pathname: "/views/detail/" + bannerInfo.code,
        detailInfo: detailInfo,
        views: views,
        clicks: clicks

    }

    useEffect(() => {
        // Lay thong tin view
        ReportService.getSumClickAndViewInBannerId(bannerInfo.id).then((response) => {
            const data = response.data;
            console.log("res", response)
            setViews(data.numberView);
            setClicks(data.numberClick)

            // console.log("views", data.numberView)

        });
    }, []);

    return (
        <div className="banner-info p-3">
            <div className="row align-middle">
                <div className="detail-info col-sm-12 order-sm-1 col-md-6 order-md-1 col-xl-3 order-xl-1">
                    <label>NAME</label>
                    <p>{bannerInfo.name}</p>
                    <div>{views} <GrView /></div>
                    <div>{clicks} <HiOutlineCursorClick /></div>
                </div>
                <div className="image-container col-sm-12 order-sm-2 col-md-12 order-md-3 col-xl-6 order-xl-2">
                    <img className="rounded mx-auto d-block pt-2" src={bannerInfo.imgUrl} alt={bannerInfo.code}/>
                </div>
                <div className="button-choice col-sm-12 order-sm-3 col-md-6 order-md-2 col-xl-3 order-xl-3">
                    <Link type="button" className="btn btn-secondary btn-block w-100" to={reportDetail}>Show</Link>
                </div>
            </div>
        </div >
    );
};

export default ReportBannerInfor;
