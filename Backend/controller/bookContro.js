const {BookModul,validate} =require("../model/libryeModle")

const getAll= async(req,res)=>{
   

    const allbookes= await BookModul.find()
res.status(200).send(allbookes)

}

const getOne= async(req,res)=>{

const id=req.params.id

  const oneBook= await BookModul.find({_id:id})

res.send(oneBook)

}

const create= async(req,res)=>{

    const {error}=validate(req.body)
    if(error)return res.status(400).send(error.details[0].message)
    const createbook=await BookModul.create(req.body)

    await createbook.save()
res.send(createbook)


}

const update= async(req,res)=>{

   const id=req.params.id
   const {error}=validate(req.body)
   if(error)return res.status(400).send(error.details[0].message)

    const{name,descreption,author,price}=req.body

    const updatebook=await BookModul.updateOne({_id:id},{
        $set:{
            name,
            descreption,
            author,
            price
        }
    })
    

res.send(updatebook)

}

const delet= async(req,res)=>{

   const id=req.params.id

   const deletBook= await BookModul.findByIdAndDelete(id)

res.send(deletBook)

}



module.exports={delet,create,getAll,getOne,update}