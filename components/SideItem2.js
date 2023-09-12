import React, { useState } from 'react';
import Link from 'next/link'
import styled from 'styled-components';

const SidebarLink = styled.div`
  display: flex;
  color: black;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 40px;
  font-size: 18px;
  text-decoration: none;
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
`;

const DropdownLink = styled(Link)`
text-decoration: none;
  height: 40px;
  font-family: var(--font-sidebar);
  padding-left: 3rem;
  text-decoration: none;
  display: flex;
  align-items: center;
  color: black;
  font-size: 18px;
  width: 100%;
  &:hover {

    background: rgba(6, 27, 110, 0.141);
    cursor: pointer;
  
  }
`;

const SideItem = ({ item }) => {

  return (
    <>
      <SidebarLink>
        <div>
          <SidebarLabel>{item.name}</SidebarLabel>
        </div>
      </SidebarLink>
    </>
  );
};

export default SideItem;
