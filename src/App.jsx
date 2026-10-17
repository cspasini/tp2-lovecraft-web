import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Profiles from './pages/Profiles';
import LoreCatalog from './pages/LoreCatalog';
import ApiSection from './pages/ApiSection';
import ComponentTree from './pages/ComponentTree';
import DevLog from './pages/DevLog';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="perfiles" element={<Profiles />} />
          <Route path="catalogo" element={<LoreCatalog />} />
          <Route path="api" element={<ApiSection />} />
          <Route path="arbol" element={<ComponentTree />} />
          <Route path="bitacora" element={<DevLog />} />
          <Route path="*" element={<h2>404 - Sendero no encontrado en Arkham</h2>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}