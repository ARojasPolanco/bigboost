import { Navigate, Outlet } from "react-router-dom"
import { useUserInfo } from "../../store/userInfo"

const PrivateRoute = () => {
    const user = useUserInfo((state) => state.user)

    if (user.token) {
        return <Outlet />
    }
    else {
        return <Navigate to={'/'} />
    }

}

export default PrivateRoute