import React from "react-dom";
import { useEffect, useState } from 'react';

import { Link } from "react-router-dom";

import PaginateList from '../PaginateList';
import WebsiteService from '../../services/website/WebsiteService';


function ChoiceSection() {
    const [websiteList, setWebsiteList] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);


    useEffect(() => {

        WebsiteService.getWebsiteByPageAndUserAdd("tung", currentPage).then((response) => {


            const info = response.data.content;

            setWebsiteList(info);

        })
    }, [currentPage])
    console.log("123   ", websiteList)

    const displayWebsites = websiteList.map(
        (data) => {
            return (
                <div key={data.id}>
                    <Link to={"/websites/websiteId=" + data.id + "/report"}>
                        <button>
                            {data.name}

                        </button>
                    </Link>

                </div>
            )
        }
    )


    return (
        <div>
            {displayWebsites}
        </div>
    )
}
export default ChoiceSection;