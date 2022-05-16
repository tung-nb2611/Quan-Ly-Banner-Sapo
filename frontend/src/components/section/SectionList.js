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
            <div className="d-flex justify-content-between align-content-center">
                <h3>
                    Quản lý khu vực website
                </h3>
                <Link className="btn btn-primary section-create" to={"/websites/websiteId=" + webId + "/createSection"}>
                    <h4>Thêm mới khu vực</h4>
                </Link>
            </div>
            <hr/>
            <h4 className="text-center pb-2">Danh sách các khu vực</h4>
            <div className="list d-flex row mt-3">
                {displaySections}
            </div>
            <PaginateList currentPage={currentPage} setCurrentPage={setCurrentPage} pageNumber={pageNumber} />
        </div>
    )

}

export default SectionList;