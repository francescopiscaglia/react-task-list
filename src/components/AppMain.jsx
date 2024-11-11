// import db
import dataBase from "../db/db";


export default function AppMain() {

    // Stampa nel main una variabile con scritto welcome to my react app
    // const body = "Welcome to my react app";

    // task filter
    const currentTask = dataBase.filter(singleTask => singleTask.state !== "completed");
    const completedTask = dataBase.filter(singleTask => singleTask.state === "completed");


    return (
        <main>
            {/* <p>{body}</p> */}

            {/* // bonus */}
            <section className="current-task">
                <h3>
                    Current task ({currentTask.length})
                </h3>

                <div>
                    <ul>
                        {currentTask.map(data => {
                            return (
                                <li>
                                    <div className="task-header">
                                        <div className="title">
                                            <h5>{data.title}</h5>
                                        </div>
                                        <div className="state">
                                            <h5>{data.state}</h5>
                                        </div>
                                    </div>

                                    <div className="task-body">
                                        <p>Prioity: {data.priority}</p>
                                        <p>Estimate Time: {data.estimatedTime}</p>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </section>

            <hr />

            <section className="completed-task">
                <h3>
                    Completed task ({completedTask.length})
                </h3>

                <div>
                    <ul>
                        {completedTask.map(data => {
                            return (
                                <li>
                                    <div className="task-header">
                                        <div className="title">
                                            <h5>{data.title}</h5>
                                        </div>
                                        <div className="state">
                                            <h5>{data.state}</h5>
                                        </div>
                                    </div>

                                    <div className="task-body">
                                        <p>Prioity: {data.priority}</p>
                                        <p>Estimate Time: {data.estimatedTime}</p>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </section>
        </main>
    );
};