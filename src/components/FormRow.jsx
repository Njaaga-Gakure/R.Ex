import React from "react";
import styled from "styled-components";
import { FaUserAlt } from "react-icons/fa";
import { SiMinutemailer } from "react-icons/si";
import { BiSolidLock } from "react-icons/bi";

const FormRow = ({ label, type }) => {
  return (
    <Wrapper className="form__row">
      <input
        type={type}
        name={label}
        id={label}
        className="form__input"
        required
      />
      <label className="form__label" htmlFor={label}>
        {label === "name" ? (
          <FaUserAlt />
        ) : label === "email" ? (
          <SiMinutemailer />
        ) : (
          <BiSolidLock />
        )}{" "}
        <span>{label}</span>
      </label>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  /* border: 1px solid black; */
  position: relative;

  .form__label {
    position: absolute;
    bottom: 0.5rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    letter-spacing: var(--letter-spacing);
    text-transform: capitalize;
    color: var(--primary-500);
    transition: 0.6s;
  }
  .form__input {
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
    background: transparent;
    border: none;
    padding: 0.5rem 1rem;
    border-bottom: 1px solid var(--primary-500);
    outline: none;
  }

  .form__input:focus ~ .form__label {
    bottom: 1.75rem;
    span {
      display: none;
    }
  }
  .form__input:valid ~ .form__label {
    bottom: 1.75rem;
    span {
      display: none;
    }
  }
`;

export default FormRow;
