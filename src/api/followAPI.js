import instance from "./instance";

export const followAPI = {
    setFollow(id) {return instance.post(`follow/${id}`)},
    setUnFollow(id) {return instance.delete(`follow/${id}`)}
}
