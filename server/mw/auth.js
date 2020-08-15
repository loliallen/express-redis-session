module.exports = (req, res, next) => {
    const session = req.session;

    if (session.hasOwnProperty("user"))
    {
        if (session.user == "user") // add db
            next(); 
        else
            return res.status(401).json({ message: `${session.user} you are not authorized` });
    }
    else
        return res.status(401).json({ message: "You are not authorized" });
}