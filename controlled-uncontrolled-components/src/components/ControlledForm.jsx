import { useEffect, useState } from 'react';

const ControlledForm = () => {
  const [error, setError] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log('controlled', name, age);
  };

  useEffect(() => {
    if (name.length < 1) {
      setError('Name cannot be empty!');
    }
  }, [name]);

  return (
    <form onSubmit={submitHandler}>
      {error && <p>{error}</p>}
      <input
        name='name'
        type='text'
        placeholder='Name'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        name='age'
        type='number'
        placeholder='Age'
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <input type='submit' value={'submit'} />
    </form>
  );
};
export default ControlledForm;
