import "../styles/globals.css";

export const metadata = {
  title: 'College Lectures Scheduler',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col w-full">{children}</body>
    </html>
  )
}