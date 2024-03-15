import Link from "next/link";

export default function Card({id,title, genre}){
    return(
        <div>
            <h1>{title}</h1>
            <p>{genre}</p>
            <Link href={ "/games/"+ id}>Click here for the game</Link>
        </div>
    )
}