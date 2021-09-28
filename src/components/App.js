import '../styles/App.scss';
import { useState } from 'react';

function App() {
  const [numberOfErrors, setNumberOfErrors] = useState(0);
  const [userLetter, setUserLetter] = useState([]); //donde se almacena las letras de la usuaria (solo las que están bien)
  const [lastLetter, setLastLetter] = useState(''); //string para almacenar al última letra introducida por la jugadora
  const [word, setWord] = useState('katakroker'); //donde) se va a almacenar la palabra a adivinar

  const handlerLetter = (ev) => {
    const inputValue = ev.target.value;
    let regex = RegExp('^[a-zA-Z]$');
    console.log(regex);

    //console.log(inputValue.match(regex))
    if (regex === inputValue) {
      setLastLetter(inputValue); // no está entrando por aquí cuando pones una letra en el input
    } else {
      setLastLetter('');
    }

    // const inputValue = ev.target.value;
    // console.log(inputValue);
    //setLastLetter(inputValue);

    setUserLetter([...userLetter, inputValue]);
  };

  const handleIncreaseErrors = (ev) => {
    ev.preventDefault();
    let counter = numberOfErrors + 1;
    setNumberOfErrors(counter);
  };
  const renderSolutionLetter = () => {
    const wordLetter = word.split(''); //wordLetter es el array donde se guarda la palabra en letras

    return wordLetter.map((eachletter, index) => {
      //Buscamos si coincide la letra:
      const letterFound = userLetter.findIndex(
        (eachletterUser) => eachletter === eachletterUser
      );
      // si coincide (porque la posición es diferente a -1, pintas la letra)
      if (letterFound !== -1) {
        return (
          <li className='letter' key={index}>
            {eachletter}
          </li>
        );
      } else {
        return <li className='letter' key={index}></li>;
      }
    });
  };

  return (
    <div className='page'>
      <header>
        <h1 className='header__title'>Juego del ahorcado</h1>
      </header>
      <main className='main'>
        <section>
          <div className='solution'>
            <h2 className='title'>Solución:</h2>

            <ul className='letters'>{renderSolutionLetter()}</ul>
          </div>

          <div className='feedback'>
            <h2 className='title'>Letras falladas:</h2>
            <ul className='letters'>
              <li className='letter'>f</li>
              <li className='letter'>q</li>
              <li className='letter'>h</li>
              <li className='letter'>p</li>
              <li className='letter'>x</li>
            </ul>
          </div>
          <form className='form'>
            <label className='title' htmlFor='last-letter'>
              Escribe una letra:
            </label>
            <input
              autoComplete='off'
              className='form__input'
              maxLength='1'
              type='text'
              name='last-letter'
              id='last-letter'
              value={lastLetter}
              onChange={handlerLetter}
            />
          </form>
          <button onClick={handleIncreaseErrors}>Incrementar</button>
        </section>
        <section className={`dummy error-${numberOfErrors}`}>
          <span className='error-13 eye'></span>
          <span className='error-12 eye'></span>
          <span className='error-11 line'></span>
          <span className='error-10 line'></span>
          <span className='error-9 line'></span>
          <span className='error-8 line'></span>
          <span className='error-7 line'></span>
          <span className='error-6 head'></span>
          <span className='error-5 line'></span>
          <span className='error-4 line'></span>
          <span className='error-3 line'></span>
          <span className='error-2 line'></span>
          <span className='error-1 line'></span>
        </section>
      </main>
    </div>
  );
}
export default App;