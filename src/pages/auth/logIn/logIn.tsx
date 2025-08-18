import type { FC } from "react";
import clsx from "clsx";
import styles from "./logIn.module.scss";
import { Button } from "@/shared/ui/button";
import { FormWrapper} from '@/shared/ui/form';
import { InputField} from '@/shared/ui/input';

export const LogIn: FC = () => {
  return (
    <main className={clsx(styles.fullMinHeight, styles.columnDirection)}>
      <div className={clsx(styles.gapping, styles.rowDirection, styles.itemsCenter)}>
        <div className={styles.circle}></div>
        <h2>Wallet App</h2>
      </div>

      <div className={clsx(styles.formComponent, styles.columnDirection, styles.itemsCenter)}>

        <div>
          <h1 className={styles.heading}>Welcome Back</h1>
          <h2 className={styles.subHeading}>Choose a login method</h2>
        </div>


        <FormWrapper>
          <div className={styles.signButtons}>
            <Button variant={"primary"} size={"small"} style={{color: "#000000", }}>Sign In</Button>
            <Button variant={"primary"} size={"small"} style={{background: "none", fontWeight: "500"}}>Sign Up</Button>
          </div>

          <InputField placeHolder={"E-mail"} type={"email"}></InputField>
          <InputField placeHolder={"Password"} type={"password"}></InputField>
          <Button variant={"sign"} size={"large"}>Log In</Button>
          <a className={styles.subHeading} href={"http://localhost:3000"}>Forgot your password?</a>
        </FormWrapper>
      </div>
    </main>
  )
};