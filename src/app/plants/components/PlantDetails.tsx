import { IPlantDetails } from "../page"

const PlantDetails=({...details})=>{
    const{name}=details.details
    const overViewData=[
        {
            header:'250',
            title:'light'
        },
        {
            header:'250',
            title:'light'
        },{
            header:'250',
            title:'light'
        },
    ]
    console.log(details)
    return <div>
       <p>header</p>
       <div>
        <p>Overview</p>
        <div>
{name}
        </div>
       </div>
    </div>
}
export default PlantDetails