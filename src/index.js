import app from './app.js'

import {PORT} from './config.js'
import {getExample} from './controllers/index.controllers.js'

app.listen(PORT)
console.log("Server running on port", PORT);

const resultado = getExample();
console.log('Consulta a ptrv_head: ', resultado);