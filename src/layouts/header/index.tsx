import Links from "./links"
import Logo from "./logo"

export default function Header() {
    return (
        <header className="bg-orange-600 h-12 top-0 sticky flex justify-between items-center">
            <Logo />
            <Links />
        </header>
    )
}