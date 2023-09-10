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
  text-decoration: none;
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
`;

const DropdownLink = styled(Link)`

  height: 40px;
  font-family: var(--font-sidebar);
  padding-left: 3rem;

  display: flex;
  align-items: center;
  text-decoration: none;
  color: black;
  font-size: 18px;
  width: 100%;
  &:hover {

    background: rgba(6, 27, 110, 0.141);
    cursor: pointer;
  
  }
`;

const SideItem = ({ item }) => {

  const [subnav, setSubnav] = useState(false);
  const showSubnav = () => setSubnav(!subnav);

  console.log(item)

  return (
    <>
      <SidebarLink onClick={item.posts && showSubnav}>
        <div>
          {item.icon}
          <SidebarLabel>{item.name}</SidebarLabel>
        </div>
        <div>
          {/* {item.slug && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null} */}
        </div>
      </SidebarLink>
      {subnav &&
        item.posts.map((item, index) => {
          return (
            <DropdownLink href={'/blog/' + item.slug} key={index}>
              {item.icon}
              <SidebarLabel>{item.title}</SidebarLabel>
            </DropdownLink>
          );
        })}
    </>
  );
};

export default SideItem;
