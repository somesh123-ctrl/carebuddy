// TradeDetailsController.java

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/trades")
public class TradeDetailsController {

    @Autowired
    private TradeDetailsService tradeDetailsService;

    @GetMapping
    public List<TradeDetails> getAllTrades() {
        return tradeDetailsService.getAllTrades();
    }

    @PostMapping
    public TradeDetails addTrade(@RequestBody TradeDetails trade) {
        return tradeDetailsService.saveOrUpdateTrade(trade);
    }

    @PutMapping("/{id}")
    public TradeDetails updateTrade(@PathVariable int id, @RequestBody TradeDetails trade) {
        trade.setId(id);
        return tradeDetailsService.saveOrUpdateTrade(trade);
    }

    @DeleteMapping("/{id}")
    public void deleteTrade(@PathVariable int id) {
        tradeDetailsService.deleteTrade(id);
    }
}
