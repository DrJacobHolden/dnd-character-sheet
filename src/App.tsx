import React, { useState } from "react";
import { getRaceByName, getProficiencyByIndex } from "./models/Race";
import { RACES } from "./models/Races";

function App() {
  const [race, setRace] = useState(getRaceByName("Dwarf"));
  function changeRace() {
    const select = document.getElementById("race-select");
    if (select) {
      // @ts-ignore
      setRace(getRaceByName(select.value));
    }
  }
  return (
    <div className="App">
      <select id="race-select" onChange={changeRace}>
        {RACES.map(race => (
          <option key={race.name} value={race.name}>
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
