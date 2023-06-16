import React, {useState, useEffect} from 'react'
import {useRef} from 'react'
import {useLocation} from 'react'

const NotePage = ({match}) => {

    const [note, setNote] = useState(null)
    let noteId = window.location.href.split('/').at(-1)

    useEffect(()=>{
        getNote()
    }, [])

    const getNote = async () => {
        // let response = await fetch('http://127.0.0.1:9000/api/notes/')
        let response = await fetch(`/api/notes/${noteId}/`)
        let data = await response.json()
        setNote(data)
        // console.log(data)
    }

    console.log(noteId)

    return (
            <div>
                <h1>Note id:{note?.id}</h1>
                <h1>Note body:{note?.body}</h1>
            </div>
        )
}

export default NotePage