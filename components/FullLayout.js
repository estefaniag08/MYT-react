import Header from "./Header";
import Footer from "./Footer";

function FullLayout({children}) {
  return (
    <div className="">
      <Header/>
        {children}
      <Footer/>
    </div>
  )
}

export default FullLayout;
