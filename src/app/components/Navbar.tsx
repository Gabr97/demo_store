"use client"
import content from '../content.json';
import { useEffect, useRef, useState } from 'react'

interface SubMenu {
    item: string,
    href: string
}

interface MenuItem {
    item: string;
    href: string;
    image: string,
    subMenu: SubMenu[];
}

export default function Navbar() {

    const menu: MenuItem[] = content.menu;

    const [visibleMobileMenu, setVisibleMobileMenu] = useState(false)

    const topNavRef = useRef<HTMLElement>(null)


    useEffect(() => {

        window.addEventListener('scroll', function () {

            if (topNavRef.current !== null) {

                if (window.scrollY >= 200) {
                    topNavRef.current.classList.replace('py-12', 'py-4')
                    topNavRef.current.classList.add('bg-zinc-800/90', 'shadow-md')
                    topNavRef.current.querySelector('.container')?.classList.replace('gap-12', 'gap-4')
                    topNavRef.current.querySelector('input')?.classList.replace('p-6', 'p-3')
                    topNavRef.current.querySelector('.logo img')?.classList.add("w-[100px]")
                } else {
                    topNavRef.current.classList.contains('py-4') && topNavRef.current.classList.replace('py-4', 'py-12')
                    topNavRef.current.classList.contains('bg-zinc-800/90') && topNavRef.current.classList.remove('bg-zinc-800/90', 'shadow-md')
                    topNavRef.current.querySelector('.container')?.classList.contains('gap-4') && topNavRef.current.querySelector('.container')?.classList.replace('gap-4', 'gap-12')
                    topNavRef.current.querySelector('input')?.classList.contains('p-3') && topNavRef.current.querySelector('input')?.classList.replace('p-3', 'p-6')
                    topNavRef.current.querySelector('.logo img')?.classList.contains("w-[100px]") && topNavRef.current.querySelector('.logo img')?.classList.remove("w-[100px]")
                }
            }

        })

    }, [])


    function openMobileMenu() {
        if (topNavRef.current !== null) {

            topNavRef.current.querySelector('.mobile-menu')?.classList.replace('animate__fadeOutLeft', 'animate__fadeInLeft')
            topNavRef.current.querySelector('.mobile-menu')?.classList.replace('hidden', 'block')
            setVisibleMobileMenu(true)
        }

    }

    function closeMobileMenu() {
        if (topNavRef.current !== null) {

            topNavRef.current.querySelector('.mobile-menu')?.classList.replace('animate__fadeInLeft', 'animate__fadeOutLeft')
            setVisibleMobileMenu(false)
            setTimeout(() => {
                topNavRef.current?.querySelector('.mobile-menu')?.classList.replace('block', 'hidden')
            }, 500)
        }
    }

    useEffect(() => {

        if (topNavRef.current !== null) {

            document.querySelector(".mobile-menu-mask")?.addEventListener("click", closeMobileMenu)

        }

    }, [])



    return (
        <nav ref={topNavRef} className='text-white z-[100] py-12 transition-all duration-300 fixed top-0 w-full'>
            <div className='container mx-auto transition-all duration-300 px-4 xl:px-0 flex flex-col gap-12'>
                <div className='flex justify-between items-center'>
                    <div className='logo'>
                        <img className='transition-all max-w-[110px] lg:max-w-[120px]' src='/logo.svg' />
                    </div>
                    <div className='relative lg:w-[50%] lg:block hidden'>
                        <input placeholder='Busque um produto...' className='w-full transition-all focus:px-12 bg-zinc-500/50 text-zinc-400 px-6 p-6 outline-none' />
                        <button className='absolute uppercase font-bold main-yellow-bg text-white right-0 px-24 h-full'>
                            Buscar
                        </button>
                    </div>
                    <div className='hidden lg:flex items-center gap-8'>
                        <button>
                            <span className="material-symbols-outlined text-4xl">
                                person
                            </span>
                        </button>
                        <button>
                            <span className="material-symbols-outlined text-4xl">
                                shopping_bag
                            </span>
                        </button>
                    </div>
                    {
                        !visibleMobileMenu &&
                        <button onClick={() => openMobileMenu()} className='block lg:hidden'>
                            <svg width="32" height="20" viewBox="0 0 32 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M31.4286 8.57129H0V11.4284H31.4286V8.57129Z" fill="#F9F9F9" />
                                <path d="M31.4286 0H0V2.85714H31.4286V0Z" fill="#F9F9F9" />
                                <path d="M31.4286 17.1426H0V19.9997H31.4286V17.1426Z" fill="#F9F9F9" />
                            </svg>
                        </button>

                    }

                    {visibleMobileMenu
                        &&
                        <button className='block relative z-[1000] lg:hidden' onClick={() => closeMobileMenu()}>
                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.1421 12.3744L1.76776 0L-5.69224e-06 1.76777L12.3744 14.1421L14.1421 12.3744Z" fill="white" />
                                <path d="M12.3744 1.98408e-05L0 12.3744L1.76777 14.1422L14.1421 1.76779L12.3744 1.98408e-05Z" fill="white" />
                            </svg>

                        </button>

                    }
                </div>
                <div className='flex justify-center'>
                    <ul className='hidden relative lg:flex gap-12'>
                        {menu.map((menuItem, i) => {

                            let allCategoriesItem = i == 0

                            return (
                                <li key={i} className='flex group cursor-pointer hover:text-orange-500/80 transition-all items-center gap-4'>
                                    {menuItem.subMenu.length > 0 &&
                                        <ul className='hidden shadow-md left-0 py-10 gap-4 group-hover:flex animate__faster rounded bg-white text-zinc-900 text-xs uppercase font-bold min-w-full flex-col animate__animated top-5 p-4 animate__fadeIn absolute'>
                                            {menuItem.subMenu.map((subMenu, index) => {
                                                return <li key={index}>

                                                    {subMenu.item}
                                                </li>
                                            })}
                                        </ul>}
                                    {allCategoriesItem && <span className="material-symbols-outlined main-yellow-text">
                                        lists
                                    </span>}
                                    <a className={`${allCategoriesItem ? 'main-yellow-text' : ''}`}>{menuItem.item}</a>
                                </li>
                            )
                        })}

                    </ul>
                </div>
            </div>
            <div className='mobile-menu absolute w-full top-0 lg:hidden hidden animate__animated animate__fadeOutLeft'>
                {/* <button onClick={() => closeMobileMenu()} className='absolute right-0'>X</button> */}
                <div className='fixed mobile-menu-mask top-0 left-0 w-screen h-screen bg-zinc-900/90'></div>
                <ul className='flex flex-col absolute w-[80%] gap-10 p-10 h-screen bg-zinc-900 justify-center i_tems-center'>
                    {menu.map((menuItem, i) => {
                        return (
                            <li key={i} className='flex items-center gap-4'>

                                <a className={``}>{menuItem.item}</a>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </nav>
    );
};
