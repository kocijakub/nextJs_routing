import FullCard from "@/Components/FullCard";

import {data} from "@/app/games/page";
export default function Page({ params }) {
    let finalData = data.filter(item =>{
        return item.id.toString() === params.id.toString()
    })
    return (
            <div>
                <p>My ID: {params.id}</p>
                <div>{finalData.map(item =>{
                    return <FullCard {...item}/>
                })}</div>
            </div>
        )

}