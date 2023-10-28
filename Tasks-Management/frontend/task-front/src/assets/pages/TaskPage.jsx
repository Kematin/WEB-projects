import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import axios from 'axios';
import Cookies from 'js-cookie';

import TaskList from "../components/tasklist/TaskList"
import AddTask from '../components/addTask/AddTask';
import Button from '../components/ui/Button/Button';
import Navbar from '../components/navbar/Navbar';

function TaskPage() {
    const navigate = useNavigate();
    const [isAuthenticated, setIsAuthenticated] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const isAuthenticated = await checkAuth();
            setIsAuthenticated(isAuthenticated);
            if (!isAuthenticated) {
                navigate('/login');
            }
            console.log(`User is authenticated: ${isAuthenticated}`);
        };

        fetchData();
    }, [navigate]);

    async function logout() {
        Cookies.remove("refreshToken")
        Cookies.remove("accessToken")
        navigate('/login');
    }

    async function checkAuth() {
        const tokens = await getTokens();

        if (tokens.access === undefined || tokens.refresh === undefined) {
            return false;
        } else {
            return await checkAccessTokenOrRewrite(tokens);
        }
    }


    async function getTokens() {
        const accessToken = Cookies.get("accessToken");
        const refreshToken = Cookies.get("refreshToken");
        const tokens = {
            "access": accessToken,
            "refresh": refreshToken
        };
        return tokens;
    }

    async function checkAccessTokenOrRewrite(tokens) {
        try {
            await axios.post("http://127.0.0.1:8000/auth/jwt/verify/", {
                token: tokens.access
            });
            console.log("Access token is verified")
            return true;
        } catch (error) {
            console.log("Access token is not verified, try update")
            return await getAccessTokenAndRewrite(tokens.refresh);
        }
    }

    async function getAccessTokenAndRewrite(refresh) {
        try {
            const response = await axios.post("http://127.0.0.1:8000/auth/jwt/refresh/", {
                refresh: refresh
            });
            const data = response.data;
            const newTokens = {
                "access": data.access,
                "refresh": refresh
            };
            writeTokensCookie(newTokens);
            console.log("Update access token")
            return true;
        } catch (error) {
            console.log("Refresh token cant update access")
            return false;
        }
    }

    function writeTokensCookie(tokens) {
        Cookies.set("refreshToken", tokens.refresh);
        Cookies.set("accessToken", tokens.access);
    }

    if (isAuthenticated === null) {
        return <p>Loading...</p>;
    }

    return (
        <div id="task_page">
            <Navbar />
            <h1>Tasks</h1>
            {isAuthenticated && <TaskList />} {/* Render TaskList if authenticated */}
            <AddTask />
            <Button fnOnClick={logout} value="Logout"></Button>
        </div>
    );
}

export default TaskPage