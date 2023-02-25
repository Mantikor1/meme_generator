import React from "react"
import exportAsImage from "../exportAsImage"

export default function Meme(){

    const exportRef = React.useRef()

    const [meme, setMeme] = React.useState(
        {
            topText: "",
            bottomText: "",
            randomImage: "http://i.imgflip.com/1bij.jpg"
        }
    )

    const [allMemes, setAllMemes] = React.useState([])

    React.useEffect(function(){
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    },[])

    console.log(allMemes)

    function getNewImage() {
        const random = Math.floor(Math.random()*100)
        setMeme(prevUrl => ({
            ...prevUrl,
            randomImage: allMemes[random].url
        }))
    }

    function handleEvents(event){
        const{name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    return(
        <main>
            <div className="form">
                <input 
                    className="form_inputs" 
                    type="text"
                    name="topText"
                    onChange={handleEvents}
                />
                <input 
                    className="form_inputs" 
                    type="text"
                    name="bottomText"
                    onChange={handleEvents}
                />
                <button 
                    className="form_button"
                    onClick={getNewImage}
                    >
                    Get a new meme image
                </button>
            </div>
            <div className="meme--container">
                <div className="meme--left"></div>
                <div ref={exportRef} className="meme">
                    <img className="meme--image" src={meme.randomImage} alt=""/>
                    <h2 className="meme--text top">{meme.topText}</h2>
                    <h2 className="meme--text bottom">{meme.bottomText}</h2>
                </div>
                <div className="meme--right"></div>
            </div>
            <div className="download">
                <button className="download--button" onClick={() => exportAsImage(exportRef.current, "meme")}>Download as PNG</button>
            </div>
        </main>
    )
}
