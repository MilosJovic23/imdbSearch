
import './App.css';
import SearchBar from "./Components/SearchBar";
import Navigation from "./Templates/Snippets/Navigation";
import "bootstrap/dist/css/bootstrap.min.css"
import Footer from "./Templates/Snippets/Footer";
const App = ()=> {

    return (
        <>
            <Navigation/>
            <SearchBar/>
            <Footer/>
        </>

    )
}
export default App
