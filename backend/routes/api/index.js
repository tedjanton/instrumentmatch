const router = require("express").Router();

router.post("/test", (req, res) => {
  res.json({ requireBody: req.body })
})

module.exports = router;


// fetch('/api/test', {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     "XSRF-TOKEN": "e3Ibksf2-ny0mubQyz4BEL_ohnez0KJtJznA"
//   },
//   body: JSON.stringify({ hello: 'world' })
// }).then(res => res.json()).then(data => console.log(data));
