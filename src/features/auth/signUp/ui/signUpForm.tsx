import { FormWrapper } from '@/shared/ui/form'
import { Button } from '@/shared/ui/button'
import { InputField } from '@/shared/ui/input';

export const SignUpForm = () => {
  return (
    <FormWrapper>
      <InputField type={"string"} placeHolder={"Email"}/>
      <InputField type={"password"} placeHolder={"Password"}/>
      <InputField type={"password"} placeHolder={"Confirm Password"}/>
      <Button variant="sign" type="submit" size={"large"}>Sign Up</Button>
    </FormWrapper>
  )
}