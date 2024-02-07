import axios, { Axios } from 'axios';
import { FormEvent, useState } from 'react';

interface Person {
  fullName: string;
  age: string;
  gender: 'male' | 'female' | '';
}

const Form = () => {
  const [person, setPerson] = useState<Person>({
    fullName: '',
    age: '',
    gender: '',
  });
  function onSubmitHandler(e: FormEvent) {
    e.preventDefault();
    console.log(person);
  }

  return (
    <>
      <form onSubmit={onSubmitHandler}>
        <div>
          <label htmlFor="fullName">FullName: </label>
          <input
            type="text"
            name="fullName"
            id="fullName"
            value={person.fullName}
            onChange={(e) => {
              setPerson({ ...person, fullName: e.target.value });
              e.stopPropagation;
            }}
          />
        </div>
        <div>
          <label htmlFor="age">Age: </label>
          <input
            type="text"
            name="age"
            id="age"
            value={person.age}
            onChange={(e) => {
              setPerson({ ...person, age: e.target.value });
              e.stopPropagation;
            }}
          />
        </div>
        <div>
          <input
            type="radio"
            name="gender"
            id="male"
            value="male"
            onChange={(e) => {
              setPerson({
                ...person,
                gender: e.target.value as Person['gender'],
              });
              e.stopPropagation;
            }}
          />
          <label htmlFor="male">Male</label>
          <input type="radio" name="gender" id="female" value="female" />
          <label htmlFor="female">Female</label>
        </div>
        <div>
          <input type="checkbox" name="hobbies1" id="hobbies1" value="Dance" />
          <label htmlFor="hobbies1">Dance</label>
          <input type="checkbox" name="hobbies2" id="hobbies2" value="Novels" />
          <label htmlFor="hobbies2">Novels</label>
          <input type="checkbox" name="hobbies3" id="hobbies3" value="Music" />
          <label htmlFor="hobbies3">Music</label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Form;
