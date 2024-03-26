// TradeDetails.java (Entity class)

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class TradeDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String tradeDateTime;
    private String stockName;
    private double listingPrice;
    private int quantity;
    private String type;
    private double pricePerUnit;

    // getters and setters
}
