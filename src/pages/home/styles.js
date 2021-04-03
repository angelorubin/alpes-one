import styled from "styled-components";
import banner from "assets/img/banner.png";
import bannerTwo from "assets/img/banner-two.png";

// Home
export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow-x: scroll;
`;

// Header
export const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: #eeeeee;
  border: 2px dashed red;
  min-height: 25px;
  padding: 10px;
  @media (min-width: 100px) {
    & > div {
      display: flex;
      justify-content: center;
      width: 90%;
      & .link {
        display: none;
      }
      & .icon-small {
        display: none;
      }
      & .icon-medium {
        display: block;
      }
    }
    & > div > div {
      display: flex;
      align-items: center;
      width: 50%;
      justify-content: space-between;
    }
    & > div > div ~ div {
      display: flex;
    }
  }

  @media (min-width: 600px) {
    & > div {
    }
    & > div > div:nth-of-type(1) {
      display: flex;
      & > div {
        display: flex;
        align-items: center;
        & .icon-medium {
          margin-right: 10px;
          width: 20px;
          height: 17px;
        }
        & .link {
          display: block;
          font-size: 12px;
          color: #707070;
          text-decoration: none;
        }
      }
    }
    & > div > div:nth-of-type(2) {
      display: flex;
      justify-content: flex-end;
      & > div:nth-of-type(1) {
        display: flex;
        align-items: center;
        & .icon-medium {
          margin-right: 10px;
          max-width: 20px;
          max-height: 17px;
        }
        & .link {
          display: block;
          font-size: 12px;
          color: #707070;
          text-decoration: none;
          margin-right: 26px;
        }
      }
      & > div:nth-of-type(2) {
        display: flex;
        align-items: center;
        & .icon-medium {
          margin-right: 10px;
          width: 20px;
          height: 17px;
        }
        & .link {
          display: block;
          font-size: 12px;
          color: #707070;
          text-decoration: none;
        }
      }
    }
  }
`;

// Subheader
export const SubHeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  @media (min-width: 100px) {
    & > div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 90%;
    }
  }

  @media (min-width: 600px) {
    & > div {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    & > div > div {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

// Banner One
export const BannerContainer = styled.div`
  min-height: 400px;
  background-image: url(${banner});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #fff;
`;

// Driving Emotion
export const DrivingEmotionContainer = styled.div`
  display: flex;
  width: 100%;
  background-color: white;
  justify-content: center;
  & > div {
    display: flex;
    flex-direction: column;
    width: 90%;
  }
`;

export const DrivingEmotionTitle = styled.h1`
  font-size: 34px/46px;
  font-style: italic;
  color: #000000;
  opacity: 1;
`;

export const DrivingEmotionContent = styled.div`
  display: flex;
  & > div {
    display: flex;
    flex-direction: column;
  }
  & > div:nth-child(1) {
    display: flex;
  }
  & > div:nth-child(2) {
    display: flex;
    margin-left: 2rem;
    justify-content: center;
  }
  & > div:nth-child(1) > img {
    border: 1px solid #eee;
    margin: 0.2rem;
    padding: 1px;
  }
  & .driving-emotion-car {
    width: 100%;
    max-height: 212px;
  }
`;

export const DrivingEmotionTextFooter = styled.p`
  font-size: 18px/24px;
  color: #000000;
`;

// Banner Two
export const BannerContainerTwo = styled.div`
  background-image: url(${bannerTwo});
  min-height: 450px;
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

// Features
export const FeaturesContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 1rem 0 0 0;
  width: 100%;
  background-color: #fff;
  & > div {
    display: flex;
    width: 90%;
  }
`;

export const FeaturesCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 24%;
  margin: 0.5rem;
  & .card-image {
  }
  & .card-title {
    font-style: italic;
  }
  & .card-text {
  }
`;

export const FeaturesCardItem = styled.div`
  display: flex;
`;

// Releases
export const RealeaseContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  margin-top: 40px;
  & > div {
    display: flex;
    flex-direction: column;
    width: 90%;
  }
  & .title {
    text-align: left;
    font-style: italic;
    color: #000000;
    opacity: 1;
  }
  & .subtitle {
  }
`;

export const ReleaseCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #d5d5d5;
  opacity: 1;
  padding: 20px;
  margin: 0 1.4rem 0 0;
  max-width: 24%;
`;

export const ReleaseButton = styled.button`
  width: 230px;
  height: 36px;
  border: 1px solid #d5d5d5;
  border-radius: 4px;
  opacity: 1;
`;

// Social Networks
export const SocialContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 60px;
  background-color: #eee;
  & .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90%;
    min-height: 228px;
    padding: 19px 0 19px 0;
    & .follow {
      font-style: italic;
      font-size: 24px;
      color: #000000;
      opacity: 1;
    }
  }
`;

export const SocialCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  border: 1px solid #df0209;
  border-radius: 5px;
  opacity: 1;
  min-width: 270px;
  min-height: 60px;
  margin-right: 30px;
  & .section-one {
    display: flex;
    justify-content: center;
    align-items: center;
    & > div {
      margin-right: 1rem;
    }
  }
  & .section-two {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  & .icon-facebook-placeholder {
    width: 27px;
    height: 39px;
  }
  & .find {
    font-size: 14px;
    color: #000000;
  }
  & .dealership {
    color: #df0209;
    font-size: 22px;
  }
  & .central {
    text-align: left;
    font-size: 16px;
    letter-spacing: -0.7px;
    color: #727b7a;
  }
  & .phone {
    text-align: left;
    font-style: italic;
    font-size: 26px;
    letter-spacing: 0px;
    color: #df0209;
  }
`;

export const SocialIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.5rem;
  min-width: 40px;
  min-height: 40px;
  border-radius: 50%;
  background-color: #c5c5c5;
`;

// Footer
export const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  min-height: 83px;
  padding: 1rem;

  & > div {
    display: flex;
    justify-content: space-around;
    align-items: center;
    & .section-one {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    & .section-two {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  & .logo {
    width: 110px;
    height: 28px;
  }
  & .text {
    font-size: 12px;
    color: #707070;
  }
  & .logo {
    width: 110px;
    height: 28px;
  }
`;
