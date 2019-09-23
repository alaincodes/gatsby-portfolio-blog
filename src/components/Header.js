import React from "react"
import Exploreimg from "../images/undraw_exploring_1l7f.svg"
import Imagineimg from "../images/undraw_wandering_mind_0mkm.svg"
import Transformimg from "../images/undraw_uploading_go67.svg"
import Newsletterimg from "../images/undraw_newsletter_vovu.svg"

import "./Header.scss"

const Header = () => (
  <>
    <nav className="navbar-container">
      <ul className="nav-links">
        <li className="nav-link">
          <a href="#">Explore</a>
        </li>
        <li className="nav-link">
          <a href="#">Imagine</a>
        </li>
        <li className="nav-link">
          <a href="#">Transform</a>
        </li>
        <li className="nav-link">
          <a href="#">About</a>
        </li>
      </ul>
      <div class="burger">
        <div class="line1"></div>
        <div class="line2"></div>
        <div class="line3"></div>
      </div>
    </nav>
    <article className="header-article">
      <p>
        Lorem, ipsum. <strong>Lorem, ipsum.</strong> Lorem ipsum dolor sit amet
        consect.
      </p>
      <h3>Our Services</h3>
    </article>
    <section className="section-feature">
      <div className="feature-content">
        <img width="150" src={Exploreimg} alt="" />
        <h2>Discover</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
      </div>
      <div className="feature-content">
        <img width="150" src={Imagineimg} alt="" />
        <h2>Build</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
      </div>
      <div className="feature-content">
        <img width="150" src={Transformimg} alt="" />
        <h2>Amazing</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed? </p>
      </div>
    </section>
    <main className="main-img">
      <p className="main-paragraph">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic magni aut
        dolore sequi fuga molestias in iure consectetur placeat ratione nisi
        magnam tempora temporibus, amet quibusdam veritatis aliquid soluta ipsa!
      </p>
    </main>
    <article className="article-about">
      <h2>About</h2>
      <p>
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt,
        incidunt?'
      </p>
      <p>— John Doe</p>
      <p>"Lorem ipsum dolor sit amet, consectetur adipisicing elit."</p>
      <p>— Nemo</p>
      <div className="article-about-grid">
        <article>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, ex?
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque
            explicabo voluptatibus repudiandae laborum!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            earum saepe totam eos possimus fuga. Quae.
          </p>
        </article>
        <article>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, velit
            doloribus quas tempore vel, sequi aut, quidem veniam cumque
            laudantium non aliquid vero reprehenderit ipsam deserunt perferendis
            voluptatem nisi mollitia?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            minima nostrum magnam delectus temporibus fugit illo modi alias, nam
            tempora mollitia sint accusamus accusantium a aliquid non debitis
            ullam reprehenderit.
          </p>
        </article>
      </div>
    </article>
    <section className="section-newsletter">
      <img width="200" src={Newsletterimg} alt="" />
      <h2>Discover My Newsletter</h2>
      <button>Subscribre</button>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non sed tenetur
        ducimus debitis, vel excepturi velit facilis eius?
      </p>
    </section>
    <footer className="footer">
      <h1>Lorem, ipsum.</h1>
      <div className="footer-grid">
        <div>
          <p>Lorem, ipsum dolor.</p>{" "}
        </div>
        <div>
          <p>
            3 rue du Poulet <br /> CP 75005 - Paris <br /> France
          </p>
        </div>
        <div>
          <p>lorem@ipsum.com</p>{" "}
        </div>
        <div>
          {" "}
          <p>2018-2019</p>{" "}
        </div>
      </div>
    </footer>
  </>
)

export default Header
