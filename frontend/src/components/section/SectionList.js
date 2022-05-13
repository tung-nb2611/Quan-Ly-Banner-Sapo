import "../../styles/section/SectionList.css"
import React from "react-dom";
import { useEffect, useState } from 'react';
import Section from "./Section";
import PaginateList from '../PaginateList';
import SectionService from "../../services/section/SectionService";
import { useParams } from "react-router-dom";
function SectionList(props) {
    let webId = useParams();
    const [sectionList, setSectionList] = useState([]);
    const [pageNumber, setPageNumber] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);

    useEffect(() => {
        SectionService.getSectionByPageAndWebsiteId("1", currentPage).then((response) => {
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