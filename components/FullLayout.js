import Header from "./Header";
import Footer from "./Footer";

function FullLayout({children}) {
  return (
    <div className="flex-colum min-h-screen">
      <Header/>
        {children}
      <Footer/>
    </div>
  )
}

export default FullLayout;
