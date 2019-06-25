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
    color: #ff6100;
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
      color: #ff6100;
    }
  }
  h3 {
    border-bottom: 1px solid #ff6100;
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
    color: #ff6100;
    font-size: 1rem;
  }
`

const Newsletter = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgb(0, 34, 0);
  height: 70vh;
  img {
    margin: 2rem auto;
  }
  button {
    background: rgb(0, 34, 0);
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
        Welcome to <strong>Whispers & Giants</strong> a strategic design studio
        helping teams during their innovation journeys
      </p>
      <h3>Our Services</h3>
    </Article>
    <SectionGrid>
      <GridContent>
        <img width="150" src={Exploreimg} alt="" />
        <h2>Explore</h2>
        <p>Uncover inspiring insights that provide strategic advantages</p>
      </GridContent>
      <GridContent>
        <img width="150" src={Imagineimg} alt="" />
        <h2>Imagine</h2>
        <p>Reframe challenges and imagine multiple future realities</p>
      </GridContent>
      <GridContent>
        <img width="150" src={Transformimg} alt="" />
        <h2>Transform</h2>
        <p>
          Impact your projects with strategic design coaching and consulting{" "}
        </p>
      </GridContent>
    </SectionGrid>
    <MainForest>
      <p>
        Hello, I am Pascal Wicht. I help design solutions for organisations to
        survive in a multipolar world overwhelmed by large-scale problems that
        refuse to disappear, and multiply rapidly.
      </p>
    </MainForest>
    <MainArticle>
      <h2>Approach</h2>
      <p>"A desk is a dangerous place from which to view the world."</p>
      <p>— John Le Carre</p>
      <p>
        "For every complex problem, there is an answer that is clear, simple,
        and wrong."
      </p>
      <p>— H. L. Mencken</p>
      <GridArticle>
        <article>
          <p>
            I provide the support to help my clients make sense of complexity,
            move forward with clarity, and deliver quick results.
          </p>
          <p>
            My explorations help you investigate the deep human stories and the
            weak signals of change coming from your environment and shape the
            insights that will guide you through it.
          </p>
          <p>
            I design and facilitate workshops which provide enough latitude for
            future imagination to flourish and enough time for the right
            conversations to emerge.
          </p>
        </article>
        <article>
          <p>
            Whether it’s time to generate new ideas or tackle complex problems,
            I can help. I am used to conducting rapid deep dives in challenging
            contexts, generating the rich qualitative reports that will shape
            your strategy and help you to succeed.
          </p>
          <p>
            My coaching helps you improve your design leadership skills and
            cross-functional team management performance. I blend a reflective
            and tailor-made approach with the foundational knowledge to help you
            integrate the design framework into your business and projects.
          </p>
        </article>
      </GridArticle>
    </MainArticle>
    <Newsletter>
      <img width="200" src={Newsletterimg} alt="" />
      <h2>Discover My Newsletter</h2>
      <button>Subscribre</button>
      <p>
        This carefully curated newsletter is published on a bi-monthly basis to
        inspire a critical point of view on emerging issues.
      </p>
    </Newsletter>
    <FooterGrid>
      <h1>Whispers & Giants</h1>
      <FooterGridContent>
        <div>
          <p>Whispers & Giants Sàrl</p>{" "}
        </div>
        <div>
          <p>
            Rue de Bourg 9 <br /> CP 7715 - 1002 <br /> Lausanne Switzerland
          </p>
        </div>
        <div>
          <p>info@whispersandgiants.com</p>{" "}
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
