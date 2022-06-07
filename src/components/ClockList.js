import Clock from "./Clock";

 function ClockList({ quentities }) {
    return (
 
            <div>
                {quentities.map((key) => (
                    <Clock key={key} />
                ))}
            </div>
     
    );
}
export default ClockList;