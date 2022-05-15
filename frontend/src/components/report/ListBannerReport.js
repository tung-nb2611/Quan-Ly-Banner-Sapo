import React, { useEffect, useState } from "react";
import ReportBannerInfor from "./ReportBannerInfor";
<<<<<<< HEAD
import { Line } from 'react-chartjs-2';
=======
>>>>>>> e8b8cb29929d8c672cca2d5e39e7df13d2750b73
import axios from "axios";
import PaginateList from "../PaginateList";
import { useParams } from "react-router-dom";

const BASE_URL = "http://localhost:8080/api/banners/page/";

const ListBannerReport = () => {
    const [bannerList, setBannerList] = useState([]);
    const [pageNumber, setPageNumber] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);

    let { id } = useParams();
    // Ở đây dữ liệu nhận được từ API call đã được phân theo trang sẵn ở phần backend, chỉ cần lấy thông tin số trang
    // và trang hiện tại từ dữ liệu nhận về là được


    useEffect(() => {
        axios.get(BASE_URL + currentPage).then((response) => {

            // Lấy thông tin banner
            const data = response.data.content;
            // Lấy thông tin tổng số trang 
            const pageNum = response.data.totalPages;
            setBannerList(data);
            setPageNumber(pageNum);
        });
    }, [currentPage]);

    const displayBanner = bannerList.map((bannerInfo) => {
<<<<<<< HEAD
        return <ReportBannerInfor bannerInfo={bannerInfo} key={bannerInfo.id} bannerList={bannerList} setBannerList={setBannerList} />
=======
        return (
            <div className="col-md-12 col-lg-6 mb-3" key={bannerInfo.id}>
                <ReportBannerInfor bannerInfo={bannerInfo} bannerList={bannerList} setBannerList={setBannerList} />;
            </div>
        );
>>>>>>> e8b8cb29929d8c672cca2d5e39e7df13d2750b73
    });

    return (
        <div className="banner-list">
            <div className="list d-flex row">
                {displayBanner}
            </div>
            <PaginateList currentPage={currentPage} setCurrentPage={setCurrentPage} pageNumber={pageNumber} />
        </div>
    );
};

export default ListBannerReport;
