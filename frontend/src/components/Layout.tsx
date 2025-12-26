import { ReactNode } from 'react';
import Header from './navigation/Header';
import Footer from './navigation/Footer';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => (
  <div className="min-h-screen bg-cream text-ink">
    <div className="absolute inset-0 pointer-events-none bg-mesh-soft opacity-70" aria-hidden />
    <div className="relative flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 px-4 pb-12 pt-6 md:px-6 lg:px-10">{children}</main>
      <Footer />
    </div>
  </div>
);

export default Layout;
