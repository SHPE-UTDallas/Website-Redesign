import admin from 'firebase-admin'

export default async () => {
  let serviceAccount = JSON.parse(process.env.FIREBASE || "")
  try {
    await admin
      .initializeApp({
        credential: admin.credential.cert(serviceAccount),
      })
    } catch(error) {
      if (!/already exists/u.test(error.message)) {
        // eslint-disable-next-line no-console
        console.error('Firebase admin initialization error', error.stack);
      }
    }
    return admin.firestore();
}