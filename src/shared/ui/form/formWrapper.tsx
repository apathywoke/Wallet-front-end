// import type { FC, ReactNode, FormHTMLAttributes, } from 'react';
// import styles from "./formWrapper.scss"
//
// interface FormWrapperProps extends FormHTMLAttributes<HTMLFormElement> {
//   submitText: string;
//   children?: ReactNode;
// }
//
// export const FormWrapper: FC<FormWrapperProps> = ({
//   submitText,
//   children,
//   ...props
// }) => {
//   return (
//     <form className={styles.form} {...props}>
//       <div className={styles.fields}>{children}</div>
//       <button type='submit' className={submit}>
//         {submitText}
//       </button>
//     </form>
//   )
// }/