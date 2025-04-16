const express = require('express');
const app = express();
app.use(express.json());

let users = {};
let transactions = [];

app.post('/users', (req, res) => {
    const { id, name } = req.body;
    users[id] = { id, name, balance: 0 };
    res.status(201).send(users[id]);
});

app.post('/wallet/:id/add', (req, res) => {
    const { amount } = req.body;
    const user = users[req.params.id];
    if (!user) return res.status(404).send("User not found");
    user.balance += amount;
    transactions.push({ userId: req.params.id, type: "add", amount });
    res.send(user);
});

app.post('/wallet/:id/send', (req, res) => {
    const sender = users[req.params.id];
    const { to, amount } = req.body;
    const receiver = users[to];
    if (!sender || !receiver) return res.status(404).send("User not found");
    if (sender.balance < amount) return res.status(400).send("Insufficient balance");
    sender.balance -= amount;
    receiver.balance += amount;
    transactions.push({ from: sender.id, to: receiver.id, amount });
    res.send({ sender, receiver });
});

app.get('/wallet/:id/transactions', (req, res) => {
    const userId = req.params.id;
    const userTx = transactions.filter(tx => tx.userId === userId || tx.from === userId || tx.to === userId);
    res.send(userTx);
});

app.listen(3000, () => console.log("Server running on port 3000"));