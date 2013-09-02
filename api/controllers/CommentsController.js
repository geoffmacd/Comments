/**
 * CommentsController
 *
 * @module		:: Controller
 * @description	:: Contains logic for handling requests.
 */

module.exports = {

  /* e.g.
  sayHello: function (req, res) {
    res.send('hello world!');
  }
  */
  
  /**
   * /comments/like
   */ 
  like: function (req,res) {

    // This will render the view: 
    // /Users/geoffmacd/Development/Comments/views/Comments/like.ejs
    res.view();

  }

};
