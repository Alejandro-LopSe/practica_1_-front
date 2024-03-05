import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";

import Joke from "../../components/Joke.tsx";
import { Jokes } from "../../types.ts";
const key = Deno.env.get("api_key")

export const handler: Handlers<Jokes[]> = {
    GET: async (_req: Request, ctx: FreshContext<unknown, Jokes[]>) => {
        const url = new URL(_req.url)
        const cuantity = url.searchParams.get("cuantity")
        console.log(cuantity);
        if(!cuantity){
            return ctx.render([]);
        }
        const data = await fetch(`https://api.api-ninjas.com/v1/jokes?limit=${cuantity}`,{
         method: 'GET',
         headers: {
            'Content-Type': 'application/json',
            'X-Api-Key': `${key}`
         }   
        })
            
        const response: Jokes[] = await data.json()
        return ctx.render(response);
      },
}


export default function Home(props: PageProps<Jokes[]>) {
    console.log(props.data);
    
    return (
      <Joke data={props.data}/>
    );
  }
  