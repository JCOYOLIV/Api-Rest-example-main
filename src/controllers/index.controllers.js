import {pool} from '../db.js'

//Get all
export const getExample = async(req, res) => {
const [rows] = await pool.query('SELECT * FROM PTRV_HEAD')
res.json(rows)
console.log(rows);
}

//Get one
export const getOneExample = async(req, res) => {

    try{
    const id = req.params.id
    const [row] = await pool.query('SELECT * FROM PTRV_HEAD WHERE id = ?', [id])
    

    if(row.length <= 0)
    {
       return res.status(404).json
       ({
        message: 'Respuesta no encontrada'
       })
    }else
    {
        res.json(row)
    }

    }catch(error)
    {
        return res.status(500).json
        ({
            message: 'Something goes wrong'
        })
    }

}

//Post
export const createExample = async (req, res) => {

    try{
    const {pernr, reinr, schem, zort1, zland, hrgio, kunde, datv1, uhrv1, datb1, uhrb1, date, times, uname} = req.body
const [rows] = await pool.query('INSERT INTO PTRV_HEAD(pernr, reinr, schem, zort1, zland, hrgio, kunde, datv1, uhrv1, datb1, uhrb1, date, times, uname) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [pernr, reinr, schem, zort1, zland, hrgio, kunde, datv1, uhrv1, datb1, uhrb1, date, times, uname])

res.send({
    id: rows.insertId,
    pernr, 
    reinr, 
    schem, 
    zort1, 
    zland, 
    hrgio, 
    kunde, 
    datv1, 
    uhrv1, 
    datb1, 
    uhrb1, 
    date, 
    times, 
    uname
})

}catch(error)
{
    return res.status(500).json
    ({
        message: 'Something goes wrong'
    })
}
};

//Update
export const updateExample = async (req, res) => 
{

    try{
    const id = req.params.id
    const {pernr, reinr, schem, zort1, zland, hrgio, kunde, datv1, uhrv1, datb1, uhrb1, date, times, uname} = req.body

        const [result] = await pool.query('UPDATE PTRV_HEAD SET pernr = IFNULL(?, pernr), reinr = IFNULL(?, reinr), schem = IFNULL(?, schem), zort1 = IFNULL(?, zort1), zland = IFNULL(?, zland), hrgio = IFNULL(?, hrgio), kunde = IFNULL(?, kunde), datv1 = IFNULL(?, datv1), uhrv1 = IFNULL(?, uhrv1), datb1 = IFNULL(?, datb1), uhrb1 = IFNULL(?, uhrb1), date = IFNULL(?, date), times = IFNULL(?, times), uname = IFNULL(?, uname) WHERE id = ?', [pernr, reinr, schem, zort1, zland, hrgio, kunde, datv1, uhrv1, datb1, uhrb1, date, times, uname, id])

    if(result.affectedRows <= 0)
    {
        return res.status(404).json
        ({
            message: "Data dont found"
        })
    }
    else
    {
        return res.status(200).json
        ({
            message: "Campo Actualizado"
        })
    }

}catch(error)
{
    return res.status(500).json
    ({
        message: 'Something goes wrong'
    })
}

}

//Delete
export const deleteExample = async (req, res) => {

    try{
    const id = req.params.id
    const [result] = await pool.query('DELETE FROM PTRV_HEAD WHERE id = ?', [id])
    

    if(result.affectedRows <= 0)
    {
       return res.status(404).json
       ({
        message: 'Valor no encontrado'
       })
    }else
    {
        return res.status(200).json
        ({
            message: 'Campo eliminado'
        })
    }

}catch(error)
{
    return res.status(500).json
    ({
        message: 'Something goes wrong'
    })
}

}

