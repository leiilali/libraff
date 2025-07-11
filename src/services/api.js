import { axiosInstance } from "./instance"


async function getAllCategory() {
    const res = await axiosInstance.get('/getCategories')
    return res.data
}

async function getAllAuthors() {
    const res = await axiosInstance.get('/getAuthors')
    return res.data
}

async function getThisWeeksMostViewedBooks() {
    const res = await axiosInstance.get('/thisWeekMostViewedBooks')
    return res.data
}
async function getMostSearchedBooks() {
    const res = await axiosInstance.get('/mostSearchedBooks')
    return res.data
}
async function getBooksByCategoryCode(code, pageNumber, pageCount) {
    const res = await axiosInstance.get(`/getBooksByCategoryCode?code=${code}&pageNumber=${pageNumber}&pageCount=${pageCount}`)
    return res.data
}
async function getBooksById(id) {
    const res = await axiosInstance.get(`/getBookById?id=${id}`)
    return res.data
}
async function getBestSeller() {
    const res = await axiosInstance.get('/getBestsellers')
    return res.data
}
async function getBooksBySearch(name, pageNumber, pageCount) {
    const res = await axiosInstance.get(`/searchBook?searchQuery=${name}&pageNumber=${pageNumber}&pageCount=${pageCount}`)
    return res.data
}
async function getUcAlmaBooks() {
    const res = await axiosInstance.get('/3AlmaMostRecents')
    return res.data
}

export {
    getAllCategory, getAllAuthors,
    getThisWeeksMostViewedBooks,
    getMostSearchedBooks, getBooksByCategoryCode, getBooksById,
    getBestSeller, getBooksBySearch, getUcAlmaBooks

}