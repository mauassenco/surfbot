// import { ErrorMessage, Field } from 'formik';

// // Styles
// import * as Styles from './styles';
// import type { CustomSelectProps } from './types';

// // const ufs = [
// //   'Acre',
// //   'Alagoas',
// //   'Amapá',
// //   'Amazonas',
// //   'Bahia',
// //   'Ceará',
// //   'Distrito Federal',
// //   'Espirito Santo',
// //   'Goiás',
// //   'Maranhão',
// //   'Mato Grosso',
// //   'Mato Grosso do Sul',
// //   'Minas Gerais',
// //   'Para',
// //   'Paraiba',
// //   'Pará',
// //   'Pernambuco',
// //   'Piau',
// //   'Rio de Janeiro',
// //   'Rio Grande do Norte',
// //   'Rio Grande do Sul',
// //   'Rondônia',
// //   'Roraima',
// //   'Santa Catarina',
// //   'São Paulo',
// //   'Sergipe',
// //   'Tocantins',
// // ];

// // const UfsSelect = () => {
// //   return (
// //     <Styles.SelectContainer>
// //       <label htmlFor="estado">Estado</label>
// //       <Field as="select" name="estado">
// //         <option value="">Selecione o Estado</option>
// //         {ufs.map((uf) => (
// //           <option key={uf} value={uf}>
// //             {uf}
// //           </option>
// //         ))}
// //       </Field>
// //       <ErrorMessage name="estado" component={Styles.ErrorStyled} />
// //     </Styles.SelectContainer>
// //   );
// // };

// const CustomSelect = ({ name, placeholder, options }: CustomSelectProps) => {
//   return (
//     <Styles.SelectContainer>
//       <label htmlFor={name}>{name}</label>
//       <Field as="select" name={name}>
//         <option value="">{placeholder}</option>
//         {options.map((item) => (
//           <option key={item.option} value={item.option}>
//             {item.option}
//           </option>
//         ))}
//       </Field>
//       <ErrorMessage name="estado" component={Styles.ErrorStyled} />
//     </Styles.SelectContainer>
//   );
// };
// export default CustomSelect;
import { Field, ErrorMessage } from 'formik';
import * as Styles from './styles';

interface SelectOption {
  value: string | number;
  label: string;
}

interface CustomSelectProps {
  name: string;
  placeholder?: string;
  options: SelectOption[];
}

const CustomSelect = ({ name, placeholder = 'Selecione', options }: CustomSelectProps) => {
  return (
    <Styles.SelectContainer>
      <label htmlFor={name}>{name}</label>
      <Field as="select" name={name}>
        <option value="" key="placeholder">
          {placeholder}
        </option>
        {options.map((item, index) => (
          <option key={`${item.value}_${index}`} value={item.value}>
            {item.label}
          </option>
        ))}
      </Field>
      <ErrorMessage name={name} component={Styles.ErrorStyled} />
    </Styles.SelectContainer>
  );
};

export default CustomSelect;
