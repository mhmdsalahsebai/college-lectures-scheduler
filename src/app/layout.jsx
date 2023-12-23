import "../styles/globals.css";

export const metadata = {
  title: 'Scheduly',
  description: 'A scheduling app for students at the University of Port Said',
}

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col w-full">{children}</body>
    </html>
  )
}