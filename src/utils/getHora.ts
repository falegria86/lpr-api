export const getHora = () => {
    const hoy = new Date();
    const horas = String(hoy.getHours()).padStart(2, '0');
    const minutos = String(hoy.getMinutes()).padStart(2, '0');

    return `${horas}:${minutos}`
}