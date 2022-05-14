import React from "react-dom";
import { useEffect, useState } from 'react';
import Website from "./Website";
import "../../styles/section/SectionList.css"
import PaginateList from '../PaginateList';
import WebsiteService from '../../services/website/WebsiteService';
import ChoiceSection from "../report/ChoiceSection";

import { Link } from 'react-router-dom';
function WebsiteList(props) {

    const [websiteList, setWebsiteList] = useState([]);
    const [pageNumber, setPageNumber] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);

<<<<<<< HEAD
    useEffect(() => {

        WebsiteService.getWebsiteByPageAndUserAdd("tung", currentPage).then((response) => {




            const info = response.data.content;
            const pageNum = response.data.totalPages;
            setWebsiteList(info);
            setPageNumber(pageNum);
        })
    }, [currentPage])
=======

    let user = JSON.parse(window.localStorage.getItem("user"));
    useEffect(() => {
        if (user.roles === '["ROLE_USER"]') {
            WebsiteService.getWebsiteByPageAndUserAdd(user.username, currentPage).then((response) => {
                const info = response.data.content;
                const pageNum = response.data.totalPages;
                setWebsiteList(info);
                setPageNumber(pageNum);
            })
        } else {
            WebsiteService.getWebsiteByPage(currentPage).then((response) => {
                const info = response.data.content;
                const pageNum = response.data.totalPages;
                setWebsiteList(info);
                setPageNumber(pageNum);
            }
            )
        }
    }, [user, currentPage])
>>>>>>> 21a008dd5fd8e5676ff0c00d6ace9145ee0bba21

    const displayWebsites = websiteList.map(
        (data) => {
            return (
<<<<<<< HEAD
                <div key={data.id}>
                    <Website data={data} />

=======
                <div className="col-md-12 col-lg-6 mb-3" key={data.id}>
                    <Website data={data} />
>>>>>>> 21a008dd5fd8e5676ff0c00d6ace9145ee0bba21
                </div>
            )
        }
    )

    return (
<<<<<<< HEAD
        <div className="banner-list m-2">
            <div className="list">
                {displayWebsites}
                <Link to={"/website/create"}>
                    <button className="section">
                        <h4>Thêm mới website</h4>
                    </button>
                </Link>
            </div>
            <PaginateList currentPage={currentPage} setCurrentPage={setCurrentPage} pageNumber={pageNumber} />

=======
        <div className="section-list p-3">
            <h2>
                Danh sách các Websites
            </h2>
            <hr/>
            <Link to={"/website/create"}>
                <button className="section-create p-2">
                    <h4>Thêm mới website</h4>
                </button>
            </Link>
            <div className="list d-flex row mt-3">
                {displayWebsites}
            </div>
            <PaginateList currentPage={currentPage} setCurrentPage={setCurrentPage} pageNumber={pageNumber} />
>>>>>>> 21a008dd5fd8e5676ff0c00d6ace9145ee0bba21
        </div>
    )
}






export default WebsiteList;