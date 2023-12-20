import "../styles/globals.css";

export const metadata = {
  title: 'College Lectures Scheduler',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}