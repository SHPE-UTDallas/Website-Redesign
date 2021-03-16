import getDatabase from "./firebaseConfig";

export default async (id : string) => {
    const db = await getDatabase();

    let userRef = db.collection("website_users").doc(id);
    const doc = await userRef.get();
    if(!doc.exists) {
        return Promise.reject('That user could not be found')
    }
    return Promise.resolve(doc.data());

}