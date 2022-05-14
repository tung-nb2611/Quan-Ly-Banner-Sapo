import { createContext, useState } from "react";

// Sử dụng để khi chuyển trang (phần phân trang) thì 
// tổng số lượng checkbox được tích vẫn được lưu lại
const CheckboxContext = createContext();

const CheckboxProvider = ({ children }) => {
    const [count, setCount] = useState(0);
<<<<<<< HEAD
    const [hiddenArr, setHiddenArr] = useState([]);
=======
>>>>>>> 21a008dd5fd8e5676ff0c00d6ace9145ee0bba21

    const setCheckboxCount = (clickNumber) => {
        setCount(clickNumber);
    }

<<<<<<< HEAD
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



=======
    const checkboxCount = {
        count,
        setCheckboxCount
    }

>>>>>>> 21a008dd5fd8e5676ff0c00d6ace9145ee0bba21
    return (
        <CheckboxContext.Provider value={checkboxCount}>
            {children}
        </CheckboxContext.Provider>
    );
}

<<<<<<< HEAD
export { CheckboxProvider, CheckboxContext };
=======
export { CheckboxProvider, CheckboxContext };
>>>>>>> 21a008dd5fd8e5676ff0c00d6ace9145ee0bba21
