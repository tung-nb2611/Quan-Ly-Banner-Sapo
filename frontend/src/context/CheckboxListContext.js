import { createContext, useState } from "react";

<<<<<<< HEAD
// Sử dụng để lưu các checkbox đã được tích
// để khi chuyển trang (ở phần phân trang) thì
// các items đã được tích sẽ vẫn giữ nguyên hiện trạng
=======


// Sử dụng để lưu các checkbox đã được tích 
// để khi chuyển trang (ở phần phân trang) thì 
// các items đã được tích sẽ vẫn giữ nguyên hiện trạng 
>>>>>>> 21a008dd5fd8e5676ff0c00d6ace9145ee0bba21
// đồng thời lưu lại tỉ trọng của từng banner
const CheckboxArrContext = createContext();

const CheckboxArrProvider = ({ children }) => {
<<<<<<< HEAD
  const [countArr, setCountArr] = useState([]);
  const [bannerArr, setBannerArr] = useState([]);

  const setCheckboxObject = (value) => {
    setCountArr((state) => [...state, value]);
  };

  const removeArrItem = (idNumber) => {
    setCountArr(
      countArr.filter((item) => {
        return item.id !== idNumber;
      })
    );
  };

  console.log(bannerArr);

  const updateCheckboxArr = (id, value) => {
    const tempArr = countArr.map((banner) =>
      banner.id === id ? { ...banner, percentage: value } : banner
    );
    setCountArr(tempArr);
  };

  //
  const addBannerArr = (bannerInfo) => {
    console.log(bannerInfo);
    const tempInfo = {...bannerInfo, state: 1}
    setBannerArr((state) => [...state, bannerInfo]);
  }

  const updateBannerArr = (id, value) => {
    const tempArr = bannerArr.map((banner) =>
      banner.id === id ? { ...banner, percentage: value } : banner
    );
    setBannerArr(tempArr);
  };

  const updateBannerState = (id, state) => {
    const tempArr = bannerArr.map((banner) =>
      banner.id === id ? { ...banner, state: state } : banner
    );
    setBannerArr(tempArr);
  };

  const checkboxArray = {
    countArr,
    setCheckboxObject,
    updateCheckboxArr,
    removeArrItem,
    bannerArr,
    updateBannerArr,
    updateBannerState,
    setBannerArr,
    addBannerArr
  };

  return (
    <CheckboxArrContext.Provider value={checkboxArray}>
      {children}
    </CheckboxArrContext.Provider>
  );
};
=======
    const [countArr, setCountArr] = useState([]);

    const setCheckboxObject = (value) => {
        setCountArr(state => [...state, value]);
    }

    const removeArrItem = (idNumber) => {
        setCountArr(countArr.filter(item => {
            return item.id !== idNumber
        }));
    }

    const updateCheckboxArr = (id, value) => {
        const tempArr = countArr.map(banner => banner.id === id ? { ...banner, rate: value } : banner);
        setCountArr(tempArr);
    }


    const checkboxArray = {
        countArr,
        setCheckboxObject,
        updateCheckboxArr,
        removeArrItem
    }

    return (
        <CheckboxArrContext.Provider value={checkboxArray}>
            {children}
        </CheckboxArrContext.Provider>
    )
}
>>>>>>> 21a008dd5fd8e5676ff0c00d6ace9145ee0bba21

export { CheckboxArrProvider, CheckboxArrContext };
