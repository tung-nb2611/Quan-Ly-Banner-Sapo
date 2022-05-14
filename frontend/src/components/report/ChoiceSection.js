import React from "react-dom";
import { useEffect, useState } from 'react';
<<<<<<< HEAD

import { Link } from "react-router-dom";

import PaginateList from '../PaginateList';
import WebsiteService from '../../services/website/WebsiteService';
=======
import { Link } from "react-router-dom";
import WebsiteService from '../../services/website/WebsiteService';
import '../../styles/report/ChoiceSection.css';
>>>>>>> 21a008dd5fd8e5676ff0c00d6ace9145ee0bba21


function ChoiceSection() {
    const [websiteList, setWebsiteList] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);

<<<<<<< HEAD

    useEffect(() => {

        WebsiteService.getWebsiteByPageAndUserAdd("tung", currentPage).then((response) => {


            const info = response.data.content;

            setWebsiteList(info);

        })
    }, [currentPage])
    console.log("123   ", websiteList)
=======
    useEffect(() => {
        WebsiteService.getWebsiteByPageAndUserAdd("tung", currentPage).then((response) => {
            const info = response.data.content;
            setWebsiteList(info);
        })
    }, [currentPage])

    console.log(websiteList);
>>>>>>> 21a008dd5fd8e5676ff0c00d6ace9145ee0bba21

    const displayWebsites = websiteList.map(
        (data) => {
            return (
<<<<<<< HEAD
                <div key={data.id}>
                    <Link to={"/websites/websiteId=" + data.id + "/report"}>
                        <button>
                            {data.name}

                        </button>
                    </Link>

=======
                <div className="web me-3" key={data.id}>
                    <Link className="btn" to={"/websites/websiteId=" + data.id + "/report"}>
                        {data.name}
                    </Link>
>>>>>>> 21a008dd5fd8e5676ff0c00d6ace9145ee0bba21
                </div>
            )
        }
    )

<<<<<<< HEAD

    return (
        <div>
=======
    return (
        <div className="d-flex">            
>>>>>>> 21a008dd5fd8e5676ff0c00d6ace9145ee0bba21
            {displayWebsites}
        </div>
    )
}
export default ChoiceSection;