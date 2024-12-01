exports.dataQueries = {

    insertUser : `INSERT INTO user_info (user_name) values (?)`,
    insertProduct : `INSERT INTO product (product_name, coin, inventory, type, effect) values(?, ?, ?, ?, ?, ?)`,
    insertFactory : `INSERT INTO factory
    (factory_name, function_category, prodcut_name, production_cycle_time, production_amount)
    values(?, ?, ?, ?, ?)`,
    insertOrder : `INSERT INTO order_detail (amount, deliver_type, user_id, product_id) values(?, ?, ?, ?)`,
    insertSupply : `INSERT INTO supply (supply_amount, supply_amount, factory_id, product_id)
    values(?, ?, ?, ?)`
}