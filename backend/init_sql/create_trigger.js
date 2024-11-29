exports.triggerQueries = {

    'setArrivalTime' : ` //order_detail의 arrival_time을 purchase_time 이후 4초 뒤로 설정
        
        DROP TRIGGER IF EXISTS set_arrival_time;

        DELIMITER $$

        CREATE TRIGGER set_arrival_time
        BEFORE INSERT ON order_detail
        FOR EACH ROW
        BEGIN
           SET NEW.arrival_time = NEW.purchase_time + INTERVAL 4 SECOND;
        END$$

        DELIMITER ;
    `,
    'setUserInfoOffense' :` 

        DROP TRIGGER IF EXISTS set_user_info_offense;

        DELIMITER $$

        CREATE TRIGGER set_user_info_offense
        AFTER UPDATE ON order_detail
        FOR EACH ROW
        BEGIN
            INSERT    
        
        (SELECT function_category, effect FROM product 
            INNER JOIN order_detail USING (product_id)
            INNER JOIN user_id USING (user_id)
            WHERE id = 1)
        END$$

        DELIMITER ;
    ;`
};