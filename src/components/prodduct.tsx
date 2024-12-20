export default function products(){
    const data=[100,200,300,400];
    return <div>
        {
            data.map((x)=>(<li>{x}</li>))
        }
    </div>;
}