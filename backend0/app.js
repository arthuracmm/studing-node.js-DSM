var express = require('express');
var app = express();
const port = 3000;
const alunos = [
    {
        id: 1,
        nome: 'Fulano',
        idade: 27
    },
    {
        id: 2,
        nome: 'Ciclano',
        idade: 32
    }
]


app.listen(port, () => {
    console.log(`app rodando na porta ${port}`);
})
//rota do projeto
app.get('/', (req, res) => {
    console.log('rota raiz encontrada!');
    res.send('<h3> Rota raiz encontrada </h3>')
})

app.get('/aluno', (req, res) => {
    res.status(500).json({
        status: 'sucess',
        data: {
            alunos : alunos,
        }
        
    });
});


app.get('/aluno/:id', (req, res) =>{
    let id = parseInt(req.params.id);
    const aluno = alunos.find((aluno) => aluno.id === id)
    res.send(`<h3>Acessando </h3> <p> o aluno é ${aluno}</p>`)
})


// app.get('/aluno/:id', (req, res) =>{
//     res.status(200).json({
//         status: 'sucess',
//         data: {
//             aluno: {
//                 id: req.params.id,
//                 nome: 'Fulano Silva',
//                 idade: 27   
//             }
//         }
//     })
// })

app.get('*', (req, res) => {
    res.send('<h3> Essa rota não existe </h3>')
})