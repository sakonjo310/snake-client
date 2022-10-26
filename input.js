const { setgroups } = require("process");

const setupInput = function () {
    const stdin = process.stdin;

    const handleUserInput = function (key) {
        if (key === '\u0003') {
            process.exit();
        }
    }

    stdin.on("data", handleUserInput);
    stdin.setRawMode(true);
    stdin.setEncoding("utf8");
    stdin.resume();
    return stdin;
};

module.exports = setupInput;