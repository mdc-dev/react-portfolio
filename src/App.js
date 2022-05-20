import Navbar from './components/nav-bar/nav'
import Sidebar from './components/side-bar/side-bar';
import Rightsidebar from './components/right-side-bar/right-side-bar';
import MainContent from './components/main/main';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Sidebar />
      <Rightsidebar />
      <MainContent />
    </div>
  );
}

export default App;
