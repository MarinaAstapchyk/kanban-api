let cards = [
  { id: '1', name: 'First Card', status: 'todo', priority: 2 },
  { id: '2', name: 'Second Card', status: 'progress', priority: 5 },
  { id: '3', name: 'Next Card', status: 'review', priority: 10 },
];

function routes(app) {

  app.get('/', (req, res) => {
    res.send('Hello World!');
  });

  app.get('/cards', (req, res) => {
    res.send(cards);
  });

  app.delete('/cards/:cardId', (req, res) => {
    const cardId = req.params.cardId;
    cards = cards.filter(el => el.id !== cardId);
    res.send(cards);
  });

  app.post('/cards', (req, res) => {
    const card = req.body;
    cards.push({id: Math.random().toString(), ...card});
    res.send('Card created');
  });

  app.patch('/cards/:cardId', (req, res) => {
    const cardId = req.params.cardId;
    const card = req.body;
    cards = cards.map(el => el.id === cardId ? ({...card, id: el.id}) : el);
    res.send('Card updated');
  });
}

module.exports = routes;
