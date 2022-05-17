import "../../styles/section/SectionList.css"
import "../../styles/section/Section.css"
import { Row, Col } from "react-bootstrap";
import React from "react-dom";
import { useEffect, useState } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import PaginateList from '../PaginateList';
import SectionService from "../../services/section/SectionService";
import { useParams, Link } from "react-router-dom";
import ReportService from "../../services/ReportService";

function SectionListReport(props) {
	let { webId } = useParams();
	const [sectionList, setSectionList] = useState([]);
	const [pageNumber, setPageNumber] = useState(0);
	const [currentPage, setCurrentPage] = useState(0);
	const [category, setCategory] = useState([])
	const [data1, setData1] = useState([])
	const [data2, setData2] = useState([])
	const [data3, setData3] = useState([])

	useEffect(() => {
		SectionService.getSectionByPageAndWebsiteId(webId, currentPage).then((response) => {
			const info = response.data.content;
			const pageNum = response.data.totalPages;
			setSectionList(info);
			setPageNumber(pageNum);
		})
	}, [webId, currentPage])

	useEffect(() => {
		let View1 = []
		let month = []
		let View2 = []
		let View3 = []
		ReportService.getSumSectionbyWebID(webId).then((res) => {
			for (const dataObj of res.data) {
				View1.push(dataObj.webView.img);
				console.log('viewsdata', dataObj);
				month.push(dataObj.month)
				View2.push(dataObj.webView.jpg);
				View3.push(dataObj.webView.suv);
				// View2.push(dataObj.webView.sapofnb);
			}
			setData2(View1)
			setCategory(month)
			setData1(View2)
			setData3(View3)

		})
	}, [webId])





	console.log("data2", data2)
	var data = {
		labels: category,
		datasets: [
			{
				label: 'img',
				data: data2,
				borderColor: [
					"red",

					"red",

					"red",
					"red",
					"red",
					"red",

					"red",
					"red",
					"red",
					"red",

					"red",
					"red",
					"red",
					"red",
					"red",

					"red",
					"red",
					"red",
					"red",
					"red",

					"red",
					"red",

				],
				borderWidth: 1,
				fill: false
			},
			{
				label: 'jpg',
				data: data1,
				borderColor: [
					"blue",
					"blue",
					"blue",
					"blue",
					"blue",
					"blue",
					"blue",
					"blue",
					"blue",
					"blue",
					"blue",
					"blue",
					"blue",
					"blue",
					"blue",
					"blue",
				],
				borderWidth: 1,
				fill: false
			},
			{
				label: 'suv',
				data: data3,
				borderColor: [
					"blue",
					"blue",
					"blue",
					"blue",
					"blue",
					"blue",
					"blue",
					"blue",
					"blue",
					"blue",
					"blue",
					"blue",
					"blue",
					"blue",
					"blue",
					"blue",
				],
				borderWidth: 1,
				fill: false
			},


		]
	};

	var options = {
		maintainAspectRatio: false,
		title: {
			display: true,
			text: "Lượng View tháng tại năm 2022",
			fontSize: 25,
		},
		scales: {
		},
		legend: {
			display: true,
			position: "bottom",
			labels: {
				fontSize: 25,
			},
		},
	}

	const displaySections = sectionList.map(
		(data) => {
			return (
				<div className="col-md-6 col-lg-4 mb-3 ps-0" key={data.id}>
					<div className="section-info p-3">
						<div className="row">
							<div className="detail-info col-12 col-sm-6">
								<label>Div: {data.divId}</label>
							</div>
							<div className="button col-12 col-sm-6">
								<Link className="btn btn-block btn-outline-primary w-100" to={"/banner/report/section/" + data.id}>
									Chi tiết báo cáo
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
				Báo cáo thông tin cho website
			</h3>
			<hr />
			<div className="list ms-0 w-100 d-flex row">
				{displaySections}
			</div>
			<div className="chart my-1" style={{ width: '100%', height: '65vh' }}>
				<Line
					data={data}
					height={400}
					options={options}
				/>
			</div>
		</div>
	)

}

export default SectionListReport;