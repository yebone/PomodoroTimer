import { doc, getDoc } from "firebase/firestore/lite";
import { db } from "../../config/firebase";

async function fetchDataFromFirestore(collection, uid) {
  const docRef = doc(db, collection, uid);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    // docSnap.data() will be undefined in this case
    console.log("No such document!");
  }
}

export { fetchDataFromFirestore };
