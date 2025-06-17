
function List({tasks}) {
  return (
    <>
    <h2>Mi lista de tareas</h2>
    <ol>
        {tasks.map((task, index) => (
             <li key={index}> {task} </li>

        ))}
    
    </ol>
    </>
  );
}

export default List