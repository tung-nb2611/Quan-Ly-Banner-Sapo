import { useContext, useState } from "react";
import { CheckboxArrContext } from "../../context/CheckboxListContext";

const BannerStatus = ({ item, displayUtil }) => {
  const bannerContext = useContext(CheckboxArrContext);

  const bannerArray = bannerContext.bannerArr;
  const arrayItem = bannerArray.find((banner) => banner.id === item.id);
  // const [status, setStatus] = useState({
  //   id: arrayItem.id,
  //   rate: arrayItem.percentage,
  //   state: arrayItem.state
  // });

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
    console.log(status);
    setStatus((prevState) => ({
      id: prevState.id,
      rate: rate,
      state: prevState.state,
    }));
    bannerContext.updateBannerArr(status.id, rate);
  };

  const handleCheckbox = (state) => {
    setStatus((prevState) => ({
      id: prevState.id,
      rate: prevState.rate,
      state: state,
    }));
    bannerContext.updateBannerState(status.id, state);
    // bannerContext.addBannerArr(arrayItem);
  };

  const changeState = (e) => {
    if (document.getElementById(item.id).checked === true) handleCheckbox(0);
    else if (document.getElementById(item.id).checked === false) {
      handleCheckbox(1);
    }
  };

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
            defaultValue={item.percentage}
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
              typeof arrayItem === "undefined" ? !item.state : !arrayItem.state
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
              typeof arrayItem === "undefined" ? !item.state : !arrayItem.state
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

export default BannerStatus;

