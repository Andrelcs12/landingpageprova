
import "./globals.css";

export const metadata = {
  title: "REAPER DARK",
  description: "REAPER DARK - Lute e enfrente seus maiores medos",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        {children}
      </body>
    </html>
  );
}
