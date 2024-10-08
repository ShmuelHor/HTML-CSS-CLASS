export interface User{
    userName:string;
    password:string;
    id?:string;
    books:Book[]
}

export interface Book{
    id:string;
    title:string;
    author:string;
    cover_image:string;
}