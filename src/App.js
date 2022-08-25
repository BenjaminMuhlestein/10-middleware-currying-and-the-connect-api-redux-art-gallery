import { useState } from "react";
import input from "./Componets/Input";
import Display from "./Components/Display";

function App() {
  const [user, setUsername] = useState(null)

  const display =user ? <Display user ={user} /> : null
  return (
    <div>
   <Input setuser={setuser} />
  
    </div>
  );
}

export default App;
