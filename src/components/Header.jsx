import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Outlet } from "react-router-dom";

const NavMenu = styled.nav`
  display: flex;
  justify-content: center;
  gap: 20px;

  padding: 0;
`;
const Link = styled(NavLink)`
  text-decoration: none;
  color: black;
  font-weight: bold;
  &.active {
    color: pink;
  }
`;

export default function Header() {
  return (
    <>
    <header>




        <NavMenu>

          <Link to="/">Home</Link>

          <Link to="/movies">Movies</Link>


        </NavMenu>

        <Outlet></Outlet>
    </header>
     
    </>
    

  );
}
