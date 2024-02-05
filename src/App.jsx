import { Outlet } from 'react-router-dom';
import Header from './components/Header'
import Nav from './components/Nav';
import Footer from './components/Footer';

function App() {
  return (
    <>
        <header className='header-container'>
            <Header />
        </header>
        <nav>
            <Nav />
        </nav>
        <main>
            <Outlet />
        </main>
        <footer>
            <Footer />
        </footer>
    </>
  );
}

export default App;