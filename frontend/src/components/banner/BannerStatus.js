import { useContext, useState } from "react";
import { CheckboxArrContext } from "../../context/CheckboxListContext";
import { CheckboxContext } from "../../context/CheckboxContext";

const BannerStatus = ({ item, displayUtil }) => {
  const bannerContext = useContext(CheckboxArrContext);
  const hiddenBannerContext = useContext(CheckboxContext);

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
    const newState = {
      bannerID: arrayItem.bannerID,
      code: arrayItem.code,
      id: arrayItem.id,
      imgUrl: arrayItem.imgUrl,
      name: arrayItem.name,
      percentage: arrayItem.percentage,
      sectionID: arrayItem.sectionID,
      state: arrayItem.state == 1 ? 0 : 1,
      url: arrayItem.url
    }
    console.log(newState);
    

    hiddenBannerContext.addBannerArr(newState);
    bannerContext.removeBannerState(status.id);
  };

  const changeState = (e) => {
    if (document.getElementById(item.id).checked === true) handleCheckbox(0);
    else if (document.getElementById(item.id).checked === false) {
      handleCheckbox(1);
    }
  };

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

// const [status, setStatus] = useState({
//   id: item.id,
//   rate: typeof arrayItem === "undefined" ? 0 : arrayItem.rate,
//   state: displayUtil.random ? 1 : 0,
// });

// const handleAddClickBox = (e, id) => {
//   // Cần kiểm tra tổng số lượng box đã click xem đã đến giới hạn chưa

//   if (document.getElementById(id).checked === true) {
//     // Tăng số lượng ở context
//     console.log(status);
//     setStatus(prevState => ({ id: prevState.id, rate: prevState.rate, state: 1}));
//     console.log(status);
//     countContext.setCheckboxCount(countContext.count + 1);
//     checkboxArrContext.setCheckboxObject(status);
//   } else {
//     // Giảm số lượng ở context
//     countContext.setCheckboxCount(countContext.count - 1);
//     checkboxArrContext.removeArrItem(id);
//   }
// };

// const handleHideClickBox = (e, id) => {
//   console.log(status);
//   if (document.getElementById(id).checked === true){
//     setStatus({id: status.id, rate: status.rate, state: 0});
//     console.log(status);
//   }
// }

// const changeInfo = (id, rate) => {
//   setStatus((prevState) => ({
//     id: id,
//     rate: rate,
//     state: status.state
//   }));
//   checkboxArrContext.updateCheckboxArr(id, rate);
// };

// const changeRate = (e) => {
//   changeInfo(item.id, e.target.value);
// };

// return (
//   <tr className="item" key={item.id}>
//     <th className="text-center code">{item.id}</th>
//     <td className="text-center name">{item.name}</td>
//     <td className="text-center image">
//       <img src={item.imgUrl} width={300} height={80} alt={""} />
//     </td>
//     { (displayUtil.random) ? <td></td> :
//     <td className="text-center ">
//       <select
//         className="form-select text-center"
//         onChange={changeRate}
//         defaultValue={item.percentage}
//         value={status.rate}
//       >
//         <option value="0">0</option>
//         <option value="10">10</option>
//         <option value="20">20</option>
//         <option value="30">30</option>
//         <option value="40">40</option>
//         <option value="50">50</option>
//         <option value="60">60</option>
//         <option value="70">70</option>
//         <option value="80">80</option>
//         <option value="90">90</option>
//       </select>
//     </td>
//     }
//     { (displayUtil.random) ? <td></td> :
//     <td className="text-center checkbox">
//       <input
//         type="checkbox"
//         style={{ transform: "scale(1.5)" }}
//         id={item.id}
//         defaultChecked={
//           checkboxArray.indexOf(
//             checkboxArray.find((banner) => {
//               return banner.id === item.id;
//             })
//           ) > -1
//         }
//         onChange={(e) => handleAddClickBox(e, item.id)}
//       />
//     </td>
//     }
//     <td className="text-center checkbox">
//       <input
//         type="checkbox"
//         style={{ transform: "scale(1.5)" }}
//         id={item.id + "-hide"}
//         onChange={(e) => handleHideClickBox(e, item.id + "-hide")}
//       />
//     </td>
//   </tr>
// );
// };

// export default BannerStatus;


// import { CheckboxContext } from "../../context/CheckboxContext";
// import { useContext, useState } from "react";
// import { CheckboxArrContext } from "../../context/CheckboxListContext";

// const BannerStatus = ({ item }) => {
//   const countContext = useContext(CheckboxContext);
//   const checkboxArrContext = useContext(CheckboxArrContext);
//   const checkboxArray = checkboxArrContext.countArr;

//   // Dung de lay thong tin object co trong array
//   const arrayItem = checkboxArray.find(banner => banner.id === item.id);

//   // Thong tin luu vao trong array : gom co ti trong va id
//   // 1!== 0 để kiếm tra xem banner có trong phần array trên context không

//   const [status, setStatus] = useState({ id: item.id, rate: (typeof arrayItem === 'undefined') ? 0 : arrayItem.rate });

//   const handleClickBox = (e, id) => {
//     // Cần kiểm tra tổng số lượng box đã click xem đã đến giới hạn chưa

//     if (document.getElementById(id).checked === true) {
//       // Tăng số lượng ở context
//       console.log(status);
//       countContext.setCheckboxCount(countContext.count + 1);
//       checkboxArrContext.setCheckboxObject(status);
//     } else {
//       // Giảm số lượng ở context
//       countContext.setCheckboxCount(countContext.count - 1);
//       checkboxArrContext.removeArrItem(id);
//     }
//   };


//   const changeInfo = (id, rate) => {
//     setStatus((prevState) => ({
//       id: id,
//       rate: rate
//     }));
//     checkboxArrContext.updateCheckboxArr(id, rate);
    
//   };

//   const changeRate = (e) => {
//     changeInfo(item.id, e.target.value);
//   };


//   return (
//     <tr className="item" key={item.id}>
//       <th className="text-center code">{item.id}</th>
//       <td className="text-center name">{item.name}</td>
//       <td className="text-center image">
//         <img
//           src={item.imgUrl}
//           width={300}
//           height={120}
//           alt={""}
//         />
//       </td>
//       <td className="text-center">
//         <select className="form-select text-center mt-4" onChange={changeRate} defaultValue={item.percentage} value={status.rate}>
//           <option value="0">0</option>
//           <option value="10">10</option>
//           <option value="20">20</option>
//           <option value="30">30</option>
//           <option value="40">40</option>
//           <option value="50">50</option>
//           <option value="60">60</option>
//           <option value="70">70</option>
//           <option value="80">80</option>
//           <option value="90">90</option>
//         </select>
//       </td>
//       <td className="text-center checkbox">
//         <input
//           type="checkbox"
//           style={{ transform: "scale(1.5)" }}
//           id={item.id}
//           defaultChecked={
//             checkboxArray.indexOf(
//               checkboxArray.find((banner) => {
//                 return banner.id === item.id;
//               })
//             ) > -1
//           }
//           onChange={(e) => handleClickBox(e, item.id)}
//         />
//       </td>
//     </tr>
//   );
// };

// export default BannerStatus;