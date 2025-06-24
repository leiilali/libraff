import axios from "axios"

async function getAllCategory(){
    const res = await axios.get('https://api.baghirli.net/getCategories')
    return res.data
}

async function getAllAuthors(){
    const res = await axios.get('https://api.baghirli.net/getAuthors')
    return res.data
}

async function getThisWeeksMostViewedBooks(){
    const res = await axios.get('https://api.baghirli.net/thisWeekMostViewedBooks')
    return res.data
}
async function getMostSearchedBooks(){
    const res = await axios.get('https://api.baghirli.net/mostSearchedBooks')
    return res.data
}
async function getBooksByCategoryCode(code){
    const res = await axios.get(`https://api.baghirli.net/getBooksByCategoryCode?code=${code}`)
    return res.data
}
async function getBooksById(id){
    const res = await axios.get(`https://api.baghirli.net/getBookById?id=${id}`)
    return res.data
}
async function getBestSeller(){
    const res = await axios.get('https://api.baghirli.net/getBestsellers')
    return res.data
}
async function getBooksBySearch(name){
    const res = await axios.get(`https://api.baghirli.net/searchBook?searchQuery=${name}`)
    return res.data
}
async function getUcAlmaBooks(){
    const res = await axios.get('https://api.baghirli.net/3AlmaMostRecents')
    return res.data
}

export {
    getAllCategory, getAllAuthors, 
    getThisWeeksMostViewedBooks, 
    getMostSearchedBooks, getBooksByCategoryCode, getBooksById,
    getBestSeller, getBooksBySearch, getUcAlmaBooks
    
}