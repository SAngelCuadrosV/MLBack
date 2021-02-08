const express = require('express')
const axios = require('axios');
const cors = require('cors')
const app = express()
const port = 5000

app.use(cors())

const author = {
  name: 'Sebastian',
  lastname: 'Cuadros Vanegas'
};

function createNewItem(data, byId) {
  var item = {};
  var price = {}
  item.id = data.id
  item.title = data.title
  price.amount = data.price
  price.currency = data.currency_id
  price.decimals = 0
  item.price = price
  item.picture = data.thumbnail
  item.condition = data.condition
  item.free_shipping = data.shipping.free_shipping
  if (byId)
    item.sold_quantity = data.sold_quantity
  else
    item.state = data.address.state_name
  return item;
}

app.get('/api/items', (req, res) => {

  let categories = []
  let items = []
  let pathFromRoot = true

  let query = req.query.q;

  axios.get('https://api.mercadolibre.com/sites/MLA/search?q=' + query)
    .then(response => {
      if (response.data.results.length > 0) {
        data_items = response.data.results.slice(0, 4)

        data_items.forEach(data => {
          items.push(createNewItem(data, false))
        });
        var categorie = response.data.filters.filter(categorie => categorie.id == "category");
        if (categorie.length > 0) {
          pathFromRoot = true
          categorie = categorie[0].values[0]
          categorie.path_from_root.forEach(value => categories.push(value.name));
        } else {
          pathFromRoot = false
          categorie = response.data.available_filters.filter(categorie => categorie.id == "category");
          categorie = categorie[0].values.slice(0, 5)
          categorie.forEach(value => categories.push(value.name));
        }
        object = {
          author,
          categories,
          pathFromRoot,
          items,
        }
        res.send(object);
      }
      else {
        res.sendStatus(404);
      }
    })
    .catch(error => {
      console.log(error)
      res.sendStatus(500);
    });
})

app.get('/api/items/:id', (req, res) => {
  req.params.id
  let categories = []
  let url = 'https://api.mercadolibre.com/items/' + req.params.id
  let urlCat = 'https://api.mercadolibre.com/categories/'
  axios.get(url)
    .then(response => {
      item = createNewItem(response.data, true)
      axios.get(url + "/description")
        .then(responseDesc => {
          item.description = responseDesc.data.plain_text
          axios.get(urlCat + "/" + response.data.category_id)
            .then(responseCat => {
              responseCat.data.path_from_root.forEach(value => categories.push(value.name));
              object = {
                author,
                item,
                categories
              }
              res.send(object);
            }).catch(error => {
              res.sendStatus(error.response.status);
            });
        })
        .catch(error => {
          res.sendStatus(error.response.status);
        });
    })
    .catch(error => {
      res.sendStatus(error.response.status);
    });
})

app.listen(port, () => {
  console.log(`MLBackEnd listening at http://localhost:${port}`)
})