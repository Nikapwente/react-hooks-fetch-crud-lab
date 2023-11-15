import React, {useEffect, useState} from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then((r) => r.json())
      .then((data) => setData(data));
  }, []);


function handleAddNewQuestion(newQuestion) {
  setData([...data,newQuestion]);
}

function updateDelete(newList) {
  setData(newList);
}

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm updateQuestions={handleAddNewQuestion} showQuestions={setPage}/> : <QuestionList questionData={data} deleted={updateDelete} showQuestions={setPage}/>}
    </main>
  );
}

export default App;
