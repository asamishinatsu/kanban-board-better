import { useEffect } from "react";

import { APP_TITLE } from "../shared/lib/constants";
import { AppRouter } from "./providers/RouterProvider";

import "./styles/global.css";

export function App() {
    useEffect(() => {
        document.title = APP_TITLE;
    }, []);
    return <AppRouter />;
}
