// OrderDetails.java (Entity class)

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class OrderDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private int tradeId;
    private double quantity;
    private double perUnitPrice;
    private String type;
    private String stock;
    private String status = "created"; // Default status

    // getters and setters
}
