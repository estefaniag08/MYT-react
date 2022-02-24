import styles from "../styles/SimpleLayout.module.css";

function SimpleLayout({ children }) {
  return (
    <div className={` h-screen  ${styles.container}`}>
      <div className="md:w-[40rem] w-80 h-4/6 mx-auto">
        <div className="md:text-8xl text-8xl text-center justify-center text-white font-black flex ">
          <img layout="responsive" src="/img/icon2.svg" className="md:w-[96px] md:h-[96px] w-[50px] h-[50px]"/>
          <p className="text-5xl md:text-8xl">Manage your time</p>
        </div>
        {children}
      </div>
    </div>
  );
}

export default SimpleLayout;
