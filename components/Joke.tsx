import { FunctionComponent } from "preact";
import {Jokes} from "../types.ts"


const Joke: FunctionComponent<{data: Jokes[]}> = ({data} ) => {
    let num=0
    return(
        <div class="joke">
            <form action="/jokes" method="GET">
                <input type="number" max={10}min={0} name={"cuantity"} value={data.length || 0}/>
                <button type="submit">Send</button>
            </form>
            <ul>
                
               {data && data.map((e)=>{
                num++
                return(
                    <li>
                    <h1>Joke: {num}</h1>
                    <p> {e.joke}</p>
                    </li>)
               })} 
            </ul>
            
        </div>
    )
}
export default Joke