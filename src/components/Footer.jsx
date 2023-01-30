export default function Footer(props) {
    return (
        <footer className="pt-20 pb-16">
            <div className="container-props">
                <ul className="flex justify-center items-center gap-10">
                    <li>
                        <a
                            href="/"
                            className="px-4 py-3 text-slate-500 hover:underline hover:underline-offset-2"
                        >
                            About Us
                        </a>
                    </li>
                    <li>
                        <a
                            href="/"
                            className="px-4 py-3 text-slate-500 hover:underline hover:underline-offset-2"
                        >
                            Terms & Conditions
                        </a>
                    </li>
                    <li>
                        <a
                            href="/"
                            className="px-4 py-3 text-slate-500 hover:underline hover:underline-offset-2"
                        >
                            Privicy Policy
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}
