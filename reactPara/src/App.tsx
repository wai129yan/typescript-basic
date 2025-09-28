// import { useState } from 'react'
// import Logo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={Logo} className="logo react" alt="React logo" />
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

// export default function App() {
//   return (
//     <div className="bg-red-200">
//       <h1>Hello</h1>
//       <p>
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, voluptas.
//       </p>
//       {/* <button className="bg-blue-500 text-white px-2 rounded-md">Click me</button>
//       <button className="bg-green-500 text-white px-2 rounded-md">Submit</button>
//       <button className="bg-yellow-500 text-white px-2 rounded-md">Warning</button> */}
//       <Button text="Click me" color="bg-cyan-500" />
//       <Button text="Submit" color="bg-rose-500" />
//       <Button text="Warning" color="bg-gray-500" />
//       <hr />
//       <br />
//       <Button2 text="Click me" color="bg-gray-500" />
//       <Button2 text="Submit" color="bg-green-500" />
//       <Button2 text="Warning" color="bg-yellow-500" />
//     </div>
//   )
// }

// function Button(props: { text: string, color: string }) {
//   console.log(props.text);
//   return (
//     <button className={`${props.color} text-white px-2 rounded-md`}>{props.text}</button>
//   )
// }

// function Button2({ text, color }: { text: string, color: string }) {
//   console.log(text);
//   return (
//     // <button className={`${color} text-white px-2 rounded-md`}>{text}</button>
//     <button
//       className={`${color === "gray"
//         ? "bg-gray-500"
//         : color === "yellow"
//           ? "bg-yellow-200"
//           : color === "green"
//             ? "bg-green-300"
//             : "bg-red-300"} text-white px-2 rounded-md`}
//     >
//       {text}
//     </button>

//   )
// }


export default function App() {
  return (
    <div className="bg-red-200 p-4 space-y-4">
      <h1 className="text-2xl font-bold">Hello</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, voluptas.
      </p>

      {/* Button: uses full Tailwind color class */}
      <div className="space-x-2">
        <Button text="Click me" color="bg-cyan-500" />
        <Button text="Submit" color="bg-rose-500" />
        <Button text="Warning" color="bg-gray-500" />
      </div>

      <hr />

      {/* Button2: uses color name, which is mapped internally */}
      <div className="space-x-2">
        <Button2 text="Click me" color="gray" />
        <Button2 text="Submit" color="rose" />
        <Button2 text="Warning" color="yellow" />
      </div>
    </div>
  );
}

// Button: accepts full Tailwind class (e.g., "bg-cyan-500")
function Button(props: { text: string; color: string }) {
  return (
    <button className={`${props.color} text-white px-4 py-2 rounded-md`}>
      {props.text}
    </button>
  );
}

// Button2: accepts color name and maps it to Tailwind class
function Button2({ text, color }: { text: string; color: string }) {
  const bgColor =
    color === "gray"
      ? "bg-gray-500"
      : color === "yellow"
        ? "bg-yellow-400"
        : color === "green"
          ? "bg-green-500"
          : "bg-red-500"; // default if none match

  return (
    <button className={`${bgColor} text-white px-4 py-2 rounded-md`}>
      {text}
    </button>
  );
}
