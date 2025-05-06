import { FC } from "react";

type Props = {
  onPressDecline: () => void;
  onPressAccept: () => void;
};

const ModalSelectContainer: FC<Props> = ({ onPressDecline, onPressAccept }) => {
  return (
    <div className="bg-white shadow-lg w-full max-w-md h-60 flex">
      <div
        className="flex flex-1 bg-blue-500 group hover:grow-[1.5] transition-all duration-300 ease-linear justify-center place-items-center cursor-pointer p-5"
        onClick={onPressDecline}
      >
        <p className="text-base text-center text-orange-500">
          Очих боломжгүй<br/>Баярлалаа
        </p>
      </div>
      <div
        className="flex flex-1 bg-orange-500 hover:grow-[1.5] transition-all duration-300 ease-linear justify-center place-items-center cursor-pointer p-5"
        onClick={onPressAccept}
      >
        <p className="text-base text-center  text-blue-500">
          Очиж амжина<br/>Баярлалаа
        </p>
      </div>
    </div>
  );
};
export default ModalSelectContainer;
