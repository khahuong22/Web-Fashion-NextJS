export default function Header() {
    return (
        <header className="w-full bg-black text-white px-6 py-4 shadow-md">
            <nav>
                <ul className="flex space-x-6">
                    <li>
                        <a href="/" className="hover:text-gray-400">HOME</a>
                    </li>
                    <li>
                        <a href="/band" className="hover:text-gray-400">BAND</a>
                    </li>
                    <li>
                        <a href="/tour" className="hover:text-gray-400">TOUR</a>
                    </li>
                    <li>
                        <a href="/contact" className="hover:text-gray-400">CONTACT</a>
                    </li>


                    <li className="relative group">
                        <button className="hover:text-gray-400">MORE ▾</button>
                        <ul
                            className="absolute left-0 mt-2 w-40 bg-black text-white shadow-lg 
                         opacity-0 translate-y-2 invisible 
                         group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible 
                         transition-all duration-300 ease-out"
                        >
                            <li>
                                <a href="/merchandise" className="block px-4 py-2 hover:bg-gray-800">Merchandise</a>
                            </li>
                            <li>
                                <a href="/extras" className="block px-4 py-2 hover:bg-gray-800">Extras</a>
                            </li>
                            <li>
                                <a href="/media" className="block px-4 py-2 hover:bg-gray-800">Media</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
