import Student from "./Student.jsx";

function App() {
  return (
    <>
      <Student Name="Cartoon Network" age={30} isStudent={true} />
      <br />
      <Student Name="Pogo" age={38} isStudent={false} />
      <br />
      <Student Name="CN" age={40} isStudent={true} />
      <br />
      <Student />
    </>
  );
}

export default App;
