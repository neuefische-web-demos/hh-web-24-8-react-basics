export default function App() {
  return (
    <div>
      <Button />
      <Button />
      <Button />
    </div>
  );
}

function Button() {
  const buttonText = "click with React";

  return (
    <button
      className=""
      type="button"
      onClick={() => console.log("Hello React World")}
    >
      {buttonText}
    </button>
  );
}
