import Key from "./Key";

interface KeyboardProps {
  currentRow: number
  makeGuess: Function,
  handleInputLetter: Function
  handleRemoveLetter: Function
}

const Keyboard: React.FC<KeyboardProps> = ({ currentRow, makeGuess, handleInputLetter, handleRemoveLetter }) => {

  const set1 = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
  const set2 = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];
  const set3 = ['Z', 'X', 'C', 'V', 'B', 'N', 'M'];

  return (
    <div className="w-screen">
      <div className="flex flex-row justify-center items-center m-1">
        {set1.map((char, index) => 
          <Key key={index} letter={char} currentRow={currentRow} makeGuess={makeGuess} handleInputLetter={handleInputLetter} handleRemoveLetter={handleRemoveLetter} />
        )}
      </div>
      <div className="flex flex-row justify-center m-1">
        {set2.map((char, index) => 
          <Key key={index} letter={char} currentRow={currentRow} makeGuess={makeGuess} handleInputLetter={handleInputLetter} handleRemoveLetter={handleRemoveLetter} />
        )}
      </div>
      <div className="flex flex-row justify-center m-1">
        <Key big={true} letter="Enter" currentRow={currentRow} makeGuess={makeGuess} handleInputLetter={handleInputLetter} handleRemoveLetter={handleRemoveLetter}/>
        {set3.map((char, index) => 
          <Key key={index} letter={char} currentRow={currentRow} makeGuess={makeGuess} handleInputLetter={handleInputLetter} handleRemoveLetter={handleRemoveLetter}/>
        )}
        <Key big={true} letter="Backspace" currentRow={currentRow} makeGuess={makeGuess} handleInputLetter={handleInputLetter} handleRemoveLetter={handleRemoveLetter}/>
      </div>

    </div>

  )
}

export default Keyboard