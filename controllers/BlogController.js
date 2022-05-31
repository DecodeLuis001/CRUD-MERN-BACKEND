//importamos el modelo
import BlogModel from "../models/BlogModel.js"

//--------------Metodos para el CRUD

//Mostrar todos los registros.
export const getAllBlogs = async(req, res)=>{
    try{
        const blogs = await BlogModel.find()
        res.status(200).json(blogs)
    } catch(error){
        res.json({message: error.message})
    }
}

//Mostrar un registro.
export const getBlog = async(req, res)=>{
    try{
        const id = req.params.id
        await BlogModel.findById({
            _id:id
            /*where:{
                id:req.params.id
            }*/
        }).then( (blog) => {
            res.status(200).json(blog)
        })
        //res.json(blog[0])
    } catch (error){
        res.json({message: error.message})
    }
}

//Crear un registro
export const createBlog = async(req, res)=>{
    try {
        await BlogModel.create(req.body)
        res.status(200).json({
            "message": "Registro exitoso."
        })
    } catch(error){
        res.json({message: error.message})
    }
}

//Actualizar un registro.
export const updateBlog = async(req, res)=>{
    try {
        const id = req.params.id
        await BlogModel.updateOne({_id: id}, req.body, {
            //where: {id: req.params.id}
        }).then(res => {
            console.log(res)
        })
        res.status(200).json({
            "message": "Registro actualizado."
        })
    } catch(error){
        res.json({message: error.message})
    }
}

//Eliminar un registro.
export const deleteBlog = async(req, res) =>{
    try {
        const id = req.params.id
        await BlogModel.deleteOne({ _id: id
            //where: {id: req.params.id}
        }).then(res => {
            console.log(res)
        })
        res.status(200).json({
            "message": "Registro eliminado."
        })
    } catch (error){
        res.json({message: error.message})
    }
}