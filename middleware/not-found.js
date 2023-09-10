const notFound = (req, res) => {
    console.log(`notfound.js : inside notfound fn  `)
    res.status(404).redirect('404.html')
}

module.exports = notFound
