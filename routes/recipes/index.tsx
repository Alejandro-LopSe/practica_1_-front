import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";

import Recipenew from "../../components/Recipes.tsx";
import { Recipe, RecipeData } from "../../types.ts";
const key = Deno.env.get("api_key")

export const handler: Handlers<{data: RecipeData[],title: string}> = {
    GET: async (_req: Request, ctx: FreshContext<unknown,{data: RecipeData[],title: string}>) => {
        const url = new URL(_req.url)
        const title = url.searchParams.get("title")
        console.log(title);
        if(!title){
            return ctx.render({data: [], title: title || ""});
        }
        const data = await fetch(`https://api.api-ninjas.com/v1/recipe?query=${title}`,{
         method: 'GET',
         headers: {
            'Content-Type': 'application/json',
            'X-Api-Key': `${key}`
         }   
        })
            
        const response: RecipeData[] = await data.json()
        return ctx.render({data: response, title: title});
      },
}


export default function Home(props: PageProps<{data: RecipeData[],title: string}>) {
    return (
      <Recipenew data={props.data.data} title={ props.data.title}/>
    );
  }
  