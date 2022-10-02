import {useState} from 'react'
import axios, {AxiosResponse, AxiosError} from 'axios'

interface Response {
    id: number
    name: string
    contet: string
    created_at: Date
    updated_at: DataView
}
type appType = ReturnType<typeof app>

export const app = () => {
    const [posts, setPosts] = useState<Response[]>([]);

    const getAxios = async (): Promise<void> => {
        try {
            const respose: AxiosResponse = await axios.get('/api/posts')
            if(respose && respose.data){
                const res: Response[] = respose.data
                setPosts(res)
                return
            }
        } catch(e: AxiosError<{error: string}>){
            console.log(e.message)
            console.log('通信に失敗しました');
        }
     
        // .then((res: AxiosResponse) => {
        //     setPosts(res.data)
        //     console.log(res.data)
        // })
        // .catch((e: AxiosError<{error: string}>) => {
        //     console.log(e.message)
        //     console.log('通信に失敗しました');
        // });
    }


    return {
        getAxios,
        posts
    } as const
}