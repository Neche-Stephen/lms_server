const admin = require('firebase-admin')
 async function UserUID(email){
  return  admin.auth()
  .getUserByEmail(email)
  .then((userRecord) => {
    // See the UserRecord reference doc for the contents of userRecord.
    return userRecord.uid
  })
  .catch((error) => {
    console.log('Error fetching user data:', error);
  });
}
module.exports={UserUID}