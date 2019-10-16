import * as React from 'react';
import styled from 'styled-components';
import SideBar from '@containers/SideBar';
import MainContent from '@containers/MainContent';

const StyledLayout = styled.div`
    display: flex;
    min-height: 100vh;
    background-color: rgb(117,184,200);
`;

const Layout = () => {
    return (
        <StyledLayout>
            <SideBar />
            <MainContent />
        </StyledLayout>
    );
}

export default Layout;
