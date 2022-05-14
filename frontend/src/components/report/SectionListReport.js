import "../../styles/section/SectionList.css"
import { Row, Col } from "react-bootstrap";
import React from "react-dom";
import { useEffect, useState } from 'react';

import PaginateList from '../PaginateList';
import SectionService from "../../services/section/SectionService";
import { useParams, Link } from "react-router-dom";
function SectionListReport(props) {
    let { webId } = useParams();
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