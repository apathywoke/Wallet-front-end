import type { FC } from "react";
import clsx from "clsx";
import styles from "./logIn.module.scss";
import { SignInForm} from '@/features/auth/signIn';

export const LogIn: FC = () => {
  return (
    <main className={clsx(styles.fullMinHeight, styles.columnDirection)}>
      <div className={clsx(styles.gapping, styles.rowDirection, styles.itemsCenter)}>
        <div className={styles.circle}></div>
        <h1>Wallet App</h1>
      </div>

      <div className={clsx(styles.formComponent, styles.columnDirection, styles.itemsCenter)}>

        <div className={clsx(styles.columnDirection, styles.itemsCenter)}>
          <h1 className={styles.heading}>Welcome Back</h1>
          <p className={styles.subHeading}>Choose a login method</p>
        </div>

        <SignInForm />

        <a className={clsx(styles.subHeading)} href="">Forgot your password?</a>

      </div>

    </main>
  )
};