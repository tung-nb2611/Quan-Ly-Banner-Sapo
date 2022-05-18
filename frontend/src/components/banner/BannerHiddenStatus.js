import { CheckboxContext } from "../../context/CheckboxContext";
import { useContext, useState } from "react";
import { CheckboxArrContext } from "../../context/CheckboxListContext";
import "../../styles/banner/ListBannerChoice.css";

const BannerHiddenStatus = ({ item, displayUtil }) => {
  const hiddenBannerContext = useContext(CheckboxContext);
  const bannerContext = useContext(CheckboxArrContext);

  const hiddenBannerArray = hiddenBannerContext.hiddenArr;
  const arrayItem = hiddenBannerArray.find((banner) => banner.id === item.id);

  const [status, setStatus] = useState({
    id: typeof arrayItem === "undefined" ? item.id : arrayItem.id,
    rate:
      typeof arrayItem === "undefined" ? item.percentage : arrayItem.percentage,
    state: typeof arrayItem === "undefined" ? item.state : arrayItem.state,
  });

  const handlePercentageChange = (e) => {
    changeRate(e.target.value);
  };

  const changeRate = (rate) => {
    setStatus((prevState) => ({
      id: prevState.id,
      rate: rate,
      state: prevState.state,
    }));
    hiddenBannerContext.updateBannerArr(status.id, rate);
  };

  const handleCheckbox = (state) => {
    const newState = {
      bannerID: arrayItem.bannerID,
      code: arrayItem.code,
      id: arrayItem.id,
      imgUrl: arrayItem.imgUrl,
      name: arrayItem.name,
      percentage: arrayItem.percentage,
      sectionID: arrayItem.sectionID,
      state: arrayItem.state === 1 ? 0 : 1,
      url: arrayItem.url
    }
    console.log(newState);
    
    hiddenBannerContext.removeBannerState(status.id);
    bannerContext.addBannerArr(newState);
  };

  const changeState = (e) => {
    if(document.getElementById(item.id).checked === true)
      handleCheckbox(1);
    else if (document.getElementById(item.id).checked === false) {
      handleCheckbox(0);
    }
  } 

  // Kiểm tra xem sau khi bấm ẩn thì banner còn trong hiddenBannerList
  // hay không. Nếu không thì không hiển thị gì cả
  if(typeof arrayItem == 'undefined')
  return (<></>);

  return (
    <tr className="item" key={item.id}>
      <th className="text-center code">{item.id}</th>
      <td className="text-center name">{item.name}</td>
      <td className="text-center image">
        <img src={item.imgUrl} width={300} height={80} alt={""} />
      </td>
      {displayUtil.random ? (
        <td></td>
      ) : (
        <td className="text-center ">
          <select
            className="form-select text-center"
            defaultValue={(typeof arrayItem === 'undefined') ? item.percentage : arrayItem.percentage}
            onChange={handlePercentageChange}
          >
            <option value="0">0</option>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
            <option value="40">40</option>
            <option value="50">50</option>
            <option value="60">60</option>
            <option value="70">70</option>
            <option value="80">80</option>
            <option value="90">90</option>
          </select>
        </td>
      )}
      {displayUtil.random ? (
        <td></td>
      ) : (
        <td className="text-center checkbox">
          <input
            type="checkbox"
            style={{ transform: "scale(1.5)" }}
            id={status.id}
            defaultChecked={
              typeof arrayItem === "undefined" ? item.state : arrayItem.state
            }
            onChange={changeState}
          />
        </td>
      )}
      {displayUtil.random ? (
        <td className="text-center checkbox">
          <input
            type="checkbox"
            style={{ transform: "scale(1.5)" }}
            id={status.id}
            defaultChecked={
              typeof arrayItem === "undefined" ? item.state : arrayItem.state
            }
            onChange={changeState}
          />
        </td>
      ) : (
        <td></td>
      )}
    </tr>
  );
};

export default BannerHiddenStatus;