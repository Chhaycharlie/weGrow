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
export const getAllInspirationByInfo = async () => {
  try {
    const inspiRef = collection(db, "inspirations");
    const inspiSnap = await getDocs(inspiRef);

    // Step 2: Extract unique userIds from post documents
    const userIdsSet = new Set(
      inspiSnap.docs.map((postDoc) => postDoc.data().publisher)
    );

    const userIds = Array.from(userIdsSet);
    // Step 3: Query users collection using userIds
    const usersQuery = query(
      collection(db, "users"),
      where("userId", "in", userIds)
    );
    const usersSnapshot = await getDocs(usersQuery);

    // Step 4: Combine post and user data
    const InspiWithUserInfo = inspiSnap.docs.map((inspDoc) => {
      const inspiData = inspDoc.data();
      const userId = inspiData.publisher;

      // Find the user document with the matching userId
      const userDoc = usersSnapshot.docs.find(
        (userDoc) => userDoc.data()?.userId === userId
      );
      // Check if the user document exists before accessing its data
      const user = userDoc?.data() || {}; // Set to an empty object if userDoc is undefined

      return {
        id: inspDoc.id,
        ...inspiData,
        user,
      };
    });
    return InspiWithUserInfo;
  } catch (error) {
    console.log(error);
  }
};

export const getInspirationById = async (formId) => {
  try {
    // Step 1: Query a single post by ID
    const postDocRef = doc(db, "inspirations", formId);
    const postDoc = await getDoc(postDocRef);

    if (!postDoc.exists()) {
      // Handle the case where the post with the given ID doesn't exist
      return null;
    }
    const postData = postDoc.data();
    // Step 2: Query the users collection using the userId
    const userQuery = query(
      collection(db, "users"),
      where("userId", "==", postData?.publisher)
    );
    const userSnapshot = await getDocs(userQuery);
    if (userSnapshot.empty) {
      // Handle the case where the user with the given userId doesn't exist
      return null;
    }
    const userDoc = userSnapshot.docs[0];
    const user = userDoc.data();
    return {
      id: postDoc.id,
      ...postData,
      user,
    };
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

export const getApplicationSubmission = async (formId) => {
  try {
    // Step 1: Query posts collection
    const ApplicationQuery = query(
      collection(db, "apply-volunteers"),
      where("formId", "==", formId),
      orderBy("timestamp", "desc") // Add orderBy here
    );

    const applicationsSnapshot = await getDocs(ApplicationQuery);

    if (!applicationsSnapshot.exists()) {
      return {};
    }

    // Step 2: Extract unique userIds from post documents
    const userIdsSet = new Set(
      applicationsSnapshot.docs.map((formDoc) => formDoc.data().applyer)
    );
    // Convert Set back to an array
    const userIds = Array.from(userIdsSet);

    // Step 3: Query users collection using userIds
    const usersQuery = query(
      collection(db, "users"),
      where("userId", "in", userIds)
    );
    const usersSnapshot = await getDocs(usersQuery);

    // Step 4: Combine post and user data
    const ApplicationsWithUserInfo = applicationsSnapshot.docs.map(
      (formDoc) => {
        const formData = formDoc.data();
        const userId = formData.applyer;

        // Find the user document with the matching userId
        const userDoc = usersSnapshot.docs.find(
          (userDoc) => userDoc.data()?.userId === userId
        );
        // Check if the user document exists before accessing its data
        const user = userDoc?.data() || {}; // Set to an empty object if userDoc is undefined

        return {
          id: formDoc.id,
          ...formData,
          user,
        };
      }
    );

    return ApplicationsWithUserInfo;
  } catch (error) {
    console.log(error);
  }
};

export const getSubmitInfo = async () => {
  try {
    const userSubmitRef = collection(db, "user-submit-form");
    const querySnapshot = await getDocs(userSubmitRef);

    // Get unique userIds and formIds
    const userIds = [
      ...new Set(querySnapshot.docs.map((userDoc) => userDoc.data().userId)),
    ];
    const formIds = [
      ...new Set(querySnapshot.docs.map((formDoc) => formDoc.data().formId)),
    ];

    // Query users collection using userIds
    const usersSnapshot = await getDocs(
      query(collection(db, "users"), where("userId", "in", userIds))
    );

    // Query forms collection using formIds
    const formsSnapshots = await Promise.all(
      formIds.map((formId) => getDoc(doc(db, "volunteer-recruits", formId)))
    );

    const applyDataSnapshots = await Promise.all(
      querySnapshot.docs.map((formId) =>
        getDoc(doc(db, "apply-volunteers", formId.id))
      )
    );

    const userSubmitWithRelateData = querySnapshot.docs.map((submit) => {
      const submitData = submit.data();
      const userId = submitData.userId;
      const formId = submitData.formId;

      const userDoc = usersSnapshot.docs.find(
        (userDoc) => userDoc.data()?.userId === userId
      );
      const user = userDoc?.data() || {};

      const formDoc = formsSnapshots.find(
        (formSnapshot) => formSnapshot.id === formId
      );
      const form = formDoc?.data() || {};

      const applicationDoc = applyDataSnapshots.find((application) => {
        const applicationData = application.data();
        return (
          applicationData?.applyer === userDoc?.id &&
          applicationData?.formId === formDoc?.id
        );
      });
      const application = applicationDoc?.data() || {};

      return {
        submitId: submit.id,
        ...submitData,
        application,
        user,
        form,
      };
    });

    return userSubmitWithRelateData;
  } catch (error) {
    console.log(error);
  }
};

export const getPostWithUserInfoById = async (postId) => {
  try {
    // Step 1: Query a single post by ID
    const postDocRef = doc(db, "volunteer-recruits", postId);
    const postDoc = await getDoc(postDocRef);

    if (!postDoc.exists()) {
      // Handle the case where the post with the given ID doesn't exist
      return null;
    }

    const postData = postDoc.data();

    // Step 2: Query the users collection using the userId
    const userQuery = query(
      collection(db, "users"),
      where("userId", "==", postData?.userId)
    );
    const userSnapshot = await getDocs(userQuery);

    if (userSnapshot.empty) {
      // Handle the case where the user with the given userId doesn't exist
      return null;
    }

    const userDoc = userSnapshot.docs[0];
    const user = userDoc.data();

    return {
      id: postDoc.id,
      ...postData,
      user,
    };
  } catch (error) {
    console.log(error);
  }
};

export const FeedBackDetial = async (formId) => {
  try {
    const feedback = doc(db, "contactus", formId);
    const feedbackSnap = await getDoc(feedback);

    if (feedbackSnap.exists()) {
      return feedbackSnap.data();
    }
  } catch (error) {
    console.log(error);
  }
};
