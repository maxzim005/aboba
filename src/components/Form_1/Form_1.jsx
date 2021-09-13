import s from "./Form_1.module.css"
import React, { useEffect, useState } from "react"
import axios from "axios"
// import TasksContainer from "../Form_1/Tasks/TasksContainer"

export default function Form1() {
  const [taskId, setTaskId] = useState("")

  const Send = async () => {
    const res = await axios.post(`https://gate-stub-for-frontend.herokuapp.com/addTaskByTag`, {
      tag: "ok",
      target: "telegram",
      method: "string",
      data: {},
    })

    setTaskId(res.data.task_id)
  }

  return (
    <div>
      <div className="s.content">
        Form_1 <br />
        <textarea /> <br />
        <textarea /> <br />
        <textarea /> <br />
        <button onClick={() => Send()}> Send </button>
      </div>
      {taskId !== '' ? 
      <div> 
        <span>{taskId}</span>
      </div> : null}
    </div>
  )
}

//const Form_1 = (props) => {
// class Form_1 extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = { task_id: 5 }
//   }
//   render() {
//     return (
//       <div className="s.content">
//         Form_1 <br />
//         <textarea /> <br />
//         <textarea /> <br />
//         <textarea /> <br />
//         <button
//           onClick={() => {
//             axios
//               .post(`https://gate-stub-for-frontend.herokuapp.com/addTaskByTag`, {
//                 tag: "ok",
//                 target: "telegram",
//                 method: "string",
//                 data: {},
//               })
//               .then((response) => {
//                 this.setState({ task_id: response.data.task_id })
//               })
//           }}
//         >
//           {" "}
//           Send{" "}
//         </button>
//         <span>{this.state.task_id}</span>
//       </div>
//     )
//   }
// }
