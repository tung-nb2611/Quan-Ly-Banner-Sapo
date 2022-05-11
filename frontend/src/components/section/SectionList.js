import { useParams } from 'react-router-dom';
import React from "react-dom";
import { useEffect, useState } from 'react';
import Section from "./Section";
import "../../styles/section/SectionList.css"
import SectionService from "../../services/section/SectionImage";
// import PaginateList from '../PaginateList';
function SectionList(props) {
  
    const [sectionList, setSectionList] = useState([]);
    const [pageNumber, setPageNumber] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);

    useEffect(() => {
        SectionService.getSectionByPageAndUserAdd("user", currentPage).then((response) => {
            const info = response.data.content;
            setSectionList(info);
            // const pageNum = response.data.totalPages;
            // setPageNumber(pageNum);
        })
    }, [currentPage])

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
                {/* <PaginateList currentPage={currentPage} setCurrentPage={setCurrentPage} pageNumber={pageNumber} /> */}
            </div>
        )

}

export default SectionList;