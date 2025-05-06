import { ChildrenProps, PageType, PersonType } from "@/types";
import { FC, ReactNode, createContext, useEffect, useState } from "react";

export type DataInitialValue = {
    pageType: PageType;
    personType: PersonType | undefined;
    setPageType: (value: PageType) => void;
    setPersonType: (value: PersonType) => void;
};

export const DataContext = createContext<DataInitialValue | null>(null);

export const DataProvider: FC<ChildrenProps> = ({ children }) => {
    const [personType, setPersonType] = useState<PersonType>();
    const [pageType, setPageType] = useState<PageType>(PageType.TYPE_PAGE);

    useEffect(() => {
        if (personType) {
            setPageType(PageType.TEXT_PAGE)
        }
    }, [personType])

    return (
        <DataContext.Provider
            value={{
                pageType,
                personType,
                setPersonType,
                setPageType
            }}
        >
            {children}
        </DataContext.Provider>
    );
};
