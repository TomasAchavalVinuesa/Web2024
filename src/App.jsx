import './App.css';

function App() {
    return (
        <div className="todo-container">
            <h1 className="title">LISTA DE TAREAS DE TOMAS</h1>
            
            <div className="todo-input">
                <input type="text" placeholder="Escribe la tarea" className="task-input" />
                <button className="add-button">ADD</button>
            </div>

            <ul className="task-list">
                <li className="task-item">
                    <input type="checkbox" id="task1" className="task-checkbox" />
                    <label htmlFor="task1" className="task-label">Resumir Conceptos de web</label>
                    <button className="delete-button">🗑</button>
                </li>
                <li className="task-item">
                    <input type="checkbox" id="task2" className="task-checkbox" />
                    <label htmlFor="task2" className="task-label">Realizar los prácticos</label>
                    <button className="delete-button">🗑</button>
                </li>
                <li className="task-item">
                    <input type="checkbox" id="task3" className="task-checkbox" />
                    <label htmlFor="task3" className="task-label">Enviar los proyectos</label>
                    <button className="delete-button">🗑</button>
                </li>
                <li className="task-item">
                    <input type="checkbox" id="task4" className="task-checkbox" />
                    <label htmlFor="task4" className="task-label">Preparar presentación del proyecto</label>
                    <button className="delete-button">🗑</button>
                </li>
            </ul>
        </div>
    );
}

export default App;
