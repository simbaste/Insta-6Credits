import ImagePicker, { showImagePicker } from 'react-native-image-picker'
import RNFetchBlob from 'react-native-fetch-blob'
import firebase from 'firebase'
import { resolve } from 'path';
import { reject } from 'rsvp';
import { platform } from 'os';

const Blob = RNFetchBlob.polyfill.Blob
const fs = RNFetchBlob.fs
window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest
window.Blob = Blob

export default uploadImage = async(uri) => {
    const response = await fetch(uri)
    const blob = await response.blob()
    
    var ref = firebase.storage().ref().child(uri)
    return ref.put(blob)
}

// showImagePicker((response) => {
//     if (response.didCancel) {

//     }
// })

// export const uploadImage = (uri, mime = 'application/octet-stream') => {
//     return (dispatch) => {
//         return new Promise((resolve, reject) => {
//             const uploadUri = Platform.OS == 'ios' ? uri.replace('file://', '') : uri
//             const sessionId = new Date().getTime()
//             let uploadBlob = null

//             // Create a reference in firebase storage for the file
//             const imageRef = firebase.storage().ref().child(uploadUri)

//             // Encode data with base64 prior to uploading
//             fs.readFile(uploadUri, 'base64')
//             .then((data) => {
//                 return Blob.build(data, {type: `${mime};BASE64`})
//             })
//             // Place the blob into your storage reference
//             // To store a reference to it in your database
//             .then(() => {
//                 uploadBlob.close()
//                 return imageRef.getDownloadURL()
//             })
//             .then((url) => {
//                 resolve(url)
//                 // This Storage function is an optional helper
//                 // method you can create to store a reference to the dowmload url
//                 // of the image in your database
//                 storeReference(url, sessionId)
//             })
//             .catch((error) => {
//                 reject(error)
//             })
//         })
//     }
// }

// const storeReference = (downloadUrl, sessionId) => {
//     let imageRef = firebase.storage().ref('foldername').child('filename')
//     let currentUser = firebase.auth.currentUser
//     let image = {
//         type: 'image',
//         url: downloadUrl,
//         createAt: sessionId,
//         user: {
//             id: currentUser.uid,
//             email: currentUser.email
//         }
//     }
//     firebase.database().ref('pathtoreference')
//     .push(image)
// }