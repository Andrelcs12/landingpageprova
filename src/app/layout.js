
import "./globals.css";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "REAPER DARK",
  description: "REAPER DARK - Lute e enfrente seus maiores medos",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        {children}
        <Toaster position="top-right" reverseOrder={false} />
      </body>
    </html>
  );
}
