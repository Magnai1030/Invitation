import { DataContext, DataInitialValue } from "@/providers";
import { useContext } from "react";

const useData = () => {
    const {
        pageType,
        personType,
        setPersonType,
        setPageType
    } = useContext(DataContext) as DataInitialValue;

    return {
        pageType,
        personType,
        setPersonType,
        setPageType
    };
};
export default useData;
