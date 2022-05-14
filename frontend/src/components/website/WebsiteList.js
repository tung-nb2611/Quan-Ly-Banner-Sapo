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
        </div>
    )
}

export default WebsiteList;