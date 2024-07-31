import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact"
import Location from "./pages/Location"
import PageNotFound from "./pages/PageNotFound";
import Gallery from "./pages/Gallery"



function AppRoutes () {
    return(
        <BrowserRouter>
            <Routes>
            <Route path="/" element={ <Home /> }></Route>
            <Route path="/contato" element={ <Contact /> }></Route>
            <Route path="/localizacao" element={ <Location /> }></Route>
            <Route path="/*" element={ <PageNotFound /> }></Route>
            <Route path="/galeria" element={ <Gallery /> }></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes