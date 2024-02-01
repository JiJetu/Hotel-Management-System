const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config();
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser')
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors({
  origin: [
    'http://localhost:5173'
  ],
  credentials: true
}));
app.use(express.json())
app.use(cookieParser())


// console.log(process.env.DB_USER);
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.dscp8or.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

// middleware
// get the url
const logger = async(req, res, next) =>{
  console.log("url:", req.host, req.originalUrl);

   next()
}

const verifiedToken = async(req, res, next) => {
  const token = req.cookies?.token;
  if(!token){
    return res.status(401).send({massage: "not authorized"});
  }

  jwt.verify(token, process.env.ACCESS_TOKEN, (err, decoded) => {
    if(err){
      return res.status(401).send({massage: "unauthorized"})
    }
    req.user = decoded;
    next()
  })
}

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const treeHouseDB = client.db("TreeHouse")
    const categories = treeHouseDB.collection("categories")
    const addProduct = treeHouseDB.collection("addProduct")
    const bookings = treeHouseDB.collection("bookings")

    // auth related api
    app.post('/jwt', logger, async (req, res) => {
      const user = req.body;
      const token = jwt.sign(user, process.env.ACCESS_TOKEN, {
        expiresIn: '1h'
      })

      res
        .cookie("token", token, {
          httpOnly: true,
          secure: false
        })
        .send({ massage: true })
    })


    // services related api
    app.get('/categories', logger, async (req, res) => {
      const categoriesList = req.body
      const result = await categories.find(categoriesList).toArray()
      res.send(result)
    })
    app.get('/categories/:path', async (req, res) => {
      const path = req.params.path
      const query = { path: path };
      const options = {
        projection: { _id: 0, image: 1, categories: 1 },
      };
      const categoryPath = await categories.findOne(query, options)
      res.send(categoryPath)
    })


    // Added Product
    app.get('/addProducts', logger, async (req, res) => {
      // const products = req.body;
      const result = await addProduct.find().toArray();
      res.send(result)
    })

    app.get('/addProducts/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) }
      const result = await addProduct.findOne(query)
      res.send(result)
    })

    app.post('/addProducts', async (req, res) => {
      const product = req.body;
      const result = await addProduct.insertOne(product)
      res.send(result)
    })

    app.put('/addProducts/:id', async (req, res) => {
      const product = req.body;
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };

      const updateProduct = {
        $set: {
          productName: product.productName,
          selectedProduct: product.selectedProduct,
          image: product.image,
          price: product.price,
          productDescription: product.productDescription,
          productFeatures: product.productFeatures
        },
      };
      const result = await addProduct.updateOne(filter, updateProduct, options);

      res.send(result);
    })

    app.delete('/addProducts/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await addProduct.deleteOne(query);
      res.send(result)
    })


    // find product
    app.get('/category/product/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      // const options = {
      //   projection: { _id: 0 },
      // };
      const product = await addProduct.findOne(query)
      res.send(product)
    })


    // bookings
    app.get('/bookings', logger, verifiedToken, async (req, res) => {
      // console.log(req.query.email);
      if(req.query.email !== req.user.email){
        return res.status(403).send({massage: "forbidden access"})
      }
      let query = {};
      if (req.query?.email) {
        query = { email: req.query.email }
      }
      const result = await bookings.find(query).toArray();
      res.send(result)
    })


    app.post('/bookings', async (req, res) => {
      const bookingsItem = req.body;
      // const {date} = bookingsItem.date;
      const isExists = await bookings.findOne(bookingsItem);
      if (isExists) {
        return res.json("already exists")
      }
      const result = await bookings.insertOne(bookingsItem);
      res.send(result)
    })

    app.patch('/bookings/:id', async (req, res) => {
      const data = req.body;
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const updateData = {
        $set: {
          status: data.status
        },
      };
      const result = await bookings.updateOne(filter, updateData)
      res.send(result)
    })

    app.delete('/bookings/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await bookings.deleteOne(query);
      res.send(result);
    })


    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);


app.get('/', (req, res) => {
  res.send("server is running");
})

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
})