import styles from "../styles/SimpleLayout.module.css";
import Image from "next/image"
function SimpleLayout({ children }) {
  return (
    <div className={` h-screen  ${styles.container}`}>
      <div className="md:w-[40rem] w-80 h-4/6 mx-auto">
        <div className="md:text-8xl text-8xl text-center text-white font-black flex">
          <img layout="responsive" src="/img/icon2.svg" width={96} height={96}/>  Manage your time
        </div>
        {children}
      </div>
    </div>
  );
}

export default SimpleLayout;
