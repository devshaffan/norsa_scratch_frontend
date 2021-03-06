import { getToken } from "./auth"
import address from "./address"
import axios from "axios"

export default function getClientList() {
    const token = getToken()
    if (!token) return "Authentication Fail Sign In agian"
    return axios.get(address + '/api/clients/getAllClients', {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        }
    })
}

export function getClientData(id) {
    const token = getToken()
    if (!token) return "Authentication Fail Sign In agian"

    return axios.get(address + '/api/clients/getClientById/' + id, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        }
    })
}