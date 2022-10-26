const { setgroups } = require("process");
const { WASD } = require("./constants");
let connection;


const handleUserInput = function (key) {
    if (key === '\u0003') {
        process.exit();
    }
    if (WASD[key]) {
        connection.write(WASD[key]);
    }
};

const setupInput = function (conn) {
    connection = conn;
    const stdin = process.stdin;

    stdin.setEncoding("utf8");
    stdin.on("data", handleUserInput);
    stdin.setRawMode(true);

    stdin.resume();
    return stdin;
};

module.exports = { setupInput };