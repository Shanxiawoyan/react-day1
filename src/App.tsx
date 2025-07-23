
import './App.css'
import Challenge1 from './challenges/Challenge1';
import Challenge2 from './challenges/Challenge2';
import Challenge3 from './challenges/Challenge3';
import ToDoList from './ToDoList/ToDoList';

export default function App() {
  return (
    <div>
      <h1>React Challenges</h1>

      <section>
        <h2>Challenge 1</h2>
        <Challenge1 />
      </section>

      <section>
        <h2>Challenge 2</h2>
        <Challenge2 />
      </section>

      <section>
        <h2>Challenge 3</h2>
        <Challenge3 />
      </section>

      <div>
      <h1>ToDoList</h1>
      <ToDoList />
    </div>

    </div>
  );
}


// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
