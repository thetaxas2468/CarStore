import axios from 'axios';
import { SIGN_IN_URL, SIGN_UP_URL } from '.';
import Cookies from 'js-cookie';


export const sign_up_function: (email: string, password: string) => Promise<string> = async (email: string, password: string) => {
    try {
        const result = await axios.post(SIGN_UP_URL!, { email, password }, { withCredentials: true });
        if (result.status === 200) {
            return "done";
        }
        else {
            return "Please try again";
        }
    }
    catch (e: any) {
        return e.response.data.error;
    }

}

export const sign_in_function: (email: string, password: string) => Promise<string> = async (email: string, password: string) => {
    axios.post(SIGN_IN_URL!, { email, password }, { withCredentials: true }).then(result => {
        console.log(result)
        const { jwt, email: emailName } = Cookies.get();
        localStorage.setItem("jwt", jwt);
        localStorage.setItem("email", emailName);

    }).catch((err: any) => {
        return err.response.data.error;
    })
    return "done";
}
