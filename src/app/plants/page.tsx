'use client'
import { useEffect, useState } from "react"
import Image from 'next/image'
import Paw from '../../../public/paw.svg'
import { useRouter, useSearchParams } from "next/navigation"
import PlantDetails from "./components/PlantDetails"
import plant from '../../../public/plant.png'
export interface IPlantDetails {
    "id": number,
    "name": string,
    "category": string,
    "price": number,
    "size": string,
    "water": string,
    "light": string,
    "fertilizer": string,
    "bio": string,
    "image": string
}
const Plants = () => {
    const [plantData, setPlantData] = useState<IPlantDetails[] | []>([])
    const path = useSearchParams().get('id')
    const router = useRouter()
    useEffect(() => {
        const fetchCall = async () => {
            let plantPromiseData = await fetch('https://lza4vi7uuvokxmbo5kmt4ou7i40nzhbg.lambda-url.us-east-1.on.aws/')
            // .then(/ res=>{
            // if(res.status===200) console.log(res.body?.json())})
            let data1 = await plantPromiseData.json()
            setPlantData(data1)
        }

        fetchCall()
    }, [])
    return <div className="bg-[red] w-[100%] flex flex-col p-6 gap-6">
        {plantData.length > 0 &&
            path !== null ?
            <PlantDetails details={plantData.filter(data=>data.id===Number(path))[0]}/>
            :
            plantData.map((plants: IPlantDetails) => {
                return <div key={plants.id} className="h-[400px] text-[#002140]  relative" onClick={() => router.push(`plants?id=${plants.id}`)}>
                    <Image src={plants.image} alt="plants" width={120} height={150} className="absolute right-0 top-[-50px] bottom-20"/>
                    <div className="border-[1px] w-[300px] bg-[#9CE5CB]">
                        <div className="flex gap-4"><p className="text-[14px] font-semibold">{plants.category}</p><Image src={Paw} alt="paw on card" width={17} height={17} /></div>
                        <p className="text-[32px] font-bold">{plants.name}</p>
                        <p className="text-[14px] font-semibold">{plants.price}</p></div>


                </div>
            })
        }
    </div>
}
export default Plants