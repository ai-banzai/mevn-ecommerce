const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const Post = require("../models/post")
const Product = require("../models/product")

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/posts');
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", function(callback){
  console.log("Connection Succeeded");
});

PostCRUD: {
// Fetch all posts
app.get('/posts', (req, res) => {
  Post.find({}, 'title description', function (error, posts) {
    if (error) { console.error(error); }
    res.send({
      posts: posts
    })
  }).sort({_id:-1})
})

// Add new post
app.post('/posts', (req, res) => {
  var db = req.db;
  var title = req.body.title;
  var description = req.body.description;
  var new_post = new Post({
    title: title,
    description: description
  })

  new_post.save(function (error) {
    if (error) {
      console.log(error)
    }
    res.send({
      success: true,
      message: 'Post saved successfully!'
    })
  })
})

// Fetch single post
app.get('/post/:id', (req, res) => {
  var db = req.db;
  Post.findById(req.params.id, 'title description', function (error, post) {
    if (error) { console.error(error); }
    res.send(post)
  })
})

// Update a post
app.put('/posts/:id', (req, res) => {
  var db = req.db;
  Post.findById(req.params.id, 'title description', function (error, post) {
    if (error) { console.error(error); }

    post.title = req.body.title
    post.description = req.body.description
    post.save(function (error) {
      if (error) {
        console.log(error)
      }
      res.send({
        success: true
      })
    })
  })
})

// Delete a post
app.delete('/posts/:id', (req, res) => {
  var db = req.db;
  Post.remove({
    _id: req.params.id
  }, function(err, post){
    if (err)
      res.send(err)
    res.send({
      success: true
    })
  })
})

}

ProductsCRUD: {
  // Fetch all products
  app.get('/products', (req, res) => {
    Product.find({}, 'title description price', function (error, products) {
      if (error) { console.error(error); }
      res.send({
        products: products
      })
    }).sort({_id:-1})
  })

  // Add new product
app.post('/products', (req, res) => {
  var db = req.db;
  var title = req.body.title;
  var description = req.body.description;
  var price = req.body.price;
  var new_product = new Product({
    title: title,
    description: description,
    price: price,
  })

  new_product.save(function (error) {
    if (error) {
      console.log(error)
    }
    res.send({
      success: true,
      message: 'Product saved successfully!'
    })
  })
})

// Fetch single product
app.get('/product/:id', (req, res) => {
  var db = req.db;
  Product.findById(req.params.id, 'title description price', function (error, product) {
    if (error) { console.error(error); }
    res.send(product)
  })
})

// Update a product
app.put('/products/:id', (req, res) => {
  var db = req.db;
  Product.findById(req.params.id, 'title description price', function (error, product) {
    if (error) { console.error(error); }

    product.title = req.body.title
    product.description = req.body.description
    product.price = req.body.price
    product.save(function (error) {
      if (error) {
        console.log(error)
      }
      res.send({
        success: true
      })
    })
  })
})

// Delete a product
app.delete('/products/:id', (req, res) => {
  var db = req.db;
  Product.remove({
    _id: req.params.id
  }, function(err, product){
    if (err)
      res.send(err)
    res.send({
      success: true
    })
  })
})

}
app.listen(process.env.PORT || 8081)