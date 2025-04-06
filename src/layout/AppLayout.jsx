import { Outlet } from "react-router";
import '../style/main.css'

export default function AppLayout() {


    return (
        <div>
            <main>
                <Outlet />
            </main>
        </div>
    );
}