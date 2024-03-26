// TradeDetailsService.java

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class TradeDetailsService {

    @Autowired
    private TradeDetailsRepository tradeDetailsRepository;

    public List<TradeDetails> getAllTrades() {
        return tradeDetailsRepository.findAll();
    }

    public TradeDetails saveOrUpdateTrade(TradeDetails trade) {
        return tradeDetailsRepository.save(trade);
    }

    public void deleteTrade(int id) {
        tradeDetailsRepository.deleteById(id);
    }
}
