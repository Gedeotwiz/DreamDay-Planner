import { Link } from "react-router-dom"
interface IProps{
    title:string,
    description:string,
    min_price:string,
    max_price:string,
    shipping:number
    id:number
}
const ServiceCard = ({title,description,min_price,max_price,shipping,id}:IProps) =>{
  return (
    <div className="flex flex-col gap-3 shadow-sm shadow-universal p-5">
        <div className="flex flex-col gap-4">
            <Link
  to={`/services/${id}`}
  className="text-universal hover:text-secondary font-bold text-2xl underline"
>
  {title}
</Link>
            <p><span className="font-bold">Price:</span> {min_price}Rwf - {max_price}Rwf</p>
            <p><span className="font-bold">Shiping:</span> {shipping}Rwf</p>
        </div>
        <p>{description}</p>
    </div>
  )
}
export default ServiceCard