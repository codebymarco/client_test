// components/Console.jsx
import { useParams } from "react-router-dom";

const Console = () => {
  const { userid } = useParams();

  return (
    <div>
      <h1>Console</h1>
      <p>User ID: {userid}</p>
    </div>
  );
};

export default Console;
