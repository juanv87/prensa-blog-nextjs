import Link from 'next/link';

function ListaAutores() {
    const autores = [
        {id: '1', name: 'Juan', slug:'juan'},
        {id: '2', name: 'Roberto', slug:'roberto'}
    ]
    return (
        <div>
            <h2>Lista de autores</h2>
            <ul>
                {autores.map(autor => 
                <li key={autor.id}>
                    <Link href={{
                        pathname: '/autores/[slug]',
                        query: {slug: autor.slug}
                    }}>
                        {autor.name}
                    </Link>
                </li>
                )}
            </ul>
        </div>
    )
}

export default ListaAutores
