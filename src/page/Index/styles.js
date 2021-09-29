import Styled from "styled-components";


export const Container = Styled.div`
  font-family: 'Otomanopee One';
  display: flex;
`;

export const SideLeft = Styled.div`
    position: absolute;
    background-color: #7ba3e3;
    flex-direction: column;
    height: 100%;
    width: 30%;
    margin-top: 0;
    padding-left: 10px;
    color: #FFF;
    display: flex;
    justify-items: center;
    align-content: center;
`;

export const Logo = Styled.div`
    text-align: center;
    margin-bottom: 13px;


`;
export const LogoIcon = Styled.img`
    width: 50px;
`;

export const SideRight = Styled.div`
     background-color: #dce6f5;
position: absolute;
   display: flex;
   flex-direction: column;
    margin-left: 30%;
    height: 100%;
    width: 70%;
    justify-items: center;
    align-items: center;
    justify-content: center;
   
`;

export const BoxChat = Styled.div`
     background-color: #939599;
   display: flex;
   flex-direction: column;
    height:90%;
    width: 90%;
    border-radius: 10px;
`;

export const Icons = Styled.div`
  width: 100px;
    height: 47px;
`;
export const TextLabelUser = Styled.label`
  
    
    text-shadow: 1px 1px 1px #000;
    font-size: 15px;
    margin-bottom: 5%;
`;
export const TextLabel = Styled.label`
  
    margin-left: 10px;
    text-shadow: 1px 1px 1px #000;
    font-size: 15px;
`;

export const Title = Styled.p`
  
    font-size: 30px;
    text-shadow: 1px 1px 1px #000;
    margin-bottom: 2%;
`;
export const Box = Styled.div`
margin-left: 23%;
    margin-top: 30%;
`;
export const TitlePartner = Styled.label`
margin: 2px;
text-align: left;
font-size: 0.2rem;
`;
export const CardChat = Styled.div`
display: flex;
width: 80%;
height: 30px;
border-radius: 10px;
border-width: 2px;
border-color: black;
border-style: solid;
align-items: center;
padding: 10px;
`;
export const CardMessageUser = Styled.div`
background-color: #7ba3e3;
display: flex;
max-width: 50%;
min-width: 20%;
min-height: 20px;
height: 30px;
border-radius: 10px;
border-width: 2px;
border-color: black;
border-style: solid;
align-items: center;
padding: 10px;
margin: 10px;
align-self: flex-end;
`;
export const CardMessageConvidad = Styled.div`
background-color: #7be3b4;
flex-direction: column;
display: flex;
max-width: 40%;
min-width: 20%;
margin: 10px;
border-radius: 10px;
border-width: 2px;
border-color: black;
border-style: solid;
align-items: center;
padding: 1px;
justify-self: flex-start;
`;
export const BoxInput = Styled.div`
display: flex;
flex-direction: row;
margin: 2%;
height: 40px;
width: 90%;

`;
export const ContentUsername = Styled.div`
display: flex;
flex-direction: row;
align-self: flex-start;
margin-bottom: -25px;

`;
export const ContentData = Styled.div`
display: flex;
flex-direction: row;
align-self: flex-end;

`;
export const TextCard = Styled.p`
  
    font-size: 10px;

`;
export const TextMessage = Styled.p`
display: flex;
    text-align: flex-start;
    font-size: 15px;

`;

export const IconChat = Styled.img`
width: 40px;
height: 40px;
border-radius: 30px;
border-width: 2px;
border-color: black;
border-style: solid;
`;
export const InputMessage = Styled.input`
width: 100%;
height: 40px;
border: 1px 1px 0px 0px;

`;
export const ButtonSend = Styled.button`
width: 80px;
height: 46px;
background-color: #7ba3e3;
color: white;
border-radius: 0px 10px 10px 0px;
border: 1px;

`;
