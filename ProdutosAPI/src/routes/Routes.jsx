import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { Details } from "../pages/Details";
import { Contato } from "../pages/Contato";
import { NotFound } from "../pages/NotFound";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details/:name" element={<Details />} />
      <Route path="/contact" element={<Contato />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
