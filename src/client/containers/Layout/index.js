import * as React from 'react';
import styled from 'styled-components';
import SideBar from '@containers/SideBar';
import MainContent from '@containers/MainContent';

const StyledLayout = styled.div`
    display: flex;
    min-height: 100vh;
`;

const Layout = () => {
    return (
        <StyledLayout>
            <MainContent />
        </StyledLayout>
    );
}

export default Layout;
