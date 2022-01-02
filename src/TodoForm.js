import React,{useState} from 'react'
var c = 0;
export default function TodoForm() {

const [input,setInput] = useState("")
const [value,setValue] = useState([])

const handleChange = event =>{
    event.preventDefault();
    setInput(event.target.value)
}

 const handleSubmit = e =>{
   
    e.preventDefault();
    setValue([...value,{id: c=c+1 ,text : input}])
    setInput("");
    console.log(input);
    console.log(value);
    
 } 

  const removeHandle = obj =>{
     let i = value.findIndex(ele => obj.id == ele.id )
     console.log(i);
    value.splice(i, 1);
    setValue([...value]);
    
  }
    return (
        <div>
            
            <form className='form-group' onSubmit={handleSubmit}>
            <div className='row'>
                <div className='col-lg-8 mt-5'>
                    <input className='form-control shadow mb-5 bg-white rounded' 
                    type = 'text'
                    value= {input}
                    name='text'
                    onChange={handleChange}
                    required
                    placeholder='Enter a Task...'/>
                </div>
                <div className='col-lg-4 mt-5 mb-5'>
                    <button className='form-control btn btn-primary'>Submit</button>
                </div>
                </div>
            </form>
        
            <div className='row'>
            <div className='col-md-12'>
                <ul className='list-group'>
                    {value.map((list)=> {
                    return(
                    <li className='list-group-item bg-light col-lg-10 ml-5'><input type='checkbox' className='mr-5'></input>{list.text} 
                    <span 
                    className='btn btn-danger btn-sm close' 
                    onClick={()=>removeHandle(list)}>&times;</span>
                    </li>
                    )
                    })}
                </ul>
            </div>
            </div>
            </div>
        
    )
}
