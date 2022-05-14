import React from "react-dom";
import { useEffect, useState } from 'react';
import Website from "./Website";
import "../../styles/section/SectionList.css"
import PaginateList from '../PaginateList';
import WebsiteService from '../../services/website/WebsiteService';
import ChoiceSection from "../report/ChoiceSection";

import {Link} from 'react-router-dom';
function WebsiteList(props) {

    const [websiteList, setWebsiteList] = useState([]);
    const [pageNumber, setPageNumber] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);

    useEffect(() => {

        WebsiteService.getWebsiteByPageAndUserAdd("trong", currentPage).then((response) => {




            const info = response.data.content;
            const pageNum = response.data.totalPages;
            setWebsiteList(info);
            setPageNumber(pageNum);
        })
    }, [currentPage])

    const displayWebsites = websiteList.map(
        (data) => {
            return (
                <div key={data.id}>
                    <Website data={data} />

                </div>
            )
        }
    )

    return (
        <div className="banner-list m-2">
            <div className="list">
                {displayWebsites}
                <Link to={"/website/create"}>
                    <button className="section">
                        <h4>Thêm mới website</h4>
                    </button>
                </Link>
            </div>
            <PaginateList currentPage={currentPage} setCurrentPage={setCurrentPage} pageNumber={pageNumber} />

        </div>
      )
    }
  )

  return (
    <div className="section-list p-3">
      <div className="list d-flex row">
        {displayWebsites}
      </div>
      <PaginateList currentPage={currentPage} setCurrentPage={setCurrentPage} pageNumber={pageNumber} />
    </div>
  )

}

export default WebsiteList;