const productmodel = require('../models/productsModels')

//Admin 
exports.createproducts= async(req,res,next)=>{
     const product=await productmodel.create(req.body);
     res.status(200).json({
         success:true,
         product
     })
}
//admin
exports.getallproducts= async(req,res,next)=>{
    const product=  await productmodel.find();
    res.status(200).json({
        success:true,
        product
    })
}

//Admin
exports.updateproducts= async(req,res,next)=>{
  
    let product=  productmodel.findById(req.params.id);
    if(!product){
        return  res.status(500).json({
        success:false,
        message:"id Not found",
        product
    })}
      product = await  productmodel.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
        runValidators:true,
        useFindAndModify:true,
    })
        res.status(200).json({
        success:true,
        product
    })
}
//general
exports.getProductDetails= async(req,res,next)=>{
    let product=  await productmodel.findById(req.params.id);
   if(!product){return res.status(500).json({
        success:false,
        message:"Product not found",
    })}
    res.status(200).json({
        success:true,
        product
    })
}
//Admin
exports.deleteproducts= async(req,res,next)=>{
    let product=  await productmodel.findById(req.params.id);
   if(!product){return res.status(500).json({
        success:false,
        message:"pProduct not found",
        product,
    })}
    await product.remove();
    res.status(200).json({
        success:false,
        message:"Product Deleted successfully" , 
        product
    })
}