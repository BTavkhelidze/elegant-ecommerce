import Footer from '@/components/_organisms/Footer';
import Header from '@/components/_organisms/Header';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
