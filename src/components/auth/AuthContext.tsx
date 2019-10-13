import { createContext } from "react";

interface ILoginFn {
    (bearer: string): void
};
interface ILogoutFn {
    (): void
};

export interface IAuthContext {
    apiUrl: string,
    bearer: string,
    login: ILoginFn,
    logout: ILogoutFn
};

export const AuthContext: React.Context<IAuthContext> = createContext(undefined);