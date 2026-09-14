export const successHandler = (req, res, next) => {

    const success = res.locals.success;

    res.status(success.statusCode || 200).json({
        success: true,
        message: success.message || "Opération réussie",
        data: success.data || null
    });
};