import troll_face from "../images/Troll_Face.png"

export default function Navbar(){

    function clickHandler(){
        console.log("clicked")
    }

    return(
        <div className="navbar">
            <img className="navbar_logo" src={troll_face}  onMouseOver={clickHandler} alt="troll face"/>
            <h1 className="navbar_title">Meme Generator</h1>
        </div>
    )
}