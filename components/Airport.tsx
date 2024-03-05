import { FunctionComponent } from "preact";
import {AirportData} from "../types.ts"

const Airport: FunctionComponent<{data: AirportData[],name: string}> = ({data, name} ) => {

    return(
        <div class="airport">
            <form action="/airport" method="GET">
                <input type="text" name={"name"} placeholder="Nombre del aeropuerto" value={name}/>
                <button type="submit">Send</button>
            </form>
            <ul>
               {data && data.map((e)=>{
                return(
                    <li>
                    <h1>{e.name} Data</h1>
                    <p>icao: {e.icao}</p>
                    <p>iata: {e.iata}</p>
                    <p>name: {e.name}</p>
                    <p>city: {e.city}</p>
                    <p>region: {e.region}</p>
                    <p>country: {e.country}</p>
                    <p>elevation_ft: {e.elevation_ft}</p>
                    <p>latitude: {e.latitude}</p>
                    <p>longitude: {e.longitude}</p>
                    <p>timezone: {e.timezone}</p>
                    </li>)
               })} 
            </ul>
            
        </div>
    )
}
export default Airport