import firebaseApp from "@/config/firebase";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

export const UploadFilestoFirebaseAndReturnUrls = async (files: []) => {
  try {
    const storage = getStorage(firebaseApp);
    const uploadesFilesResponses = await Promise.all(
      files.map((file: any) => {
        const storageRef = ref(storage, `images/${file.name}`);
        return uploadBytes(storageRef, file);
      })
    );
    const uploadedFilesDownloadUrls = await Promise.all(
      uploadesFilesResponses.map((res) => {
        return getDownloadURL(res.ref);
      })
    );
    return uploadedFilesDownloadUrls;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
