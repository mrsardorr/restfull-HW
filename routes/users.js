const {Router}= require('express')
const router = Router()

const users = [
    {name:'tom',age:16,id:1},
    {name:'harry',age:36,id:2},
    {name:'lusy',age:52,id:3}
]

router.get('/',(res,req,next)=>{console.log('this is single middleware'); next()},(res,req)=>{
    req.send(users)
})
router.get('/:id',(res,req)=>{
    const user = users.find(val => val.id == res.params.id)
    console.log(user)
    req.send(user)
})
router.delete('/delete/:id',(res,req)=>{
    const user = users.find(val => val.id == res.params.id)
    req.send(user.name + ' has been deleted')
    users.splice(user.id - 1,1)
})
router.post('/users/add',(res,req)=>{
    const user = {
        name: res.body.name,
        age: res.body.age,
        id:users.length + 1
    }
    users.push(user)
    req.send(user.name + ' has been added to users list')
})
router.put('/users/update/:id',(res,req)=>{

    const user = users.find(val => val.id == res.params.id)
    req.send(user.name + ' has been updated')

    user.name = res.body.name
    user.age = res.body.age

    users.splice(user.id - 1,1)
    users.unshift(user)
})


module.exports = router