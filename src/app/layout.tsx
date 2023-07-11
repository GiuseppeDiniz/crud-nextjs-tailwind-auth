import './globals.css';

export const metadata = {
  title: 'Login',
  description: 'p',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className="h-full bg-white" lang="pt-br">
      <body className="h-full">{children}</body>
    </html>
  )
}
