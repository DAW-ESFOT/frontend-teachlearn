import React from "react";
import { useForm } from "react-hook-form";
import withoutAuth from "@/hocs/withoutAuth";
import { useAuth } from "@/lib/auth";

const RegisterR = () => {
    const { register: doRegister } = useAuth();
    const { register, handleSubmit } = useForm();

    const onSubmit = async (data) => {
        console.log("data", data);
        try {
            const userData = await doRegister(data);

            console.log("userData", userData);
        } catch (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                alert(error.response.message);
                console.log(error.response);
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js
                console.log(error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log("Error", error.message);
            }
            console.log(error.config);
        }
    };
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="name">Nombre</label>
                    <input type="text" name="name" id="name" ref={register} />
                </div>
                <div>
                    <label htmlFor="last_name">Apellido</label>
                    <input type="text" name="last_name" id="last_name" ref={register} />
                </div>
                <div>
                    <label htmlFor="birthday">Cumpleaños</label>
                    <input type="date" name="birthday" id="birthday" ref={register} />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" ref={register} />
                </div>
                <div>
                    <label htmlFor="phone">Telefono</label>
                    <input type="number" name="phone" id="phone" ref={register} />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" ref={register} />
                </div>
                <div>
                    <label htmlFor="password_confirmation">Confirm password</label>
                    <input
                        type="password"
                        name="password_confirmation"
                        id="password_confirmation"
                        ref={register}
                    />
                </div>
                <div>
                    <label htmlFor="Role">Rol</label>
                    <select name="role" ref={register}>
                        <option value=''>Seleccione...</option>
                        <option value='ROLE_STUDENT'>student</option>
                        <option value='ROLE_TEACHER'>teacher</option>
                    </select>
                </div>
                <div>
                    <input type="submit" />
                </div>
            </form>
        </>
    );
};

export default withoutAuth(RegisterR);