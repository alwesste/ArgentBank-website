import Header from "../Header/header";
import Footer from "../footer/footer";

function Layout({children}) {
    return (
        <div>
            <Header />
                {children}
            <Footer />
        </div>
    )
}

export default Layout