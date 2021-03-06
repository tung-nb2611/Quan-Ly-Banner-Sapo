import React, { useEffect, useState } from "react";
import BannerInfo from "./BannerInfo";
import "../../styles/banner/BannerList.css";
import axios from "axios";
import PaginateList from "../PaginateList";
import WebsiteService from "../../services/website/WebsiteService";
import BannerService from "../../services/BannerService";
const BASE_URL = "http://localhost:8080/api/banners/page/";

const BannerList = () => {
  const [bannerList, setBannerList] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  // Ở đây dữ liệu nhận được từ API call đã được phân theo trang sẵn ở phần backend, chỉ cần lấy thông tin số trang
  // và trang hiện tại từ dữ liệu nhận về là được

  let user = JSON.parse(window.localStorage.getItem("user"));

  useEffect(() => {
    if (user.roles[0] === "ROLE_USER") {
      BannerService.getBannerByUserAdd(user.username, currentPage).then(
        (response) => {
          // Lấy thông tin banner
          const data = response.data.content;
          // Lấy thông tin tổng số trang
          const pageNum = response.data.totalPages;
          setBannerList(data);
          setPageNumber(pageNum);
        }
      );
    } else {
      axios.get(BASE_URL + currentPage).then((response) => {
        // Lấy thông tin banner
        const data = response.data.content;
        // Lấy thông tin tổng số trang
        const pageNum = response.data.totalPages;
        setBannerList(data);
        setPageNumber(pageNum);
      });
    }
  }, [currentPage]);

  const displayBanner = bannerList.map((bannerInfo) => {
    return (
      <div className="col-md-12 col-lg-6 mb-3" key={bannerInfo.id}>
        <BannerInfo
          bannerInfo={bannerInfo}
          bannerList={bannerList}
          setBannerList={setBannerList}
        />
      </div>
    );
  });

  return (
    <div className="banner-list">
      <div className="list d-flex row m-0">{displayBanner}</div>
      <PaginateList
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        pageNumber={pageNumber}
      />
    </div>
  );
};

export default BannerList;
