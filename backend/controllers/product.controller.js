import Product from "../models/product.model.js"

//Ajouter un produit
export const addProduct = async (req, res) => {
    try {
        //Récupération des données à partir de la requete
        // const product = new Product(req.body);
        const product = new Product({
            nom : req.body.nom,
            prix : req.body.prix,
            description : req.body.description,
            imgURl : req.body.imgURl
        })

        //Sauvgarde de l'obj Produit
        await product.save();

        //Retourner une réponse
        res.status(201).json({
            message: "Prpduit ajouté !",
            product
        });
        
    } catch (error) {
        res.status(500).json({
            message : "Erreur lors de l'ajout du produit",
            error : error.message
        })
    }
}

//Récupérer la liste des produits
export const getAllProducts = async (req, res) => {
    try {
        
        const products = await Product.find();
        res.status(200).json(products);

    } catch (error) {
         res.status(500).json({
            message : "Erreur lors de la récupération de la liste des produits",
            error : error.message
        })
    }
}

//Récupérer un seul produt par ID
export const getProductByID = async (req, res) => {
    try {
        
        const product = await Product.findById(req.params.id);

        if (!product) {
            return res.status(404).json({message : "Produit Introvable !"})
        }

        res.status(200).json(product);

    } catch (error) {
         res.status(500).json({
            message : "Erreur lors de la récupération d'un produit",
            error : error.message
        })
    }
}

//Modifier un poduit
export const updateProduct = async (req, res) => {
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
         res.status(500).json({
            message : "Erreur lors de la modification d'un produit",
            error : error.message
        })
    }
}

//Supprimer un produit
