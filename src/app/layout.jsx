import "../styles/globals.css";

export const metadata = {
  title: "Scheduly",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex-1">{children}</body>
    </html>
  );
}
