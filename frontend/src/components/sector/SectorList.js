import { useParams } from 'react-router-dom';
import React from "react-dom";
import { useEffect, useState } from 'react';
import Sector from "./sector";
import "../../styles/sector/sectorList.css"
import sectorService from "../../services/sector/sectorImage";
import PaginateList from '../PaginateList';
function sectorList(props) {
  
    const [sectorList, setsectorList] = useState([]);
    const [pageNumber, setPageNumber] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);

    useEffect(() => {
        sectorService.getsectorByPageAndUserAdd("user", currentPage).then((response) => {
            const info = response.data.content;
            const pageNum = response.data.totalPages;
            setsectorList(info);
            setPageNumber(pageNum);
        })
    }, [currentPage])

    const displaysectors = sectorList.map(
        (data) => {
            return (
                <div key={data.id}>
                    <sector data={data} />
                </div>
            )
        }
    )

        return (
            <div className="banner-list m-2">
                <div className="list">
                {displaysectors}
                </div>
                <PaginateList currentPage={currentPage} setCurrentPage={setCurrentPage} pageNumber={pageNumber} />
            </div>
        )

}

export default sectorList;