import BottomView from "@/components/BottomView";
import DecorationView from "@/components/DecorationView";
import InfoView from "@/components/InfoView";
import TopView from "@/components/TopView";
import useData from "@/hooks/useData";
import InfoModal from "@/modals/InfoModal";
import { PERSON_TYPE_COLOR } from "@/types";
import { useState } from "react";

const InfoContainer = () => {
    const { personType } = useData();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const closeModal = () => setIsModalOpen(false);

    const onPressSendInfo = () => {
        setIsModalOpen(true);
    }

    return <><div
        className={`bg-${PERSON_TYPE_COLOR[personType!]} flex justify-center place-items-center h-screen px-5 py-4 cursor-pointer`} onClick={onPressSendInfo}
    >
        <main className="bg-orange-100 h-full w-[794] relative overflow-hidden flex justify-center place-items-center">
            <TopView />
            <DecorationView />
            <InfoView />
            <BottomView />
        </main>

    </div>
        <InfoModal isOpen={isModalOpen} onClose={closeModal} />
    </>
}
export default InfoContainer;