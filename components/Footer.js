import styles from "../styles/Footer.module.css";
function Footer() {
  return (
    <footer className={styles.footer}>
      <div className=" flex-cols h-full md:text-2xl text-sm text-right text-white mr-2 ">
        <p>
          Estefanía García Gonzalez - Sebastián Mora Sabogal 
        </p>
        <p>
        © 2022 Todos Los
          Derechos Reservados
        </p>
      </div>
    </footer>
  );
}

export default Footer;
