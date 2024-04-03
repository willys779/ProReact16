// Si el módulo solo exporta una funcionalidad
// export default function(values) {
//     return values.reduce((total, val) => total + val, 0);
// }

export const sumValues = (values) => {
    return values.reduce((total, val) => total + val, 0);
};
export default (values) => {
    return sumValues(values.filter((item, index) => index % 2 === 0));
};