import React from 'react';


export default function RenderMaze(props){
  const defaultMaze = [
    'x---------+----x',
    '|         |    |',
    '+-+ +-----+ +  |',
    '|           |  |',
    '| +--+ +----+  |',
    '|    | |       |',
    '+----+ +-------+',
    '|              |',
    'x--------------x'
  ]

  
  return (
    // player = {x:}
    // var newMaze
    <section className="maze-container">
      <pre>{defaultMaze[0]}</pre>
      <pre>{defaultMaze[1]}</pre>
      <pre>{defaultMaze[2]}</pre>
      <pre>{defaultMaze[3]}</pre>
      <pre>{defaultMaze[4]}</pre>
      <pre>{defaultMaze[5]}</pre>
      <pre>{defaultMaze[6]}</pre>
      <pre>{defaultMaze[7]}</pre>
      <pre>{defaultMaze[8]}</pre>
    </section>
  )


}