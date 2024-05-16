/* eslint-disable @next/next/no-sync-scripts */
import "./globals.css";


export const metadata = {
  title: "AI PDF Summarizer",
  description: "Welcome to AI PDF Summarizer, your ultimate solution for quickly and efficiently extracting key insights from PDF documents. Our cutting-edge AI technology transforms the way you interact with lengthy PDFs, making it easier than ever to get the information you need without the hassle of reading through pages of content.",
  openGraph: {
    images: '/bg.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta property="og:image" content="/bg.png>" />
      <meta property="og:image:type" content="/bg.png>" />
      <meta property="og:image:width" content="/bg.png>" />
      <meta property="og:image:height" content="/bg.png>" />
      <body>{children}
      <script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.6.347/pdf.min.js" integrity="sha512-Z8CqofpIcnJN80feS2uccz+pXWgZzeKxDsDNMD/dJ6997/LSRY+W4NmEt9acwR+Gt9OHN0kkI1CTianCwoqcjQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
      </body>
    </html>
  );
}
