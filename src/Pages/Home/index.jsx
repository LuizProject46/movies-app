import React, { useEffect, useState } from "react"
import Search from "../../components/Search"
import api from "../../services/tmdb"
import { Container, InputArea, ListArea, Content, ContentTitle, ImageArea } from "./styles"
const API_KEY = process.env.API_KEY


export default function Home(){
    const [listContent, setListContent] = useState([])
    const [page, setPage] = useState(1)

    
    async function getContent(){
        try{
            let response = await api.get(`/trending/all/day?api_key=${API_KEY}`)
            

            const { results } = response.data
           
            setListContent([...listContent, ...results ])

        }catch(err){
            console.log(err.message)
            alert(err.message)
        }
    }
    
    useEffect(() => {
        
        getContent()

    }, [])


    return (
        <Container>
            <h1>IMovies</h1>
            <InputArea>
                <Search/>
            </InputArea>
            <ListArea>
                {listContent.map( (content, index) => (
                    
                    <Content key={index}>
                        <ImageArea>
                            <img src={`https://image.tmdb.org/t/p/w500/${content.backdrop_path}`}/>
                        </ImageArea>
                       <ContentTitle>
                            {content.original_title}
                       </ContentTitle>
                    </Content>
                    
                ))
                }
                
            </ListArea>            
        </Container>
    )
}