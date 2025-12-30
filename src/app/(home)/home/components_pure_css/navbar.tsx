import Link from "next/link"
import { ShoppingCart, Search } from "lucide-react"
import "./navbar.css"

export default function Navbar () {
    return(
        <header className="navbar">
            <nav className="navbar-container" aria-label="Primary Navigation">
                {/* Brand: Redirect to Home */}
                <div className="navbar-brand">
                    <Link href="/" className="navbar-logo">
                        TechZone
                    </Link>
                </div>
                {/** Search bar: */}
                <form className='navbar-search' role='search'>
                    <div className="search-wrapper">
                        <Search className="search-icon" aria-hidden="true" />
                        <input
                        type="search"
                        placeholder="Search products..."
                        className="search-input"
                        aria-label="Search products"
                        />
                    </div>

                </form>

                {/* Actions */}
                <div className="navbar-actions">
                    <button
                        className="icon-button"
                        aria-label="View shopping cart"
                    >
                    <ShoppingCart size={20} aria-hidden="true" />
                    </button>

                    <Link href="/signin" className="outline-button">
                        Sign In
                    </Link>
                </div>


            </nav>

        </header>


    )
}