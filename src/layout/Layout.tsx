import { ReactNode } from 'react'
import Sidebar from '../components/sidebar/Sidebar'

interface LayoutProps {
    children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <div className='flex md:gap-4 '>
            <div className='shadow-2xl drop-shadow-lg fixed z-90' style={{ zIndex: "999" }}>
                <Sidebar />
            </div>
            <main className='md:pl-64 pl-10 px-6  py-12 bg-red-100 md:w-[100%] w-full ' style={{ zIndex: "10" }}>
                {children}
            </main>
        </div>
    )
}

export default Layout