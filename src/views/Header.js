import React from "react"
import styled from "styled-components"
import Exploreimg from "../images/undraw_exploring_1l7f.svg"
import Imagineimg from "../images/undraw_wandering_mind_0mkm.svg"
import Transformimg from "../images/undraw_uploading_go67.svg"
import Worldimg from "../images/undraw_connected_world_wuay.svg"

const Navbar = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
  width: 100vw;
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
  margin-bottom: 1rem;
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
  margin: auto 1rem;
`

const GridContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  </>
)

export default Header
