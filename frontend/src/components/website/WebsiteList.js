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

    const displayWebsites = websiteList.map(
        (data) => {
            return (
                <div className="col-md-12 col-lg-6 mb-3" key={data.id}>
                    <Website data={data} />
                </div>
            )
        }
    )

    return (
        <div className="section-list p-3">
            <div className="d-flex justify-content-between">
                <h2>
                    Quản lý Websites
                </h2>
                <Link className="btn btn-primary section-create" to={"/website/create"}>
                    <h4>Thêm mới website</h4>
                </Link>
            </div>
            <hr/>
            <h4 className="text-center pb-1">Danh sách các websites</h4>
            <div className="list d-flex row mt-3">
                {displayWebsites}
            </div>
            <PaginateList currentPage={currentPage} setCurrentPage={setCurrentPage} pageNumber={pageNumber} />
        </div>
    )
}

export default WebsiteList;