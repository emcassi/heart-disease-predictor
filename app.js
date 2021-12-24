//Part1: Express Web Server
var express = require("express")
const bodyParser = require("body-parser")
var app = express()

app.set("view engine", "ejs")

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static("public"))


app.listen(process.env.PORT || 3000, function () {
	console.log(`server running on http://localhost:${port}`)
})


app.get("/", (req, res) => {
	// if(answer != null){
	res.render("index", { answer: answer })
	// } else {
	//   res.render("index")
	// }
})

var answer = null

app.post("/", (req, res) => {
	answer = null

	var spawn = require("child_process").spawn
	var process = spawn(
		"python",
		[
			"main.py",
			req.body.age,
			req.body.sex,
			req.body.chestPainType,
			req.body.restingBloodPressure,
			req.body.cholesterol,
			req.body.fastingBloodSugar,
			req.body.restingECG,
			req.body.maxHeartRate,
			req.body.exerciseAngina,
			req.body.oldPeakST,
			req.body.stSlope,
		],
		{
			detached: false,
		}
	)

	process.stderr.on("data", (data) => {
		console.error("err: ", data.toString())
	})

	process.stdout.on("data", function (data) {
		answer = parseInt(data.toString().charAt(1))
		console.log(answer)

		res.redirect("/")
	})
})
