import React, { useEffect, useState, useContext } from "react";
import BannerDtoService from "../../services/banner/BannerDtoService";
import "../../styles/banner/ListBannerChoice.css";
import BannerStatus from "./BannerStatus";
import { useParams } from "react-router-dom";
import { CheckboxArrContext } from "../../context/CheckboxListContext";

const ListBannerChoice = (props) => {

  const bannerListContext = useContext(CheckboxArrContext);
  const bannerList = bannerListContext.bannerArr;

  let { id } = useParams();
  const [bannerEnabled, setBannerEnabled] = useState([]);

  useEffect(() => {
    BannerDtoService.getBannerEnabledBySectionID(id).then((response) => {
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
          {(typeof bannerList === 'undefined') ?
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


