export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>
        <h1>Root Layout</h1>
        {children}
      </body>
    </html>
  );
}
