const axios = require("axios")

const main = async () => {
    const res = await axios.get("https://httpbin.org/user-agent")
    console.log(res.data)
    // { 'user-agent': 'axios/0.21.0' }
}

main().catch(err => console.log(err))