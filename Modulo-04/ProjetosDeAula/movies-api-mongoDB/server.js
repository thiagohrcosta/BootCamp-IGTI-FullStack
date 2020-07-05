import app from './index';

const port = 3000;

app.get('/', (req, res) => res.json({ ok: true}));

app.listen(port, () => {
    console.log(`Running on port ${port}`);
});