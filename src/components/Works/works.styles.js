import styled from 'styled-components';
import {BiCheck, BiDetail, BiSearch} from 'react-icons/bi';
import {Container} from '../../Globalstyles';

export const WorksContent = styled.section`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
margin-top: 3rem;
`;
export const WorksContainer = styled(Container)`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
padding: 2rem 0rem;

${Container};
`;

export const WorksTitle = styled.h2`
font-size: clamp(2rem, 5vw, 5rem);
font-weight: bold;
`;

export const WorksCardContent = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin-top: 5rem;

@media only screen and (max-width:900px){
    flex-direction: column;
}
`;

export const WorksCard = styled.div`
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
width: 20rem;
height: 30rem;
background-color: #fff;
box-shadow: 0px 5px 40px rgba(0, 0, 0, 0.19);
border-radius: 15px;
transition: all .5s ease;

&:not(:last-child) {
    margin-right: 1rem;

    @media only screen and (min-width: 1300px){
        margin-right: 5rem;
    }

    @media only screen and (min-width: 1500px){
        margin-right: 5rem;
    }
    @media only screen and (max-width:900px){
        margin-bottom: 10rem;
        margin-right: 0;
    }
    @media only screen and (max-width: 800px){
        box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.12);
    }
}

@media only screen and (max-width:900px){
        width: 50rem;
}
@media only screen and (max-width:500px){
        width: 30rem;
}
@media only screen and (min-width:1890px){
        width: 40rem;
}
&:hover {
    box-shadow:  0px 10px 80px rgba(0, 0, 0, 0.21);
    transform: scale(1.05);
    background-color: #E38B06;
    color: #fff;
    
}
`;

export const WorksIconContainer = styled.div`
width: 9rem;
height: 9rem;
border-radius: 50%;
border: 2px solid #333;
transition: all .3s ease-out;
margin-top: 2rem;
display: flex;
justify-content: center;
align-items: center;

`;
export const WorksIcon1 = styled(BiCheck)`
color: #333;
font-size: 8rem;
`;

export const WorksIcon2 = styled(BiDetail)`
color: #333;
font-size: 6rem;
`;
export const WorksIcon3 = styled(BiSearch)`
color: #333;
font-size: 6rem;
`;

export const WorksCardTitle = styled.h3`
color: #333;
font-size: 2.4rem;
font-weight: bold;
padding-top: 1rem;
`;

export const WorksCardText = styled.h5`
color: #333;
font-size: 1.5rem;
padding: 1rem 1rem;
`;