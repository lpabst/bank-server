
var account = {
    balance: 5000,
    name: 'Loren'
}



module.exports = {

    getBalance: function(req, res, next){
        return res.status(200).json({balance: account.balance});
    },

    getName: function(req, res, next){
        return res.status(200).json({name: account.name});
    },

    deposit: function(req, res, next){
        let amount = Number(req.body.amount);
        account.balance += amount;
        return res.status(200).json({balance: "$" + account.balance});
    },

    withdraw: function(req, res, next){
        let amount = Number(req.body.amount);
        account.balance -= amount;
        return res.status(200).json({balance: "$" + account.balance})
    }


}