function Footer() {
    return (
        <footer className="border-t border-white/10 mt-20">
            <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* brand block */}
                <div>
                    <div className="flex items-center gap-2 mb-3">
                        <img src="assets/logo-text.png" alt="Dev Stack logo" className="w-25 h-8" />
                        <span className="font-bold text-lg brand-gradient-text"></span>
                    </div>
                    <p className="text-sm text-gray-400">
                        A simple place to explore modern web technologies and build the
                        stack that fits your next project.
                    </p>
                    <div className="flex gap-4 mt-4 text-sm text-gray-400">
                        <a href="#">GitHub</a>
                        <a href="#">Twitter</a>
                        <a href="#">LinkedIn</a>
                    </div>
                </div>

                {/* Product links */}
                <div>
                    <h4 className="font-semibold mb-3">Product</h4>
                    <ul className="text-sm text-gray-400 flex flex-col gap-2">
                        <li><a href="#">Technologies</a></li>
                        <li><a href="#">Projects</a></li>
                        <li><a href="#">Pricing</a></li>
                    </ul>
                </div>

                {/* Company links */}
                <div>
                    <h4 className="font-semibold mb-3">Company</h4>
                    <ul className="text-sm text-gray-400 flex flex-col gap-2">
                        <li><a href="#">About</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>

                {/* Legal links */}
                <div>
                    <h4 className="font-semibold mb-3">Legal</h4>
                    <ul className="text-sm text-gray-400 flex flex-col gap-2">
                        <li><a href="#">Privacy</a></li>
                        <li><a href="#">Terms</a></li>
                    </ul>
                </div>
            </div>

            <div className="border-t border-white/10 py-4 text-center text-xs text-gray-500">
                © 2026 Dev Stack. All rights reserved. &nbsp;|&nbsp;
                <a href="#" className="ml-1">Privacy</a> &nbsp;|&nbsp;
                <a href="#" className="ml-1">Terms</a>
            </div>
        </footer>
    )
}

export default Footer
