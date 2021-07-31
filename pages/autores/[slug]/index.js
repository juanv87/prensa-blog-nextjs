import { useRouter } from 'next/router'

function NotasAutor() {

    const router = useRouter();
    console.log(router.query)

    function loadProjectHandler() {
        router.push('/autores/juan/notasa');
    }

    return (
        <div>
            <h1>Lista de notas de un autor</h1>
            <button onClick={loadProjectHandler}>Cargar nota A</button>
        </div>
    )
}

export default NotasAutor
