import styles from "../styles/Sidebar.module.css"
import Link from "next/link";
import {useRouter} from "next/router";

function Sidebar(){   
    const router = useRouter()
    const cerrarSesion = async () =>{
        localStorage.removeItem("IdUser")
        router.push("/")
    } 
    return (        
        <div class="modal_sidebar" id="modal_sidebar" className={` ${styles.modal_sidebar}`}>
            <div class="contenedor_sidebar" id="contenedor_sidebar" className={` ${styles.contenedor_sidebar} font-bold flex flex-col text-5xl`}>                      
                <h1 className={`${styles.elem} text-white pt-8 text-right pr-10`}>Hola, usuario</h1>  
                <Link href="/horario">
                    <div className={`${styles.elem} bg-[#F8F8F9] hover:bg-[#A0C9E6] active:bg-[#49D1CD] opacity-90 mt-10 mx-1 h-20 hover:cursor-pointer flex items-center justify-center`}>
                        
                        <h1 className=" text-center text-[#4A4A4A]">mi calendario</h1>
                        
                    </div>
                </Link>
                <Link href="/agenda">
                    <div className={`${styles.elem} bg-[#F8F8F9] hover:bg-[#A0C9E6] active:bg-[#49D1CD] opacity-90 mt-1 mx-1 h-20 hover:cursor-pointer flex items-center justify-center`}>
                        <h1 className=" text-center text-[#4A4A4A]">mi agenda</h1>
                    </div> 
                </Link> 
                
                <input 
                    type="submit" 
                    id="elem" 
                    onClick={cerrarSesion}
                    className={`${styles.elem} bg-[#F8F8F9] hover:bg-[#A0C9E6] active:bg-[#49D1CD] opacity-90 inset-x-0 mb-1 mx-1 h-20 hover:cursor-pointer flex items-center justify-center absolute bottom-0 text-center text-[#4A4A4A] font-bold`}
                    value="cerrar sesión"
                />              
            </div>            
        </div> 

    );
}

export default Sidebar;