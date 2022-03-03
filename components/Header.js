import Link from "next/link";
import styles from "../styles/Header.module.css";
import styles_side from "../styles/Sidebar.module.css"
import Sidebar from "./Sidebar";

function Header() {
  return (
    <header className={`${styles.header} `}>
      <div className="flex items-center justify-center h-full">      

        <input type="checkbox" id="btn_sidebar" className={`${styles_side.btn_sidebar} ${styles_side.botonIcono}`} />
        <label for="btn_sidebar" class="lbl_crearfranja" className={`z-[2000] text-4xl p-2 ${styles_side.lbl_crearfranja} ${styles_side.boton} `}> 
        
          <div className="w-13 h-13 z-[2000] pl-2 hover:cursor-pointer ">
            <img
              layout="responsive"
              src="/img/hamburguer.svg"
              
            />{" "}
          </div>
        </label>
        <Sidebar/>

        <Link href="/horario">
          <div className=" flex items-center justify-center w-11/12 md:text-8xl sm:text-6xl text-5xl text-center text-white font-black">
            <a className="hover:cursor-pointer flex">
              <div className=" md:w-20 md:h-20 sm:w-14 sm:h-14">
                <img
                  layout="responsive"
                  src="/img/icon2.svg"
                  className="md:w-[96px] md:h-[96px] w-[50px] h-[50px]"
                />
              </div>
              Manage your time
            </a>
          </div>
        </Link>
      </div>
    </header>
  );
}

export default Header;
