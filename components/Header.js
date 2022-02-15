import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <div className="flex items-center justify-center">
        <div className="w-1/12 pl-4 hover:cursor-pointer">
          <Image
            layout="fixed"
            src="/img/hamburguer.svg"
            width={40}
            height={40}
          />{" "}
        </div>
        <Link href="/horario">
          <div className="md:text-8xl text-6xl text-center text-white font-black w-11/12 flex items-center justify-center">
            <a className="hover:cursor-pointer flex">
              <div className=" md:w-20 md:h-20 sm:w-14 sm:h-14">
                <Image
                  layout="responsive"
                  src="/img/icon2.svg"
                  width={96}
                  height={96}
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
