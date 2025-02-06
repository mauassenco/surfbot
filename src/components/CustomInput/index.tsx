import { Field, ErrorMessage } from 'formik';
import type { InputItemProps } from './types';

// Styles
import * as Styles from './styles';

const CustomInput = ({ name, type, label, placeholder, required }: InputItemProps) => {
  return (
    <Styles.InputContainer>
      <label htmlFor={name}>{label}</label>
      <Field type={type} name={name} id={name} placeholder={placeholder} required={required} />
      <ErrorMessage name={name} component={Styles.ErrorStyled} />
    </Styles.InputContainer>
  );
};

export default CustomInput;
