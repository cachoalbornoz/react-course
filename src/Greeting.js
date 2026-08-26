export function Greeting() {
    const user = {
        name: "Guillermo",
        age: 53,
        city: "Paraná",
    };

    function getAnoNacimiento(user) {
        return new Date().getFullYear() - user?.age || new Date().getFullYear();
    }

    return (
        <>
            <h1>Hola {user.name}, tienes {user.age} años y vives en {user.city}</h1>
            <p>Naciste en {getAnoNacimiento(user)}</p>
        </>
    );
}

export function Encabezado() {
    return (
        <h1>Modulo encabezado</h1>
    );
}
