import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

export const getItems = async (userId) => {
  const itemsCollection = collection(db, `users/${userId}/items`);
  const querySnapshot = await getDocs(itemsCollection);
  const items = [];
  querySnapshot.forEach((doc) => {
    items.push({ id: doc.id, data: doc.data() });
  });
  return items;
};

export const addItem = async (userId, item) => {
  const itemsCollection = collection(db, `users/${userId}/items`);
  const newItemRef = await addDoc(itemsCollection, item);
  return newItemRef.id;
};
