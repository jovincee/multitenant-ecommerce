"use client"

import { useRouter, useSearchParams } from "next/navigation"
import Link from "next/link"
import { ShoppingCart, Search } from "lucide-react"
import { useState, useEffect } from "react"
import "./navbar.css"

export default function Navbar () {
    const router = useRouter()
    const searchParams = useSearchParams()
    const initialQuery = searchParams.get("q") || ""

    const [query, setQuery] = useState(initialQuery)

    //update URL as user types (debounces); client-side
    useEffect(() => {
    // 🚫 Do nothing if query already matches URL
    if (query === initialQuery) return

    //define params by creating URL search params here
    const params = new URLSearchParams(searchParams.toString())

    if (query) {
      params.set("q", query)
    } else {
      params.delete("q")
    }

    // ✅ replace prevents history spam + flicker
    router.replace(`/?${params.toString()}`)
  }, [query, router, searchParams, initialQuery])

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
                        onChange={(e)=> setQuery(e.target.value)}
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