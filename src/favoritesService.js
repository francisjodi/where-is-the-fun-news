import { db } from "./firebaseConfig"
import { collection, query, getDocs, addDoc, orderBy, limit, Timestamp } from "firebase/firestore"


// NOT FINISHED: This only gets the first 20 articles. In a real app,
// you implement pagination.
export async function fetchFavorites() {
  const snapshot = await getDocs(
    query(collection(db, "favorites"), limit(20))
  )
  console.log("Showing favorites")
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }))
}

export async function addToFavorites(data) {
  const docRef = await addDoc(collection(db, "favorites"), data);
  return { id: docRef.id, ...data };
}