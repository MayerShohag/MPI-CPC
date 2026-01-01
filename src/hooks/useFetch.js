import { collection, getDocs } from "firebase/firestore";
import { database } from "../components/database/firebase";

export const useFetch = () => {
     const getReq = async () => {
          try {
               const userData = JSON.parse(localStorage.getItem("cpc-user"));
               const ref = await getDocs(collection(database, "users"));
               const data = ref.docs.map((doc) => ({
                    ...doc.data(),
                    id: doc.id,
               }));

               const user = data.find(
                    (user) =>
                         user.email === userData.email &&
                         user.password === userData.password
               );
               if (user) {
                    return user;
               } else {
                    return `user not found`;
               }
          } catch (error) {
               console.log(error);
          }
     };
     return { getReq };
};
