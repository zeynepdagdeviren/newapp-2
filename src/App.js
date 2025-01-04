import { useEffect, useState } from "react";

function App() {
  const [paragrafGoster, paragrafIslem] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      paragrafGoster(false);
    }, 2000);
  });

  return <>{paragrafGoster && <p id="p1">App</p>}</>;
}

export default App;
