import styled from "styled-components";
import landingImg from "../assets/landing-page.jpg";
import logo from "../assets/logo.png";
import { FormRow } from "../components";
import { useState } from "react";

const LandingPage = () => {
  const [isMember, setIsMember] = useState(false);
  return (
    <Wrapper>
      <div className="img__container">
        <img className="landing__img" src={landingImg} alt="" />
      </div>
      <div className="form__container">
        <div className="header">
          <img src={logo} alt="" className="logo" />
          <p className="header__tagline">
            patience <span></span> frugality <span></span> sacrifice
          </p>
        </div>
        <form className="form">
          <h5 className="form__title">{isMember ? "login" : "sign up"}</h5>
          {!isMember && <FormRow label="name" type="text" />}
          <FormRow label="email" type="text" />
          <FormRow label="password" type="password" />
          <button className="btn">{isMember ? "login" : "sign up"}</button>
          <p className="text_small">
            {isMember ? "Not a member yet?" : " Already a member?"}
            <button
              onClick={() => setIsMember(!isMember)}
              type="button"
              className="member-btn"
            >
              {isMember ? "register" : "login"}
            </button>
          </p>
        </form>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  min-height: 100vh;
  .img__container {
    position: relative;
    height: 100vh;
    /* border: 1px solid magenta; */
  }
  .img__container::before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
  }
  .landing__img {
    height: 100%;
    object-position: left;
  }
  .header {
    position: absolute;
    display: grid;
    gap: 1rem;
    top: 17rem;
    left: 50%;
    transform: translateX(-50%);
  }
  .logo {
    margin: 0 auto;
    width: 200px;
  }
  .header__tagline {
    letter-spacing: var(--letter-spacing);
    white-space: nowrap;
    text-transform: capitalize;
    color: var(--white);
    span {
      display: inline-block;
      width: 10px;
      height: 10px;
      background-color: var(--white);
      border-radius: 50%;
    }
  }
  .form__container {
    padding: 4rem 2rem;
  }
  .form {
    display: grid;
    gap: 2rem;
  }
  .form__title {
    margin-bottom: 1rem;
    text-align: center;
    letter-spacing: var(--letter-spacing);
    text-transform: capitalize;
    text-decoration: underline;
    text-underline-offset: 10px;
  }

  .text_small {
    text-align: center;
    letter-spacing: var(--letter-spacing);
  }
  .member-btn {
    background: transparent;
    border: none;
    letter-spacing: var(--letter-spacing);
    text-transform: capitalize;
    color: var(--primary-500);
  }
  @media (min-width: 900px) {
    display: grid;
    gap: 5rem;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    .form__container {
      padding: 2rem;
    }
    /* .img__container::before {
      background-color: rgba(0, 0, 0, 0);
    } */
    .header {
      text-align: center;
      /* position: static; */
      padding: 2rem;
      margin-bottom: 5rem;
      /* background-color: var(--primary-400); */
      border-radius: 2px;
      transform: translateX(0) translateY(-3rem);
      left: 10%;
    }
  }
`;
export default LandingPage;
