import getDatabase from "./firebaseConfig";
import getUserData from './getUserData'

export default async (id : string) => {

    const userData = await getUserData(id);
    console.log(userData)

    const db = await getDatabase();

    let userRef = db.collection("website_users").doc(id);
    const doc = await userRef.get();
    if(!doc.exists) {
        return Promise.reject('That user could not be found')
    }
    return Promise.resolve(doc.data());

}