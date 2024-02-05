import { Outlet } from 'react-router-dom';
import Header from './components/Header'
import Nav from './components/Nav';

function App() {
  return (
    <>
        <header>
            <Header />
        </header>
        <nav>
            <Nav />
        </nav>
        <main>
            <Outlet />
        </main>
    </>
  );
}

export default App;