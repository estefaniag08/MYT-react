import Header from "./Header";
import Footer from "./Footer";

function FullLayout({children}) {
  return (
    <div>
      <Header/>
      <div>
        {children}

      </div>
      <Footer/>
    </div>
  )
}

export default FullLayout;
