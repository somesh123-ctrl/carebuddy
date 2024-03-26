// OrderDetailsController.java

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/orders")
public class OrderDetailsController {

    @Autowired
    private OrderDetailsService orderDetailsService;

    @GetMapping
    public List<OrderDetails> getAllOrders() {
        return orderDetailsService.getAllOrders();
    }

    @PostMapping
    public OrderDetails createOrder(@RequestBody OrderDetails order) {
        return orderDetailsService.createOrder(order);
    }
}
