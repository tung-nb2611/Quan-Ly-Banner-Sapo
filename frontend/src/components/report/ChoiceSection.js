import React from "react-dom";
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import WebsiteService from '../../services/website/WebsiteService';
import '../../styles/report/ChoiceSection.css';


function ChoiceSection() {
    const [websiteList, setWebsiteList] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);

    useEffect(() => {
        WebsiteService.getWebsiteByPageAndUserAdd("tung", currentPage).then((response) => {
            const info = response.data.content;
            setWebsiteList(info);
            console.log("info", info);
        })
    }, [currentPage])

    console.log(websiteList);

    const displayWebsites = websiteList.map(
        (data) => {
            return (
                <div className="web me-3" key={data.id}>
                    <Link className="btn" to={"/websites/websiteId=" + data.id + "/report"}>
                        <div className="title">{data.name}</div>
                    </Link>
                </div>
            )
        }
    )

    return (
        <div className="d-flex">
            {displayWebsites}
        </div>
    )
}
export default ChoiceSection;