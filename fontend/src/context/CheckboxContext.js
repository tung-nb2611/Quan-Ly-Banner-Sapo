import { createContext, useState } from "react";

// Sử dụng để khi chuyển trang (phần phân trang) thì 
// tổng số lượng checkbox được tích vẫn được lưu lại
const CheckboxContext = createContext();

const CheckboxProvider = ({ children }) => {
    const [count, setCount] = useState(0);

    const setCheckboxCount = (clickNumber) => {
        setCount(clickNumber);
    }

    const checkboxCount = {
        count,
        setCheckboxCount
    }

    return (
        <CheckboxContext.Provider value={checkboxCount}>
            {children}
        </CheckboxContext.Provider>
    );
}

export { CheckboxProvider, CheckboxContext };