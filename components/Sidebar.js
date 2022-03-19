import styles from "../styles/Sidebar.module.css"
import Link from "next/link";

function Sidebar(){
    return (
        <div class="modal_sidebar" className={` ${styles.modal_sidebar}`}>
            <div class="contenedor_sidebar" className={` ${styles.contenedor_sidebar} font-bold flex flex-col text-5xl`}>                      
                <h1 className=" text-white pt-8 text-right pr-10">Hola, usuario</h1>  
                <Link href="/horario">
                    <div className=" bg-[#F8F8F9] opacity-90 mt-10 mx-1 h-20 hover:cursor-pointer flex items-center justify-center">
                        
                        <h1 className=" text-center text-[#4A4A4A]">mi calendario</h1>
                        
                    </div>
                </Link>
                <Link href="/agenda">
                    <div className=" bg-[#F8F8F9] opacity-90 mt-1 mx-1 h-20 hover:cursor-pointer flex items-center justify-center">
                        <h1 className=" text-center text-[#4A4A4A]">mi agenda</h1>
                    </div> 
                </Link> 
                <Link href="/" >
                    <div className={`${styles.elem} bg-[#F8F8F9] opacity-90 inset-x-0 mb-1 mx-1 h-20 hover:cursor-pointer flex items-center justify-center absolute bottom-0 `}>
                        <h1 class="elem" className={`${styles.elem} text-center text-[#4A4A4A]`}>cerrar sesión</h1>
                    </div>  
                </Link>
            </div>            
        </div> 

    );
}

export default Sidebar;