import React, { useEffect } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { app } from './AppHooks'
import { auth } from './AuthHooks'


export const App:React.FC = () => {
    return (
      <BrowserRouter>
        <Routes>
            <Route path='/'>
                <Route index element={<Index />} />
                <Route path="/test" element={<Test />} />
                <Route path="/login" element={<Login />} />
            </Route>

        </Routes>
      </BrowserRouter>
    )
}

function Index() {
    const {posts, getAxios} = app()

    useEffect(() => {
        getAxios()
    },[])
    
    return (
        <div>
            {posts && posts.map(post => (
                <div key={post.id}>
                    {post.id},
                    {post.name}
                </div>
            ))}
        </div>
    )
}

function Test(){
    return (
        <div>aaaaaa</div>
    )
}

function Login() {
    const {login} = auth()
    return(
        <div onClick={() => login('ky1986@gmail.com', 'passowrd')}>login</div>
    )
}
