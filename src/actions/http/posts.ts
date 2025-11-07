import { HttpAdapter } from "./adapters/http.adapters";

interface Post{
    userId:number
    id:number
    title:string
    body:string
}

export const postsUseCase = async (fetcher: HttpAdapter): Promise<Post[]> => {
    try {
        const response = await fetcher.get<Post[]>('/posts');
        return response.map((p:any) => {
            return {
                ...p
            }
        });
    } catch (error) {
        console.log(error);
        throw new Error('Error fetching movies - NowPlaying');
    }
}

export const postUseCase = async (fetcher: HttpAdapter, id:string): Promise<Post[]> => {
    try {
        const response = await fetcher.get<Post[]>(`/posts/${id}`);
        return response.map((p:any) => {
            return {
                ...p
            }
        });
    } catch (error) {
        console.log(error);
        throw new Error('Error fetching movies - NowPlaying');
    }
}