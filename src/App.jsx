import './App.css';
import Navbar from "./Component/Navbar/Navbar";
import Header from "./Component/Header/Header";
import Content from "./Component/Main/Content";

function App() {
    return (
        <div className='flex-container'>

            <div>
                <Navbar/>
            </div>
            <div>
                <Header/>
               <Content/>
            </div>

        </div>
    );
}

export default App;
