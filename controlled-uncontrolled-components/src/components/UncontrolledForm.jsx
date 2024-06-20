import { useRef } from 'react';

//NOTE - Formun verileri dış componentlerden ya da parent componentlerden erişilebilir olmadından,
//NOTE - değerlere erişebilmek için useRef kullsnmak gibi alternatif çzöümler denememiz gerekiyor.
//NOTE - Buna uncontrolled component denir.

const UncontrolledForm = () => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  const genderRadioRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(nameInputRef.current.value);
    console.log(ageInputRef.current.value);
    console.log(genderRadioRef.current.value);

    // const formData = new FormData(e.target);
    // const formName = formData.get('name');
    // const formNumber = formData.get('age');
    // const formRadio = formData.get('gender');
    // console.log(formName, formNumber, formRadio);
  };

  return (
    <form onSubmit={submitHandler}>
      <input name='name' type='text' placeholder='Name' ref={nameInputRef} />
      <input name='age' type='number' placeholder='Age' ref={ageInputRef} />
      <input type='radio' name='gender' value='female' ref={genderRadioRef} />
      <input type='radio' name='gender' value='male' ref={genderRadioRef} />
      <input type='submit' value={'submit'} />
    </form>
  );
};
export default UncontrolledForm;
