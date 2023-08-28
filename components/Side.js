"use client"
import { useState } from 'react'
import styled from 'styled-components';
import { useBarContext } from '../context/bar'
import Link from 'next/link'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import SideItem from './SideItem'
import { IconContext } from 'react-icons/lib';

const Nav = styled.div`
  background: #15171c;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const NavIcon = styled(Link)`
@media (min-width: 1024px) {
    display:none;
  }
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarNav = styled.nav`
@media (min-width: 1024px) {
    padding-top: 40px;
  }
  background: #f4b6c2;
padding-top: 21px;

  grid-row: 2;
  grid-column: 1;
  @media (max-width: 1024px) {
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  }
  height: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  top: 0;
  // left: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
  // transition: 350ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const Side = (data) => {

    const { isOpen, setIsOpen } = useBarContext();
    const showSidebar = () => setIsOpen(!isOpen);

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <SidebarNav isOpen={isOpen}>
                    <SidebarWrap>
                        {data.data.map((item, index) => {
                            return <SideItem item={item} key={index} />;
                        })}
                    </SidebarWrap>
                </SidebarNav>
            </IconContext.Provider>
        </>
    );
};

export default Side;
