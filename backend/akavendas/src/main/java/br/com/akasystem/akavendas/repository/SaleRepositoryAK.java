package br.com.akasystem.akavendas.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;

import br.com.akasystem.akavendas.entities.SaleAK;
import br.com.akasystem.akavendas.entities.dto.SaleSuccessDTO;
import br.com.akasystem.akavendas.entities.dto.SaleSumDTO;
import br.com.akasystem.akavendas.repository.main.MainRepositoryAK;

//@Repository por padrão o jpaReporsitory ja é um componente
public interface SaleRepositoryAK extends MainRepositoryAK<SaleAK> {

	
	//consulta costumizada: 1- assina o metodo e depois especifica a consulta
	//Estou fazendo uma consulta na classe Sale, agrupando pelos vendedores, a cada ocorrencia crio o dto
	@Query("SELECT new br.com.akasystem.akavendas.entities.dto.SaleSumDTO(obj.seller, SUM(obj.amount))"
			+ " FROM SaleAK AS obj GROUP BY obj.seller")
	List<SaleSumDTO> amountGroupBySeller();
	
	
	@Query("SELECT new br.com.akasystem.akavendas.entities.dto.SaleSuccessDTO(obj.seller, SUM(obj.visited),SUM(obj.deals))"
			+ " FROM SaleAK AS obj GROUP BY obj.seller")
	List<SaleSuccessDTO> successGroupBySeller();
}
