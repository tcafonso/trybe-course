import React from "react";


class Content extends React.Component {
    render() {
        const conteudos = [
            {
                conteudo: 'High Order Functions',
                bloco: 8,
                status: 'Aprendido'
            },
            {
                conteudo: 'Composicao de Componentes',
                bloco: 11,
                status: 'Aprendendo',
            },
            {
                conteudo: 'Composicao de Estados',
                bloco: 12,
                status: 'Aprenderei'
            },
            {
                conteudo: 'Redux',
                bloco: 16,
                status: 'Aprenderei'
            },
        ]

        return (
            <div className="content">
                {conteudos.map((item) => (
                    <div key={item.conteudo} className="card">
                        <h4>{`O conteudo é: ${item.conteudo}`}</h4>
                        <p>{`status: ${item.status}`}</p>
                        <p>{`bloco: ${item.bloco}`}</p>
                    </div>
                ))}
            </div>
        );
    }
}

export default Content