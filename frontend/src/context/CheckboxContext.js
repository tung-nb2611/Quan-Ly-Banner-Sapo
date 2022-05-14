import { createContext, useState } from "react";

// Sử dụng để khi chuyển trang (phần phân trang) thì 
// tổng số lượng checkbox được tích vẫn được lưu lại
const CheckboxContext = createContext();

const CheckboxProvider = ({ children }) => {
    const [count, setCount] = useState(0);
    const [hiddenArr, setHiddenArr] = useState([]);

    const setCheckboxCount = (clickNumber) => {
        setCount(clickNumber);
    }

    const updateBannerArr = (id, value) => {
        const tempArr = hiddenArr.map(banner => banner.id === id ? { ...banner, percentage: value } : banner);
        setHiddenArr(tempArr);
    }

    const updateBannerState = (id, state) => {
        const tempArr = hiddenArr.map(banner => banner.id === id ? { ...banner, state: state } : banner);
        setHiddenArr(tempArr);
    }

    const removeBannerState = (id) => {
        setHiddenArr(
            hiddenArr.filter((item) => {
                return item.id !== id;
            })
        );
    };

    const checkboxCount = {
        count,
        setCheckboxCount,
        hiddenArr,
        setHiddenArr,
        updateBannerArr,
        updateBannerState,
        removeBannerState
    }



    return (
        <CheckboxContext.Provider value={checkboxCount}>
            {children}
        </CheckboxContext.Provider>
    );
}

export { CheckboxProvider, CheckboxContext };