exports.initQueries = {
        
    dropTableOrder : `DROP TABLE IF EXISTS order_detail;`,
    dropTableSupply : `DROP TABLE IF EXISTS supply;`,
    dropTableUser : `DROP TABLE IF EXISTS user_info;`,
    dropTableProduct : `DROP TABLE IF EXISTS product;`,
    dropTableFactory : `DROP TABLE IF EXISTS factory;`,
    dropTrigger : `DROP TRIGGER IF EXISTS set_arrival_time;`,
    createUser : `
        CREATE TABLE user_info (
            user_id	INT	NOT NULL AUTO_INCREMENT,
            user_name VARCHAR(20) NULL,
            health	SMALLINT	NOT NULL	DEFAULT 100,
            offense	INT	NOT NULL	DEFAULT 0   CHECK (offense >= 0),
            account	FLOAT	NOT NULL	DEFAULT 10	,
            interest_rate	DECIMAL(3,1)	NOT NULL	DEFAULT 0.3,
            interest_type	VARCHAR(20)	NOT NULL    DEFAULT 'compound' 
            CHECK (interest_type IN ('compound', 'simple')),
            in_shop	SMALLINT	NOT NULL	DEFAULT 0 CHECK (in_shop IN (0, 1)),
            create_time DATETIME DEFAULT CURRENT_TIMESTAMP,
            PRIMARY KEY (user_id)
        );`,
    createProduct : `     
        CREATE TABLE product (
            product_id	INT	NOT NULL AUTO_INCREMENT,
            product_name	VARCHAR(20)	,
            function_category	VARCHAR(20)	NOT NULL CHECK (function_category IN ('offense', 'health')),
            effect	INT	NOT NULL,
            coin	INT	NOT NULL,
            inventory	INT	NULL CHECK (inventory >= 0),
            PRIMARY KEY (product_id)
    );`,
    createFactory : `
    CREATE TABLE factory (
        factory_id	INT	NOT NULL,
        factory_name	VARCHAR(20)	NULL,
        location	VARCHAR(20)	NULL,
        ceo	VARCHAR(20)	NULL,
        function_category	VARCHAR(20)	NOT NULL CHECK (function_category IN ('offense', 'health')),
        effect	INT	NOT NULL,
        product_name	VARCHAR(20)	NOT NULL UNIQUE,
        production_cycle_time	INT	NOT NULL,
        production_amount INT NOT NULL,
        PRIMARY KEY (factory_id)
    );`,
    createOrder : `
        CREATE TABLE order_detail (
            order_id	INT	NOT NULL    AUTO_INCREMENT,
            amount	INT	NOT NULL CHECK (amount > 0),
            purchase_time	DATETIME DEFAULT CURRENT_TIMESTAMP,
            arrival_time	DATETIME,
            deliver_type	VARCHAR(20),
            user_id	INT	NOT NULL,
            product_id	INT	NOT NULL,
            PRIMARY KEY (order_id),
            FOREIGN KEY (user_id) REFERENCES user_info(user_id) ON DELETE CASCADE,
            FOREIGN KEY (product_id) REFERENCES product(product_id) ON DELETE CASCADE	
    );`,

    createSupply : `        
        CREATE TABLE supply (
            supply_id	INT	NOT NULL    AUTO_INCREMENT,
            supply_amount	INT	NOT NULL CHECK (supply_amount > 0),
            supply_time	DATETIME DEFAULT CURRENT_TIMESTAMP,
            factory_id	INT	NOT NULL,
            product_id	INT	NOT NULL,
            PRIMARY KEY (supply_id),
            FOREIGN KEY (factory_id) REFERENCES factory(factory_id) ON DELETE CASCADE,
            FOREIGN KEY (product_id) REFERENCES product(product_id) ON DELETE CASCADE
    );`,

    //order_detail의 arrival_time을 purchase_time 이후 4초 뒤로 설정
    setArrivalTime : ` 
            CREATE TRIGGER set_arrival_time
            BEFORE INSERT ON order_detail
            FOR EACH ROW
            BEGIN
                SET NEW.arrival_time = NEW.purchase_time + INTERVAL 4 SECOND;
            END;
    `

};