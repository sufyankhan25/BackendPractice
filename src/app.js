import express from 'express';

const app = express();
app.use(cors({
    origin:process.env.FRONTEND_URL,
    credentials:true
}))
app.use(express.json({limit:"100kb"}))
app.use(express.urlencoded({extended:true , limit:"100kb"}))
app.use(express.static("public"))
app.use(cookieParser())
export {app}
