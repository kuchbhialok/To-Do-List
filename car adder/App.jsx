import React , {useState} from 'react';

function App(){

    const [cars , AddCar] = useState([])
    const [carYear, setYear ] = useState(new Date().getFullYear())
    const [carModel , setModel] = useState("");
    const [carMake , setMake]  = useState("")

    function HandleAddCar(){
        const newCar = {
            year:carYear,
            make:carMake,
            model:carModel 
        };
        AddCar(c => [...c,newCar])
        setYear(new Date().getFullYear());
        setMake("");
        setModel("");
    }
    function handleYear(event){
        setYear(event.target.value);
    }
    function handleMake(event){
        setMake(event.target.value);
    }
    function handleModel(event){
        setModel(event.target.value);
    }
    function handleRemove(index){
        AddCar(c=>c.filter((_,i)=> i  !== index));
    }
    return(
        <>
        <div id='container'>
        <h1>List of cars :</h1>
            <ul>
                {cars.map((car,index) => 
                <li key ={index} onClick={() =>handleRemove(index)}>
                    {car.year} {car.model} {car.make}
                </li>
                )}
            </ul>


            <input type="number" value={carYear}  placeholder='2024' onChange={handleYear}/>
            <input type="text" value={carMake}  placeholder='Enter make' onChange={handleMake}/>
            <input type="text "value={carModel}   placeholder='Enter model' onChange={handleModel}/>
        </div>
        <button onClick={HandleAddCar}>Add car</button>
        </>
        
    )
}
export default App