// // src/services/idService.js
// import { doc, getDoc, setDoc } from 'firebase/firestore';
// import { db } from '../../firebase'; // Adjust the import path accordingly

// const ID_TRACKER_DOC = 'id_tracker/saksh'; // Document path to track the last used ID

// export const getLastUsedId = async () => {
//   const docRef = doc(db, ID_TRACKER_DOC);
//   const docSnap = await getDoc(docRef);
  
//   if (docSnap.exists()) {
//     return docSnap.data().lastId;
//   } else {
//     return null;
//   }
// };

// export const updateLastUsedId = async (newId) => {
//   const docRef = doc(db, ID_TRACKER_DOC);
//   await setDoc(docRef, { lastId: newId });
// };

// export const generateNextId = async () => {
//   const lastId = await getLastUsedId();
//   const lastNumber = lastId ? parseInt(lastId.replace('saksh', '')) : 0;
//   const nextNumber = lastNumber + 1;
//   const newId = `saksh${nextNumber.toString().padStart(5, '0')}`;
//   await updateLastUsedId(newId);
//   return newId;
// };
