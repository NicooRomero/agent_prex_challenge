const os = require('os');
const { exec } = require('child_process');

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
        const command = os.platform() === 'win32' ? 'query user' : 'who';
        exec(command, (error, stdout, stderr) => {
            if (error) return reject(stderr);
            resolve(stdout);
        });
    });
}


async function requestInfo() {

    try {

        const InfoSystem = await getInfoSys();
        const ProccessList = await getProcessList();
        const UsersLogged = await getUserLogged();

        const data = {
            InfoSystem,
            ProccessList,
            UsersLogged
        }

        console.log(data)

    } catch (error) {
        console.log('Error al enviar datos',error);
    }
}

requestInfo();
