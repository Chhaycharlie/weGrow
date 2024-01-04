import { collection, getDocs, getDoc, doc } from "firebase/firestore";
import { db } from "../firebase";

export const getCurrentUser = async (userId) => {
  try {
    const docRef = doc(db, "users", userId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data();
    }
  } catch (error) {
    console.log(error);
  }
};

export const getAllUser = async () => {
  try {
    const docRef = collection(db, "users");
    const docSnap = await getDocs(docRef);
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
