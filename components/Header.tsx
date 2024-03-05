import { FunctionComponent } from "preact";


const Header: FunctionComponent = () => {
    return(
        <div class="header">
            <a href="/">Home</a>
            <a href="/airport">Airport</a>
            <a href="/jokes">Jokes</a>
            <a href="/recipes">Recipe</a>
        </div>
    )
}
export default Header