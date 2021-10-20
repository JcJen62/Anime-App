const axios = require('axios')

exports.handler = async (event, context) => {
    try{
        const { anime } = event.queryStringParameters
        const response = await axios.get(`https://api.jikan.moe/v3/top/anime`)
        return {
            statusCode: 200,
            body: JSON.stringify(response.data)
        }
    } catch (err) {
        console.log(err)
        return {
            statusCode: 404,
            body: err.toString()
        }
    }
}