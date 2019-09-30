const passport = require(`passport`);
const LocalStrategy = require(`passport-local`).Strategy;

const User = require(`../models/User`);

//Autenticacion 
passport.use(new LocalStrategy ({
 usernameField: `email` 

    }, async (email, password, done) => {
const user = await User.findOne({email: email});
    if(!user) {
        return done(null, false, {message: `Usuario no encontrado`});

    } else {
    const match = await user.matchPassword(password);
    if(match) {
        return done(null, user);
    } else {
        return done(null, false, {message: `Contraseña Incorrecta`});
    }
    } 
}));


//toma un usuario y lo almacena en su id

passport.serializeUser((user, done) => {
    done(null, user.id);

});

//toma un id y genera un usuario para utilizar los datos del usuario
passport.deserializeUser((id, done) =>{
  User.findById(id, (err, user) => {
   done(err, user);
  });
});