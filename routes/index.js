// routes/index.js

module.exports = function(app,Book)
{

    app.post('/api/books', function(req, res){
        var book = new Book();
        book.title = req.body.name;
        book.author = req.body.author;
        book.published_date = new Date(req.body.published_date);
    
        book.save(function(err){
            if(err){
                console.error(err);
                res.json({result: 0});
                return;
            }
    
            res.json({result: 1});
    
        });
    });

    // GET ALL BOOKS
    // app.get('/api/books', function(_req,res){
    //     res.end();
    // });

    // GET SINGLE BOOK
    app.get('/api/books/:book_id', function(_req, res){
        res.end();
    });

    // GET BOOK BY AUTHOR
    app.get('/api/books/author/:author', function(_req, res){
        res.end();
    });

    // CREATE BOOK
    app.post('/api/books', function(_req, res){
        res.end();
    });

    // UPDATE THE BOOK
    app.put('/api/books/:book_id', function(_req, res){
        res.end();
    });

    // DELETE BOOK
    app.delete('/api/books/:book_id', function(_req, res){
        res.end();
    });

}