import { FirestoreDocument } from "@/types";
import { firestore } from "@root/firebase";
import { collection, doc, setDoc } from "firebase/firestore";

const useFirestore = () => {
  const createDocument = async <T extends FirestoreDocument>(
    collectionName: string,
    data: T
  ): Promise<T> => {
    const docRef = doc(collection(firestore, collectionName));
    const timestamp = new Date();

    const documentData = {
      ...data,
      id: docRef.id,
      createdAt: timestamp,
      updatedAt: timestamp,
    };

    await setDoc(docRef, documentData);
    return documentData;
  };

  return {
    createDocument,
  };
};
export default useFirestore;
