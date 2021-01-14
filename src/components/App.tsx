import React from 'react'

interface AppProps {
  color: string;
}

const App : React.FC<AppProps> = (props) => { 
  const [counter, setCounter] = React.useState<number>(0)

  const onIncrement = (): void => {
    setCounter((prevCounter)=> prevCounter + 1)
  }

  const onDecrement = (): void => {
    setCounter((prevCounter)=> prevCounter - 1)
  }

    return (
      <div>
        <button onClick={onIncrement}>Increment</button>
        <button onClick={onDecrement}>Decrement</button>
        {counter}
      </div>
  )
}

export default App


