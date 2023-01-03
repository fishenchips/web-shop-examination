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
      <div>
        <label htmlFor="userName">Username</label>
        <input type="text" value="userName" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" value="password" />
      </div>
      <div>
        <button type="submit">{values.btnText}</button>
      </div>
    </form>
  );
};
