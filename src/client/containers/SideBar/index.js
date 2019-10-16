import * as React from 'react';
import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

const Nav = styled.nav`
    min-width: 200px;
    min-height: 100vh;
    background-color: rgb(51,51,51);
`;

const NavList = styled.ul`
    list-style-type: none;
    background-color: rgb(51,51,51);
`;

const NavItem = styled.li``;

const Link = styled(RouterLink)`
    display: block;
    color: white;
    padding: 1em;
    /* Remove underline */
    text-decoration: none;
    /* Leave text's case and capitalization exactly as it was entered */
    text-transform: none;

    :hover {
        filter: brightness(110%);
        border-left:4px solid rgb(80,255,215);
    }

    &:hover{
        color: rgb(80,255,215);
    }
`;

const Divider = styled.hr`
    border: 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
`;

const StyledSideBar = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    background-color: rgb(51,51,51);
`;

const Header = styled.div`
    color: white;
    padding: 1em;
    font-size: 1.125rem;
`;

const SideBar = ({routes = ['./home', './trips', './groups']}) => {
    return (
        <StyledSideBar>
            <Header>
                Recipe Book
            </Header>
            <Divider/>

            <Nav>
                <NavList>
                    <NavItem>
                        <Link to='./recipes'> Recipes </Link>
                    </NavItem>
                    <Divider />

                    <NavItem>
                        <Link to='./specials'> Specials </Link>
                    </NavItem>
                    <Divider />
                </NavList>
            </Nav>
        </StyledSideBar>
    )
};

export default SideBar;