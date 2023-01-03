import styled from "./UserForm.module.css";

type Props = {
  values: {
    header: string;
    btnText: string;
  };
};

export const UserForm = ({ values }: Props) => {
  return (
    <form className={styled.userForm}>
      <h2>{values.header}</h2>
      <div>
        <label htmlFor="userName">Username</label>
        <input type="text" name="userName" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" />
      </div>
      <div>
        <button type="submit">{values.btnText}</button>
      </div>
    </form>
  );
};
