export const buscarUsuario = ( data= [], email, pwd) => {
    
    let resp = false
    let userReg = []

    data.forEach(user => {
        if(user.email === email && user.password === pwd){
            resp = true;
            userReg = user;
        }
    })

    return { resp, userReg }
}