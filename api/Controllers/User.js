const User = require("./../Models/User");



exports.create = (req, res) => {
    const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        address: req.body.address
    });

    newUser.save().then(
        result => res.send({
            result
        })
    ).catch(
        err => res.send({
            err
        })
    )
}


exports.get = (req, res) => {
    User.find().then(
            result => res.send({
                result
            })
        )
        .catch(
            err => res.send({
                err
            })
        )
}