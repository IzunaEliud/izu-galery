import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import Pv from './../assets/img/photo_v.png'

export default function ImageSave() {
    const [name, setName] = useState(Pv.name)
    const [content, setContent] = useState(Pv)
    const [fileData,setfileData]=useState("")
    const [btnClasse, setBtnClasse] = useState("hidd")
    const [selectClasse, setSelectClasse] = useState("hidd")
    const [auteurClasse,setauteurClasse] = useState("hidd")
    const [selectValue,setselectValue]=useState("")
    const [auteur, setAuteur] = useState("")

    const fileChange=(e)=>{
        const data=e.target.files[0]
        setfileData(e.target.files[0])
        if(data.type==="image/png" || data.type==="image/jpeg"){
            var reader=new FileReader()
            reader.onload=()=>{
                setName(data.name)
                setContent(reader.result)
            }
            reader.readAsDataURL(data)
            setBtnClasse("btn-active")
            setSelectClasse("select-active")
            setauteurClasse("auteur")
        }
        else{
            setName("inserez image")
            setContent(Pv)
        }
    }
    const saveClick=e=>{
        const File = new FormData()
        

        axios.post(
            "http://localhost:5000/saveImg",
            {
                auteur:auteur,
                categorie:selectValue,
                nameImg:name
            }
        )
        .then(e=>{
            console.log(e.data)
        })
    }
    const handleSelect=e=>{
        setselectValue(e.target.value)
    }
    const handleAuteur=e=>{
        setAuteur(e.target.value)
    }


    return (
        <div id="addIm">
            <div id="res-cont">
                {name}
                <img src={content} alt="a ajouter"/>
            </div>
            <div id="save-cont">
                <input className={auteurClasse} placeholder="entrez le nom de l'auteur" type="text" value={auteur} onChange={handleAuteur}/><br/>
                <select className={selectClasse} value={selectValue} onChange={handleSelect}>
                    <option selected disabled>entrez votre categorie</option>
                    <option >nature</option>
                    <option >abstrait</option>
                    <option >technologie</option>
                    <option >blue</option>
                </select><br/>
                <input type="file" accept="image/png images/jpeg" onChange={fileChange}/>
            </div>
            <div>
                <button className={btnClasse} onClick={saveClick}>Save</button>
            </div>


        </div>
    )
}
