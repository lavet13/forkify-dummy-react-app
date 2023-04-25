import Control from '../control/control.component';

const FormInput = ({ label, ...otherProps }) => {
  return (
    <Control>
      <label htmlFor={otherProps.id}>{label}</label>
      <input {...otherProps} />
    </Control>
  );
};

export default FormInput;
