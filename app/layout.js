/* eslint-disable @next/next/no-sync-scripts */
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AI PDF Summarizer",
  description: "Welcome to AI PDF Summarizer, your ultimate solution for quickly and efficiently extracting key insights from PDF documents. Our cutting-edge AI technology transforms the way you interact with lengthy PDFs, making it easier than ever to get the information you need without the hassle of reading through pages of content.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={inter.className}>{children}
      <script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.6.347/pdf.min.js" integrity="sha512-Z8CqofpIcnJN80feS2uccz+pXWgZzeKxDsDNMD/dJ6997/LSRY+W4NmEt9acwR+Gt9OHN0kkI1CTianCwoqcjQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
      </body>
    </html>
  );
}
