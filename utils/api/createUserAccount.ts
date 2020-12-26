
import { User } from "../../types/next-auth";
import getDatabase from "./firebaseConfig";

export default async (user: User) : Promise<string> => {
  /**
   * @todo Do we want to just log errors or should throw an error and handle it somehow? There should always be an email but handling Firebase errors may be important
   */
  if (user.email == null)
    throw new Error(`The email was undefined for ${user}`);
  const db = await getDatabase();
  let userRef = db.collection("website_users");
  let id = "";
  await userRef
    .where("email", "==", `${user.email}`)
    .get()
    .then(async (snapshot) => {
      if (snapshot.empty) {
        console.log(
          `No matching documents. Creating a new user entry for ${user.email}`
        );
        userRef
          .add({
            email: user.email,
            name: user.name,
          })
          .catch((err) => {
            console.error(
              `Could not add user with an email of ${user.email} to the database`
            );
            console.error(err);
          });
      } else if (snapshot.size === 1) {
        /**
         * @TODO do we want to update their name/other info each time they login? 
         * @TODO is there a better way to do the if statement thing if our object eventually gets a lot bigger?
         * @TODO should we store information like last login, date account was created, etc?
         */
        id = snapshot.docs[0].id
        const data = snapshot.docs[0].data()
        if(data.name !== user.name || data.email !== user.email) {
            console.log(
                `Attempting to update account for user ${snapshot.docs[0].id}`
              );
            await snapshot.docs[0].ref
            .update({ name: user.name })
            .then(() => {
                console.log(
                `Successfully updated information for user ${snapshot.docs[0].id}`
                );
            })
            .catch((err) => {
                console.error(
                `Error updating information status for user ${snapshot.docs[0].id}`
                );
                console.log(err);
            });
        }
        else {
            console.log(
                `Not updating the account for user ${snapshot.docs[0].id}, the information is still the same`
              );
        }
      } else {
        console.error(
          `There are two or more users with the same email: ${user.email}`
        );
      }
    })
    .catch((err) => {
      console.error(
        "Could not successfully retrieve information from the database"
      );
      console.log(err);
    });

    return id;
};
