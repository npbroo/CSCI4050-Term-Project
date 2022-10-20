import axios from 'axios'
import cookie from 'cookie'

export default async (req, res) => {
    let accessToken = null;

    if (req.method === 'POST') {
        const {username, password} = req.body

        const config = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }

        const body = {
            username,
            password
        }
        
        const {data} = await axios.post(`${process.env.DJANGO_API}/token/`, body, config)
        console.log(data)
    } else {
        res.setHeader('Allow', ['POST'])
        res.status(405).json({message: `Method ${req.method} is not allowed`})
    }
}