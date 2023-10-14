import axios from 'axios';
import Cookies from 'js-cookie';

import TaskList from "../components/tasklist/TaskList"
import AddButton from "../components/ui/AddButton/AddButton"

function TaskPage() {
    async function moveUser() {
        const result = await checkAuth()
        console.log(`User register is ${result}`)
    }

    async function checkAuth() {
        const tokens = await getTokens();

        switch (tokens) {
            case tokens.access === undefined || tokens.refresh === undefined:
                return false;
            case await checkAccessTokenOrRewrite(tokens) === false:
                return false;
            default:
                return true;
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

    return (
        <div id="task_page">
            <h1>Tasks</h1>
            <TaskList />
            <AddButton />
            <button onClick={moveUser}>CheckAuth</button>
        </div>
    );
}

export default TaskPage