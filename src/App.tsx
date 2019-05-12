import React, { useState } from "react";
import { getRaceByName, getProficiencyByIndex } from "./models/Race";
import { RACES } from "./models/Races";

function App() {
  const [race, setRace] = useState(getRaceByName("Dwarf"));
  function changeRace(event: React.FormEvent<HTMLOptionElement>) {
    console.log(event);
  }
  return (
    <div className="App">
      <select>
        {RACES.map(race => (
          <option onChange={changeRace} key={race.name}>
            {race.name}
          </option>
        ))}
      </select>
      {race && (
        <>
          {Object.keys(race)
            .filter(key => typeof race[key] === "string")
            .map(key => (
              <div key={key}>
                {key}: {race[key]}
              </div>
            ))}
          <div>Proficiencies:</div>
          {race.starting_proficiencies.map(index => (
            <div>{getProficiencyByIndex(index).name}</div>
          ))}
          <div>Languages:</div>
          {race.languages.map(language => (
            <div>{language}</div>
          ))}
        </>
      )}
    </div>
  );
}

export default App;
