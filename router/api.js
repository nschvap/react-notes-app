import express from 'express';
export const router = express.Router();

let data = [{
    title: 'Adoptar un perro',
    description: 'Necesito compañía',
    id: 1
}]

router.get('/notes', (req, res) => {
    return res.json(data);
});

router.post('/notes', (req, res) => {
    const { title, description } = req.body;

    data.push({
        title,
        description,
        id: data.length + 1
    });

    console.log(req.body)

    return res.json(data);
});

router.put('/notes', (req, res) => {
    let { title, description, id } = req.body;
    data = data.filter((x) => x.id != id);

    data[id - 1] = {
        title,
        description,
        id
    }

    return res.json(data);
});

router.delete('/notes', (req, res) => {
    let { id } = req.body;

    data = data.filter((x) => x.id != id);

    return res.json(data);
});
