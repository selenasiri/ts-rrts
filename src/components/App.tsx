import React from 'react'

interface AppProps {
  color: string;
}

// const App = (props: AppProps) => {
  const App: React.FC<AppProps> = (props: AppProps): JSX.Element => { // JSX.Element is a return type annotation
  return (
    <div>
      {props.color}
    </div>
  )
}

export default App
