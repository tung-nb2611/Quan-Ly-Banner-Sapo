import BannerDtoService from "../../services/banner/BannerDtoService";
import { CheckboxContext } from "../../context/CheckboxContext";
import React, { useContext, useEffect, useState } from "react";
import "../../styles/banner/ListBannerChoice.css";
import { useParams } from "react-router-dom";
import BannerHiddenStatus from "./BannerHiddenStatus";

const ListBannerHidden = (props) => {
  const hiddenBannerList = useContext(CheckboxContext);
  const hiddenList = hiddenBannerList.hiddenArr;
  let { id } = useParams();
  const [bannerHidden, setBannerHidden] = useState([]);

  useEffect(() => {
    BannerDtoService.getBannerHiddenBySectionID(id).then((response) => {
      setBannerHidden(response.data);
      hiddenBannerList.setHiddenArr(response.data);
    });
  }, [id]);


  return (
    <div>
      <div className="banner-list-choice-container my-2">
        <table className="table">
          {props.displayUtil.random ? (
            <thead>
              <tr className="table-head">
                <th className="col-2  text-center">Mã </th>
                <th className="col-3  text-center">Tên</th>
                <th className="col-5  text-center">Ảnh banner</th>
                <th></th>
                <th></th>
                <th className="col-2  text-center">Hiển thị</th>
              </tr>
            </thead>
          ) : (
            <thead>
              <tr className="table-head">
                <th className="col-2  text-center">Mã </th>
                <th className="col-2  text-center">Tên</th>
                <th className="col-4  text-center">Ảnh banner</th>
                <th className="col-2  text-center">Tỉ trọng (%)</th>
                <th className="col-2  text-center">Hiển thị</th>
                <th></th>
              </tr>
            </thead>
          )}
          <tbody>
            { (typeof hiddenList === 'undefined') ? bannerHidden.map((item, index) => (
              <BannerHiddenStatus
                key={item.id}
                item={item}
                displayUtil={props.displayUtil}
              />
            )) : hiddenList.map((item, index) => (
              <BannerHiddenStatus
                key={item.id}
                item={item}
                displayUtil={props.displayUtil}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListBannerHidden;
