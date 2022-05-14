<<<<<<< HEAD
import React, { useEffect, useState, useContext } from "react";
import BannerDtoService from "../../services/banner/BannerDtoService";
import "../../styles/banner/ListBannerChoice.css";
import BannerStatus from "./BannerStatus";
import { useParams } from "react-router-dom";
import { CheckboxArrContext} from "../../context/CheckboxListContext";

const ListBannerChoice = (props) => {

  const bannerListContext = useContext(CheckboxArrContext);
  const bannerList = bannerListContext.bannerArr;

  let { id } = useParams();
  const [bannerEnabled, setBannerEnabled] = useState([]);

  useEffect(() => {
    BannerDtoService.getBannerEnabledBySectionID(id).then((response) => {
      console.log(response);
      setBannerEnabled(response.data);
      bannerListContext.setBannerArr(response.data);
    })
  }, [id]);

  return (
    <div className="banner-list-choice-container">
      <table className="table">
        {props.displayUtil.random ? (
          <thead>
            <tr className=" col-12 bg-info">
              <th className="col-2  text-center">Mã </th>
              <th className="col-3  text-center">Tên</th>
              <th className="col-5  text-center">Ảnh banner</th>
              <th></th>
              <th></th>
              <th className="col-2  text-center">Ẩn</th>
            </tr>
          </thead>
        ) : (
          <thead>
            <tr className=" col-12 bg-info">
              <th className="col-2  text-center">Mã </th>
              <th className="col-2  text-center">Tên</th>
              <th className="col-4  text-center">Ảnh banner</th>
              <th className="col-2  text-center">Tỉ trọng (%)</th>
              <th className="col-2  text-center">Ẩn</th>
              <th></th>

            </tr>
          </thead>
        )}
        <tbody>
          { (typeof bannerList === 'undefined') ?
          bannerEnabled.map((item, index) => (
            <BannerStatus
              key={item.id}
              item={item}
              displayUtil={props.displayUtil}
            />
          )) : bannerList.map((item, index) => (
            <BannerStatus
              key={item.id}
              item={item}
              displayUtil={props.displayUtil}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListBannerChoice;


// import React, { useContext, useEffect, useState } from "react";
// import axios from "axios";
// import PaginateList from "../PaginateList";
// import BannerService from "../../services/BannerService";
// import '../../styles/banner/ListBannerChoice.css';
// import { CheckboxContext } from "../../context/CheckboxContext";
// import BannerStatus from "./BannerStatus";
// import { useParams } from "react-router-dom";
// const BASE_URL = "http://localhost:8080/api/banners/page/";

// const ListBannerChoice = (props) => {
//     let { id } = useParams();
//     const [bannerList, setBannerList] = useState([]);
//     const [pageNumber, setPageNumber] = useState(0);
//     const [currentPage, setCurrentPage] = useState(0);

//     useEffect(() => {
//         // Lay thong tin banner status va co ca so trang
//         BannerService.getListStatus(id, currentPage).then((response) => {
//             const data = response.data.content;
//             const pageNum = response.data.totalPages;
//             setBannerList(data);
//             setPageNumber(pageNum);
//         });
//     }, [currentPage]);


//     return (
//         <div className="banner-list-choice-container">
//             <table className="table" >
//                 <thead>
//                     <tr className=" col-12 bg-info">
//                         <th className="col-1  text-center" >Mã </th>
//                         <th className="col-2  text-center">Tên</th>
//                         <th className="col-4  text-center" >Ảnh banner</th>
//                         <th className="col-2  text-center" >Tỉ trọng (%)</th>
//                         <th className="col-2  text-center" > Thêm</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {
//                         bannerList.map((item, index) =>
//                             <BannerStatus key={item.id} item={item} />
//                         )
//                     }
//                 </tbody>
//             </table>

//             <PaginateList currentPage={currentPage} setCurrentPage={setCurrentPage} pageNumber={pageNumber} />
//         </div>
//     );
// };

// export default ListBannerChoice;
=======
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import PaginateList from "../PaginateList";
import BannerService from "../../services/BannerService";
import '../../styles/banner/ListBannerChoice.css';
import { CheckboxContext } from "../../context/CheckboxContext";
import BannerStatus from "./BannerStatus";
import { useParams } from "react-router-dom";
const BASE_URL = "http://localhost:8080/api/banners/page/";

const ListBannerChoice = (props) => {
    let { id } = useParams();
    const [bannerList, setBannerList] = useState([]);
    const [pageNumber, setPageNumber] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);

    useEffect(() => {
        // Lay thong tin banner status va co ca so trang
        BannerService.getListStatus(id, currentPage).then((response) => {
            const data = response.data.content;
            const pageNum = response.data.totalPages;
            setBannerList(data);
            setPageNumber(pageNum);
        });
    }, [currentPage]);


    return (
        <div className="banner-list-choice-container">
            <table className="table" >
                <thead>
                    <tr className=" col-12 bg-info">
                        <th className="col-1  text-center" >Mã </th>
                        <th className="col-2  text-center">Tên</th>
                        <th className="col-4  text-center" >Ảnh banner</th>
                        <th className="col-2  text-center" >Tỉ trọng (%)</th>
                        <th className="col-2  text-center" > Thêm</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        bannerList.map((item, index) =>
                            <BannerStatus key={item.id} item={item} />
                        )
                    }
                </tbody>
            </table>

            <PaginateList currentPage={currentPage} setCurrentPage={setCurrentPage} pageNumber={pageNumber} />
        </div>
    );
};

export default ListBannerChoice;
>>>>>>> 21a008dd5fd8e5676ff0c00d6ace9145ee0bba21
