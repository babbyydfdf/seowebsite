import '../styles/globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/globals.css';

export const metadata = {
  title: 'Thillainathan',
  description: 'Welcome to my little space on the internet.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="page-wrapper">
          <Header />
          <main className="content-area">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
