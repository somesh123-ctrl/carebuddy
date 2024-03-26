// OrderDetailsService.java

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class OrderDetailsService {

    @Autowired
    private OrderDetailsRepository orderDetailsRepository;

    public List<OrderDetails> getAllOrders() {
        return orderDetailsRepository.findAll();
    }

    public OrderDetails createOrder(OrderDetails order) {
        return orderDetailsRepository.save(order);
    }
}
