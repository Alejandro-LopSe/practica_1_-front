import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import {AirportData} from "../../types.ts"
import Airport from "../../components/Airport.tsx"
const key = Deno.env.get("api_key")

export const handler: Handlers<{a:AirportData[],name: string}> = {
    GET: async (_req: Request, ctx: FreshContext<unknown, {a:AirportData[],name: string}>) => {
        const url = new URL(_req.url)
        const name = url.searchParams.get("name")
        console.log(name);
        if(!name){
            return ctx.render({a:[],name: ""});
        }
        const data = await fetch(`https://api.api-ninjas.com/v1/airports?name=${name}`,{
         method: 'GET',
         headers: {
            'Content-Type': 'application/json',
            'X-Api-Key': `${key}`
         }   
        })
            
        const response: AirportData[] = await data.json()
        return ctx.render({a:response,name: name});
      },
}


export default function Home(props: PageProps<{a:AirportData[],name: string}>) {
    console.log(props.data.a);
    
    return (
      <Airport data={props.data.a} name={props.data.name}/>
    );
  }
  