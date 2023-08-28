"use client"
import styled from 'styled-components';
import {useBarContext} from '../context/bar'

const Bod = styled.div`
@media (min-width: 1024px) {
    background: white;
    display: grid;
    margin:0;
    grid-template-rows: 1fr 9fr;
    grid-template-columns: 250px auto;
}

  @media (max-width: 1024px) {
    background: #eee3e7;
    display: grid;
    margin:0;
    padding-top: 0;
    grid-template-rows: 1fr 9fr;
    grid-template-columns: ${({ isOpen }) => (isOpen ? '60% auto' : '0px auto')};
  }
`;

const Body = ({
    children,
}) => {

    const { isOpen } = useBarContext();

    return (
        <>
            <Bod isOpen={isOpen}>
                {children}
            </Bod>
        </>
    );
};

export default Body;
