exports.dataQueries = {

    insertUser : `INSERT INTO user_info (user_name) values (?)`,
    insertProduct : `INSERT INTO product (product_name, img_src, coin, inventory, type, effect) values(?, ?, ?, ?, ?, ?);`,
    // e.g. "potion_factory", "heal_HP", "potion", "5"
    // e.g. "weapon_factory", "offense", "drone", "10"
    // e.g. "weapon_factory", "offense", "tank", "20"  
    insertFactory : `INSERT INTO factory
    (factory_name, function_category, prodcut_name, production_cycle_time)`
/*
    createOrder : `
        CREATE TABLE order_detail (
            order_id	int	NOT NULL AUTO_INCREMENT,
            amount	int	NOT NULL,
            purchase_time	datetime	NOT NULL,
            arrival_time	datetime	NOT NULL,
            deliver_type	varchar(20)	NOT NULL,
            user_id	int	NOT NULL,
            product_id	int	NOT NULL,
            PRIMARY KEY (order_id),
            CONSTRAINT order_detail_u FOREIGN KEY (user_id) references user_info(user_id),
            CONSTRAINT order_detail_p FOREIGN KEY (product_id) references product(product_id)	
    );`,

    createSupply : `        
        CREATE TABLE supply (
            supply_id	int	NOT NULL,
            supply_amount	int	NOT NULL,
            supply_time	datetime	NULL,
            factory_id	int	NOT NULL,
            product_id	int	NOT NULL,
            PRIMARY KEY (supply_id),
            CONSTRAINT supply_f FOREIGN KEY (factory_id) references factory(factory_id),
            CONSTRAINT supply_p FOREIGN KEY (product_id) references product(product_id)
    );`*/
};