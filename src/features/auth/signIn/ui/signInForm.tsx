import { FormWrapper } from '@/shared/ui/form'
import { Button } from '@/shared/ui/button'
import { InputField } from '@/shared/ui/input';

export const SignInForm = () => {
  return (
    <FormWrapper>
      <InputField type={"string"} placeHolder={"Email"}/>
      <InputField type={"password"} placeHolder={"Password"}/>
      <Button variant="sign" type="submit" size={"large"}>Sign In</Button>
    </FormWrapper>
  )
}