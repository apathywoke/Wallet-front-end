import type { FC } from "react";
import clsx from "clsx";

//styles
import styles from "./signUp.module.scss";
import { SignUpForm } from '@/features/auth/signUp';
import { Button } from '@/shared/ui/button'

export const SignUp: FC = () => {
  return (
    <main className={clsx(styles.fullMinHeight, styles.columnDirection)}>
      <div className={clsx(styles.gapping, styles.rowDirection, styles.itemsCenter)}>
        <div className={styles.circle}></div>
        <h1>Wallet App</h1>
      </div>

      <div className={clsx(styles.formComponent, styles.columnDirection, styles.itemsCenter)}>

        <div className={clsx(styles.columnDirection, styles.itemsCenter)}>
          <h1 className={styles.heading}>Welcome Back</h1>
          <h2 className={styles.subHeading}>Choose a login method</h2>
        </div>

        <div className={clsx(styles.signButtons)}>
          <Button variant={"secondSign"} size={"small"}>Sign In</Button>
          <Button variant={"sign"} size={"small"}>Sign Up</Button>
        </div>

        <SignUpForm />

        <a className={clsx(styles.subHeading)} href="">Forgot your password?</a>

      </div>
    </main>
  )
};