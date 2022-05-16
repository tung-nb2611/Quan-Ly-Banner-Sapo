import { createContext, useState } from "react";


// Lưu trữ các banner có state là 1: Hiển thị
const CheckboxArrContext = createContext();

const CheckboxArrProvider = ({ children }) => {
  const [bannerArr, setBannerArr] = useState([]);

  //
  const addBannerArr = (bannerInfo) => {
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

  const removeBannerState = (id) => {
    setBannerArr(
        bannerArr.filter((item) => {
            return item.id !== id;
        })
    );
  };

  const checkboxArray = {
    bannerArr,
    updateBannerArr,
    updateBannerState,
    setBannerArr,
    addBannerArr,
    removeBannerState
  };

  return (
    <CheckboxArrContext.Provider value={checkboxArray}>
      {children}
    </CheckboxArrContext.Provider>
  );
};

export { CheckboxArrProvider, CheckboxArrContext };
