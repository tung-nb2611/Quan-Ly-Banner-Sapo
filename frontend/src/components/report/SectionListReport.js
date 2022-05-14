import "../../styles/section/SectionList.css"
import { Row, Col } from "react-bootstrap";
import React from "react-dom";
import { useEffect, useState } from 'react';

import PaginateList from '../PaginateList';
import SectionService from "../../services/section/SectionService";
import { useParams, Link } from "react-router-dom";
function SectionListReport(props) {
<<<<<<< HEAD
    let { webId } = useParams();
=======
    let webId = useParams();
>>>>>>> 21a008dd5fd8e5676ff0c00d6ace9145ee0bba21
    const [sectionList, setSectionList] = useState([]);
    const [pageNumber, setPageNumber] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);

<<<<<<< HEAD

    useEffect(() => {
        SectionService.getSectionByPageAndWebsiteId(webId, currentPage).then((response) => {
=======
    useEffect(() => {
        SectionService.getSectionByPageAndWebsiteId("1", currentPage).then((response) => {
>>>>>>> 21a008dd5fd8e5676ff0c00d6ace9145ee0bba21
            const info = response.data.content;
            const pageNum = response.data.totalPages;
            setSectionList(info);
            setPageNumber(pageNum);
        })
    }, [webId, currentPage])

<<<<<<< HEAD


    const displaySections = sectionList.map(
        (data) => {

=======
    const displaySections = sectionList.map(
        (data) => {
>>>>>>> 21a008dd5fd8e5676ff0c00d6ace9145ee0bba21
            return (
                <div key={data.id}>
                    <div>
                        <div className="banner-info m-4 p-3">
                            <Row>
                                <Col className="detail-info">
                                    <label>Div: {data.divId}</label>
                                </Col>
                                <Col>
                                    <Link to={"/banner/report/section/" + data.id}>
                                        <button className="section">
                                            <h4>chi tiết báo cáo</h4>
                                        </button>
                                    </Link>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>
            )
        }
    )

    return (
        <div className="banner-list m-2">
            <div className="list">
                {displaySections}
            </div>

        </div>
    )

}

export default SectionListReport;