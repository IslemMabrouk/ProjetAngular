import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// Get Simple Test
export const getHello = (req,res) => {
    res.json({message: "Hello from Express !"});
};


//SIGNUP/INSCRIPTION
export const signup = async (req, res, next) => {
    try {
        
        //Récupération des données
        const {userName, email, pwd, gender, country, interests} = req.body;

        //Vérifier si user/email existe
        const existedUser = await User.findOne({email:email});
        if(existedUser) {
            const error = new Error(" Email déja utilisé !");
            error.statusCode = 400;
            throw error;
        };

        //Hash Password
        const hashedPassword = await bcrypt.hash(pwd, 10);

        //Créer User
        const user = new User({
            userName,
            email,
            pwd:hashedPassword,
            gender,
            country,
            interests
        });

        await user.save();
        res.status(201).json({message : "Signup avec succès !", user});

    } catch (error) {
        if(!error.message){
            error.message = " Erreur lors de l'inscription/signup";
        }
        next(error);
    }
};

export const login = async (req, res, next) => {
    try {
        //Récupération des données
        const { email, pwd } = req.body;

        //Vérifier User by email
        const user = await User.findOne({ email: email });
        if (!user) {
            const error = new Error(" Email / Mot de passe est incorrect !");
            error.statusCode = 404;
            throw error;
        };

        //Comparer password
        const isMacth = await bcrypt.compare(pwd, user.pwd);
        if(!isMacth){
            const error = new Error(" Email / Mot de passe est incorrect !");
            error.statusCode = 404;
            throw error;
        };

        //Générer Token
        const token = jwt.sign(
            {
                userId: user._id,
                userName: user.userName
            },
            process.env.JWT_SECRET, //comme un mot de passe serveur
            {expiresIn: "1d"} //la validation du token (est valide pour 1jr)
        );

        res.status(201).json({token});

    } catch (error) {
         if(!error.message){
            error.message = " Erreur lors de login";
        }
        next(error);
    }
};