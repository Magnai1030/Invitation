import useData from "@/hooks/useData";
import { PageType, PERSON_TYPE_COLOR, PERSON_TYPE_TEXT_COLOR } from "@/types";
import { FC, useEffect, useRef } from "react";
import Typed from "typed.js";

const TextContainer = () => {
    const { setPageType, personType } = useData();
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: [
                'Ерөөл учрал бүрдсэн',
                'Ертөнцийн энэ сайхан өдөр',
                'Өөдөө бадарсан галаа асааж',
                'Наран хотолсон халуун голомтондоо',
                'Хүндэт зочдоо өөдөө залъя',
                'Урин залсан бидний буян заяа тэгширч',
                'Уригдсан түмэн олны өлмий бат оршиг'
            ],
            typeSpeed: 50,
            startDelay: 1000,
            backSpeed: 10,
            backDelay: 500,
            loop: false,
            showCursor: false,
            onComplete: onComplete
        });

        return () => {
            typed.destroy();
        };
    }, []);

    const onComplete = () => {
        setTimeout(() => {
            setPageType(PageType.INFO_PAGE)
        }, 1500)
    }

    const onPressEnd = () => {
        setPageType(PageType.INFO_PAGE)
    }

    return <div className={`w-full h-full flex justify-center place-items-center p-8 bg-${PERSON_TYPE_COLOR[personType!]} cursor-pointer`} onClick={onPressEnd}><span ref={el} className={`text-${PERSON_TYPE_TEXT_COLOR[personType!]} text-4xl text-center`} /></div>
}
export default TextContainer