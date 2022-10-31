import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import ContactForm from './Components/ContactForm';
import Footer from './Components/Footer';
import Header from './Components/Header';

function App() {
  return (
    <div className="App" id="page-container">
      <Header/>
      <ContactForm/>
      <Footer/>
    </div>
  );
}

export default App;
