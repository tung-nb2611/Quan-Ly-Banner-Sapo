import "../../styles/section/SectionList.css"
import React from "react-dom";
import { useEffect, useState } from 'react';
import Section from "./Section";
import PaginateList from '../PaginateList';
import SectionService from "../../services/section/SectionService";
import { useParams } from "react-router-dom";
import {Link} from'react-router-dom';
function SectionList(props) {
    let {webId} = useParams();
    const [sectionList, setSectionList] = useState([]);
    const [pageNumber, setPageNumber] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);

    useEffect(() => {
        SectionService.getSectionByPageAndWebsiteId(webId, currentPage).then((response) => {
            const info = response.data.content;
            const pageNum = response.data.totalPages;
            setSectionList(info);
            setPageNumber(pageNum);
        })
    }, [webId, currentPage])

    const displaySections = sectionList.map(
        (data) => {
            return (
                <div className="col-md-12 col-lg-6 mb-3" key={data.id}>
                    <Section data={data} />
                </div>
            )
        }
    )

    return (
        <div className="section-list p-3">
            <h3>
                Danh sách các khu vực của website
            </h3>
            <hr/>
            <Link to={"/websites/websiteId=" + webId + "/createSection"}>
                <button className="section-create p-2">
                    <h4>Thêm mới khu vực</h4>
                </button>
            </Link>
            <div className="list d-flex row mt-3">
                {displaySections}

            </div>
            <PaginateList currentPage={currentPage} setCurrentPage={setCurrentPage} pageNumber={pageNumber} />
        </div>
    )

}

export default SectionList;