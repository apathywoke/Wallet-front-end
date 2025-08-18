import type { FC } from "react";
import styles from "./logIn.module.scss";
import { Button } from "@/shared/ui/button";
import { FormWrapper} from '@/shared/ui/form';
import { InputField} from '@/shared/ui/input';

export const LogIn: FC = () => {
  return (
    <main className={styles.mainClass}>
    <FormWrapper>
      <InputField placeHolder={"WriteSmth"} type={"password"}></InputField>
      <Button variant={"sign"} size={"large"}>Sign In</Button>
    </FormWrapper>
    </main>
  )
};