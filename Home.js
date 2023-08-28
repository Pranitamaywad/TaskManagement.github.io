import {useState, useEffect} from "react";
import Tasklist from "./Tasklist";
import axios from "axios";
import Form from "./Form";

const staticTasks = [
    {
        id: 'e1',
        title:"Homerent",
        descrip:"You have to get it done"
    },
    {
        id: 'e2',
        title:"Grossery",
        descrip:"Every week grossery shopping"
    },
    {
        id: 'e3',
        title:"Electricitybill",
        descrip:"Its 15th you have to pay bill"
    },
    {
        id: 'e4',
        title:"Cleaning",
        descrip:"You have to clean your house"
    }
];
const Home = ()=>{

    useEffect(()=>{
          fetchdata();
        },[]);
   
    const fetchdata=()=>{
        axios.get('http://localhost:4000/api/user/').then(
          res=>
            {
              console.log(res);
              //setexpenses(res.data);
            })
          .catch(err=>console.log(err));
      };
    const [tasks, setTasks] = useState(staticTasks);

       axios.delete('http://localhost:4000/api/user/1').then(
        res=>
        {
            console.log(res);
        }).catch(err=>console.log(err))

    return(
        <>
            <Form setTasks={setTasks}/>
            <Tasklist tasks={tasks} setTasks={setTasks} />   
        </>
    )
}
export default Home;