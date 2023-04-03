const Service = require('./Service');

exports.selectAllPosts = async (req, res) => {
    
    try{
        let blogs = await Service.selectAllPosts()
        return res.render('board', {
            blogs: blogs 
        })
    } 
    
    catch (error) {
        return res.status(500).json(error)
    }

}

exports.selectPostDetail = async (req, res) => {
    
    let { uid } = req.params
    
    try{
        let postDetail = await Service.selectPostDetail(uid)
        return res.render('detail', {
            postDetail: postDetail
        })
    } 
    
    catch (error) {
        return res.status(500).json(error)
    }

}

exports.writePost = async (req, res) => {
    
    const { title, content, writer } = req.body
    let blogs = await Service.selectAllPosts()

    try{
        let results = await Service.writePost(title, content, writer)
        let postDetail = await Service.selectPostDetail(results[0].insertId)
        return res.redirect("/");
        // res.render('board', {
        //     postDetail: postDetail
        // })
    }
    
    catch (error) {
        return res.status(500).json(error)
    }

}

exports.writePage = async (req, res) => {
    
    try{
        return res.render('write')
    }

    catch (error) {
        return res.status(500).json(error)
    }

}

exports.modifyPost = async (req, res) => {
    
    const { title, content, writer } = req.body
    const { uid } = req.params

    try{
        await Service.modifyPost(title, content, writer, uid)
        let postDetail = await Service.selectPostDetail(uid)
        return res.render('detail', {
            postDetail: postDetail
        })
    } 
    
    catch (error) {
        return res.status(500).json(error)
    }

}

exports.modifyPage = async (req, res) => {
    
    let { uid } = req.params

    try{
        let postDetail = await Service.selectPostDetail(uid)
        return res.render('modify', {
            postDetail: postDetail
        })
    }

    catch (error) {
        return res.status(500).json(error)
    }

}

exports.deletePost = async (req, res) => {
    
    let { uid } = req.params
    
    try{
        await Service.deletePost(uid)
        return res.redirect('/')
    } 
    
    catch (error) {
        return res.status(500).json(error)
    }

}