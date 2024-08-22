const express = require('express');
const os = require('os');
const { exec } = require('child_process');

// crear servidor
const app = express();
app.use(express.json({ extended: true }));
const PORT = 5001;

// Recolectar datos del procesador
function getInfoSys() {
    return {
        model: os.cpus()[0].model,
        os: os.version(),
        version: os.release()
    }
}

// Listar procesos
function getProcessList() {
    return new Promise((resolve, reject) => {
        const command = os.platform() === 'win32' ? 'tasklist' : 'ps aux';
        exec(command, (error, stdout, stderr) => {
            if (error) return reject(stderr);
            resolve(stdout);
        });
    });
}

// Listar usuarios con sesion
function getUserLogged() {
    return new Promise((resolve, reject) => {
        const command = os.platform() === 'win32' ? 'qwinsta' : 'who';
        exec(command, (error, stdout, stderr) => {
            if (error) return reject(stderr);
            resolve(stdout);
        });
    });
}


const api = '/api/v1';

app.get(`${api}/getInfo`, async (req, res) => {

    try {

        const InfoSystem = await getInfoSys();
        const ProccessList = await getProcessList();
        const UsersLogged = await getUserLogged();

        const data = {
            InfoSystem,
            ProccessList,
            UsersLogged
        }

        res.status(200).send({ data });

    } catch (error) {
        console.log(error);
        return res.status(500).send({ message: 'Error al obtener la información.' });
    }
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`### Server is run in port ${PORT} ###`)
})


