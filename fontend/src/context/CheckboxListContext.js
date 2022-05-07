import { createContext, useState } from "react";



// Sử dụng để lưu các checkbox đã được tích 
// để khi chuyển trang (ở phần phân trang) thì 
// các items đã được tích sẽ vẫn giữ nguyên hiện trạng 
// đồng thời lưu lại tỉ trọng của từng banner
const CheckboxArrContext = createContext();

const CheckboxArrProvider = ({ children }) => {
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

export { CheckboxArrProvider, CheckboxArrContext };
