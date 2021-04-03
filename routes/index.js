var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hello World!",
    user: "Tuny",
    added: new Date()
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin imperdiet metus in risus aliquet pretium. Vivamus fringilla magna mattis augue blandit bibendum. Donec bibendum dolor at sollicitudin bibendum. Phasellus condimentum nulla a mauris dictum, ac luctus eros maximus. Morbi ex arcu, pretium in est eu, consectetur egestas nisi. Donec non sapien libero. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer vestibulum placerat diam, eu faucibus tellus finibus vel. Morbi at enim nec nisl lobortis pulvinar vitae in nibh. Nulla vel tempus tortor. Nam volutpat quam in diam consequat elementum. Curabitur eget tellus a tellus iaculis feugiat. Maecenas sed tortor eleifend lorem malesuada cursus vitae ac libero. Ut in mauris odio. Donec orci nunc, euismod sit amet metus a, sagittis viverra ligula. Quisque ultricies convallis ipsum, id pulvinar leo pellentesque non. ",
    user: "anon",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Messageboard', messages:messages });
});

router.post('/new', function(req, res) {
  let data = req.body;
  let message = data.message;
  let author = data.author;
  messages.unshift({text: message, user: author, added: new Date()});
  res.redirect('/');
});

module.exports = router;
