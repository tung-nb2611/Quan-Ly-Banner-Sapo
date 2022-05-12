import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import UserInfo from "./UserInfo";
import "../../styles/banner/BannerList.css";
import axios from "axios";
import PaginateList from "../PaginateList";

const BASE_URL = "http://localhost:8080/api/users/page/";

const UserList = () => {

  const [userList, setUserList] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  // Ở đây dữ liệu nhận được từ API call đã được phân theo trang sẵn ở phần backend, chỉ cần lấy thông tin số trang
  // và trang hiện tại từ dữ liệu nhận về là được
   
  useEffect(() => {
    axios.get(BASE_URL + currentPage).then((response) => {
      // Lấy thông tin user
      const data = response.data.content;
      // console.log(data)
      // Lấy thông tin tổng số trang 
      const pageNum = response.data.totalPages;
      setUserList(data);
      setPageNumber(pageNum);
    }); 
  }, [currentPage]);   

  const displayUser = userList.map((userInfo) => {
    return <UserInfo userInfo={userInfo} key={userInfo.id} userList={userList} setUserList={setUserList}/>;
  });
  
  return (
    <div className="banner-list">
      <div className="list d-flex">
        {displayUser}
      </div>
      <PaginateList currentPage={currentPage} setCurrentPage={setCurrentPage} pageNumber={pageNumber}/>
    </div>
  );
};

export default UserList;
