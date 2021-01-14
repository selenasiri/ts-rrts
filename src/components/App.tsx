import React from 'react'

interface AppProps {
  color: string;
}

// const App = (props: AppProps) => {
  const App: React.FC<AppProps> = (props) => {
  return (
    <div>
      {props.color}
    </div>
  )
}

export default App
