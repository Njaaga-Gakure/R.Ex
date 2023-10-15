import styled from "styled-components";
import { FormRowAlt, Spinner } from "../../components/";
import { FaUserAlt } from "react-icons/fa";
import { SiMinutemailer } from "react-icons/si";
import { useUserContext } from "../../contexts/UserProvider";
import { useState } from "react";

const Profile = () => {
  const { user, updateUser, isLoading } = useUserContext();
  const [profile, setProfile] = useState({
    name: user?.name || "",
    email: user?.email || "",
    lastName: user?.lastName || "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevState) => ({ ...prevState, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, lastName } = profile;
    if (!name || !email || !lastName) return;
    updateUser({ name, email, lastName });
  };
  return (
    <Wrapper>
      <form onSubmit={handleSubmit} className="profile__form">
        <FormRowAlt
          labelName="name"
          icon={<FaUserAlt />}
          name="name"
          type="text"
          value={profile.name}
          handleChange={handleChange}
        />
        <FormRowAlt
          labelName="email"
          icon={<SiMinutemailer />}
          name="email"
          type="text"
          value={profile.email}
          handleChange={handleChange}
        />
        <FormRowAlt
          labelName="last name"
          icon={<FaUserAlt />}
          name="lastName"
          type="text"
          value={profile.lastName}
          handleChange={handleChange}
        />
        <button className="btn" disabled={isLoading}>
          {isLoading ? <Spinner /> : "update"}
        </button>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: var(--white);
  padding: 1rem;
  min-height: 75vh;
  .profile__form {
    box-shadow: var(--shadow-2);
    padding: 3rem;
    border-radius: 10px;
    display: grid;
    gap: 1rem;
    margin-top: 5rem;
    z-index: -1;
  }
  .btn {
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: end;
  }
  @media (min-width: 800px) {
    .profile__form {
      margin-top: 0;
      grid-template-columns: 1fr 1fr;
    }
  }
`;
export default Profile;
