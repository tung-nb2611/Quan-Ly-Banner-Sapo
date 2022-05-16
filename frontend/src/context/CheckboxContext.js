import { createContext, useState } from "react";

// Lưu trữ các banner có state là 0: Ẩn
const CheckboxContext = createContext();

const CheckboxProvider = ({ children }) => {
    const [hiddenArr, setHiddenArr] = useState([]);


    const addBannerArr = (bannerInfo) => {
        setHiddenArr((state) => [...state, bannerInfo]);
      }

    const updateBannerArr = (id, value) => {
        const tempArr = hiddenArr.map(banner => banner.id === id ? { ...banner, percentage: value } : banner);
        setHiddenArr(tempArr);
    }

    const updateBannerState = (id, state) => {
        const tempArr = hiddenArr.map(banner => banner.id === id ? { ...banner, state: state } : banner);
        setHiddenArr(tempArr);
    }

    console.log(hiddenArr);

    const removeBannerState = (id) => {
        setHiddenArr(
            hiddenArr.filter((item) => {
                return item.id !== id;
            })
        );
    };

    const checkboxCount = {
        hiddenArr,
        setHiddenArr,
        updateBannerArr,
        updateBannerState,
        removeBannerState,
        addBannerArr
    }



    return (
        <CheckboxContext.Provider value={checkboxCount}>
            {children}
        </CheckboxContext.Provider>
    );
}

export { CheckboxProvider, CheckboxContext };
