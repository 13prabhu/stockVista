require('dotenv').config();

const express=require("express");
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const cors=require('cors');
const  PORT=process.env.PORT || 3002;
const  uri=process.env.MONGO_URL;
const {HoldingsModel}=require('./model/HoldingsModel');
const { PositionsModel } = require('./model/PositionsModel');
const app=express();
const passport=require("passport");
const LocalStrategy=require("passport-local");
const User=require("./model/UsersModel")
const session=require("express-session");
const UsersModel = require('./model/UsersModel');
// app.use(session(sessionOptions));
// app.use(flash());
app.use(cors());
app.use(bodyParser.json());

const sessionOptions={
    secret:"mysupersecretcode",
    resave:false,
    saveUninitialized:true,
    cookie:{
    expires:Date.now()+7*24*60*60*1000,
    maxAge:7*24*60*60*1000,
    httpOnly:true,
   }
}
app.use(session(sessionOptions));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(UsersModel.authenticate()));

passport.serializeUser(UsersModel.serializeUser());
passport.deserializeUser(UsersModel.deserializeUser());



app.get("/signup-success", (req, res) => {
    res.redirect("http://localhost:3001/");
  });

  app.post('/api/auth/signup', async (req, res) => {
    try {
      const { email, username, password } = req.body;
      // Perform signup logic here
      const user = new UsersModel({ email, username });
      await UsersModel.register(user, password);
      res.status(200).json({ message: 'Signup successful' });
    } catch (error) {
      console.error('Signup error:', error);
      res.status(500).json({ message: 'Signup failed' });
    }
  });
  
// Login success route
app.get("/login-success", (req, res) => {
  res.redirect("http://localhost:3001/"); // Redirect on successful login
});

// Login route
app.post('/api/auth/login', async (req, res) => {
  try {
    const { email, password } = req.body; // Extract email and password from the request body

    // Find the user in the database by email
    const user = await UsersModel.findOne({ email });

    // If user not found, send an error response
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Check if the provided password matches the stored hash
    const isMatch = await user.comparePassword(password); // Assuming `comparePassword` is a method on the user schema

    // If password does not match, send an error response
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // If login is successful, redirect or return a success message
    res.status(200).json({ message: 'Login successful' }); // or redirect to "/login-success"

  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Login failed' });
  }
});




  app.get('/allHoldings', async (req, res) => {
    try {
        let allHoldings = await HoldingsModel.find({});
        res.json(allHoldings);
    } catch (error) {
        console.error('Error fetching holdings:', error);
        res.status(500).json({ message: 'Failed to fetch holdings' });
    }
});
app.get('/allPositions', async (req, res) => {
    try {
        let allPositions = await PositionsModel.find({});
        res.json(allPositions);
    } catch (error) {
        console.error('Error fetching holdings:', error);
        res.status(500).json({ message: 'Failed to fetch positions'});
    }
});

// app.get("/addHoldings",async(req,res)=>{
//     let tempHoldings=[
//         {
//             name: "BHARTIARTL",
//             qty: 2,
//             avg: 538.05,
//             price: 541.15,
//             net: "+0.58%",
//             day: "+2.99%",
//           },
//           {
//             name: "HDFCBANK",
//             qty: 2,
//             avg: 1383.4,
//             price: 1522.35,
//             net: "+10.04%",
//             day: "+0.11%",
//           },
//           {
//             name: "HINDUNILVR",
//             qty: 1,
//             avg: 2335.85,
//             price: 2417.4,
//             net: "+3.49%",
//             day: "+0.21%",
//           },
//           {
//             name: "INFY",
//             qty: 1,
//             avg: 1350.5,
//             price: 1555.45,
//             net: "+15.18%",
//             day: "-1.60%",
//             isLoss: true,
//           },
//           {
//             name: "ITC",
//             qty: 5,
//             avg: 202.0,
//             price: 207.9,
//             net: "+2.92%",
//             day: "+0.80%",
//           },
//           {
//             name: "KPITTECH",
//             qty: 5,
//             avg: 250.3,
//             price: 266.45,
//             net: "+6.45%",
//             day: "+3.54%",
//           },
//           {
//             name: "M&M",
//             qty: 2,
//             avg: 809.9,
//             price: 779.8,
//             net: "-3.72%",
//             day: "-0.01%",
//             isLoss: true,
//           },
//           {
//             name: "RELIANCE",
//             qty: 1,
//             avg: 2193.7,
//             price: 2112.4,
//             net: "-3.71%",
//             day: "+1.44%",
//           },
//           {
//             name: "SBIN",
//             qty: 4,
//             avg: 324.35,
//             price: 430.2,
//             net: "+32.63%",
//             day: "-0.34%",
//             isLoss: true,
//           },
//           {
//             name: "SGBMAY29",
//             qty: 2,
//             avg: 4727.0,
//             price: 4719.0,
//             net: "-0.17%",
//             day: "+0.15%",
//           },
//           {
//             name: "TATAPOWER",
//             qty: 5,
//             avg: 104.2,
//             price: 124.15,
//             net: "+19.15%",
//             day: "-0.24%",
//             isLoss: true,
//           },
//           {
//             name: "TCS",
//             qty: 1,
//             avg: 3041.7,
//             price: 3194.8,
//             net: "+5.03%",
//             day: "-0.25%",
//             isLoss: true,
//           },
//           {
//             name: "WIPRO",
//             qty: 4,
//             avg: 489.3,
//             price: 577.75,
//             net: "+18.08%",
//             day: "+0.32%",
//           },
//     ]
//     tempHoldings.forEach((item)=>{
//         let newHolding=new HoldingsModel({
//             name: item.name,
//             qty: item.qty,
//             avg: item.avg,
//             price: item.price,
//             net: item.net,
//             day: item.day,
//         })
//         newHolding.save();
//     })
//    res.send("Data Added");
// })
// app.get("/addPositions",async(req,res)=>{
// let tempPositions=[
//     {
//       product: "CNC",
//       name: "EVEREADY",
//       qty: 2,
//       avg: 316.27,
//       price: 312.35,
//       net: "+0.58%",
//       day: "-1.24%",
//       isLoss: true,
//     },
//     {
//       product: "CNC",
//       name: "JUBLFOOD",
//       qty: 1,
//       avg: 3124.75,
//       price: 3082.65,
//       net: "+10.04%",
//       day: "-1.35%",
//       isLoss: true,
//     },
//   ];
//   tempPositions.forEach((item)=>{
//     let newPosition=new PositionsModel({
//         product: item.product,
//         name: item.name,
//         qty: item.qty,
//         avg: item.avg,
//         price: item.price,
//         net: item.net,
//         day: item.day,
//         isLoss: item.isLoss,
//     })
//     newPosition.save();
//   })
//   res.send("Position data save");
// })



// app.get('/allHoldings',async(req,res)=>{
//     let allHoldings=await HoldingsModel.find({});
//     res.json(allHoldings);
// })

// app.get('/allPositions',async(req,res)=>{
//     let allPositons=await PositionsModel.find({});
//     res.json(allPositons)
// });
// app.get("/signedcookies", (req, res) => {
//     res.cookie("made-in", "India", { signed: true });

//     res.send("signed cookie send");
//   });

app.listen(PORT,()=>{
    console.log("App started !");
    mongoose.connect(uri);
    console.log("DB connected succesfully");
});
