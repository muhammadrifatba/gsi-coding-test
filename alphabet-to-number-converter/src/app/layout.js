import localFont from "next/font/local";
import "./globals.css";



export const metadata = {
  title: "Text Converter",
  description: "GSI Coding Test",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative"
      
      >
        {children}
      </body>
    </html>
  );
}
