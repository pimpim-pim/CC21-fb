export const register = (req, res) => {
 req.send('Register Controller')
}

export function login(req,res) {
  // throw(new Error('This is my way'))
   res.json({
   msg : 'Login Controller',
   body : req.body
 })
}

export const getMe = (req,res) => {
 res.json({msg : 'GetMe controller'})
}
