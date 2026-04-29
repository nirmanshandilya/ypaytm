import { useEffect, useState } from "react"
import { Appbar } from "../components/Appbar"
import { Balance } from "../components/Balance"
import { Users } from "../components/Users"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export const Dashboard = () => {
    const navigate = useNavigate();
    const [balance, setBalance] = useState(0);

    useEffect(() => {
        if(!localStorage.getItem("token")){
            navigate("/signin")
            return
        }
        axios.get("http://localhost:3000/api/v1/account/balance", {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        }).then(response => setBalance(response.data.balance))
    }, [])

    if(!localStorage.getItem("token")) return null

    return <div>
        <Appbar />
        <div className="m-8">
            <Balance value={balance} />
            <Users />
        </div>
    </div>
}

export default Dashboard
