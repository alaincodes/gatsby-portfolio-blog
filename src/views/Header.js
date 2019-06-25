import React from "react"
import styled from "styled-components"
import Exploreimg from "../images/undraw_exploring_1l7f.svg"
import Imagineimg from "../images/undraw_wandering_mind_0mkm.svg"
import Transformimg from "../images/undraw_uploading_go67.svg"
import Forestimg from "../images/rosie-fraser-1L71sPT5XKc-unsplash.jpg"
import Newsletterimg from "../images/undraw_newsletter_vovu.svg"
const Navbar = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
  width: 100%;
  margin: 1rem auto;
`

const NavLinks = styled.ul`
  display: flex;
  list-style-type: none;
  margin: auto;
`

const NavLink = styled.li`
  padding: 1rem;
  a {
    text-decoration: none;
    color: #a5aed5;
    &:hover {
      text-decoration: underline;
    }
  }
`

const Article = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: auto;
  max-width: 400px;
  margin: 1rem auto;
  p {
    color: ghostwhite;
    font-size: 1.2rem;
    text-align: center;
    strong {
      color: #a5aed5;
    }
  }
  h3 {
    border-bottom: 1px solid #a5aed5;
  }
`

const SectionGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
  padding: 1rem;
  margin: 1rem auto;
`

const GridContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2rem auto;
`
const MainForest = styled.main`
  background-image: url(${Forestimg});
  background-size: cover;
  height: 80vh;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 1rem auto;
  p {
    max-width: 600px;
    color: ghostwhite;
    font-size: 1.5rem;
    padding: 1rem;
  }
`

const MainArticle = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1rem auto;
  h2 {
    font-size: 2.5rem;
    margin: 1rem auto;
  }
  p {
    color: ghostwhite;
    font-size: 1.3rem;
    max-width: 450px;
    margin: 1rem auto;
  }
`
const GridArticle = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 700px;
  grid-gap: 3rem;
  margin: 1rem auto;
  p {
    color: #a5aed5;
    font-size: 1rem;
  }
`

const Newsletter = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #1f567a;
  height: 70vh;
  img {
    margin: 2rem auto;
  }
  button {
    background: #1f567a;
    border: 1px solid ghostwhite;
    padding: 0.7rem 2.5rem;
    color: ghostwhite;
    margin: 1rem auto;
  }
  p {
    max-width: 450px;
    font-size: 0.8rem;
    margin: 1rem auto;
  }
`
const FooterGrid = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin: auto;
  height: 50vh;
  h1 {
    margin: 2rem auto;
  }
`

const FooterGridContent = styled.div`
  display: flex;
  justify-content: space-evenly;
  p {
    padding: 1rem 1rem;
  }
`

const Header = () => (
  <>
    <Navbar>
      <NavLinks>
        <NavLink>
          <a href="#">Explore</a>
        </NavLink>
        <NavLink>
          <a href="#">Imagine</a>
        </NavLink>
        <NavLink>
          <a href="#">Transform</a>
        </NavLink>
        <NavLink>
          <a href="#">About</a>
        </NavLink>
      </NavLinks>
    </Navbar>
    <Article>
      <p>
        Lorem, ipsum. <strong>Lorem, ipsum.</strong> Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Nemo, culpa?
      </p>
      <h3>Our Services</h3>
    </Article>
    <SectionGrid>
      <GridContent>
        <img width="150" src={Exploreimg} alt="" />
        <h2>Discover</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
      </GridContent>
      <GridContent>
        <img width="150" src={Imagineimg} alt="" />
        <h2>Build</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
      </GridContent>
      <GridContent>
        <img width="150" src={Transformimg} alt="" />
        <h2>Amazing</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed? </p>
      </GridContent>
    </SectionGrid>
    <MainForest>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic magni aut
        dolore sequi fuga molestias in iure consectetur placeat ratione nisi
        magnam tempora temporibus, amet quibusdam veritatis aliquid soluta ipsa!
      </p>
    </MainForest>
    <MainArticle>
      <h2>About</h2>
      <p>
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt,
        incidunt?'
      </p>
      <p>— John Doe</p>
      <p>"Lorem ipsum dolor sit amet, consectetur adipisicing elit."</p>
      <p>— Nemo</p>
      <GridArticle>
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
      </GridArticle>
    </MainArticle>
    <Newsletter>
      <img width="200" src={Newsletterimg} alt="" />
      <h2>Discover My Newsletter</h2>
      <button>Subscribre</button>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non sed tenetur
        ducimus debitis, vel excepturi velit facilis eius?
      </p>
    </Newsletter>
    <FooterGrid>
      <h1>Lorem, ipsum.</h1>
      <FooterGridContent>
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
      </FooterGridContent>
    </FooterGrid>
  </>
)

export default Header
