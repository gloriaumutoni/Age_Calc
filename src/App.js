import React, { useState } from 'react';
import { format, parse, differenceInYears, differenceInMonths, differenceInDays } from 'date-fns';
import './App.css';

function App() {
  const [birthdate, setBirthdate] = useState('');
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    const today = new Date();
    const parsedBirthdate = parse(birthdate, 'yyyy-MM-dd', new Date());
    const years = differenceInYears(today, parsedBirthdate);
    const months = differenceInMonths(today, parsedBirthdate) % 12;
    const days = differenceInDays(today, parsedBirthdate);

    setAge({ years, months, days });
  };

  return (
    <div className="App">
      <h1>Age Calculator</h1>
      <input
        type="date"
        value={birthdate}
        onChange={(e) => setBirthdate(e.target.value)}
      />
      <button onClick={calculateAge}>Calculate Age</button>
      {age && (
        <p>
          Your age is: {age.years} years, {age.months} months, and {age.days} days
        </p>
      )}
    </div>
  );
}

export default App;
