import express from 'express'

export const app = express()

app.use(express.json())

const items = [{
    id: 1,
    content: 'Item 1'
}]

//get /items
//get /items/:id
//post /items
//put /items/:id
//detele /items/:id

app.get('items', (req, res)=> {

return res.json(items)
})

app.get('/items/:id', (req, res)=>{
    const { id } = req.params
    const itemFound = items.find(item => itemFound.id === Number(id))
    return res.json(itemFound)
})

app.post('/items', (req, res)=>{
    const { content } = req.body
    const newId = items.length + 1
    const newItem = {id: newId, content}
    items.push(newItem)
    return res.json(newItem)
})

app.put('/items/:id', (req, res)=> {
    const { id } = req.params
    const { content }= req.body
    const  itemFound = items.find(item => item.id === Number(id))
    itemFound.content = content
    return res.json(itemFound)
})

app.delete('/items/:id', (req, res)=> {
    const { id } = req.params
    const itemIndex = item.findIdex(item => item.id === Number(id))
    if(itemIndex === -1)
    items.splice(itemIndex, 1)
    return res.status(200).json()
})

export const server = app.listen(process.env.PORT ?? 3000)