import styled from "styled-components";
import logo from "../assets/logo.png";
import { FormRow } from "../components";
import { useState } from "react";

const LandingPage = () => {
  const [isMember, setIsMember] = useState(false);
  return (
    <Wrapper>
      <div className="hero">
        <div className="hero__body">
          <img src={logo} alt="" className="logo" />
          <p className="hero__tagline">
            patience <span></span> frugality <span></span> sacrifice
          </p>
        </div>
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
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  min-height: 100vh;
  .hero {
    background-image: linear-gradient(
        to right,
        rgba(0, 0, 0, 0.9),
        rgba(0, 0, 0, 0.7)
      ),
      url("/hero-bg.jpg");
    min-height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: grid;
    place-items: center;
  }
  .hero__body {
    padding: 2rem 1rem;
  }
  .logo {
    margin: 0 auto 1rem;
    width: 200px;
  }

  .hero__tagline {
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

  .form {
    padding: 2rem;
    display: grid;
    gap: 2rem;
  }
  .form__title {
    margin-bottom: 1rem;
    text-align: center;
    letter-spacing: var(--letter-spacing);
    text-transform: capitalize;
    color: var(--primary-500);
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
    gap: 4rem;
    grid-template-columns: 1.5fr 1fr;
    align-items: center;
    .form {
      padding: 4rem;
      padding-left: 0;
    }

    .hero__body {
      text-align: center;
    }
  }
`;
export default LandingPage;
