import { FunctionComponent } from "preact";
import {Recipe, RecipeData} from "../types.ts"

const Recipenew: FunctionComponent<{data: RecipeData[],title: string}> = ({data, title} ) => {
    const format: Recipe[]= data.map((recipe: RecipeData)=>{
        const ingredientes_arr = recipe.ingredients.split(`|`)

        const instruciones_arr = recipe.instructions.split(".")
        const newRec: Recipe= {
            title: recipe.title,
            ingredients: ingredientes_arr,
            servings: recipe.servings,
            instructions: instruciones_arr
        }

        
        return newRec
    })
    
    return(
        <div class="Recipe">
            <form action="/recipes" method="GET">
                <input type="text" name={"title"} placeholder="Nombre del aeropuerto" value={title}/>
                <button type="submit">Send</button>
            </form>
            <ul>
               {format && format.map((e)=>{
                return(
                        < div class="br">
                        <li class="receta">
                        <h1>{e.title} Info</h1>
                        <p>Ingredietes: 
                            <ul class="componentereceta">{e.ingredients.map((ing: string)=>{
                            return (
                                <li >    
                                    {ing}
                                </li>
                            )
                            })}
                            </ul>
                        </p>
                        <p>Acompañamiento: <ul class="componentereceta"><li>{e.servings}</li></ul></p>
                        <p>Instrucciones: 
                            <ul class="componentereceta">
                                {e.instructions.map((ins: string)=>{
                                return (
                                    <li>    
                                        {ins}
                                    </li>
                                )
                                })}
                        </ul>
                        </p>

                        </li>
                        </div>
                        )
               })} 
            </ul>
            
        </div>
    )
}
export default Recipenew