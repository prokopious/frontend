import React, { useState } from 'react';
import Link from 'next/link'
import styled from 'styled-components';

const SidebarLink = styled.div`
  display: flex;
  color: #233953;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 18px;
  font-weight: bold;
// width: 100%;
  &:hover {
    background: #F1E7DA;
    border-left: 3px solid gray;
    cursor: pointer;
  }
`;

const SidebarLabel = styled.span`
  margin-left: 16px;
`;

const DropdownLink = styled(Link)`
  background: #F1E7DA;
  height: 60px;

  padding-left: 3rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #233953;
  font-size: 18px;
  width: 100%;
  &:hover {
    background: #F1E7DA;
    cursor: pointer;
    border-left: 3px solid gray;
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
