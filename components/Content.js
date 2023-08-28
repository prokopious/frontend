"use client"
import styled from 'styled-components';
import { useBarContext } from '@/context/bar';

const Cont = styled.div`
@media (min-width: 1024px) {
    grid-row: 2;
    grid-column: 2;
  }

  @media (max-width: 1024px) {
    grid-row: 2;
    grid-column: ${({ isOpen }) => (isOpen ? '2' : '2')};
    display: ${({ isOpen }) => (isOpen ? 'none' : 'block')};
  }
`;

const Content = ({
    children,
}) => {

    const { isOpen, setIsOpen } = useBarContext();

    return (
        <>
            <Cont isOpen={isOpen}>
                {children}
            </Cont>
        </>
    );
};

export default Content;