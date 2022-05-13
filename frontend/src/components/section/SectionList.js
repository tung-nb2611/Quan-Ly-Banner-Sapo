import "../../styles/section/SectionList.css"
import React from "react-dom";
import { useEffect, useState } from 'react';
import Section from "./Section";
import PaginateList from '../PaginateList';
import SectionService from "../../services/section/SectionService";
import { useParams } from "react-router-dom";
function SectionList(props) {
<<<<<<< HEAD

=======
    let webId = useParams();
>>>>>>> d34c6622482e00a544694f489b2cd781d36f1184
    const [sectionList, setSectionList] = useState([]);
    const [pageNumber, setPageNumber] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);

    useEffect(() => {
<<<<<<< HEAD
        SectionService.getSectionByPageAndUserAdd("tung", currentPage).then((response) => {
=======
        SectionService.getSectionByPageAndWebsiteId("1", currentPage).then((response) => {
>>>>>>> d34c6622482e00a544694f489b2cd781d36f1184
            const info = response.data.content;
            const pageNum = response.data.totalPages;
            setSectionList(info);
            setPageNumber(pageNum);
        })
    }, [webId, currentPage])

    const displaySections = sectionList.map(
        (data) => {
            return (
                <div key={data.id}>
                    <Section data={data} />
                </div>
            )
        }
    )

    return (
        <div className="banner-list m-2">
            <div className="list">
                {displaySections}
            </div>
            <PaginateList currentPage={currentPage} setCurrentPage={setCurrentPage} pageNumber={pageNumber} />
        </div>
    )

}

export default SectionList;