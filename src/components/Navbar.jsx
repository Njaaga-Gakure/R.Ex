import { FaBars, FaUserTie } from "react-icons/fa";
import { BsSun, BsMoonStars } from "react-icons/bs";
import styled from "styled-components";
import { useUserContext } from "../contexts/UserProvider";
import { Link, useLocation } from "react-router-dom";
import { LiaTimesSolid } from "react-icons/lia";
import { FiLogOut } from "react-icons/fi";

const Navbar = () => {
  const location = useLocation();
  const { openSidebar, logout, isNavModalOpen, closeModal, toggleModal, user } =
    useUserContext();
  console.log(location.pathname);
  return (
    <Wrapper className="nav">
      <div className="nav__header">
        <button onClick={openSidebar} className="toggle__btn">
          <FaBars />
        </button>
        <h5 className="nav__link--active">
          dashboard /
          <span>
            {" "}
            {location.pathname === "/"
              ? "all entries"
              : location.pathname === "/add-entry"
              ? "add entry"
              : "profile"}
          </span>
        </h5>
      </div>
      <div className="nav__profile">
        <div className="toggle__dark ">
          <button className="dark__btn ">
            <BsSun />
          </button>
          <button className="light__btn btn--active">
            <BsMoonStars />
          </button>
        </div>
        <button onClick={toggleModal} className="profile">
          <FaUserTie />
        </button>
      </div>
      <div
        className={
          isNavModalOpen ? "nav__modal nav__modal--show" : "nav__modal"
        }
      >
        <div className="modal__header">
          <button onClick={closeModal} className="close__btn">
            <LiaTimesSolid />
          </button>
        </div>
        <h5 className="user__name">hello, {user.name.split(" ")[0]}</h5>
        <Link onClick={closeModal} className="modal__link" to="/profile">
          <FaUserTie />
          profile
        </Link>
        <button onClick={logout} className="logout__btn">
          <FiLogOut />
          logout
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  position: fixed;
  box-shadow: var(--shadow-1);
  display: flex;
  justify-content: space-between;
  background-color: var(--white);
  padding: 1rem;
  top: 0;
  width: 100%;
  /* z-index: 9999999; */
  .nav__header {
    display: flex;
    align-items: center;
  }
  .toggle__btn {
    background-color: transparent;
    border: none;
    svg {
      font-size: 1.5rem;
      color: var(--primary-500);
    }
  }
  .nav__link--active {
    display: none;
  }
  .toggle__dark {
    background-color: var(--primary-400);
    border-radius: 7px;
    display: flex;
  }
  .dark__btn,
  .light__btn {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: none;
    border: none;
    width: 30px;
    height: 30px;
  }
  .dark__btn {
    border-radius: 5px 0 0 5px;
  }
  .light__btn {
    border-radius: 0 5px 5px 0;
  }
  .btn--active {
    background-color: var(--primary-500);
    color: var(--white);
  }
  .nav__profile {
    display: flex;
    gap: 1rem;
    align-items: center;
  }
  .profile {
    background-color: transparent;
    border: 1px solid var(--primary-500);
    width: 45px;
    height: 45px;
    border-radius: 50%;
    transition: var(--transition);
    &:hover {
      background-color: var(--primary-500);
      svg {
        color: var(--white);
      }
    }
    svg {
      font-size: 1.5rem;
      color: var(--primary-500);
    }
  }
  .nav__modal {
    position: absolute;
    padding: 1rem;
    padding-left: 2rem;
    right: 1rem;
    bottom: -11rem;
    background-color: var(--white);
    box-shadow: var(--shadow-1);
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
    width: 200px;
    transform-origin: top;
    transition: var(--transition);
    transform: scaleY(0);
  }
  .nav__modal--show {
    transform: scaleY(1);
  }
  .modal__header {
    align-self: flex-end;
  }
  .close__btn {
    background: transparent;
    border: none;
    svg {
      font-size: 1.25rem;
      color: var(--primary-500);
    }
  }
  .user__name {
    text-transform: capitalize;
    letter-spacing: 1px;
    color: var(--primary-500);
    border-bottom: 1px solid var(--primary-500);
    padding-bottom: 0.25rem;
  }
  .modal__link {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    position: relative;
    text-transform: capitalize;
    letter-spacing: 1px;
    color: var(--primary-500);
    transition: var(--transition);
  }
  .modal__link:hover {
    padding-left: 0.5rem;
  }
  .logout__btn {
    position: relative;
    background-color: var(--primary-500);
    padding: 0.5rem 1rem;
    border-radius: 2px;
    box-shadow: var(--shadow-1);
    border-radius: 2px;
    border: none;
    display: flex;
    align-items: center;
    gap: 0.25rem;
    letter-spacing: 2px;
    color: var(--white);
    text-transform: capitalize;
  }
  .logout__btn:hover {
    background-color: var(--primary-800);
  }

  @media (min-width: 800px) {
    position: relative;
    box-shadow: none;
    .toggle__btn {
      display: none;
    }

    .nav__link--active {
      display: block;
      /* background-color: var(--primary-400); */
      /* border: 1px solid var(--primary-500); */
      border-radius: 5px;
      padding: 0.5rem;
      color: var(--primary-500);
      /* color: var(--white); */
      letter-spacing: 1px;
      text-transform: capitalize;
      font-weight: 400;
      span {
        color: var(--primary-300);
        font-size: 1rem;
      }
    }
  }
`;
export default Navbar;
