"use client"
import Image from "next/image";
import { UploadDropzone } from "./utils/uploadthing";
import { useState } from "react";

export default function Home() {
  const [image, setImage] = useState('')
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <UploadDropzone
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          const uploadedUrl = res[0].url;
          setImage(uploadedUrl);
        }}
        onUploadError={(error: Error) => {
          console.error("Something went wrong, try again")
        }}
      />

      {image && (
        <div className="flex w-full justify-center">
          <Image
            src={image}
            alt="Uploaded Project Thumbnail"
            width={200}
            height={200}
            className="rounded"
          />
        </div>
      )}
    </main>
  );
}
