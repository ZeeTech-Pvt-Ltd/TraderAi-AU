import Header from './Header';
import Footer from './Footer';

export default function Layout({ active, children }) {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Header active={active} />
      <main id="main">{children}</main>
      <Footer />
    </>
  );
}
