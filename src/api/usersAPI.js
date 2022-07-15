import instance from "./instance";

export const usersApi = {
    getUsersDefault(pageCurrent = 1, pageSizeView = 10) {
        return instance.get(`users?page=${pageCurrent}&count=${pageSizeView}`).then(response => response.data)
    },

    getUsersChangePage(pageNumber, pageSizeView){
        return instance.get(`users?page=${pageNumber}&count=${pageSizeView}`).then(response => response.data)
    }

}
