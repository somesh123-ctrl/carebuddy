// TradeDetailsRepository.java

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TradeDetailsRepository extends JpaRepository<TradeDetails, Integer> {
}
