// You should implement your task here.

module.exports = function towelSort(matrix) {
    let mrks = [];
    if (!matrix) return mrks;
    let toggle = true;
    matrix.forEach((e) => {
        toggle ? (mrks = [...mrks, ...e]) : (mrks = [...mrks, ...e.reverse()]);
        toggle = !toggle;
    });
    return mrks;
};
