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

class Footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="newsletter">
                <div class="news">
                    <h1>Don't miss our weekly updates about academics information!</h1>
                </div>
                <div class="sub">
                    <input type="text" placeholder="Enter your Email Address">
                </div>
                <button>SUBSCRIBE</button>
            </div>

            <div class="footer">
                <div class="nav">
                    <div class="ite flex flex-row">
                        <img src="/src/images/logo 1.png" alt="EDSU Logo" width="50.91px">
                        <p>Edo State <br> Univeristy Uzairue</p>
                    </div>
                    <div class="eulogy">
                        <p>Ed State University, Uzuaire, lorem ipsum dolor sit met,<br>consectetur adipiscing elit, sed do eiusmod
                        tempor <br> incididunt ut labore et dolore magna aliqua. Ut enim <br> ad minim veniam, quis nostrud</p>
                    </div>

                    <div class="socials">
                        <img src="/src/images/facebook.png" alt="" width="40px">
                        <img src="/src/images/youtube.png" alt="" width="40px">
                        <img src="/src/images/twitter.png" alt="" width="40px">
                        <img src="/src/images/linkedin.png" alt="" width="40px">
                        <img src="/src/images/instagram.png" alt="" width="40px">
                    </div>

                </div>
                <div class="conttab">
                    <div class="tabs">
                        <p>EDSU</p>
                        <ul>
                            <li>Why Edsu</li>
                            <li>Programs</li>
                            <li>Scholarship</li>
                            <li>Security</li>
                            <li>Tuition and Fees</li>
                        </ul>
                    </div>
                    <div class="tabs">
                        <p>RESOURCES</p>
                        <ul>
                            <li>Download</li>
                            <li>Help Center</li>
                            <li>Events</li>
                            <li>Guides</li>
                            <li>Partners</li>
                        </ul>
                    </div>
                    <div class="tabs">
                        <p>COMMUNITY</p>
                        <ul>
                            <li>About us</li>
                            <li>Contact us</li>
                            <li>Academics</li>
                            <li>Register</li>
                            <li>LMS</li>
                            <li>FAQ</li>
                        </ul>
                    </div>
                </div>
                <div class="touch">
                    <h1>Get in touch with us</h1>
                    <div class="midas">
                        <img src="/src/images/loc-tra.png" alt="" width="15px">
                        <p>Km7, Auchi-Abuja Road,<br>Iyamho-Uzairue. Edo State, Nigeria</p>
                    </div>
                    <div class="midas">
                        <img src="/src/images/phone-tra.png" alt="" width="15px">
                        <p>08064888518, 08065528915,<br>09025412171, 07012641913</p>
                    </div>
                    <div class="midas">
                        <img src="/src/images/mail-tra.png" alt="" width="15px">
                        <p class="registrar">registrar@edouniversity.edu.ng</p>
                    </div>
                </div>
            </div>

            <div class="rights">
                <p>Edo State Univeristy Uzairue - &copy; 2021 All Rights Reserved.</p>
            </div>
        `
    }
}

customElements.define('app-navbar', Navbar)
customElements.define('app-footer', Footer)