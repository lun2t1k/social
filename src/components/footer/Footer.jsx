import FooterLink from "./FooterLink"

export default function Footer() {
    return (
        <footer className="">
            <ul className="flex flex-wrap justify-center gap-3">
                <li>
                    <FooterLink href="#" title="Blog" />
                </li>
                <li>
                    <FooterLink href="#" title="Developers" />
                </li>
                <li>
                    <FooterLink href="#" title="About Social" />
                </li>
                <li>
                    <FooterLink href="#" title="Data Protection" />
                </li>
                <li>
                    <FooterLink href="#" title="Help" />
                </li>
                <li>
                    <FooterLink href="#" title="Terms & Conditions" />
                </li>
                <li>
                    <FooterLink href="#" title="Privicy Policy" />
                </li>
            </ul>
        </footer>
    )
}
