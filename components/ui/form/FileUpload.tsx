"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { UploadCloud, Trash2 } from "lucide-react";

type Props = {
  label: string;
  accept?: string;
};

export default function FileUpload({ label, accept = "*" }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);

  const [preview, setPreview] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;

    if (file.type.startsWith("image/")) {
      setPreview(URL.createObjectURL(file));
    }
  };

  const removeImage = () => {
    setPreview(null);

    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  return (
    <div className="space-y-3">
      <label className="block text-sm font-semibold">{label}</label>

      {preview ? (
        <div className="relative h-52 w-52 overflow-hidden rounded-xl border">
          <Image
            src={preview}
            alt="Preview"
            fill
            sizes="208px"
            className="object-cover"
          />

          <button
            type="button"
            onClick={removeImage}
            className="absolute right-2 top-2 rounded-full bg-red-600 p-2 text-white"
          >
            <Trash2 size={16} />
          </button>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          className="flex h-52 w-full cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-slate-300 transition hover:border-primary hover:bg-slate-50"
        >
          <UploadCloud className="mb-3 text-slate-400" size={42} />

          <p className="font-medium">Click to upload</p>

          <p className="text-sm text-slate-500">PNG, JPG or JPEG</p>
        </button>
      )}

      <input
        ref={inputRef}
        type="file"
        accept={accept}
        onChange={handleChange}
        className="hidden"
      />
    </div>
  );
}
