import axios, {AxiosResponse, AxiosError} from 'axios'

export const auth = () => {

    const login = async (email: string, password: string) => {
        try {
            const token: AxiosResponse = await axios.get("/sanctum/csrf-cookie")
            console.log('toke:',token)
            const user: AxiosResponse = await axios.post("/api/login", {email,password,})
            console.log('user:', user)
        } catch(e: AxiosError<{error: string}>){
            console.log('e:',e)
        }
    }

    return {
        login
    } as const
}