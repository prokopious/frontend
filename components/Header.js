'use client';
import Link from "next/link"
import { useState, useEffect } from "react"
import styles from './Header.module.css'
import Logo from './Logo'
import { useBarContext } from "@/context/bar";
import { useMediaQuery } from 'usehooks-ts'
export default function Header() {

    const [active, setActive] = useState(false)

    const { isOpen, setIsOpen} = useBarContext();
    const showSidebar = () => setIsOpen(!isOpen);


    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <nav className={styles.flex}>
                <Link href="/" className={styles.link1}>
                    {/* <Logo /> {active} */}
                    <span className={styles.name}>
                        loremipsum
                    </span>
                </Link>
          
                <button
                    className={styles.burger}
                    onClick={handleClick}
                >
                    <svg
                        className={styles.sv2}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button> 
 
                {/* <div
                    className={styles.list2}
                >
                    <div className={styles.links}>
                        <Link href="/second" className={styles.l}>
                            Admin
                        </Link>
                        <Link href="/" className={styles.l}>
                            Contact
                        </Link>
                    </div>
                </div> */}
            </nav>
        </>
    )
}