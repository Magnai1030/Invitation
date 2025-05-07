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
        className={`bg-${PERSON_TYPE_COLOR[personType!]} flex justify-center h-screen cursor-pointer overflow-scroll`} onClick={onPressSendInfo}
    >
        <main className="bg-orange-100 w-[794] h-screen min-h-[900] relative flex justify-center place-items-center">
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