import Key from "./Key";

const Keyboard = () => {

  const set1 = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
  const set2 = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];
  const set3 = ['Z', 'X', 'C', 'V', 'B', 'N', 'M'];

  return (
    <div>
      <div className="flex flex-row justify-center items-center m-1">
        {set1.map((char, index) => 
          <Key key={index} letter={char} />
        )}
      </div>
      <div className="flex flex-row justify-center m-1">
        {set2.map((char, index) => 
          <Key key={index} letter={char} />
        )}
      </div>
      <div className="flex flex-row justify-center m-1">
        <Key big={true} letter="Enter" />
        {set3.map((char, index) => 
          <Key key={index} letter={char} />
        )}
        <Key big={true} letter="Backspace" />
      </div>

    </div>

  )
}

export default Keyboard