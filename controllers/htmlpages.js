const { error } = require('console');
const path = require('path');
// HTML


// get Logout
const getLogout =  (req,res) =>{
    console.log(`html-controllers.js : inside getLogout fn  req.session : ${req.session} `)
    console.log(`html-controllers.js : inside getLogout fn  req.session.user : ${req.session.user} `)
    console.log(`html-controllers.js : inside getLogout fn  req.cookies.userId : ${req.cookies.userId} `)
    if(req.cookies.userId && req.session.user !== undefined) {
        console.log(`html-controllers.js : inside getLogout fn req.cookies.userId and 2 cond are true  `)
        res.clearCookie("userId")        
        res.send({ loggedOut : true  })

    }
    else {
        console.log(`html-controllers.js : inside getLogout fn  req.cookies.userId and 2 cond are false  `)
        res.send({ loggedOut : false  })
    }

}

//  get sessions
const getSessions =  (req,res) =>{
    console.log(`html-controllers.js : inside getSession fn  req.session : ${req.session} `)
    console.log(`html-controllers.js : inside getSession fn  req.session.user : ${req.session.user} `)
    console.log(`html-controllers.js : inside getSession fn  req.cookies.userId : ${req.cookies.userId} `)
    if(req.cookies.userId!== undefined && req.session.user !== undefined) {
        console.log(`html-controllers.js : inside getSession fn req.cookies.userId and 2 cond are true  `)
        res.send({ loggedIn : true  })

    }
    else {
        console.log(`html-controllers.js : inside getSession fn req.cookies.userId and 2 cond are false  `)
        res.send({ loggedIn : false  })
    }

}

// ./ page
const getIndex =  (req,res) =>{
    console.log(`html-controllers.js : inside getIndex fn  req.session : ${req.session} `)
    console.log(`html-controllers.js : inside getIndex fn  req.session.user : ${req.session.user} `)
    console.log(`html-controllers.js : inside getIndex fn  req.cookies.userId : ${req.cookies.userId} `)   
    if(req.cookies.userId && req.session.user !== undefined) {
        console.log(`html-controllers.js : inside getIndex fn req.cookies.userId and 2 cond are true  `)
        var finalPath = path.join(__dirname, '../public', 'index.html')
        console.log(`html-controllers.js : inside getIndex fn req.cookies.userId and 2 cond are true | redirect to : ${finalPath}`)   
        res.sendFile(finalPath, function (err) {
            if (err) {
                console.log(err)
                console.log(`html-controllers.js :error inside getIndex fn req.cookies.userId and 2 cond are true | redirect failed : ${err}`)   
            } else {
                console.log(`html-controllers.js : inside getIndex fn req.cookies.userId and 2 cond are true | redirect sucess at : ${finalPath}`)   
                // console.log('Sent:', finalPath)
            }
        })

    }
    else {
        console.log(`html-controllers.js : inside getIndex fn req.cookies.userId and 2 cond are false `)   
        res.redirect('./auth.html')
    }

}





//InsertDmi.html page
const getInsertDmi = (req,res) =>{
    console.log(`html-controllers.js : inside getInsertDmi fn  req.session : ${req.session} `)
    console.log(`html-controllers.js : inside getInsertDmi fn  req.session.user : ${req.session.user} `)
    console.log(`html-controllers.js : inside getInsertDmi fn  req.cookies.userId : ${req.cookies.userId} `)   
    
 
    if(req.cookies.userId && req.session.user !== undefined) {
        console.log(`html-controllers.js : inside getInsertDmi fn req.cookies.userId and 2 cond are true  `)

        var finalPath = path.join(__dirname, '../public', 'insertDmi.html')
        console.log(`html-controllers.js : inside getInsertDmi fn req.cookies.userId and 2 cond are true | redirect to : ${finalPath}`)   
            
        res.sendFile(finalPath, function (err) {
            if (err) {
                console.log(err)
                console.log(`html-controllers.js :error inside getInsertDmi fn req.cookies.userId and 2 cond are true | redirect failed : ${err}`)   
            } else {
                console.log(`html-controllers.js : inside getInsertDmi fn req.cookies.userId and 2 cond are true | redirect sucess at : ${finalPath}`)
                // console.log('Sent:', finalPath)
            }
        })
    }
    else {
        console.log(`html-controllers.js : inside getInsertDmi fn req.cookies.userId and 2 cond are false `)   
        res.redirect('./auth.html')
    }

}

//dmi.html page
const getDmi = (req,res) =>{
    console.log(`html-controllers.js : inside getDmi fn  req.session : ${req.session} `)
    console.log(`html-controllers.js : inside getDmi fn  req.session.user : ${req.session.user} `)
    console.log(`html-controllers.js : inside getDmi fn  req.cookies.userId : ${req.cookies.userId} `)   
    
    if(req.cookies.userId && req.session.user !== undefined) {
        console.log(`html-controllers.js : inside getDmi fn req.cookies.userId and 2 cond are true  `)
        var finalPath = path.join(__dirname, '../public', 'dmi.html')
        console.log(`html-controllers.js : inside getDmi fn req.cookies.userId and 2 cond are true | redirect to : ${finalPath}`)   


        res.sendFile(finalPath, function (err) {
            if (err) {
                console.log(err)
                console.log(`html-controllers.js :error inside getDmi fn req.cookies.userId and 2 cond are true | redirect failed : ${err}`)   
            } else {
                // console.log('Sent:', finalPath)
                console.log(`html-controllers.js : inside getDmi fn req.cookies.userId and 2 cond are false `)   
            }
        })
    }
    else {
        console.log(`html-controllers.js : inside getDmi fn req.cookies.userId and 2 cond are false `)   
        res.redirect('./auth.html')
    }

}



//get-dmi-hrms.html page
const getDmiHrms = (req,res) =>{
    console.log(`html-controllers.js : inside getDmiHrms fn  req.session : ${req.session} `)
    console.log(`html-controllers.js : inside getDmiHrms fn  req.session.user : ${req.session.user} `)
    console.log(`html-controllers.js : inside getDmiHrms fn  req.cookies.userId : ${req.cookies.userId} `)  
    if(req.cookies.userId && req.session.user !== undefined) {
        //res.redirect(`./insertDmi.html`)
        console.log(`html-controllers.js : inside getDmiHrms fn req.cookies.userId and 2 cond are true  `)

        var finalPath = path.join(__dirname, '../public', 'dmi-hrms.html')
        console.log(`html-controllers.js : inside getDmiHrms fn req.cookies.userId and 2 cond are true | redirect to : ${finalPath}`)   


        res.sendFile(finalPath, function (err) {
            if (err) {
                console.log(`html-controllers.js :error inside getDmiHrms fn req.cookies.userId and 2 cond are true | redirect failed : ${err}`)   
                console.log(err)
            } else {
                // console.log('Sent:', finalPath)
                console.log(`html-controllers.js : inside getDmiHrms fn req.cookies.userId and 2 cond are false `)   
            }
        })
    }
    else {
        console.log(`html-controllers.js : inside getDmiHrms fn req.cookies.userId and 2 cond are false `)   
        res.redirect('./auth.html')
    }

}






//////////////////////////////////////////////////////////////

module.exports = {  getIndex, getInsertDmi ,getDmi, getDmiHrms, getSessions, getLogout }