import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

export const saveAttendance = async (attendanceData) => {
  try {
    const docRef = await addDoc(
      collection(db, "attendance"),
      attendanceData
    );

    return {
      success: true,
      id: docRef.id,
    };
  } catch (error) {
    console.error(error);

    return {
      success: false,
      error,
    };
  }
};