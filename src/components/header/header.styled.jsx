import styled from 'styled-components';


export const HeaderContainer = styled.div`
  background-color: rgba(26, 95, 57, 0.5);
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 26px;
  font-weight: bold;
  color: white;
  position: absolute;
  left: 0;
  right: 0;

  @media screen and (max-width: 800px){
    font-size: 20px;
    border-bottom:1px solid #31945C;
  }
  @media screen and (max-width: 550px){
    font-size: 13px;
    height: 70px;
  }
  @media screen and (max-width: 414px) and (-webkit-min-device-pixel-ratio:2){
    height: 70px;
    font-size: 13px;
  }
  @media screen and (max-width: 320px) and (-webkit-min-device-pixel-ratio:2){
    height: 70px;
  }
`;
export const HeaderLogoDiv = styled.div`
  width: 30%;
  height: 100%;
  display:flex;
  justify-content:center;
  align-items: center;
   img{
     width: 56%;
     border: 2px solid white;
   }
   @media screen and (max-width: 1024px){
    img{
      width: 80%;
    }
   }
  @media screen and (max-width: 990px){
    img{
      width: 80%;
    }
  }
  @media screen and (max-width: 731px){
    img{
      width: 88%;
    }
  }
  @media screen and (max-width: 640px){
    img{
      width: 90%;
    }
  }
   @media screen and (max-width: 414px){
    img{
      width: 96%;
    }
  }
`;
export const HeaderPhoneDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right:20px;
  width: 35%;
  @media screen and (max-width: 900px){
    display: none;
  }
`;
export const HeaderPhoneDivMedia = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 35%;
  @media screen and (max-width: 900px){
    display: none;
  }
`;
export const HeaderLanguageChange = styled.div`
  width: 15%;
  display: flex;
  justify-content: flex-end;
  padding-right: 15px;
  @media screen and (max-width: 900px){
    padding-right: 10px;
  }
  @media screen and (max-width: 414px){
    width: 10%;
  }
  @media screen and (max-width: 320px) and (-webkit-min-device-pixel-ratio:2){
    padding-right: 5px;
  }
`;
export const LitleScreenPhone = styled.div`
  width: 45%;
  height:100%;
  display:none;
  @media screen and (max-width: 900px){
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;
export const LitleScomeEveryPhone = styled.div`
   padding: 5px 0;
   font-size: 15px;
   @media screen and (max-width: 411px) and (-webkit-min-device-pixel-ratio:2){
     font-size: 15px;
   }
   @media screen and (max-width: 350px) and (-webkit-min-device-pixel-ratio:2){
    font-size: 12px;
  }
`;