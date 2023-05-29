// Lista com filtro
// import { useEffect, useState } from "react"

// const minhaLista = [
//     { id: '1', value: 'fruta' },
//     { id: '2', value: 'verdura' },
//     { id: '3', value: 'carne' },

// 

// export default function MinhaList() {

//     const [produtos, setProdutos] = useState(minhaLista)
//     const [pesquisa, setPesquisa] = useState('')

//     //efeitos colateis / filtro
//     useEffect(
//         () => {
//             if (pesquisa) {
//                 const novaLista = minhaLista.filter((item) => {
//                     return item.value.toLocaleLowerCase().includes(pesquisa.toLocaleLowerCase())
//                 })
//                 setProdutos(novaLista)
//             } else {
//                 setProdutos(minhaLista)
//             }
//         },
//         [pesquisa])

//     return (
//         <div>
//             <input
//                 value={pesquisa}
//                 onChange={(e) => setPesquisa(e.target.value)}
//                 placeholder="Pesquise aqui" />
//             {produtos.map((item) => {
//                 return (
//                     <div key={item.id}>
//                         <h4>{item.value}</h4>
//                     </div>
//                 )
//             })}
//         </div>
//     )
// }