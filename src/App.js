import Navbar from './components/nav-bar/nav'
import Sidebar from './components/side-bar/side-bar';
import Rightsidebar from './components/right-side-bar/right-side-bar';
import MainContent from './components/main/main';
import PageTwo from './components/second-page/second-page';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <MainContent />
      <PageTwo />
      <Sidebar />
      <Rightsidebar />
    </div>
  );
}

export default App;
