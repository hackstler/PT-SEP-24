import { Navigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'


function ProtectedRoutes({ children }) {
    const { user } = useAuth()
    console.log("🚀 ~ ProtectedRoutes ~ user:", user)
    if (!user) {
        return <Navigate to={'/login'} />
    }
    return children

}

export default ProtectedRoutes