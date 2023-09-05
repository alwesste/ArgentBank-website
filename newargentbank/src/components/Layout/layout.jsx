import Header from "../Header/header";

function Layout({children}) {
    return (
        <div>
            <Header />
            {children}
        </div>
    )
}

export default Layout