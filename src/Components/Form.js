const Form = ({ children, submitter, isOpen }) => {
  
  const handleSubmit = (event) => {
    event.preventDefault();
    submitter()
  };

  return (
    <form className="form-section" onSubmit={handleSubmit}>
      {children}
      {isOpen && <button className="form-section__submit" type="submit">
        Отправить
      </button>}
    </form>
  );
};

export default Form;
