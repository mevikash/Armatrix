
import "./globals.css";
import { Alex_Brush, Montserrat } from "next/font/google";

//components
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import NavContextProvider from '@/components/context/NavContext'

const alexBrush = Alex_Brush({
  weight: ['400'],
  subsets: ["latin"],
  variable: '--font-alexBrush',
});
const montserrat = Montserrat({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ["latin"],
  variable: '--font-monsterrat',
});

export const metadata = {
  title: "Armatrix ",
  description: "Created by Vikash Meghwal",
};

export default function RootLayout({ children }) {
  return (
    <NavContextProvider>
    <html lang="en">
      <body className={`${alexBrush.className} ${montserrat.className} overflow-x-hidden relative`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
    </NavContextProvider>
  );
}

