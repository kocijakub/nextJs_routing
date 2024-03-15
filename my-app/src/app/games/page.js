import Card from "@/Components/Card";
import Link from "next/link";

export const data =[
    {
        "id": 1,
        "title": "Public what fly least",
        "genre": "Mystery",
        "release_date": "2018-09-13",
        "description": "Friend usually treat general smile. Doctor onto civil. From appear reason television probably. Give economy what different especially particular."
    },
    {
        "id": 2,
        "title": "Close court side far",
        "genre": "Action",
        "release_date": "2009-12-09",
        "description": "Kitchen party receive plan quickly choose three. Wear pay form former discuss. Agreement check half happy. Public market difficult enough."
    },
    {
        "id": 3,
        "title": "Question heart bad",
        "genre": "Drama",
        "release_date": "2011-04-06",
        "description": "It both task compare order tell really open. Fire appear movement drive child. Personal might office good month. Technology key beat. Artist between scientist piece."
    }
]
export default function Games(){

    return(
        <main>
            <h1>DASHBOARD</h1>
        <div className={"cards"}>{data.map(item =>{
            return <Card {...item}/>
        })}</div>
            <Link href={"/"}>Go Back</Link>
        </main>
    )
}