import { Route, Routes } from "react-router-dom"
import { HomePage } from "../pages/HomePage"
import { RegisterPage } from "../pages/RegisterPage"
import { SucessPage } from "../pages/SucessPage"
import { LoginPage } from "../pages/LoginPage"
import { LoggedPage } from "../pages/LoggedPage"

export const RoutesMain = () => {
    return (

        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />}/>
            <Route path="/logged" element={<LoggedPage />}/>
            <Route path="/sucess" element={<SucessPage />} />
        </Routes>
    )

}