
const ClientStatus = () =>{
    const statusArray = [
        {number:"40+",text:"Clients"},
        {number:"10+",text:"Services"},
        {number:"02+",text:"Design & Development"},
        {number:"05",text:"Clients province"},
        {number:"01",text:"Awards"},
        {number:"01+",text:"Years"},
    ]
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-16 md:w-2/5">
            {statusArray.map((status,index)=>(
              <div key={index} className="flex flex-col gap-4">
                <h1 className="text-secondary font-extrabold hover:text-universal text-6xl">{status.number}</h1>
                <p>{status.text}</p>
            </div>
            ))}
            
        </div>
    )
}

export default ClientStatus