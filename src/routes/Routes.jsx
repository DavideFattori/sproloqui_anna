import { createBrowserRouter, createRoutesFromElements, Route } from "react-router";
import AppLayout from '../layout/AppLayout';
import AppHome from '../pages/AppHome';
import AppMatrimonio from "../pages/AppMatrimonio";
import AppFrittata from "../pages/AppFrittata";
import AppNoia from "../pages/AppNoia";
import AppTg from "../pages/AppTg";
import AppTreno from "../pages/AppTreno";
import AppUccisi from "../pages/AppUccisi";
import AppPulizie from "../pages/AppPulizie";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<AppLayout />}>
            <Route path="/" element={<AppHome />} />
            <Route path="/matrimonio" element={<AppMatrimonio />} />
            <Route path="/frittata" element={<AppFrittata />} />
            <Route path="/noia" element={<AppNoia />} />
            <Route path="/tg" element={<AppTg />} />
            <Route path="/treno" element={<AppTreno />} />
            <Route path="/uccisi" element={<AppUccisi />} />
            <Route path="/pulizie" element={<AppPulizie />} />
            <Route path="*" element={<h1>404</h1>} />
        </Route>
    )
);

export default router;