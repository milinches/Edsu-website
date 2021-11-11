class Navbar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header class="ml-16 mr-16 mt-3">
                <div class="nav flex flex-row">
                    <img src="/src/images/logo 1.png" alt="EDSU Logo" width="50.91px">
                    <p>Edo State <br> Univeristy Uzairue</p>
                </div>
                <nav>
                    <ul>
                        <li><a href="/src/html/Home.html">Home</a></li>
                        <li><a href="/src/html/About.html">About</a></li>
                        <li><a href="/src/html/Programs.html">Programs</a></li>
                        <li><a href="#">Activity</a></li>
                        <li><a href="/src/html/Contact.html">Contact Us</a></li>
                        <li><a href="#">Students</a></li>
                    </ul>
                </nav>
                <div class="btn">
                    <button class="button1">Sign in</button>
                    <button class="button2">LMS</button>
                </div>
            </header>
            <hr>
        `
    }
}

customElements.define('app-navbar', Navbar)