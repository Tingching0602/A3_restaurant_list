const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const restaurantList = require('./restaurant.json')
const port = 3000

//express template engine
app.engine('handlebars', exphbs({
  defaultLayout: 'main'
}))
app.set('view engine', 'handlebars')

//setting static files
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('index', { restaurant: restaurantList.results })
})

app.get('/restaurants/:id', (req, res) => {
  const restaurant = restaurantList.results.find(store => {
    return store.id === Number(req.params.id)
  })
  res.render('show', { restaurant: restaurant })
})


app.get('/search', (req, res) => {
  const keyword = req.query.keyword
  const keywordLowercaseNonSpace = keyword.toLowerCase().split(" ").join(" ")

  //search restaurant's name
  const restaurant = restaurantList.results.filter(store => {
    const storeLowercaseNonSpace = store.name.toLowerCase()
    const categoryLowercaseNonSpace = store.category.toLowerCase()
    const locationLowercaseNonSpace = store.location.toLowerCase()
    return (storeLowercaseNonSpace.includes(keywordLowercaseNonSpace) || categoryLowercaseNonSpace.includes(keywordLowercaseNonSpace) || locationLowercaseNonSpace.includes(keywordLowercaseNonSpace))
  })
  const noSearchResult = restaurant.length === 0 ? '找不到相關結果，請嘗試其他的關鍵字。' : null
  //差搜尋沒有結果時也有對應頁面提示
  res.render('index', { restaurant: restaurant, keyword: keyword, noSearchResult: noSearchResult })

})
// Start and listen the server
app.listen(port, () => {
  console.log(`Express is listening on  http://localhost:${port}`)
})
