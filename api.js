

module.exports = (app) => {
    console.log('*** API is running ***')


    app.get('/api', (req, res) => {
        let word = req.query.word,
            max_value = parseInt(req.query.max_value);

        console.log('Word:', word, 'MV:', max_value);
        console.log('Word:', typeof word, 'MV:', typeof max_value);
        
        if ( (!word) || (typeof word !== 'string') || (!max_value) || (typeof max_value !== 'number') || (max_value <= 0) ) {
            console.log("Type error")
            return res.status(400).json({status: "error"});
        }

        if ((word !== 'fizz') && (word !== 'buzz') && (word !== 'fizzbuzz') ) {
            console.log('word error')
            return res.status(400).json({ status: "error" });            
        }

        let numbers = [];
        if (word === 'fizz') {
            for (let i = 3; i <= max_value; i++) {
                if (i % 3 === 0) {
                    numbers.push(i);
                }
            }
            return res.status(200).json({ status: "ok", numbers: numbers })
        }

        if (word === 'buzz') {
            for (let i = 3; i <= max_value; i++) {
                if (i % 5 === 0) {
                    numbers.push(i);
                }
            }
            return res.status(200).json({ status: "ok", numbers: numbers })
        }

        if (word === 'fizzbuzz') {
            for (let i = 3; i <= max_value; i++) {
                if (i % 3 === 0 && i % 5 === 0) {
                    numbers.push(i);
                }
            }
            return res.status(200).json({ status: "ok", numbers: numbers })
        }
        
        
    })
}