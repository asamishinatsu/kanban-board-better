import { lazy } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ROUTES } from "@/shared/lib/constants";

const MainPage = lazy(() => import("@/pages/MainPage"));
const BoardPage = lazy(() => import("@/pages/BoardPage"));
const NotFoundPage = lazy(() => import("@/pages/NotFoundPage"));

export function AppRoutes() {
    return (
        <Routes>
            <Route path={ROUTES.HOME} element={<MainPage />} />
            <Route path={ROUTES.BOARD} element={<BoardPage />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    );
}

export function AppRouter() {
    return (
        <BrowserRouter>
            <AppRoutes />
        </BrowserRouter>
    );
}
