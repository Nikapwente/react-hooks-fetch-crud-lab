import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({questionData, showQuestions, deleted}) {

  
  function deleteEntry(event) {
    console.log(event.target.parentElement.firstChild.firstChild.nextSibling.textContent);
    const question = event.target.parentElement.firstChild.firstChild.nextSibling.textContent;
    const newList = questionData.filter((item)=>item.id!=event.target.parentElement.firstChild.firstChild.nextSibling.textContent)
    
   
      
      fetch(`http://localhost:4000/questions/${question}`, {
          method: 'DELETE',
          "Content-Type":"application/json",
          body: JSON.stringify({
            "correctIndex": 0
          })
        })
      .then(response => response.json())
      .then(function() {deleted(newList);
      })

      // deleted(newList);
      showQuestions("List");
  }

  
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questionData.map((item) => (<QuestionItem key={item.id} question={item} deleteElement={deleteEntry}/>))}</ul>
    </section>
  );
}

export default QuestionList;
