import styled from "styled-components";

// Header
export const Container = styled.div`
  display: flex;
  justify-content: center;
  background-color: #eeeeee;
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
      & .small {
        display: none;
      }
      & .medium {
        display: block;
        color: #c5c5c5;
        font-size: 1.7rem;
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
      display: flex;
    }
    & .left-container {
      & > div:nth-of-type(1) {
        display: flex;
        align-items: center;
        & .small {
          display: none;
        }
        & .medium {
          display: block;
          margin-right: 10px;
          font-size: 1.5rem;
        }
        & .link {
          display: block;
          font-size: 12px;
          color: #707070;
          text-decoration: none;
        }
      }
    }

    & .right-container {
      display: flex;
      justify-content: flex-end;
      & > div:nth-of-type(1) {
        display: flex;
        align-items: center;
        margin-right: 26px;
        & .link {
          display: block;
          font-size: 12px;
          color: #707070;
          text-decoration: none;
        }
        & .medium {
          margin-right: 10px;
          font-size: 1.5rem;
        }
      }
      & > div:nth-of-type(2) {
        display: flex;
        align-items: center;
        & .link {
          display: block;
          font-size: 12px;
          color: #707070;
          text-decoration: none;
        }
        & .medium {
          margin-right: 10px;
          font-size: 1.5rem;
        }
      }
    }

    /*
    & > div > div:nth-of-type(1) {
      display: flex;
      & > div {
        display: flex;
        align-items: center;
        & .icon-small {
          display: block;
          margin-right: 10px;
          color: #c5c5c5;
          font-size: 1.5rem;
        }
        & .icon-medium {
          display: none;
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
        & .icon-small {
          display: none;
        }
        & .icon-medium {
          display: block;
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
    */
  }
`;
