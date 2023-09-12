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
  background: #D3CDC4;
  height: 80px;
  color: #233953;
  display: flex;
  justify-content: flex-start;
  align-items: center;

`;

const NavIcon = styled(Link)`
@media (min-width: 1024px) {
    display:none;
  }
  margin-left: 2rem;
  color: #233953;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  
`;

const SidebarNav = styled.nav`
@media (min-width: 1024px) {
    padding-top: calc(25px + 3vw);
  }

border-right: .5px solid gray;
padding-top: 25px;
margin-top: 0px;
color: #233953;
// background-color: yellow;

  grid-row: 2;
  grid-column: 1;
  @media (max-width: 1024px) {
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
    padding-top: calc(25px + 3vw);
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
const SidebarLink = styled.div`
  display: flex;
  color: black;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  font-family: var(--font-sidebar);
  list-style: none;
  height: 40px;
  font-size: 18px;
  font-weight: bold;
 
// width: 100%;
  &:hover {
    background: transparent;
    border-left: 3px solid gray;
    cursor: pointer;
  }

`;

const SidebarLabel = styled.span`
  margin-left: 16px;
  text-decoration: none;
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

            <SidebarLink>
              <Link href="/about">
                <SidebarLabel>About</SidebarLabel>
              </Link>
            </SidebarLink>
            <SidebarLink>
              <Link href="/graphic-design">
                <SidebarLabel>Graphic Design</SidebarLabel>
              </Link>
            </SidebarLink>
            <SidebarLink>
              <Link href="/audio-video">
                <SidebarLabel>Audio and Video</SidebarLabel>
              </Link>
            </SidebarLink>
            <SidebarLink>
              <Link href="/social">
                <SidebarLabel>Social Media Management</SidebarLabel>
              </Link>
            </SidebarLink>
            <SidebarLink>
              <Link href="/production">
                <SidebarLabel>Production Services</SidebarLabel>
              </Link>
            </SidebarLink>
            <SidebarLink>
              <Link href="/virtual">
                <SidebarLabel>Virtual Assistance</SidebarLabel>
              </Link>
            </SidebarLink>
            <SidebarLink>
              <Link href="/contact">
                <SidebarLabel>Contact</SidebarLabel>
              </Link>
            </SidebarLink>

            {/* {data.data.map((item, index) => {
              return <SideItem item={item} key={index} />;
            })} */}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};

export default Side;
