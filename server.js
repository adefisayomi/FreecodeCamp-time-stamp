const express = require('express')
const cors = require('cors')
const app = express()
const bodyParser = require('body-parser')

const PORT = process.env.PORT || 4000

app.use(bodyParser.json())

app.use(cors({ origin: true }))

app.post('/api/timestamp', (req, res) => {

    if (req.body.timeStamp && (req.body.timeStamp).includes('-')) {
            const date = new Date(req.body.timeStamp)
            
            if (date == 'Invalid Date' || date == NaN) {
                res.json({ error: 'Invalid Date' })
            }
            else {
                res.json({ unix: date.valueOf(), utc: date.toUTCString() })
            }
        }

    if (req.body.timeStamp && (req.body.timeStamp).includes('-') == false ) {
            const date = new Date(parseInt(req.body.timeStamp))
            if (date == 'Invalid Date' || date == NaN) {
                res.json({ error: 'Invalid Date' })
            }
            else {
                res.json({ unix: date.valueOf(), utc: date.toUTCString() })
            }
        }

    else {
         const defaultDate = new Date()
         res.json({ unix: defaultDate.valueOf(), utc: defaultDate.toUTCString() }) 
        }
})

app.listen(PORT, console.log('Server started on PORT: '+ PORT + ' ...'))