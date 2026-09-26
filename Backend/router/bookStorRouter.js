const express =require("express")
const {create,delet,getAll,getOne,update} = require("../controller/bookContro")


const router=express.Router()



router.get("/",getAll)
router.get("/:id",getOne)
router.post("/",create)
router.delete("/:id",delet)
router.patch("/:id",update)



module.exports={router}