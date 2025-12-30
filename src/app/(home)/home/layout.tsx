import React from "react"
import styles from "./Layout.module.css"
import Navbar from "./navbar";

interface Props {
    children: React.ReactNode;
}


//Layout.tsx is rendered first before page.tsx, so passing props as a parameter is needed to show the 
//contents of page.tsx
/**
 * In this case, props is the parameter, which holds the page.tsx and its contents
 * @param param0 
 * @returns 
 */
const Layout = ({ children }: Props) => {
    {/**Tailwind CSS*/}
    return (
        <>
            <Navbar/>
            <main>
            {/**Page.tsx and its contents */}
            {children}
            </main>
        </>
    );

    {/**Pure CSS */}
    // return(
   
    // <div className={styles.layout}>
    //     <nav className={styles.navbar}>
    //         <p className={styles.brand}>
    //             Navbar
    //         </p>
    //     </nav>

    //     {/**Main content (Page.tsx) */}
    //     <main className={styles.content}>
    //         {children}
    //     </main>
    // </div>
    // )
}

export default Layout;