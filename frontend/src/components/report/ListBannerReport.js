import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ReportBannerInfor from "./ReportBannerInfor";
import { Line } from 'react-chartjs-2';
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
        return <ReportBannerInfor bannerInfo={bannerInfo} key={bannerInfo.id} bannerList={bannerList} setBannerList={setBannerList} />
    });

    return (
        <div className="banner-list m-2">
            <div className="list">
                {displayBanner}
            </div>
            <PaginateList currentPage={currentPage} setCurrentPage={setCurrentPage} pageNumber={pageNumber} />
        </div>
    );
};

export default ListBannerReport;
