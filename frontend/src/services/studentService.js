import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

export const getStudent = async (rollNo) => {
  const docRef = doc(db, "students", rollNo);

  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data();
  }

  return null;
};