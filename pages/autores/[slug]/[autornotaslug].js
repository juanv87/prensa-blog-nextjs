import { useRouter } from 'next/router'

function AutorNotaSlug() {
    
    const router = useRouter();
    console.log(router.query)
    
    return (
        <div>
            <h1>Pagina de nota de un autor</h1>
        </div>
    )
}

export default AutorNotaSlug
