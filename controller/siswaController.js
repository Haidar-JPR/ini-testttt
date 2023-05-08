const connection = require("../config/connection");

exports.getUsers = async (req, res) => {
    let data = [];
    try {
        let sql = "SELECT * FROM products";

        const exec = connection.query(sql, function (err, rows, fields) {
            if (err) throw err;
            res.json({
                status: true,
                data: rows,
                msg: "Berhasil get data siswa",
            });
        });
    } catch (error) {
        return res.json({
            status: false,
            msg: error.message,
        });
    }
};

exports.insertUser = async (req, res) => {
    try {
        const body = req.body;
        let name = body.name;
        let price = body.price;
        let description = body.description;
        let rating = body.rating;
        let terjual = body.terjual;
        let quantity = body.quantity;

        let sql = `insert into products(name,price,description,rating,terjual,quantity) values (?, ?, ?, ?, ?, ?) `;
        let values = [name,price,description,rating,terjual,quantity];

        connection.query(sql, values, function (err, rows, fields) {
            if (err) throw err;

            if (rows.affectedRows > 0) {
                msg = "Successfully Insert Data";
            } else {
                msg = "No entry was Insert";
            }

            res.json({
                status: true,
                msg: msg,
            });
        });
    } catch (error) {
        return res.json({
            status: false,
            msg: error.message,
        });
    }
};

exports.updateUser = async (req, res) => {
    try {
        const id = req.params.id;
        const body = req.body;
        let name = body.name;
        let price = body.price;
        let description = body.description;
        let rating = body.rating;
        let terjual = body.terjual;
        let quantity = body.quantity;

        let sql = `update products set name=?, price=?, description=?, rating=?, terjual=?, quantity=? where id_product=? `;
        let values = [name, price, description, rating, terjual, quantity];

        connection.query(sql, values, function (err, rows, fields) {
            if (err) throw err;

            if (rows.affectedRows > 0) {
                msg = "Successfully Update Data";
            } else {
                msg = "No entry was updated";
            }

            res.json({
                status: true,
                msg: msg,
            });
        });
    } catch (error) {
        return res.json({
            status: false,
            msg: error.message,
        });
    }
};

exports.deleteUser = async (req, res) => {
    try {
        const id = req.params.id;

        let sql = ` delete from products where id_product = ${id} `;

        connection.query(sql, function (err, rows, fields) {
            if (err) throw err;
            let msg = "";
            if (rows.affectedRows > 0) {
                msg = "Successfully Delete Data";
            } else {
                msg = "No entry was deleted";
            }

            res.json({
                status: true,
                msg: msg,
            });
        });
    } catch (error) {
        res.json({
            status: true,
            msg: error.message,
        });
    }
};