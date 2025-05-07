import { FC, useState } from "react";
import ModalInfoContainer from "@/Containers/ModalInfoContainer";
import ModalSelectContainer from "@/Containers/ModalSelectContainer";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const InfoModal: FC<Props> = ({ isOpen, onClose }) => {
  const [isAccepted, setIsAccepted] = useState(false);

  const onCloseWithAction = () => {
    setIsAccepted(false);
    onClose();
  };
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black-opacity-60 flex items-center justify-center z-50">
      {isAccepted ? (
        <ModalInfoContainer onClose={onCloseWithAction} />
      ) : (
        <ModalSelectContainer
          onPressAccept={() => setIsAccepted(true)}
          onPressDecline={onCloseWithAction}
        />
      )}
    </div>
  );
};
export default InfoModal;
