import {
  collection,
  getDocs,
  orderBy,
  query,
  getDoc,
  doc,
  where,
} from "firebase/firestore";
import { db, auth } from "../firebase";
import { toast } from "react-toastify";

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
export const getPostsWithUserInfo = async () => {
  const currentUser = auth.currentUser;
  try {
    // Step 1: Query posts collection
    const postsQuery = query(
      collection(db, "volunteer-recruits"),
      orderBy("timestamp", "desc") // Add orderBy here
    );
    const postsSnapshot = await getDocs(postsQuery);

    // Step 2: Extract unique userIds from post documents
    const userIdsSet = new Set(
      postsSnapshot.docs.map((postDoc) => postDoc.data().userId)
    );
    const userIds = Array.from(userIdsSet); // Convert Set back to an array

    // Step 3: Query users collection using userIds
    const usersQuery = query(
      collection(db, "users"),
      where("userId", "in", userIds)
    );
    const usersSnapshot = await getDocs(usersQuery);

    // Step 4: Query user-submit-form collection for each post
    const userSubmitFormResults = await Promise.all(
      postsSnapshot.docs.map(async (postDoc) => {
        const postData = postDoc.data();
        const userId = postData.userId;

        // Find the user document with the matching userId
        const userDoc = usersSnapshot.docs.find(
          (userDoc) => userDoc.data()?.userId === userId
        );
        // Check if the user document exists before accessing its data
        const user = userDoc?.data() || {}; // Set to an empty object if userDoc is undefined

        // Check if the user and post combination exists in 'user-submit-form' collection
        const isSubmitted = await userSubmitFormExists(
          postDoc.id,
          currentUser.uid
        );

        return {
          id: postDoc.id,
          ...postData,
          user,
          isSubmitted,
        };
      })
    );

    return userSubmitFormResults;
  } catch (error) {
    console.error("Error querying Firestore:", error);
    throw error; // Rethrow the error for error handling at a higher level if needed
  }
};

// Helper function to check if a user has already submitted the form
const userSubmitFormExists = async (postId, userId) => {
  try {
    const userSubmitFormQuery = query(
      collection(db, "user-submit-form"),
      where("formId", "==", postId),
      where("userId", "==", userId)
    );
    const userSubmitFormSnapshot = await getDocs(userSubmitFormQuery);
    return !userSubmitFormSnapshot.empty;
  } catch (error) {
    console.error("Error checking 'user-submit-form' collection:", error);
  }
};

export const getApplyForm = async (postId, userId) => {
  try {
    // Reference the 'apply-volunteers' collection
    const applyRef = collection(db, "apply-volunteers");

    // Query the collection for the specific document
    const queryApply = query(
      applyRef,
      where("formId", "==", postId),
      where("applyer", "==", userId)
    );

    const querySnapshot = await getDocs(queryApply);
    // Check if the document exists
    if (!querySnapshot.empty) {
      // If the document exists, return its data
      return { ...querySnapshot.docs[0].data(), id: querySnapshot.docs[0].id };
    } else {
      return {};
    }
  } catch (error) {
    toast.error("something went wrong");
    console.log(error);
  }
};

export const getAllApplicationSubmission = () => {
  try {
    
  } catch (error) {
    console.log(error);
  }
};
