import {
  collection,
  getDocs,
  orderBy,
  query,
  getDoc,
  doc,
} from "firebase/firestore";
import { db } from "../firebase";

export const getAllRecruitment = async () => {
  try {
    const docRef = collection(db, "volunteer-recruits");
    const q = query(docRef, orderBy("timestamp", "desc"));
    const docSnap = await getDocs(q);
    const list = [];
    docSnap.forEach((item) =>
      list.push({
        id: item.id,
        data: item.data(),
      })
    );
    return list;
  } catch (error) {
    console.log(error);
  }
};
export const getRecruitmentById = async (formId) => {
  try {
    const docRef = doc(db, "volunteer-recruits", formId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data();
    }
  } catch (error) {
    console.log(error);
  }
};
export const getAllInspiration = async () => {};
export const getInspirationById = async (formId) => {
  try {
    const docRef = doc(db, "inspirations", formId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data();
    }
  } catch (error) {
    console.log(error);
  }
};
