import { Outlet } from "react-router-dom";

const MainTemplate = () => {
    return (
        <>
            {/* <header>
            </header> */}
            <main>
                <Outlet />
            </main>
            {/* <footer>
            </footer> */}
        </>
    )
}

export default MainTemplate