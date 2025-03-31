import "./globals.css";
import Nav from "./Nav";
import Footer from "./Footer";
import Main from "./Main";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
