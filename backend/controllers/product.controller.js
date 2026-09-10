import Product from "../models/product.model.js"

//Ajouter un produit
export const addProduct = async (req, res, next) => {
    try {
        //Récupération des données à partir de la requete
        // const product = new Product(req.body);
        const product = new Product({
            name : req.body.name,
            price : req.body.price,
            description : req.body.description,
            imgURL : req.body.imgURL,
            stock: req.body.stock
        })

        //Sauvgarde de l'obj Produit
        await product.save();

        //Retourner une réponse
        res.status(201).json({
            message: "Prpduit ajouté !",
            product
        });
        
    } catch (error) {
        error.message = "Erreur lors de l'ajout du produit";
        error.statusCode = 500;
        next(error);
    }
}

//Récupérer la liste des produits
export const getAllProducts = async (req, res, next) => {
    try {
        
        const products = await Product.find();
        res.status(200).json(products);

    } catch (error) {
        next(error);
    }
}

//Récupérer un seul produt par ID
export const getProductByID = async (req, res, next) => {
    try {
        
        const product = await Product.findById(req.params.id);

        if (!product) {
            // return res.status(404).json({message : "Produit Introvable !"});
            const error = new Error("Produit Introvable !");
            error.statusCode = 404;
            throw error;
        }

        res.status(200).json(product);

    } catch (error) {
        if(!error.message){
        error.message = "Erreur lors de la récupération du produit par ID";
        }
        next(error);
    }
}

//Modifier un poduit
export const updateProduct = async (req, res, next) => {
    try {
        
        //Trouver produit par son ID et le modifier
        const product = await Product.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new : true}
        );

        if (!product) {
            return res.status(404).json({message : "Produit Introvable !"})
        }

        res.status(200).json({
            message: "Produit Modifié !",
            product
        })

    } catch (error) {
         next(error);
    }
}

//Supprimer un produit
export const deleteProductById = async (req,res, next) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        if(!product) return res.status(404).json({message : "Produit Introvable !"});
        res.status(200).json({
            message: "Produit Supprimé !"
        })
    } catch (error) {
        next(error);
    }
}