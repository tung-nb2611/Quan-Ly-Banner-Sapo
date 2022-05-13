import React from "react-dom";
import { useEffect, useState } from 'react';
import Website from "./Website";
import "../../styles/section/SectionList.css"
import PaginateList from '../PaginateList';
import WebsiteService from '../../services/website/WebsiteService';
function WebsiteList(props) {

    const [websiteList, setWebsiteList] = useState([]);
    const [pageNumber, setPageNumber] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);

    useEffect(() => {
<<<<<<< HEAD
        WebsiteService.getWebsiteByPageAndUserAdd("tung", currentPage).then((response) => {
=======
        WebsiteService.getWebsiteByPageAndUserAdd("Luong Van Minh", currentPage).then((response) => {
>>>>>>> 261adca06a379c7eb7da214a0e5fdaad215206ce
            const info = response.data.content;
            const pageNum = response.data.totalPages;
            setWebsiteList(info);
            setPageNumber(pageNum);
        })
    }, [currentPage])

    const displayWebsites = websiteList.map(
        (data) => {
            return (
                <div key={data.id}>
                    <Website data={data} />
                </div>
            )
        }
    )

    return (
        <div className="banner-list m-2">
            <div className="list">
                {displayWebsites}
            </div>
            <PaginateList currentPage={currentPage} setCurrentPage={setCurrentPage} pageNumber={pageNumber} />
        </div>
    )

}

export default WebsiteList;