import "../../styles/banner/BannerInfo.css";
import { Line } from 'react-chartjs-2';
import { Row, Col, Image } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GrView } from "@react-icons/all-files/gr/GrView";
import { HiOutlineCursorClick } from "@react-icons/all-files/hi/HiOutlineCursorClick"
<<<<<<< HEAD
import ReportService from "../../services/ReportService";
=======
>>>>>>> 21a008dd5fd8e5676ff0c00d6ace9145ee0bba21

// import BannerStatusService from "../../services/ReportService";
// const BASE_URL = "http://localhost:8080/api/banners/";


const BannerInSectionInfor = ({ bannerInfo, bannerList, setBannerList }) => {
    // 'delete' has to remove the item from bannerList too so that
    // the web will change immediately without having to reload the page
    // as {bannerList} contains the list of banner the 'BannerList' component has

    const [detailInfo, setDetailInfo] = useState(bannerInfo);
    const [views, setViews] = useState([]);
    const [clicks, setClicks] = useState([]);
    let { id } = useParams();
<<<<<<< HEAD

=======
>>>>>>> 21a008dd5fd8e5676ff0c00d6ace9145ee0bba21
    const reportDetail = {
        pathname: "/views/detail/" + bannerInfo.code,
        detailInfo: detailInfo,
        views: views,
        clicks: clicks

    }

<<<<<<< HEAD
    useEffect(() => {
        // Lay thong tin view
        ReportService.getSumClickAndViewInBannerIdBySectionId(id, bannerInfo.id).then((response) => {
            const data = response.data;
            console.log("res123", response)
            setViews(data.numberView);
            setClicks(data.numberClick)

            // console.log("views", data.numberView)

        });
    }, []);
=======
    // useEffect(() => {
    //     // Lay thong tin view
    //     ReportService.getSumClickAndViewInBannerId(bannerInfo.id).then((response) => {
    //         const data = response.data;
    //         console.log("res", response)
    //         setViews(data.numberView);
    //         setClicks(data.numberClick)

    //         // console.log("views", data.numberView)

    //     });
    // }, []);
>>>>>>> 21a008dd5fd8e5676ff0c00d6ace9145ee0bba21






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
                                {views} <GrView />
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

export default BannerInSectionInfor;
