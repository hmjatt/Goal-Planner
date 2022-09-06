function GoalItem( {goal} ) {
    return (
        <div className="goal">
            <div>{new Date(goal.createdAt).toLocaleString("en-CA")}</div>
            <h2>{goal.text}</h2>
        </div>
    );
}

export default GoalItem;
