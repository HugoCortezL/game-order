import {Container, GameSetup, TutorialButton, AboutGameContainer, RestartButton} from './Styles.jsx'

import {useState, useEffect} from 'react'

import NumberCard from './components/NumberCard'
import Map from './components/Map'

function findZeroOnMatrix(matrix){
  var arr = []
  for (var row = 0; row < matrix.length; row++){
    for(var i  = 0 ; i < matrix[row].length; i++){
      if (matrix[row][i] == 0){
        arr = [row, i]
        break;
      }
    }
    if(arr.length > 0){
      break;
    }
  }
  return arr;
}

function array2dToArray1d(matrix){ // Validado
  var arr = []
  for(var row of matrix){
    for(var i of row){
      arr.push(i)
    }
  }
  return arr
}


function App() {
  const [quantityMoves, setQuantityMoves] = useState(0)
  const [numbers, setNumbers] = useState([['1', '2', '3'], ['4', '5', '6'], ['7', '8', '0']])
  const [restart, setRestart] = useState(false)
  const [move, setMove] = useState('')
  const [restartMove, setRestartMove] = useState(false)

  function setupZeroPosition(){
    for (var row = 0; row < numbers.length; row++){
      for(var i  = 0 ; i < numbers[row].length; i++){
        if (numbers[row][i] === '0'){
          return [row, i]
        }
      }
    }
  } 

  function shuffleNumbers() {
    var arr = array2dToArray1d(numbers)
    for (var i = 0; i < arr.length; i++){
      var index = Math.floor(Math.random() * (8 - i + 1)) + i;
      var temp = arr[i]
      arr[i] = arr[index]
      arr[index] = temp
    }
    let arrayToMatrix = [
      [arr[0], arr[1], arr[2]],
      [arr[3], arr[4], arr[5]],
      [arr[6], arr[7], arr[8]]
    ]
    setNumbers(arrayToMatrix)
  }

  function moveNumbers(){
    var zeroPosition = setupZeroPosition()
    var zeroPositionRow = zeroPosition[0]
    var zeroPositionColumn = zeroPosition[1]
    var arr = numbers
    switch(move){
      case 'w':
        if(zeroPositionRow == 0 || zeroPositionRow == 1){
          arr[zeroPositionRow][zeroPositionColumn] = arr[zeroPositionRow + 1][zeroPositionColumn]
          arr[zeroPositionRow + 1][zeroPositionColumn] = '0'
          setQuantityMoves(() => quantityMoves + 1)
        }
        break;
      case 's':
        if(zeroPositionRow == 1 || zeroPositionRow == 2){
          arr[zeroPositionRow][zeroPositionColumn] = arr[zeroPositionRow - 1][zeroPositionColumn]
          arr[zeroPositionRow - 1][zeroPositionColumn] = '0'
          setQuantityMoves(() => quantityMoves + 1)
        }
        break
      case 'd':
        if(zeroPositionColumn == 1 || zeroPositionColumn == 2){
          arr[zeroPositionRow][zeroPositionColumn] = arr[zeroPositionRow][zeroPositionColumn - 1]
          arr[zeroPositionRow][zeroPositionColumn - 1] = '0'
          setQuantityMoves(() => quantityMoves + 1)
        }
        break
      case 'a':
        if(zeroPositionColumn == 0 || zeroPositionColumn == 1){
          arr[zeroPositionRow][zeroPositionColumn] = arr[zeroPositionRow][zeroPositionColumn + 1]
          arr[zeroPositionRow][zeroPositionColumn + 1] = '0'
          setQuantityMoves(() => quantityMoves + 1)
        }
        break
      }
    setNumbers(arr)
  }

  

  useEffect(() => {
    console.log(move)
    window.addEventListener('keypress', e => {
      setMove(e.key)
    });
    moveNumbers()
    setRestartMove(true)
  }, [move]);

  useEffect(() => {
    shuffleNumbers(numbers)
  }, [restart])

  useEffect(() => {
    setMove('')
  }, [restartMove])


  return (
    <Container>
      <h1>Order</h1>
      <GameSetup>
        <TutorialButton>
          Tutorial
        </TutorialButton>
        <Map numbers={array2dToArray1d(numbers)}/>
        <AboutGameContainer>
          <p>
            Moves: {quantityMoves}
          </p>
          <RestartButton onClick={() => setRestart(!restart)}>
            Restart
          </RestartButton>
        </AboutGameContainer>
      </GameSetup>
    </Container>
  )
}

export default App
