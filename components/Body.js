"use client"
import styled from 'styled-components';
import {useBarContext} from '../context/bar'


const Bod = styled.div`
height: 100%;
min-height: 100vh;
// background: rgb(63,94,251);
// background-image: linear-gradient(to bottom right, #FDFCFB, #E2D1C3);
// background-image: url("../public/bamboo.jpg") no-repeat center center fixed; 
@media (min-width: 1024px) {
    display: grid;
    margin:0;
   
    grid-template-rows: 100px auto;
    grid-template-columns: 300px auto;
}

  @media (max-width: 1024px) {
    display: grid;
    margin:0;
    padding-top: 0;
    grid-template-rows: 100px auto;
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
