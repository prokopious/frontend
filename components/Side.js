"use client"
import { useState } from 'react'
import styled from 'styled-components';
import { useBarContext } from '../context/bar'
import Link from 'next/link'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import SideItem from './SideItem'
import { IconContext } from 'react-icons/lib';
import styles from './Side.module.css'

const Nav = styled.div`
  background: #D3CDC4;
  height: 80px;
  color: #233953;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-decoration: none;
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
  text-decoration: none;
`;

const SidebarNav = styled.nav`
@media (min-width: 1024px) {
    padding-top: calc(25px + 3vw);
  }
color: black;
border-right: .5px solid gray;
padding-top: 25px;
margin-top: 0px;
color: black;
// background-color: yellow;
text-decoration: none;
  grid-row: 2;
  grid-column: 1;
  @media (max-width: 1024px) {
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
    padding-top: calc(25px + 3vw);
    text-decoration: none;
  }
  height: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  text-decoration: none;
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
  color: black;
  font-weight: bold;
  text-decoration: none;
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
  color: black;
`;

const SidebarWrap = styled.div`
  width: 100%;
  text-decoration: none;
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
              <Link className={styles.l} href="/about">
                <SidebarLabel>About</SidebarLabel>
              </Link>
            </SidebarLink>
            <SidebarLink>
              <Link className={styles.l} href="/graphic-design">
                <SidebarLabel>Graphic Design</SidebarLabel>
              </Link>
            </SidebarLink>
            <SidebarLink>
              <Link className={styles.l} href="/audio-video">
                <SidebarLabel>Audio and Video</SidebarLabel>
              </Link>
            </SidebarLink>
            <SidebarLink>
              <Link className={styles.l} href="/social">
                <SidebarLabel>Social Media Management</SidebarLabel>
              </Link>
            </SidebarLink>
            <SidebarLink>
              <Link className={styles.l} href="/production">
                <SidebarLabel>Production Services</SidebarLabel>
              </Link>
            </SidebarLink>
            <SidebarLink>
              <Link className={styles.l} href="/virtual">
                <SidebarLabel>Virtual Assistance</SidebarLabel>
              </Link>
            </SidebarLink>
            <SidebarLink>
              <Link className={styles.l} href="/contact">
                <SidebarLabel>Contact</SidebarLabel>
              </Link>
            </SidebarLink>
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};

export default Side;
