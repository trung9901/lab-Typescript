import { UserType } from "../types/user";
import instance from "./instance";

export const list = () => {
    const url = "/users";
    return instance.get(url);
}
export const remove = (id: number) => {
    const url = `/users/${id}`;
    return instance.delete(url);
}
export const read = (id: string | undefined) => {
    const url = `/users/${id}`;
    return instance.get(url);
}
export const add = (user: UserType) => {
    const url = "/users";
    return instance.post(url, user);
}
export const update = (user: UserType) => {
    const url = `/users/${user.id}`;
    return instance.put(url, user);
}