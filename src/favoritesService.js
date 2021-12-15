import { db } from "./firebaseConfig"
import { collection, query, getDocs, addDoc, orderBy, limit, Timestamp } from "firebase/firestore"

export async function createFavorite(source, article) {
  const data = { source, article, Date: Timestamp.now() }
  const docRef = await addDoc(collection(db, "favorites"), data)
  return { id: docRef.id, ...data }
}

// NOT FINISHED: This only gets the first 20 articles. In a real app,
// you implement pagination.
export async function fetchFavorites() {
  const snapshot = await getDocs(
    query(collection(db, "favorites"), orderBy("date", "desc"), limit(20))
  )
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }))
}