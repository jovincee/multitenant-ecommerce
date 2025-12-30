import Link from "next/link"
import { ShoppingCart, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"


export default function Navbar() {
    return (
        
        <header className="border-b">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
             {/* Left: Logo / Store Name */}
            <Link href="/" className="text-xl font-bold">
            TechZone
            </Link>

            {/* Center: Search */}
            <div className="hidden w-full max-w-md md:flex">
                <div className="relative w-full">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                    placeholder="Search products..."
                    className="pl-9"
                    />
                </div>
            </div>

            {/* Right: Actions */}
            <div className="flex items-center gap-4">
                <Button variant="ghost" size="icon">
                    <ShoppingCart className="h-5 w-5" />
                </Button>

                <Button variant="outline">
                    Sign In
                </Button>
            </div>


            </div>



        </header>
    )
}