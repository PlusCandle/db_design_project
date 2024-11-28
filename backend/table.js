exports.queries = {
    
    dropFkOrderU : 'ALTER TABLE order_detail DROP FOREIGN KEY order_detail_u;',
    dropFkOrderP : 'ALTER TABLE order_detail DROP FOREIGN KEY order_detail_p;',
    dropFkSupplyF : 'ALTER TABLE supply DROP FOREIGN KEY supply_f;',
    dropFkSupplyP : 'ALTER TABLE supply DROP FOREIGN KEY supply_p;',

    
    dropTableOrder : `DROP TABLE IF EXISTS order_detail;`,
    dropTableSupply : `DROP TABLE IF EXISTS supply;`,
    dropTableUser : `DROP TABLE IF EXISTS user_info;`,
    dropTableProduct : `DROP TABLE IF EXISTS product;`,
    dropTableFactory : `DROP TABLE IF EXISTS factory;`,
    createUser : `
        CREATE TABLE user_info (
            user_id	int	NOT NULL AUTO_INCREMENT,
            health	SMALLINT	NOT NULL	DEFAULT 100,
            offense	INT	NOT NULL	DEFAULT 0,
            account	FLOAT	NOT NULL	DEFAULT 10	,
            interestRate	decimal(3,1)	NOT NULL	DEFAULT 0.3,
            interestType	varchar(20)	NOT NULL	DEFAULT 'compound',
            inShop	SMALLINT	NOT NULL	DEFAULT 0,
            PRIMARY KEY (user_id)
        );`,
    createProduct : `     
        CREATE TABLE product (
            product_id	int	NOT NULL AUTO_INCREMENT,
            product_name	varchar(20)	NULL,
            img_src	varchar(20)	NULL,
            coin	int	NOT NULL,
            inventory	int	NULL,
            type	varchar(20)	NOT NULL,
            effect	int	NOT NULL,
            PRIMARY KEY (product_id)
    );`,
    createFactory : `
    CREATE TABLE factory (
        factory_id	int	NOT NULL,
        factory_name	varchar(20)	NULL,
        location	varchar(20)	NULL,
        ceo	varchar(20)	NULL,
        category	varchar(20)	NOT NULL,
        product_name	varchar(20)	NOT NULL,
        production	int	NOT NULL,
        PRIMARY KEY (factory_id)
    );`,
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
    );`
};