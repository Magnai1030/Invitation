
import { addDoc, collection } from 'firebase/firestore/lite';
import { FC, useState } from 'react';
import { db, firebaseConfig } from '@root/firebase';
import { toast } from "sonner";
import useData from '@/hooks/useData';
import { PERSON_TYPE_NAME } from '@/types';

type Props = {
    isOpen: boolean,
    onClose: () => void,
}
const InfoModal: FC<Props> = ({ isOpen, onClose }) => {
    const [name, setName] = useState('');
    const [loading, setLoading] = useState(false);
    const { personType } = useData();

    if (!isOpen) return null;

    const onPressSave = async () => {
        console.log(firebaseConfig);
        if(!name || name == "") {
            return toast.error("Та өөрийн нэрийг оруулна уу");
        }
        try {
            setLoading(true);
            await addDoc(collection(db, 'users'), {
                name: name,
                from: PERSON_TYPE_NAME[personType!]
            });
            setName('');
            onClose();
            toast.success('Мэдээлэл амжилттай илгээгдлээ');
        } catch (e) {
            console.error(e);
            toast.error('Алдаа гарлаа');
        } finally {
            setLoading(false);
        }
    }
    return (
        <div className="fixed inset-0 bg-black-opacity-60 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold">Sample Modal</h2>
                </div>
                <div className="mb-4">
                    <label htmlFor="inputField" className="block text-sm font-medium text-gray-700">Input:</label>
                    <input type="text" id="inputField" value={name} onChange={(event) => setName(event.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                </div>
                <div className="flex justify-end space-x-2">
                    <button onClick={onClose} className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400">Cancel</button>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600" disabled={loading} onClick={onPressSave}>Send</button>
                </div>
            </div>
        </div>
    );
};
export default InfoModal;

