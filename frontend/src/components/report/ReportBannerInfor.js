import "../../styles/banner/BannerInfo.css";
import { Line } from 'react-chartjs-2';
import { Row, Col, Image } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GrView } from "@react-icons/all-files/gr/GrView";
import { HiOutlineCursorClick } from "@react-icons/all-files/hi/HiOutlineCursorClick"
import ViewService from "../../services/views/ViewService";
import Views from "./Views";
import ClickService from "../../services/clicks/ClickService";
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
        ViewService.getListView(bannerInfo.id).then((response) => {
            const data = response.data;
            setViews(data);

            console.log("views", data)

        });
    }, []);
    useEffect(() => {
        // Lay thong tin view
        ClickService.getCountClickByBanerId(bannerInfo.id).then((response) => {
            const data = response.data;
            setClicks(data);
            console.log("check res", response)
            console.log("click", data)

        });
    }, []);





    return (
        <>
            <div className="banner-info m-4 p-3">
                <Row>
                    <Col xs={6} md={6} lg={3} xl={3} className="detail-info">
                        <label>NAME</label>
                        <p>{bannerInfo.name}</p>
                    </Col>
                    <Col xs={6} md={6} lg={2} xl={2} className="detail-show d-flex align-items-center justify-content-center">
                        <Link type="button" className="btn btn-secondary btn-block w-100" to={reportDetail}>Show</Link>
                    </Col>
                    <Col xs={6} md={6} lg={5} xl={5} className="image-container d-flex justify-content-center">
                        <Image src={bannerInfo.imgUrl} />
                    </Col>
                    <Col xs={6} md={6} lg={2} xl={2} className="button-choice d-flex flex-column mt-auto p-3">
                        <div>
                            <div>
                                {views.number} <GrView />
                            </div>
                            <div>
                                {clicks} <HiOutlineCursorClick />
                            </div>

                        </div>
                    </Col>
                </Row>

            </div >

        </>
    );
};

export default ReportBannerInfor;
