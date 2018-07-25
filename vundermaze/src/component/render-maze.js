import React from 'react';


export default function RenderMaze(props){
  var defaultMaze = [
    'x----------+---x',
    '|          |   |',
    '+-+ +------+ + |',
    '|            | |',
    '| +--+ +-----+ |',
    '|    | |       |',
    '+----+ +-------+',
    '|              |',
    'x--------------x'
  ]

  
  const player = {x:5, y:14};
  var newMaze = defaultMaze;

  function stringSplice(s) {
      return function splice() {
          var a = s.split('');
          Array.prototype.splice.apply(a, arguments);
          return a.join('');
      };
  }

  newMaze[player.x] = stringSplice(newMaze[7])(player.y, 1, 'O');

  return (
    <section className="maze-container">
      <pre>{newMaze[0]}</pre>
      <pre>{newMaze[1]}</pre>
      <pre>{newMaze[2]}</pre>
      <pre>{newMaze[3]}</pre>
      <pre>{newMaze[4]}</pre>
      <pre>{newMaze[5]}</pre>
      <pre>{newMaze[6]}</pre>
      <pre>{newMaze[7]}</pre>
      <pre>{newMaze[8]}</pre>
    </section>
  )


}