import { useEffect, useState } from "react";


const Home = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log('No. of render', count )
        return()=>{
            console.log('component will unmount');
        }
      });
  return (
    <div className="home">
      <h2>Home Screen</h2>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <h3>{count}</h3>
    </div>
  );
}
 
export default Home;