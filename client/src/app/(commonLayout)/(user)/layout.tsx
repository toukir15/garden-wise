/* eslint-disable prettier/prettier */
import "@/src/styles/globals.css";
import { Metadata, Viewport } from "next";

import { siteConfig } from "@/src/config/site";

import Image from "next/image";

import profile from "../../../../public/toukir.jpg";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4 w-full">
      <div className="w-[17%] border-[0.5px] border-gray-600 p-4 rounded-lg">
        <Image
          alt="Description of image"
          className="rounded-full"
          src={profile}
          height={80}
          width={80}
        />
        <p className="mt-2">Toukir Ahmed</p>
        <p className="mt-1 text-sm">toukir486@gmail.com</p>
      </div>
      <div className="w-[60%] border-[0.5px] border-gray-600 p-4 rounded-lg">
        {children}
      </div>
      <div className="w-[23%] border-[0.5px] border-gray-600 p-4 rounded-lg">
        <div>
          <p>Suggested for you</p>
        </div>
      </div>
    </div>
  );
}
