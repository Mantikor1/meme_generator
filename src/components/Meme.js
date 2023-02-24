import React from "react"

export default function Meme(){

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
            <div className="meme">
                <img className="meme--image" src={meme.randomImage} alt="" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}
