import React, {useState} from "react";
import cn from "classnames";
import styles from "./Form.module.sass";
// import Icon from "../Icon";

const Form = ({
  className,
  big,
  onSubmit,
  placeholder,
  value,
  setValue,
  type,
  name,
}) => {

    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
      alert();
    };

  return (
    <form
      className={cn(className, styles.form, {
        [styles.big]: big,
      })}
      action=""
      onSubmit={onSubmit}
    >
      <input
         className={styles.input}
         value={email}
         setValue={setEmail}
         onSubmit={() => handleSubmit()}
         placeholder="Enter your email"
         type="email"
         name="email"
        required
      />
      <button className={styles.btn}>
        Jion Waitlist
      </button>
    </form>
  );
};

export default Form;