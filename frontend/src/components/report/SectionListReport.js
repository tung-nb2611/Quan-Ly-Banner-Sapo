import "../../styles/section/SectionList.css"
import "../../styles/section/Section.css"
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
				<div className="col-md-6 col-lg-4 mb-3" key={data.id}>
					<div className="section-info p-3">
						<div className="row">
							<div className="detail-info col-12 col-sm-6">
								<label>Div: {data.divId}</label>
							</div>
							<div className="button col-12 col-sm-6">
								<Link to={"/banner/report/section/" + data.id}>
									<button className="section mt-0">
										chi tiết báo cáo
									</button>
								</Link>
							</div>
						</div>
					</div>
				</div>
			)
		}
	)

	return (
		<div className="section-list p-3">
			<h3>
				Báo cáo thông tin cho mỗi website
			</h3>
			<hr/>
			<div className="list ms-0 w-100 d-flex row">
				{displaySections}
			</div>
		</div>
	)

}

export default SectionListReport;