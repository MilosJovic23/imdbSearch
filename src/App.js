
import './App.css';
import SearchBar from "./Components/SearchBar";
import Navigation from "./Templates/Snippets/Navigation";
import "bootstrap/dist/css/bootstrap.min.css"
import Footer from "./Templates/Snippets/Footer";
import Search from "./Components/Search";
const App = ()=> {

    return (
        <>

            <Navigation/>
                <Search/>

            <Footer/>
        </>

    )
}
export default App
