import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";

export default function Layout({ bWide, children }) {
    const style = {
        marginTop: "30px"
    }
    return <>
        <Header />
        <div className="grid wide" style={style}>
            <div className="row">
                <div className="col c-3">
                    <Sidebar />
                </div>
                <div className="col c-8">
                    {children}
                </div>
            </div>
        </div>
    </>
}