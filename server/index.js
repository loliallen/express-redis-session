const	express	= require("express");
const	session	= require("../session");

const	port	= process.env.PORT || 8080;
const	app		= express();

app.use(session);

app.get("/", (req, res) => {
	const session = req.session
	const sessionID = req.sessionID
	res.status(200).json({
		message: "hello from server!",
		session,
		sessionID
	})
})

app.listen(port, ()=>{
	console.log(`Server listening on port:${port}`);
})