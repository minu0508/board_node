const res = require('../node_modules/express/lib/response');
const pool = require('../db/db');
const Query = require('./Query');

exports.writePost = async (title, content, writer) => {
  try{
    let result = await pool.query(Query.writePost, [title, content, writer]);
    return result;
  }
  
  catch (error) {
    console.log(error);
    throw Error(error);
  }
}

exports.selectAllPosts = async () => {
    
    try{
        let blogs = await pool.query(Query.selectAllPosts)
        return blogs[0]
    } 
    
    catch (error) {
        console.log(error)
        throw Error(error)
    }

}

exports.selectPostDetail = async (uid) => {
    
    try{
        let detail = await pool.query(Query.selectPostDetail, [uid])
        return detail[0]
    } 
    
    catch (error) {
        console.log(error)
        throw Error(error)
    }

}


exports.modifyPost = async (title, content, writer, uid) => {
    
    try{
        let result = await pool.query(Query.modifyPost, [title, content, writer, uid])
        return result
    } 
    
    catch (error) {
        console.log(error)
        throw Error(error)
    }

}

exports.deletePost = async (uid) => {
    
    try{
        let result = await pool.query(Query.deletePost, [uid])
        return result
    } 
    
    catch (error) {
        console.log(error)
        throw Error(error)
    }

}
