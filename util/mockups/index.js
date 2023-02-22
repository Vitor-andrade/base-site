// export default function MockIt({method, url, params}){
//     return new Promise((resolve, reject) => {
//         try{
//             resolve({
//                 "/articles/agora-amazonia": {
//                     "GET": require("./articles/agora-amazonia.json")
//                 },
//                 "/articles/desmatamento-ilegal": {
//                     "GET": require("./articles/desmatamento-ilegal.json")
//                 },
//                 "/articles/matriz-energetica": {
//                     "GET": require("./articles/matriz-energetica.json")
//                 },
//                 "/articles/queimadas-e-incendios": {
//                     "GET": require("./articles/queimadas-e-incendios.json")
//                 },
//                 "/articles/floresta-mais": {
//                     "GET": require("./articles/floresta-mais.json")
//                 },
//                 "/articles/amazonia-now": {
//                     "GET": require("./articles/amazonia-now.json")
//                 },
//                 "/articles/illegal-deforestation": {
//                     "GET": require("./articles/illegal-deforestation.json")
//                 },
//                 "/articles/energy-matrix": {
//                     "GET": require("./articles/energy-matrix.json")
//                 },
//                 "/articles/burns-and-fires": {
//                     "GET": require("./articles/burns-and-fires.json")
//                 },
//                 "/articles/forest-plus": {
//                     "GET": require("./articles/forest-plus.json")
//                 },
//             }[url][method])
//         }catch(err){
//             reject(new Error("Mockup não encontrado - " + err.message))
//         }
//     })
// }