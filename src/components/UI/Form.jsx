 

export const Form = ({ children, ...props }) => {
  return (
    <form {...props} width="100%" noValidate>
      {children}
    </form>
  );
};
