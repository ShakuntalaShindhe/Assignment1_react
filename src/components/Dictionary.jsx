import React, { useEffect, useState } from 'react';
import './Dictionary.css';

const Dictionary = () => {
  const [word, setWord] = useState('');
  const [data, setData] = useState(null);

  useEffect(() => {
    if (word) {
      const fetchData = async () => {
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
        const result = await response.json();
        setData(result[0]);
      };

      fetchData();
    }
  }, [word]);

  return (
    <div className='main'>
    <h2 className='heading'>Dictionary word meaning</h2>
    <div className="dictionary">
      <input type="text" value={word} onChange={(e) => setWord(e.target.value)} placeholder="Enter a word..." />
      {data ? (
        <div className="result">
          {data.meanings.map((words, index) => (
            <div key={index}>
               {/* <audio src={words.audio} controls /> */}
              {words.definitions.map((def, i) => (
                <div>
                <p key={i}>{def.definition}</p>
                <p>{def.example}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      ) : (
        <p>Please enter a word to search</p>
      )}
    </div>
    </div>
  );
};

export default Dictionary;
