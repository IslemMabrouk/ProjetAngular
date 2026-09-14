import Order from "../models/order.model.js";


// Ajouter une commande
export const addOrder = async (req, res, next) => {
    try {

        // Récupération des données
        const order = new Order({
            customerName: req.body.customerName,
            products: req.body.products,
            total: req.body.total,
            status: req.body.status
        });

        // Sauvegarde de la commande
        await order.save();

        // Retourner une réponse
        res.locals.success = {
            statusCode: 201,
            message: "Commande ajoutée !",
            data: order
        };

        next();

    } catch (error) {
        error.message = "Erreur lors de l'ajout de la commande";
        error.statusCode = 500;
        next(error);
    }
}


// Récupérer la liste des commandes
export const getAllOrders = async (req, res, next) => {
    try {

        const orders = await Order.find();

        res.locals.success = {
            statusCode: 200,
            message: "Liste des commandes récupérée !",
            data: orders
        };

        next();

    } catch (error) {
        next(error);
    }
}


// Récupérer une seule commande par ID
export const getOrderByID = async (req, res, next) => {
    try {

        const order = await Order.findById(req.params.id);

        if (!order) {
            const error = new Error("Commande introuvable !");
            error.statusCode = 404;
            throw error;
        }

        res.locals.success = {
            statusCode: 200,
            message: "Commande récupérée !",
            data: order
        };

        next();

    } catch (error) {
        if (!error.message) {
            error.message = "Erreur lors de la récupération de la commande";
        }

        next(error);
    }
}


// Modifier une commande
export const updateOrder = async (req, res, next) => {
    try {

        const order = await Order.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!order) {
            const error = new Error("Commande introuvable !");
            error.statusCode = 404;
            throw error;
        }

        res.locals.success = {
            statusCode: 200,
            message: "Commande modifiée !",
            data: order
        };

        next();

    } catch (error) {
        next(error);
    }
}


// Supprimer une commande
export const deleteOrderById = async (req, res, next) => {
    try {

        const order = await Order.findByIdAndDelete(req.params.id);

        if (!order) {
            const error = new Error("Commande introuvable !");
            error.statusCode = 404;
            throw error;
        }

        res.locals.success = {
            statusCode: 200,
            message: "Commande supprimée !",
            data: order
        };

        next();

    } catch (error) {
        next(error);
    }
}