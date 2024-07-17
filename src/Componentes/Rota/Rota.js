import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from '../../Pages/Home/Home';
import Assistir from '../../Pages/Assistir/Assistir';
import PageNotFound from "../../Pages/PageNotFound/PageNotFound";
import Pesquisar from "../../Pages/Pesquisa";
import Favorites from "../../Pages/Favorites";
import FavoritesProvider from "../../contexts/Favorites";
import VideoCadastre from "../../Pages/VideoCadastre";

function Rota() {
    return (
        <BrowserRouter>
            <FavoritesProvider>
                <Routes>
                    <Route path="/" element={<Home />}> </Route>
                    <Route path="/assistir/:id" element={<Assistir />}></Route>
                    <Route path="/pesquisa" element={<Pesquisar />}></Route>
                    <Route path="/favorites" element={<Favorites />}></Route>
                    <Route path="/favorites" element={<Favorites />}>
                    </Route>

                    <Route path="/cadastre" element={<VideoCadastre />}></Route>
                    <Route path="*" element={<PageNotFound />}></Route>
                </Routes>
            </FavoritesProvider>
        </BrowserRouter>
    )
}
export default Rota