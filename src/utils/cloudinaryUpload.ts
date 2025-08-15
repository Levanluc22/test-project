export async function uploadImagesToCloudinary(files: File[]) {
  const uploadPreset = "LCT_Nhan";
  const cloudName = "dduxblj2z";

  const uploadedUrls = await Promise.all(
    files.map(async (file) => {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", uploadPreset);

      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await res.json();
      return data.secure_url;
    })
  );

  return uploadedUrls;
}

export async function uploadFilesToCloudinary(files: File[]) {
  const uploadPreset = "LCT_Nhan";
  const cloudName = "dduxblj2z";

  const uploadedUrls = await Promise.all(
    files.map(async (file) => {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", uploadPreset);

      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${cloudName}/raw/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await res.json();
      return data.secure_url;
    })
  );

  return uploadedUrls;
}