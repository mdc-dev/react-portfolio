import Navbar from './components/nav-bar/nav'
import Sidebar from './components/side-bar/side-bar';
import Rightsidebar from './components/right-side-bar/right-side-bar';
import MainContent from './components/main/main';
import PageTwo from './components/second-page/second-page';
import PageThree from './components/third-page/third-page';
import PageFour from './components/fourth-page/fourth-page';
import LastPage from './components/last-page/last-page';
import Sidenavbar from './components/nav-side-bar/nav-side-bar';
import './App.css';
import './App.scss';

function App() {
  
  return (
    <div className='App'>
      <Navbar />
      <Sidenavbar />
      <MainContent />
      <PageTwo />
      <PageThree />
      <PageFour />
      <LastPage />
      <Sidebar />
      <Rightsidebar />
    </div>
  );
}

export default App;
