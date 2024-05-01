import axios from "axios";

const axiosMidgets = axios.create({
    baseURL: "https://midgets-db-main.fly.dev/"
})

export {
    axiosMidgets
}