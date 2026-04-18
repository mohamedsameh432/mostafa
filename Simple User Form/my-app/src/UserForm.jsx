import { useState } from 'react';

function UserForm({ addUser }) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!name.trim()) {
      newErrors.name = 'Name is required';
    }
    const ageNum = parseInt(age);
    if (isNaN(ageNum) || ageNum <= 18) {
      newErrors.age = 'Age must be a number greater than 18';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      addUser({ name: name.trim(), age: ageNum });
      setName('');
      setAge('');
      setErrors({});
    }
  };

  const ageNum = parseInt(age);

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        {errors.name && <p style={{color: 'red'}}>{errors.name}</p>}
      </div>
      <div>
        <label>
          Age:
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </label>
        {errors.age && <p style={{color: 'red'}}>{errors.age}</p>}
      </div>
      <button type="submit">Add User</button>
    </form>
  );
}

export default UserForm;

