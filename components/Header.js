import Link from "next/link";
import styles from "../styles/Header.module.css";

function Header() {
  return (
    <header className={`${styles.header} `}>
      <div className="flex items-center justify-center h-full">
        <div className="w-1/12 pl-4 hover:cursor-pointer">
          <img
            layout="fixed"
            src="/img/hamburguer.svg"
            width={40}
            height={40}
          />{" "}
        </div>
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
