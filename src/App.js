import {useActionState} from 'react'
import './App.css';

 async function increment(previousState, formData) {
  return previousState + formData + 1;
}
function App() {
  const [state, formAction] = useActionState(increment, 0);
  return (
    <form>
      {state}
      <button formAction={formAction}>Increment</button>
    </form>
  );
}

export default App;
