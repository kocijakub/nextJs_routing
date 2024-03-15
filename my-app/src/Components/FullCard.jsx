import Link from "next/link";
export default function FullCard({title, genre, release_date, description}){
    return(
        <div>
            <h1>{title}</h1>
            <p>{genre}</p>
            <p>Release date: {release_date}</p>
            <p>{description}</p>
            <Link href="/games">Click here to go back</Link>
        </div>
    )
}